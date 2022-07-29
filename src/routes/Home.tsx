export default function Home (): JSX.Element {
  return (
    <main className='flex flex-col flex-1 justify-between'>
      <div className='hero flex justify-center items-center py-12 bg-slate-200'>
        This is where hero stuff goes
      </div>
      <section className='flex justify-between gap-2 items-center mx-24'>
        <div className='bg-slate-300 flex justify-center items-center h-36 flex-1'>Component 1</div>
        <div className='bg-slate-300 flex flex-[2] justify-center items-center h-48'>Component 2</div>
        <div className='bg-slate-300 flex justify-center items-center h-36 flex-1'>Component 3</div>
      </section>
      <div className='hero flex justify-center items-center py-12 bg-slate-200'>
        This is where hero stuff goes
      </div>
    </main>
  )
}
