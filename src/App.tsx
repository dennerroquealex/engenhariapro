import { useState } from 'react'

type SlideContent = {
  eyebrow: string
  title: string
  description: string
  steps: { number: string; title: string; text: string }[]
}

// EDITE ESTE ARRAY para alterar o conteúdo dos slides exibidos na apresentação.
const slides: SlideContent[] = [
  {
    eyebrow: 'GUIA RÁPIDO · 01',
    title: 'Como criar o slide 1',
    description: 'Organize a primeira mensagem da sua apresentação em três passos simples e deixe o conteúdo pronto para ser exibido.',
    steps: [
      {
        number: '01',
        title: 'Edite o conteúdo',
        text: 'Altere título, descrição e etapas neste arquivo, dentro da constante slides.',
      },
      {
        number: '02',
        title: 'Estruture a mensagem',
        text: 'Use uma ideia principal e textos curtos para que o slide seja compreendido rapidamente.',
      },
      {
        number: '03',
        title: 'Exiba na tela',
        text: 'O componente Slide renderiza o conteúdo selecionado automaticamente nesta tela.',
      },
    ],
  },
  {
    eyebrow: 'GUIA RÁPIDO · 02',
    title: 'Organize a sua mensagem',
    description: 'Uma boa apresentação transforma informações importantes em uma sequência clara, objetiva e fácil de acompanhar.',
    steps: [
      {
        number: '01',
        title: 'Defina o objetivo',
        text: 'Antes de escrever, determine qual ação ou entendimento você espera do público.',
      },
      {
        number: '02',
        title: 'Escolha o essencial',
        text: 'Remova informações secundárias e mantenha apenas o que ajuda a contar a história.',
      },
      {
        number: '03',
        title: 'Crie uma sequência',
        text: 'Organize as ideias em começo, desenvolvimento e conclusão para facilitar a compreensão.',
      },
    ],
  },
  {
    eyebrow: 'GUIA RÁPIDO · 03',
    title: 'Revise antes de apresentar',
    description: 'Uma última revisão ajuda a garantir que cada slide tenha clareza, consistência visual e uma mensagem fácil de lembrar.',
    steps: [
      {
        number: '01',
        title: 'Leia em voz alta',
        text: 'Verifique se os textos soam naturais e se a mensagem pode ser entendida rapidamente.',
      },
      {
        number: '02',
        title: 'Confira o visual',
        text: 'Observe espaçamentos, contraste e hierarquia para manter a atenção no conteúdo principal.',
      },
      {
        number: '03',
        title: 'Apresente com confiança',
        text: 'Use o slide como apoio visual e complemente a mensagem com a sua própria explicação.',
      },
    ],
  },
]

function Slide({ content }: { content: SlideContent }) {
  return (
    <section className="relative flex min-h-[620px] flex-1 flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#132943] via-[#0d1d32] to-[#0b1728] p-7 shadow-glow sm:p-10 lg:p-14">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-lime/5 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[11px] font-bold tracking-[0.22em] text-cyan">
          {content.eyebrow}
        </span>
        <span className="text-right text-sm font-medium text-slate-400">Apresentação de produto</span>
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [presentationMode, setPresentationMode] = useState(false)
  const activeSlide = slides[currentSlide]

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
          <button
            type="button"
            onClick={() => setPresentationMode((value) => !value)}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan/50 hover:text-cyan"
          >
            {presentationMode ? 'Sair da apresentação' : 'Modo apresentação'}
          </button>
        </header>

        <div className="flex flex-1 flex-col gap-6 py-7 lg:flex-row">
          {!presentationMode && (
            <aside className="flex shrink-0 flex-row gap-3 overflow-x-auto lg:w-44 lg:flex-col lg:overflow-visible">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.eyebrow}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-28 shrink-0 rounded-2xl border-2 p-2 text-left transition lg:w-full ${
                    currentSlide === index
                      ? 'border-lime bg-white/[0.06] shadow-[0_0_24px_rgba(201,242,124,0.1)]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                  }`}
                >
                  <div className="flex aspect-video items-end rounded-xl bg-gradient-to-br from-[#274d68] to-[#101d31] p-2">
                    <span className="line-clamp-2 text-[10px] font-bold text-white">{slide.title}</span>
                  </div>
                  <div className="flex items-center justify-between px-1 pt-2">
                    <span className="text-[10px] font-semibold text-slate-300">Slide {index + 1}</span>
                    {currentSlide === index && <span className="h-1.5 w-1.5 rounded-full bg-lime" />}
                  </div>
                </button>
              ))}
            </aside>
          )}

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <Slide content={activeSlide} />
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                disabled={currentSlide === 0}
                onClick={() => setCurrentSlide((slide) => Math.max(0, slide - 1))}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan/50 hover:text-cyan disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Anterior
              </button>
              <span className="text-xs text-slate-500">Use os botões para navegar pelos slides</span>
              <button
                type="button"
                disabled={currentSlide === slides.length - 1}
                onClick={() => setCurrentSlide((slide) => Math.min(slides.length - 1, slide + 1))}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan/50 hover:text-cyan disabled:cursor-not-allowed disabled:opacity-40"
              >
                Próximo →
              </button>
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Edite em <span className="font-mono text-slate-300">src/App.tsx</span> · salve · veja a atualização na tela</p>
          <div className="flex items-center gap-3">
            <span>{String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
            <div className="h-1 w-20 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-lime transition-all" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
            </div>
          </div>
        </footer>

        {!presentationMode && (
          <div className="mt-4 rounded-2xl border border-cyan/15 bg-cyan/[0.04] p-4 text-sm text-slate-300">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-cyan">Onde editar os slides</p>
                <p className="mt-1 leading-6">Abra <span className="font-mono text-white">src/App.tsx</span> e altere os objetos dentro da constante <span className="font-mono text-white">slides</span>.</p>
              </div>
              <div className="shrink-0 rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-xs text-lime">
                npm run dev
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
