import bannerImg from "../../public/assets/banner-stack.png"


export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto mt-12 grid w-[calc(100%-40px)] max-w-content scroll-mt-24 items-center gap-10 lg:mt-24 lg:grid-cols-[minmax(0,696px)_minmax(320px,488px)] lg:gap-8"
    >

      <div className="order-1 lg:pr-8">

        <h1 className="max-w-[555px] font-display text-[44px] font-extrabold leading-[1.02] tracking-[-1.5px] sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <span className="brand-text block">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">

          <a
            href="#"
            className="btn min-h-0 h-[42px] border-0 bg-brand px-6 text-sm font-semibold text-white shadow-none hover:opacity-95"
          >
            Explore Technologies
          </a>

          <a
            href="#"
            className="btn btn-outline min-h-0 h-[42px] border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
          >
            Learn More
          </a>

        </div>
      </div>

      <div
        className="order-2 grid place-items-center lg:min-h-[420px]"
        aria-hidden="true"
      >
        <img
          src={bannerImg}
          alt=""
          className="h-auto w-[300px] object-contain sm:w-[350px]"
        />
      </div>

    </section>
  )
}