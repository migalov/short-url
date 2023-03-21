// import { useEffect, useState } from "react"
// import bgMobile from "../images/bg-shorten-mobile.svg"
// import bgDesktop from "../images/bg-shorten-desktop.svg"

// const getLocalStorage = () => {
//   let links = localStorage.getItem("links")

//   if (links) {
//     return JSON.parse(localStorage.getItem("links"))
//   } else {
//     return []
//   }
// }

export default function FormShortUrl() {
  return (
    <>
      <section className="relative overflow-hidden px-5">
        <form className="container flex flex-col md:flex-row p-6 md:p-[52px] gap-9 md:gap-6 boost rounded-[10px]">
            <input
                type="text"
                placeholder={"Shorten a link here..."}
                className="border-[3px] rounded-[10px] px-5 py-3 border-amber-600 flex-1"
            />
            <span className="mt-1 mb-4 message italic text-[12px] md:text-[16px] absolute top-[80px] md:top-[110px]">Please add a link...</span>
            <input type={"submit"} className="btn rounded-[5px] md:rounded-[10px] btn px-12 py-3" value={"Shorten It!"} />
        </form>

    </section>
    </>
  )
}