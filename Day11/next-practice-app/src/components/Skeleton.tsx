/* eslint-disable @next/next/no-img-element */

export default function Skeleton() {
  return (
    <>
      <div>
        <div className="w-full min-h-[240px] bg-slate-700 rounded-md"></div>
        <div className="w-full h-6 bg-slate-700 my-4 rounded-md"></div>
        <div className="flex items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold w-6 h-6 bg-slate-700 rounded-[100%]"></div>
          <span className="w-[60%] h-6 bg-slate-700 ml-4 rounded-md"></span>
        </div>
      </div>
    </>
  );
}
