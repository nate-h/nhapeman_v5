export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative border-t border-emerald-500/20 py-8">
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="flex justify-center items-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} <span className="text-emerald-300">Nathanial Hapeman</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
