export const CARDS = [
  { v: 58, t: 'Increase in pick up point use' },
  { v: 27, t: 'Increase in pick up point use' },
  { v: 23, t: 'Decreased in customer phone calls' },
  { v: 40, t: 'Decreased in customer phone calls' },
]

export default function Stats() {
  return (
    <div
      className="absolute inset-x-[4%] z-30 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5"
      style={{ top: 'calc(50% + var(--band) / 2 + 3vh)' }}
    >
      {CARDS.map((c) => (
        <div key={c.v} className="card-outer">
          <div className="card-inner h-full rounded-2xl bg-[#0A1931] px-[7%] py-[6%] text-white shadow-lg">
            <div className="text-[8vw] font-bold leading-none md:text-[3.6vw]">
              <span className="card-num" data-value={c.v}>0</span>%
            </div>
            <p className="mt-2 text-[2.8vw] leading-snug md:mt-3 md:text-[1vw]">{c.t}</p>
          </div>
        </div>
      ))}
    </div>
  )
}