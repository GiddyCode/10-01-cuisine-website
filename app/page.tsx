export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 w-full bg-[#1a1a1a]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <h1 className="text-xl font-bold text-[#F5C400]">10:01 Cuisine</h1>
          <nav className="hidden gap-6 md:flex">
            <a href="#home" className="text-sm hover:text-[#F5C400]">Home</a>
            <a href="#menu" className="text-sm hover:text-[#F5C400]">Menu</a>
            <a href="#about" className="text-sm hover:text-[#F5C400]">About</a>
          </nav>
          <button className="rounded-full border border-[#F5C400] px-6 py-2 text-sm font-semibold hover:bg-[#F5C400] hover:text-black">
            Contact Us
          </button>
        </div>
      </header>

      <section className="mt-20 min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-5xl font-bold mb-4">Satisfy Your Cravings</h2>
        <p className="text-xl text-white/70 max-w-2xl mb-8">
          Authentic Nigerian and International cuisine, delivered fresh to your door.
        </p>
        <button className="rounded-full bg-[#F5C400] px-8 py-3 text-lg font-semibold text-black hover:bg-[#F5C400]/90">
          Explore Menu
        </button>
      </section>

      <section id="menu" className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Jollof Rice', 'Egusi Soup', 'Peppered Chicken'].map((item) => (
              <div key={item} className="bg-[#2a2a2a] p-6 rounded-lg hover:bg-[#3a3a3a] transition">
                <div className="h-48 bg-[#1a1a1a] rounded mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-white/70 text-sm">Fresh, authentic African cuisine</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-4">
        <div className="mx-auto max-w-7xl text-center text-white/70">
          <p>&copy; 2026 10:01 Cuisine. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
