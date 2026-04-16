export default function TipsPage() {
  const tags = ['All', 'No-cook', 'Under 100 KES', 'Tummy-friendly', 'For Commuters', 'Quick Prep'];

  return (
    <main className="min-h-screen bg-[#FFFBF5] px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-teal-700">Lunch Tips 🎒</h1>
          <p className="text-slate-500">Simple Kenyan ideas to help you pack consistently.</p>
        </header>

        <div className="flex gap-3 overflow-x-auto pb-3 mb-8">
          {tags.map((tag, i) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${i === 0 ? 'bg-teal-500 text-white' : 'bg-white text-slate-700 shadow-sm'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Beat the Monday Slip</h3>
            <p className="text-slate-600">Pack on Sunday night. Put keys on the lunchbox so you can't forget.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Under 100 KES</h3>
            <p className="text-slate-600">Githeri, boiled eggs + nduma, rice + beans. Cheap and filling.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">No-cook Option</h3>
            <p className="text-slate-600">Peanut butter sandwich + carrots + banana. Zero stress morning.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">For Commuters</h3>
            <p className="text-slate-600">Pack bag near the door at night. Nairobi mornings move fast.</p>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm text-center">
          <p className="text-lg font-medium text-slate-700">You've got this. See you tomorrow. 🎒</p>
        </div>
      </div>
    </main>
  );
}
