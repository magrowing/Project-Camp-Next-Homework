export default async function page({ params }: { params: { id: string } }) {
  const blogs = await (await fetch('http://localhost:4000/blogs')).json();
  return (
    <section className="bg-gray-200 p-10">
      <h1 className="text-2xl font-bold">Blog {params.id} page Component</h1>
      <p className="mt-4 text-lg font-bold">
        {new Date().toLocaleTimeString()}
      </p>
      <pre>{JSON.stringify(blogs, null, 2)}</pre>
    </section>
  );
}
