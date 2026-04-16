export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow p-8">
        <div className="mb-6">
          <p className="text-sm text-slate-500 mb-2">Step 1 of 7</p>
          <div className="w-full bg-slate-200 h-2 rounded-full">
            <div className="bg-teal-500 h-2 rounded-full w-[14%]"></div>
          </div>
        </div>

        <p className="text-4xl mb-3">👋</p>
        <h1 className="text-3xl font-bold text-teal-700">Hey Brian! Let's get you set up.</h1>
        <p className="text-slate-600 mt-3">
          A few quick questions so we can make Grind & Dine feel like it was built just for you.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="text"
            defaultValue="Brian"
            className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="mt-8 flex gap-4">
          <button className="flex-1 py-4 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600 transition">
            Let's go →
          </button>
          <button className="px-6 py-4 rounded-xl bg-slate-100 font-medium hover:bg-slate-200 transition">
            Skip
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-400 text-center">
          Takes less than 2 minutes. Sawa? 😎
        </p>
      </div>
    </main>
  );
}
