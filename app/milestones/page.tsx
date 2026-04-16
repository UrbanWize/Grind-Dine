export default function MilestonesPage() {
  const milestones = [
    { title: 'First Packed Lunch', desc: 'You started something 🎒', earned: true },
    { title: '3 Day Streak', desc: 'Momentum imeanza 💪', earned: true },
    { title: '7 Day Streak', desc: 'One full week packed 🔥', earned: true },
    { title: 'Saved KSh 1,000', desc: 'Money stacking nicely 💰', earned: true },
    { title: '30 Day Streak', desc: 'A whole month legend status 🏆', earned: false },
    { title: 'Saved KSh 10,000', desc: 'Big saver unlocked 🚀', earned: false },
  ];

  return (
    <main className="min-h-screen bg-[#FFFBF5] px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <p className="text-5xl mb-3">🏆</p>
          <h1 className="text-4xl font-bold text-teal-700">Milestone Wall</h1>
          <p className="text-slate-500 mt-3">Your lunch journey deserves a trophy shelf.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {milestones.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl p-6 shadow-sm ${item.earned ? 'bg-white' : 'bg-slate-100 opacity-70'}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-600 mt-2">{item.desc}</p>
                </div>
                <span className="text-3xl">{item.earned ? '✅' : '🔒'}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 text-center">
          <p className="font-medium text-slate-700">Next unlock: 30 Day Streak. You can do this 😎</p>
        </div>
      </div>
    </main>
  );
}
