import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";

let postsPath = path.join(__dirname, "../posts");

export default async function getPosts() {
  let dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async (filename) => {
      let file = await fs.readFile(path.join(postsPath, filename), "utf8");
      let { attributes } = parseFrontMatter(file.toString());
      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
      };
    })
  );
}
