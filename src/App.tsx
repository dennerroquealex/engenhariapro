type SlideContent = {
  eyebrow: string
  title: string
  description: string
  steps: { number: string; title: string; text: string }[]
}

// EDITE ESTE OBJETO para alterar o conteúdo exibido no slide 1.
const slide1: SlideContent = {
  eyebrow: 'GUIA RÁPIDO · 01',
  title: 'Como criar o slide 1',
  description: 'Organize a primeira mensagem da sua apresentação em três passos simples e deixe o conteúdo pronto para ser exibido.',
  steps: [
    {
      number: '01',
      title: 'Edite o conteúdo',
      text: 'Altere título, descrição e etapas na constante slide1, dentro do arquivo src/App.tsx.',
    },
    {
      number: '02',
      title: 'Estruture a mensagem',
      text: 'Use uma ideia principal e textos curtos para que o slide seja compreendido rapidamente.',
    },
    {
      number: '03',
      title: 'Exiba na tela',
      text: 'O componente SlideOne lê slide1 e renderiza automaticamente o conteúdo nesta tela.',
    },
  ],
}

function CodeLine({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return <div className={muted ? 'text-slate-500' : 'text-cyan-100'}>{children}</div>
}

function SlideOne({ content }: { content: SlideContent }) {
  return (
    <section className="relative flex min-h-[620px] flex-1 flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#132943] via-[#0d1d32] to-[#0b1728] p-7 shadow-glow sm:p-10 lg:p-14">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-lime/5 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between">
        <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[11px] font-bold tracking-[0.22em] text-cyan">
          {content.eyebrow}
        </span>
        <span className="text-sm font-medium text-slate-400">Apresentação de produto</span>
      </div>

      <div className="relative z-10 mt-16 max-w-3xl sm:mt-20">
        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {content.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          {content.description}
        </p>
      </div>

      <div className="relative z-10 mt-auto grid gap-3 pt-16 md:grid-cols-3">
        {content.steps.map((step) => (
          <article key={step.number} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-lime">{step.number}</span>
              <h2 className="font-semibold text-white">{step.title}</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-ink px-4 py-6 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime text-sm font-black text-ink">S</div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">Slide studio</p>
              <p className="text-xs text-slate-500">Aprenda fazendo</p>
            </div>
          </div>
          <button className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan/50 hover:text-cyan">
            Modo apresentação
          </button>
        </header>

        <div className="flex flex-1 flex-col gap-6 py-7 lg:flex-row">
          <aside className="flex shrink-0 flex-row gap-3 lg:w-44 lg:flex-col">
            <div className="w-28 rounded-2xl border-2 border-lime bg-white/[0.06] p-2 shadow-[0_0_24px_rgba(201,242,124,0.1)] lg:w-full">
              <div className="flex aspect-video items-end rounded-xl bg-gradient-to-br from-[#274d68] to-[#101d31] p-2">
                <span className="text-[10px] font-bold text-white">Como criar o slide 1</span>
              </div>
              <div className="flex items-center justify-between px-1 pt-2">
                <span className="text-[10px] font-semibold text-slate-300">Slide 1</span>
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              </div>
            </div>
            <div className="flex w-28 items-center justify-center rounded-2xl border border-dashed border-white/15 p-5 text-2xl text-slate-600 lg:w-full lg:flex-1">
              +
            </div>
          </aside>

          <SlideOne content={slide1} />
        </div>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Edite em <span className="font-mono text-slate-300">src/App.tsx</span> · salve · veja a atualização na tela</p>
          <div className="flex items-center gap-3">
            <span>01 / 01</span>
            <div className="h-1 w-20 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full rounded-full bg-lime" />
            </div>
          </div>
        </footer>

        <div className="mt-4 rounded-2xl border border-cyan/15 bg-cyan/[0.04] p-4 text-sm text-slate-300">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-cyan">Onde editar o slide 1</p>
              <p className="mt-1 leading-6">Abra <span className="font-mono text-white">src/App.tsx</span>, altere a constante <span className="font-mono text-white">slide1</span> e salve o arquivo.</p>
            </div>
            <div className="shrink-0 rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs text-lime">
              npm run dev
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
