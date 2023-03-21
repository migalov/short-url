import brand from "../images/icon-brand-recognition.svg"
import records from "../images/icon-detailed-records.svg"
import fully from "../images/icon-fully-customizable.svg"

import statisticsData from "../content/advanced.json"
const icons = [brand, records, fully];
const statistics = statisticsData.map((stat) =>
    <article key={stat.id.toString()} className={`stat bg-white px-8 py-9 rounded relative`}>
        <img src={icons[stat.id - 1]} alt="" className="p-3 -mt-12 bg-slate-800 rounded-full mx-auto"/>
        <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">{stat.title}</h3>
        <p className="text-slate-400">{stat.text}</p>
    </article>
);

export default function Advanced() {
  return (
    <>
      <section className="bg-gray-100 pt-32 pb-10 lg:pb-40">
        <div className="container">
          <h2 className="text-4xl font-bold text-slate-800 mb-3 text-center">
            Advanced Statistics
          </h2>
          <p className="text-slate-400 text-center mb-10">
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