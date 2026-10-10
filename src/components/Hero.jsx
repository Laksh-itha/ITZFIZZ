import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Steve from './Steve'
import Stats from './Stats'

gsap.registerPlugin(ScrollTrigger, useGSAP)
ScrollTrigger.config({ ignoreMobileResize: true })

const WORDS = ['WELCOME', 'ITZFIZZ']

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const steve = q('.steve')[0]
      const grass = q('.grass')[0]
      const chars = q('.char')
      const outers = q('.card-outer')
      const inners = q('.card-inner')
      const nums = q('.card-num')
      const limb = (c) => q(c)[0]
      const L = { lf: limb('.leg-front'), lb: limb('.leg-back'), af: limb('.arm-front'), ab: limb('.arm-back') }

     
      const walk = { v: 0 }
      const swing = () => {
        const a = Math.sin(walk.v * Math.PI * 2 * 14) * 38
        gsap.set(L.lf, { rotation: a, svgOrigin: '4 20' })
        gsap.set(L.lb, { rotation: -a, svgOrigin: '4 20' })
        gsap.set(L.af, { rotation: -a, svgOrigin: '4 8' })
        gsap.set(L.ab, { rotation: a, svgOrigin: '4 8' })
      }
      swing()

      
      if (!reduce) {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from(chars, { y: 60, opacity: 0, duration: 1, stagger: 0.05 }, 0.1)
          .from(steve, { opacity: 0, scale: 0.9, duration: 0.8, transformOrigin: '50% 100%' }, 0.3)
          .from(outers, { y: 40, opacity: 0, duration: 0.9, stagger: 0.18 }, 0.9)
      }

      
      const build = (end) => {
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: `+=${end}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        const vw = () => window.innerWidth
        const w = () => steve.offsetWidth
        tl.fromTo(steve, { x: 0 }, { x: () => vw(), duration: 1 }, 0)
        tl.fromTo(
          grass,
          { scaleX: () => w() / 2 / vw() },
          { scaleX: () => (vw() + w() / 2) / vw(), duration: 1 },
          0,
        )
        tl.to(walk, { v: 1, duration: 1, onUpdate: swing }, 0)
        nums.forEach((n, i) => {
          tl.fromTo(n, { textContent: 0 }, { textContent: Number(n.dataset.value), snap: { textContent: 1 }, duration: 0.5 }, 0.08 + i * 0.1)
        })
        inners.forEach((el) => {
          tl.fromTo(
            el,
            { y: 0, backgroundColor: '#0A1931', color: '#ffffff' },
            { y: -20, backgroundColor: '#4A7FA7', color: '#000000', duration: 1 },
            0,
          )
        })
      
const road = getComputedStyle(document.documentElement).getPropertyValue('--color-road').trim() || '#1f1f1f'
chars.forEach((c) => {
  const r = c.getBoundingClientRect()
  const cx = r.left + r.width / 2
  const p = Math.min(Math.max((cx - w() / 2) / vw(), 0.02), 0.98)
  tl.fromTo(c, { color: road }, { color: '#000000', duration: 0.04 }, p - 0.02)
})
        return tl
      }
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => { build(2000) })
      mm.add('(max-width: 767px)', () => { build(1400) })
      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section ref={root} className="relative h-[100svh] w-full overflow-hidden bg-page" style={{ '--band': 'clamp(150px, 26vh, 320px)' }}>
      
      <div className="absolute inset-x-0 top-1/2 z-10 h-(--band) -translate-y-1/2 overflow-hidden bg-road">
        <div className="grass absolute inset-0 origin-left bg-grass will-change-transform" style={{ transform: 'scaleX(0)' }} />
        <h1 className="absolute inset-0 flex items-center justify-center gap-[0.5em] whitespace-nowrap text-[6.2vw] font-black tracking-[0.12em] text-[#0A1931] md:text-[6vw]">
          {WORDS.map((w) => (
            <span key={w}>
              {[...w].map((ch, i) => (
                <span key={i} className="char inline-block">{ch}</span>
              ))}
            </span>
          ))}
        </h1>
      </div>

      
      <div
        className="steve absolute left-0 z-20 will-change-transform"
        style={{ height: 'calc(var(--band) * 1.4)', bottom: 'calc(50% - var(--band) / 2 + 8px)' }}
      >
        <Steve />
      </div>

      <Stats />
    </section>
  )
}