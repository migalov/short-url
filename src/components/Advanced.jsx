import brand from "../images/icon-brand-recognition.svg"
import records from "../images/icon-detailed-records.svg"
import fully from "../images/icon-fully-customizable.svg"

import statisticsData from "../content/advanced.json"
const icons = [brand, records, fully];
const statistics = statisticsData.map((stat) =>
    <article key={stat.id.toString()} className={`stat bg-white px-8 py-9 rounded relative`}>
        <div className="bg-slate-800 w-[88px] h-[88px] flex justify-center rounded-full items-center -mt-[4rem] md:-mt-[5rem] mx-auto md:mx-0">
            <img src={icons[stat.id - 1]} alt="" className="p-3 mx-auto"/>
        </div>
        
        <h3 className="text-slate-800 text-lg mt-9 mb-[18px] font-bold text-[22px]">{stat.title}</h3>
        <p className="text-slate-400">{stat.text}</p>
    </article>
);

export default function Advanced() {
  return (
    <>
      <section className="bg-gray-100 py-[60px] md:py-[94px] lg:pb-40">
        <div className="container">
          <h2 className="text-[28px] md:text-[40px] font-bold text-slate-800 mb-3 text-center">
            Advanced Statistics
          </h2>
          <p className="text-slate-400 md:text-[18px] text-center mb-[76px] md:mb-[30px]">
            Track how your links are performing across the web <br /> with our
            advanced statistics dashboard.
          </p>
          <div className="relative card flex flex-col md:flex-row md:justify-center md:items-center text-center md:text-left gap-[30px]">
            {statistics}
          </div>
        </div>
      </section>
    </>
  )
}