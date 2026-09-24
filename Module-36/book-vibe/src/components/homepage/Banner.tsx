import bannerImg from "@/assets/hero_img.jpg";
import Image from "next/image";

const Banner = () => {
    return (
        <section className="px-4 py-8 md:py-12">
            <div className="container mx-auto">
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-950">

                    {/* Background Decorations */}
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

                    {/* Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />

                    <div className="relative grid items-center gap-10 p-7 sm:p-10 md:grid-cols-2 md:p-14 lg:p-16">

                        {/* Content */}
                        <div className="z-10 space-y-7 text-center md:text-left">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20">
                                    📚
                                </span>
                                Discover your next favorite book
                            </div>

                            {/* Heading */}
                            <div>
                                <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl">
                                    Stories that
                                    <span className="block bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                        stay with you.
                                    </span>
                                </h1>
                            </div>

                            {/* Description */}
                            <p className="mx-auto max-w-xl text-base leading-7 text-slate-400 md:mx-0 md:text-lg">
                                Explore carefully selected books, discover new
                                stories, and find your next unforgettable read.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                                <button className="group rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-emerald-400/30">
                                    Explore Books
                                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </button>

                                <button className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                                    Learn More
                                </button>
                            </div>

                            {/* Small Stats */}
                            <div className="flex items-center justify-center gap-6 pt-2 text-left md:justify-start">
                                <div>
                                    <p className="text-xl font-bold text-white">500+</p>
                                    <p className="text-xs text-slate-500">
                                        Books
                                    </p>
                                </div>

                                <div className="h-8 w-px bg-white/10" />

                                <div>
                                    <p className="text-xl font-bold text-white">50+</p>
                                    <p className="text-xs text-slate-500">
                                        Authors
                                    </p>
                                </div>

                                <div className="h-8 w-px bg-white/10" />

                                <div>
                                    <p className="text-xl font-bold text-white">4.9</p>
                                    <p className="text-xs text-slate-500">
                                        Rating
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative flex items-center justify-center md:min-h-[450px]">

                            {/* Glow */}
                            <div className="absolute h-72 w-72 rounded-full bg-emerald-400/20 blur-[90px]" />

                            {/* Decorative Circle */}
                            <div className="absolute h-80 w-80 rounded-full border border-emerald-400/10 sm:h-96 sm:w-96" />

                            {/* Image Card */}
                            <div className="relative w-full max-w-md rotate-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40 backdrop-blur-sm transition duration-500 hover:rotate-0 hover:scale-[1.02]">

                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                                    <Image
                                        src={bannerImg}
                                        alt="Collection of books"
                                        fill
                                        priority
                                        className="object-cover transition duration-700 hover:scale-105"
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Floating Label */}
                                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
                                        <div>
                                            <p className="text-xs text-slate-300">
                                                Featured Collection
                                            </p>
                                            <p className="font-semibold text-white">
                                                Find your next story
                                            </p>
                                        </div>

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-lg text-slate-950">
                                            →
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Book Badge */}
                            <div className="absolute -left-2 top-10 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-lg">
                                        ✨
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500">
                                            Today's pick
                                        </p>
                                        <p className="text-sm font-semibold text-white">
                                            Must Read
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;