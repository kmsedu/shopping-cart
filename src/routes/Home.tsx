export default function Home (): JSX.Element {
  return (
    <main className='flex flex-1 flex-col justify-between'>
      <div className='hero flex items-center justify-center bg-slate-200 py-12'>
        This is where hero stuff goes
      </div>
      <section className='mx-24 flex items-center justify-between gap-2'>
        <div className='flex h-36 flex-1 items-center justify-center bg-slate-300'>
          Component 1
        </div>
        <div className='flex h-48 flex-[2] items-center justify-center bg-slate-300'>
          Component 2
        </div>
        <div className='flex h-36 flex-1 items-center justify-center bg-slate-300'>
          Component 3
        </div>
      </section>
      <div className='hero flex items-center justify-center bg-slate-200 py-12'>
        This is where hero stuff goes
      </div>
    </main>
  )
}
