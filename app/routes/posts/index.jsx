import { useLoaderData } from "remix";
import getPosts from "~/posts";

export let loader = () => {
  return getPosts();
}

export default function Posts() {
  let posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (<li key={post.slug}>{post.title}</li>))}
      </ul>
    </div>
  );
}
