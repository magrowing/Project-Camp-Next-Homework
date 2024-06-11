import Image from 'next/image';

export default async function Home() {
  const posts = await (await fetch('http://localhost:4000/posts')).json();
  return (
    <section className="bg-gray-200 p-10">
      <h1 className="text-2xl font-bold">Root page Component</h1>
      <p className="mt-4 text-lg font-bold">
        {new Date().toLocaleTimeString()}
      </p>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </section>
  );
}
