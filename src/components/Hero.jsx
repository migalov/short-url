
import illustration from "../images/illustration-working.svg"

export default function Hero() {
  return (
    <section className="py-10 lg:py-20">
      <div className="container flex flex-col-reverse md:flex-row md:gap-10 gap-7 md:place-items-center">
        <article className="text-center md:text-left">
          <h1 className="text-5xl lg:text-6xl mb-5 font-bold text-slate-800">
            More than just shorter links
          </h1>
          <p className="lg:text-lg text-slate-400 mb-10">
            Build your brand’s recognition and get detailed insights on how
            your links are performing.
          </p>
          <button className="btn rounded-full btn px-12 py-3">Get Started</button>
        </article>

        <article>
          <img src={illustration} alt="Shortly" />
        </article>
      </div>
    </section>
  )
}