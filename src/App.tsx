export default function App() {
  return (
    <main className="min-h-screen bg-[#071321] px-3 py-3 text-white sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <section className="relative mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1500px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0a1b30] shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-5rem)]">
        <img
          src="/uploads/slide_1.jpg"
          alt="Fachada moderna combinada com desenho técnico arquitetônico em blueprint"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#071426]/95 via-[#071426]/35 to-[#06111f]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/65 via-transparent to-[#061321]/20" />
        <div className="absolute inset-x-0 top-[38%] h-px bg-cyan-200/30 shadow-[0_0_18px_4px_rgba(103,232,249,0.42)]" />
        <div className="absolute inset-x-0 top-[38%] h-20 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/[0.08] to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.07]" />

        <div className="relative z-10 flex min-h-full w-full flex-col justify-between p-7 sm:p-10 lg:p-14 xl:p-20">
          <header className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/40 bg-cyan-300/15 text-sm font-black tracking-tight text-cyan-100 shadow-[0_0_24px_rgba(103,232,249,0.2)]">
                01
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-100/80">Estudo de fachada</p>
                <p className="mt-1 text-xs text-white/45">Arquitetura · matéria · precisão</p>
              </div>
            </div>
            <span className="hidden rounded-full border border-white/20 bg-[#071426]/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65 backdrop-blur-sm sm:block">
              Capa / 2024
            </span>
          </header>

          <div className="max-w-3xl pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.34em] text-cyan-100/90 sm:text-sm">
              <span className="h-px w-10 bg-cyan-200/80 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
              Slide 01 · Capa
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.045em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-7xl lg:text-8xl">
              Entre o real
              <span className="block text-cyan-100/90">e o projetado.</span>
            </h1>
            <p className="mt-8 max-w-xl border-l border-cyan-200/60 pl-5 text-sm leading-7 text-white/70 sm:text-base">
              Uma fachada contemporânea revelada em duas linguagens: a presença da matéria e a precisão do desenho técnico.
            </p>
          </div>

          <footer className="flex flex-col gap-6 border-t border-white/20 pt-5 text-[10px] uppercase tracking-[0.22em] text-white/55 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <span>Fachada dividida</span>
              <span>Blueprint cyan</span>
              <span>Estudo visual</span>
            </div>
            <div className="flex items-center gap-3 text-cyan-100/80">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(165,243,252,1)]" />
              <span>Visual editorial</span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
