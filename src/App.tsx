import { useEffect, useState } from 'react'

type Slide = {
  number: string
  tag: string
  eyebrow: string
  title: string
  accent: string
  support: string
  transition: string
  points: string[]
  footer: string
  theme: string
}

const slides: Slide[] = [
  {
    number: '01',
    tag: 'O gancho',
    eyebrow: 'Slide 01 · O gancho',
    title: 'O que você vê é apenas a superfície.',
    accent: 'A parte mais importante ainda está escondida.',
    support:
      'Toda fachada conta uma história antes mesmo de alguém atravessar a porta. Mas existe uma diferença decisiva entre parecer sólido e realmente ser preciso.',
    transition: 'Se a primeira impressão engana, o que acontece quando olhamos mais de perto?',
    points: ['Presença', 'Percepção', 'Precisão'],
    footer: 'Comece pela aparência. Termine na verdade.',
    theme: 'from-[#071426] via-[#0a2740] to-[#06111f]',
  },
  {
    number: '02',
    tag: 'A ilusão visual',
    eyebrow: 'Slide 02 · A ilusão visual',
    title: 'A imagem pode parecer perfeita.',
    accent: 'Mesmo quando a proporção está errada.',
    support:
      'Linhas, reflexos e materiais criam uma sensação de equilíbrio. O olho completa o que falta e transforma pequenos desvios em uma falsa impressão de acabamento.',
    transition: 'O problema não aparece na fotografia. Ele aparece quando a matéria encontra o uso.',
    points: ['Ângulo', 'Luz', 'Escala'],
    footer: 'O olhar interpreta. A matéria revela.',
    theme: 'from-[#0c1d31] via-[#173a52] to-[#081522]',
  },
  {
    number: '03',
    tag: 'O choque físico',
    eyebrow: 'Slide 03 · O choque físico',
    title: 'A primeira falha é quase sempre silenciosa.',
    accent: 'Até o momento em que o corpo encontra a superfície.',
    support:
      'Uma quina fora do eixo. Uma junta que não acompanha o movimento. Uma mudança de temperatura que expõe a diferença entre um desenho bonito e uma solução que funciona no mundo real.',
    transition: 'Quando o detalhe deixa de ser detalhe, a estética passa a cobrar o seu preço.',
    points: ['Atrito', 'Impacto', 'Desgaste'],
    footer: 'O corpo percebe antes do discurso.',
    theme: 'from-[#161d2c] via-[#3b3140] to-[#10121d]',
  },
  {
    number: '04',
    tag: 'O risco invisível',
    eyebrow: 'Slide 04 · O risco invisível',
    title: 'O que não aparece também constrói o resultado.',
    accent: 'E pode comprometer tudo ao redor.',
    support:
      'Por trás da superfície existem tolerâncias, encontros, cargas e decisões que não cabem em uma imagem. É ali que surgem os custos ocultos, os retrabalhos e a perda de confiança.',
    transition: 'A pergunta deixa de ser “como parece?” e passa a ser “como foi resolvido?”.',
    points: ['Tolerância', 'Encontro', 'Consequência'],
    footer: 'O risco invisível é o mais caro de ignorar.',
    theme: 'from-[#111827] via-[#172c3d] to-[#090e18]',
  },
  {
    number: '05',
    tag: 'A solução proprietária',
    eyebrow: 'Slide 05 · A solução proprietária',
    title: 'Precisão não é um acabamento.',
    accent: 'É o método por trás de cada decisão.',
    support:
      'A solução proprietária conecta leitura visual, controle dimensional e validação física em uma única lógica. O resultado não depende de improviso: cada encontro é pensado antes de se tornar problema.',
    transition: 'Quando o processo é controlado, a confiança deixa de ser promessa e vira evidência.',
    points: ['Ler', 'Testar', 'Refinar'],
    footer: 'Da intenção ao detalhe. Do detalhe ao resultado.',
    theme: 'from-[#062b3b] via-[#07546a] to-[#071b2b]',
  },
  {
    number: '06',
    tag: 'A prova & ação',
    eyebrow: 'Slide 06 · A prova & ação',
    title: 'O resultado final não precisa de explicação.',
    accent: 'Ele se sustenta quando você chega perto.',
    support:
      'Uma solução precisa ser vista, tocada e compreendida. É por isso que transformamos a complexidade invisível em uma experiência clara, verificável e pronta para a próxima decisão.',
    transition: 'Agora, o próximo passo é colocar a precisão em movimento.',
    points: ['Ver', 'Comprovar', 'Avançar'],
    footer: 'Agende uma conversa e veja a diferença no detalhe.',
    theme: 'from-[#062c3c] via-[#0b6b7d] to-[#061827]',
  },
]

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      {direction === 'left' ? (
        <path d="M19 12H5m6 6-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = slides[activeSlide]

  const goToSlide = (index: number) => {
    setActiveSlide(Math.max(0, Math.min(slides.length - 1, index)))
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault()
        goToSlide(activeSlide + 1)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goToSlide(activeSlide - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeSlide])

  return (
    <main className="min-h-screen bg-[#071321] px-3 py-3 text-white sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <section className={`relative mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1500px] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br ${slide.theme} shadow-[0_30px_100px_rgba(0,0,0,0.45)] transition-colors duration-700 sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-5rem)]`}>
        {(activeSlide === 0 || activeSlide === 1) && (
          <img
            src={activeSlide === 0 ? '/uploads/slide_1.jpg' : '/uploads/slide_2.jpg'}
            alt={
              activeSlide === 0
                ? 'Fachada moderna combinada com desenho técnico arquitetônico em blueprint'
                : 'Imagem arquitetônica do Slide 02'
            }
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70 mix-blend-screen"
          />
        )}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(103,232,249,0.18),transparent_28%),linear-gradient(115deg,rgba(4,13,26,0.97),rgba(6,24,40,0.74),rgba(4,13,26,0.87))]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(165,243,252,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(165,243,252,0.12)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute inset-x-0 top-[34%] h-px bg-cyan-200/40 shadow-[0_0_18px_4px_rgba(103,232,249,0.35)]" />
        <div className="absolute inset-x-0 top-[34%] h-24 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/[0.07] to-transparent" />

        <div className="relative z-10 flex min-h-full w-full flex-col justify-between p-7 sm:p-10 lg:p-14 xl:p-20">
          <header className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/40 bg-cyan-300/15 text-sm font-black tracking-tight text-cyan-100 shadow-[0_0_24px_rgba(103,232,249,0.2)]">
                {slide.number}
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-100/80">Estudo de fachada</p>
                <p className="mt-1 text-xs text-white/45">Arquitetura · matéria · precisão</p>
              </div>
            </div>
            <span className="hidden rounded-full border border-white/20 bg-[#071426]/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65 backdrop-blur-sm sm:block">
              {slide.number} / 06
            </span>
          </header>

          <div className="max-w-4xl pb-10 pt-28 sm:pb-14 sm:pt-32 lg:pb-16 lg:pt-36">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.34em] text-cyan-100/90 sm:text-sm">
              <span className="h-px w-10 bg-cyan-200/80 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
              {slide.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.045em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-7xl lg:text-8xl">
              {slide.title}
              <span className="mt-3 block text-cyan-100/90">{slide.accent}</span>
            </h1>
            <p className="mt-8 max-w-2xl border-l border-cyan-200/60 pl-5 text-sm leading-7 text-white/70 sm:text-base">
              {slide.support}
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {slide.points.map((point) => (
                <span key={point} className="rounded-full border border-cyan-100/25 bg-cyan-100/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-50/80">
                  {point}
                </span>
              ))}
            </div>
          </div>

          <footer className="border-t border-white/20 pt-5">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-100/60">Transição mental</p>
                <p className="mt-2 text-sm leading-6 text-white/65">{slide.transition}</p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">{slide.footer}</p>
            </div>

            <div className="mt-7 flex items-center justify-between gap-5">
              <div className="flex items-center gap-2" aria-label="Navegação dos slides">
                {slides.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir para o slide ${item.number}`}
                    aria-current={activeSlide === index ? 'step' : undefined}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-10 bg-cyan-200 shadow-[0_0_10px_rgba(165,243,252,0.8)]' : 'w-3 bg-white/25 hover:bg-white/55'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goToSlide(activeSlide - 1)}
                  disabled={activeSlide === 0}
                  aria-label="Slide anterior"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition hover:border-cyan-200/60 hover:text-cyan-100 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowIcon direction="left" />
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide(activeSlide + 1)}
                  disabled={activeSlide === slides.length - 1}
                  aria-label="Próximo slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-100/40 bg-cyan-100/10 text-cyan-50 transition hover:bg-cyan-100/20 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}
