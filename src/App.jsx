import Hero from './components/Hero'

export default function App() {
  return (
    <main>
      <Hero />
      <section className="flex min-h-[60svh] items-center justify-center bg-page px-6 text-center">
        <p className="text-xl font-bold tracking-[0.3em] text-black md:text-3xl">THE END OF THE ROAD</p>
      </section>
    </main>
  )
}
