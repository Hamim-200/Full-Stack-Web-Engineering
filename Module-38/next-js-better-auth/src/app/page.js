export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-6xl">
          Welcome to My Website
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          A simple, clean, and modern home section built with Next.js and
          Tailwind CSS.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800">
            Get Started
          </button>

          <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-800 transition hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}