export default function Home() {
  return (
    <div>
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Build something <span className="text-indigo-600">extraordinary</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to your new homepage. It's clean, modern, fully responsive, and ready for whatever project you are building next.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-lg border border-slate-300 bg-white font-medium hover:bg-slate-100 transition-colors">
              Learn More
            </button>
          </div>
        </section>

        {/* Feature Highlights */}
        <section id="features" className="py-16 bg-white border-t border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-4">
                  ⚡
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast Performance</h3>
                <p className="text-sm text-slate-600">
                  Built to load quickly and deliver a smooth user experience across all devices.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-4">
                  🎨
                </div>
                <h3 className="font-semibold text-lg mb-2">Clean Design</h3>
                <p className="text-sm text-slate-600">
                  Minimalistic layout styled with Tailwind CSS utility classes for fast customization.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mb-4">
                  📱
                </div>
                <h3 className="font-semibold text-lg mb-2">Fully Responsive</h3>
                <p className="text-sm text-slate-600">
                  Adapts gracefully to mobile phones, tablets, and desktop displays.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </footer>
    </div>

  );
}
