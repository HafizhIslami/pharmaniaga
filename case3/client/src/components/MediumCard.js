

export default function MediumCard({ text1, text2, imgSource }) {
  return (
    <>
      <div className="flex flex-row justify-between p-6 mx-10 bg-white shadow-lg rounded-lg border border-slate-200 items-center max-h-40">
        <div className="">
          <img src={imgSource} className='w-12' />
        </div>
        <div className="pl-10">
          <h2 className="text-right text-lg font-semibold text-slate-800 mb-2">{text1}</h2>
          <div className="text-right text-xl font-bold text-slate-800">{text2}</div>
        </div>
      </div>
    </>
  );
}
