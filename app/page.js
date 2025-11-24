export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full">
        {/* En-tête animé */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="text-7xl animate-bounce inline-block">🚀</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
            Vercel Demo
          </h1>
          <p className="text-xl text-gray-300">
            Voici un texte en exemple !!!!!
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300">
            <span className="text-3xl mb-3 block">⚡</span>
            <h3 className="text-lg font-semibold text-white mb-2">Ultra Rapide</h3>
            <p className="text-gray-400 text-sm">Déployé en moins de 2 minutes</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
            <span className="text-3xl mb-3 block">🔄</span>
            <h3 className="text-lg font-semibold text-white mb-2">Auto-Deploy</h3>
            <p className="text-gray-400 text-sm">Chaque push est automatiquement en ligne</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300">
            <span className="text-3xl mb-3 block">👁️</span>
            <h3 className="text-lg font-semibold text-white mb-2">Preview</h3>
            <p className="text-gray-400 text-sm">Preview automatique pour chaque PR</p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300">
            <span className="text-3xl mb-3 block">🌍</span>
            <h3 className="text-lg font-semibold text-white mb-2">Global CDN</h3>
            <p className="text-gray-400 text-sm">Optimisé pour la performance mondiale</p>
          </div>
        </div>

      </div>
    </main>
  );
}
