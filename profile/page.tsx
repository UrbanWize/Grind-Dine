export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5] px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-teal-700">Your Profile 👤</h1>
          <p className="text-slate-500">Settings, reminders, and your Grind & Dine journey.</p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <h2 className="text-xl font-bold">Brian Mwangi</h2>
              <p className="text-slate-500">brian@email.com</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6 space-y-4">
          <h3 className="font-bold text-xl">Preferences</h3>
          <div>
            <label className="text-sm text-slate-500">Reminder Time</label>
            <input type="time" defaultValue="20:00" className="w-full mt-1 px-4 py-3 rounded-xl border" />
          </div>
          <div>
            <label className="text-sm text-slate-500">Work Style</label>
            <select className="w-full mt-1 px-4 py-3 rounded-xl border">
              <option>Corporate employee</option>
              <option>Freelancer</option>
              <option>Remote worker</option>
            </select>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h3 className="font-bold text-xl mb-2">Your Journey 🎒</h3>
          <p className="text-slate-600">Member for 48 days</p>
          <p className="text-slate-600">Best streak: 12 days 🔥</p>
          <p className="text-slate-600">Total saved: KSh 14,400 💰</p>
        </section>

        <button className="w-full py-4 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition">
          Log Out
        </button>
      </div>
    </main>
  );
}
