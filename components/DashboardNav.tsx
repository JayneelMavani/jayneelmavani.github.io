export default function DashboardNav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[110] glass border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="text-2xl font-bold text-gradient">
            Portfolio.
          </a>
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              ← Back to Site
            </a>
            <button className="px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-lg transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
