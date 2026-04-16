export default function ReferralsPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5] px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-teal-700">Invite Your Squad 👥</h1>
          <p className="text-slate-500">Help friends save bob too. Build the lunch movement.</p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">Your Referral Code</h2>
          <div className="flex gap-3 mt-4">
            <input
              readOnly
              value="GRIND-BRIAN-24"
              className="flex-1 px-4 py-3 rounded-xl border bg-slate-50"
            />
            <button className="px-5 py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600 transition">
              Copy
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-slate-500">Invites Sent</p>
            <h3 className="text-3xl font-bold text-teal-700">12</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-slate-500">Friends Joined</p>
            <h3 className="text-3xl font-bold text-emerald-600">5</h3>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-slate-500">Active Packers</p>
            <h3 className="text-3xl font-bold text-amber-500">3</h3>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity 🔥</h2>
          <div className="space-y-3 text-slate-600">
            <p>James joined using your code 🎉</p>
            <p>Aisha packed lunch 4 days straight 🔥</p>
            <p>Kevin just signed up 👏</p>
          </div>
        </section>
      </div>
    </main>
  );
}
