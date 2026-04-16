export default function Navbar() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Tips', href: '/tips' },
    { name: 'Starter Kit', href: '/starter-kit' },
    { name: 'Referrals', href: '/referrals' },
    { name: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFBF5]/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-teal-700">
          🎒 Grind & Dine
        </a>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-teal-700 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="/login"
          className="px-5 py-2 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600 transition"
        >
          Login
        </a>
      </div>
    </nav>
  );
}
