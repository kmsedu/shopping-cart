import { ShopProps } from '../types'

export default function Shop (props: ShopProps): JSX.Element {
  const { cartItems } = props
  console.log(cartItems)
  return (
    <main className='flex flex-col h-full overflow-y-hidden'>
      <div className='hero flex justify-center items-center py-12 bg-slate-200'>
        This is where hero stuff goes
      </div>
      <section className='flex-[4] bg-slate-400 p-8 grid grid-cols-auto-fit gap-8 auto-rows-[250px] overflow-auto'>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
        <div className='bg-slate-500'>component</div>
      </section>
    </main>
  )
}
