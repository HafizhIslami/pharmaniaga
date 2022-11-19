export default function MiniCard({text1, text2, text3}) {
  return (
    <>
      <div className="flex flex-col p-3 mx-10 col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-lg border border-slate-200 ">
        <div className="px-5 pt-5">
          <h2 className="text-lg font-semibold text-slate-800 mb-2">
            {text1}
          </h2>
          <div className="flex items-start">
            <div className="text-3xl font-bold text-slate-800 mr-2">{text2}</div>
            <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full" hidden={!text3 ? true : false}>
              {text3}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
