export default async function page() {
  const posts = await (await fetch('http://localhost:4000/posts')).json();
  const blogs = await (await fetch('http://localhost:4000/blogs')).json();
  return (
    <section className="bg-gray-200 p-10">
      <h1 className="text-2xl font-bold">About page Component</h1>
      <p className="mt-4 text-lg font-bold">
        {new Date().toLocaleTimeString()}
      </p>
      <p className="mt-4 text-lg font-bold">Posts</p>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <p className="mt-4 text-lg font-bold">Blogs</p>
      <pre>{JSON.stringify(blogs, null, 2)}</pre>
    </section>
  );
}
