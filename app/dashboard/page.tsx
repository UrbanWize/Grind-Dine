'use client';

import { useEffect, useState } from 'react';
import { getUser, logToday, monthlySavings } from '@/lib/backend';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [saved, setSaved] = useState(0);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
    setSaved(monthlySavings());
  }, []);

  const handleLog = (status: 'packed' | 'forgot') => {
    logToday(status);
    const updated = getUser();
    setUser(updated);
    setSaved(monthlySavings());
    setLogged(true);
  };

  return (
    <main className="min-h-screen bg-[#FFFBF5] px-6 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-700 mb-2">Mambo 👋</h1>
        <p className="text-slate-500 mb-8">Ready to win tomorrow's lunch?</p>

        <div className="grid gap-4 mb-8">
          <button
            disabled={logged}
            onClick={() => handleLog('packed')}
            className="w-full py-4 rounded-2xl bg-emerald-500 text-white font-bold disabled:opacity-50"
          >
            I packed lunch ✅
          </button>

          <button
            disabled={logged}
            onClick={() => handleLog('forgot')}
            className="w-full py-4 rounded-2xl bg-amber-500 text-white font-bold disabled:opacity-50"
          >
            I forgot 😬
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-slate-500">Current Streak</p>
            <h2 className="text-4xl font-bold text-teal-700">🔥 {user?.streak || 0}</h2>
            <p className="text-sm text-slate-400">Best streak: {user?.bestStreak || 0}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-slate-500">Saved This Month</p>
            <h2 className="text-4xl font-bold text-emerald-600">KSh {saved}</h2>
            <p className="text-sm text-slate-400">Money stacking nicely 💰</p>
          </div>
        </div>
      </div>
    </main>
  );
}
