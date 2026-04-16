export default function SquadPage() {
  const squad = [
    { rank: 1, name: 'Brian', streak: 14, saved: 'KSh 4,200' },
    { rank: 2, name: 'Aisha', streak: 11, saved: 'KSh 3,300' },
    { rank: 3, name: 'James', streak: 8, saved: 'KSh 2,400' },
    { rank: 4, name: 'Kevin', streak: 5, saved: 'KSh 1,500' },
  ];

  return (
    <main className="min-h-screen bg-[#FFFBF5] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <p className="text-5xl mb-3">👥</p>
          <h1 className="text-4xl font-bold text-teal-700">Squad Leaderboard</h1>
          <p className="text-slate-500 mt-3">Friendly pressure. Healthy wallets. Lunch legends only.</p>
        </header>

        <div className="space-y-4">
          {squad.map((member) => (
            <div key={member.rank} className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-700">
                  #{member.rank}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-slate-500">Saved {member.saved}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-emerald-600">🔥 {member.streak}</p>
                <p className="text-sm text-slate-400">day streak</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 text-center">
          <p className="text-slate-700 font-medium">Invite one more colleague and make the office competitive 😎</p>
        </div>
      </div>
    </main>
  );
}
