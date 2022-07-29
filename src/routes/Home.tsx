export default function Home (): JSX.Element {
  return (
    <main className='flex flex-col flex-1 my-12 justify-between gap-8'>
      <div className='hero flex justify-center items-center py-24 bg-slate-200 mx-24'>
        This is where hero stuff goes
      </div>
      <section className='flex justify-between gap-8 items-center mx-24'>
        <div className='bg-slate-300 p-12 flex items-center h-48'>Component 1</div>
        <div className='bg-slate-300 p-12 flex flex-1 justify-center items-center h-48'>Component 2</div>
        <div className='bg-slate-300 p-12 flex items-center h-48'>Component 3</div>
      </section>
      <div className='hero flex justify-center items-center py-24 bg-slate-200 mx-24'>
        This is where hero stuff goes
      </div>
    </main>
  )
}
