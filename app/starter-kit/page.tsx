export default function StarterKitPage() {
  const items = [
    { name: 'Sistema Lunch Cube', price: 'KES 800–1,200', use: 'Everyday office worker' },
    { name: 'Lock & Lock Rectangle', price: 'KES 500–900', use: 'Meal preppers' },
    { name: 'Simple Fabric Carrier', price: 'KES 200–500', use: 'First-timers' },
    { name: 'Thermal Insulated Bag', price: 'KES 600–1,200', use: 'Long commuters' },
  ];

  return (
    <main className="min-h-screen bg-[#FFFBF5] px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <p className="text-5xl mb-3">🎒</p>
          <h1 className="text-4xl font-bold text-teal-700">Lunch Packing Starter Kit</h1>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Want to start your lunch packing journey? The right lunch box makes all the difference.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {items.map((item) => (
            <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-slate-600">Best for: {item.use}</p>
              <p className="mt-3 font-semibold text-emerald-600">{item.price}</p>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-3">First-Timer Tips</h2>
          <ul className="space-y-2 text-slate-600">
            <li>• Start simple. Don't over-invest before the habit is built.</li>
            <li>• Bright bags help you remember in rushed mornings.</li>
            <li>• Use compartments to separate wet and dry food.</li>
            <li>• Thermal bags help if lunch delays mpaka 2pm.</li>
          </ul>
        </section>

        <div className="text-center">
          <a href="/login" className="inline-block px-8 py-4 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600 transition">
            Start Packing — It's Free →
          </a>
        </div>
      </div>
    </main>
  );
}
