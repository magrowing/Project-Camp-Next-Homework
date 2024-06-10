import Skeleton from './Skeleton';

export default function SkeletonArea() {
  return (
    <>
      <article className="bg-black py-10 px-4 xs:px-0">
        <section className="container mx-auto py-8">
          <span className="block w-[20%] h-4 bg-slate-700"></span>
          <h2 className="block w-[40%] h-10 bg-slate-700 my-4"></h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-0 animate-pulse">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </section>
      </article>
    </>
  );
}
