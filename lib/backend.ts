// Simple MVP backend helpers

export type UserProfile = {
  userId: string;
  name: string;
  email: string;
  streak: number;
  bestStreak: number;
  totalSavings: number;
  reminderTime: string;
};

export type DailyLog = {
  userId: string;
  date: string; // YYYY-MM-DD
  status: 'packed' | 'forgot';
  savingsImpact: number;
};

// Mock localStorage storage for MVP
export function getUser(): UserProfile | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem('gnd_user');
  return raw ? JSON.parse(raw) : null;
}

export function saveUser(user: UserProfile) {
  localStorage.setItem('gnd_user', JSON.stringify(user));
}

export function getLogs(): DailyLog[] {
  const raw = localStorage.getItem('gnd_logs');
  return raw ? JSON.parse(raw) : [];
}

export function saveLogs(logs: DailyLog[]) {
  localStorage.setItem('gnd_logs', JSON.stringify(logs));
}

export function logToday(status: 'packed' | 'forgot') {
  const user = getUser();
  if (!user) return;

  const today = new Date().toISOString().split('T')[0];
  const logs = getLogs().filter((l) => l.date !== today);

  const impact = status === 'packed' ? 300 : 0;

  logs.push({
    userId: user.userId,
    date: today,
    status,
    savingsImpact: impact,
  });

  if (status === 'packed') {
    user.streak += 1;
    user.totalSavings += 300;
    if (user.streak > user.bestStreak) user.bestStreak = user.streak;
  } else {
    user.streak = 0;
  }

  saveLogs(logs);
  saveUser(user);
}

export function monthlySavings() {
  const logs = getLogs();
  return logs.reduce((sum, item) => sum + item.savingsImpact, 0);
}
