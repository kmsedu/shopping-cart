export default function About (): JSX.Element {
  return (
    <main className='flex h-full flex-col bg-gray-200 font-main'>
      <section className='flex-1 py-8 flex items-center p-4'>
        <img
          src='./assets/about-photo1.jpg'
          width='350px'
          className='rounded'
        />
        <div className='flex-1 mx-4'>
          <h2 className='font-title text-3xl'>
            We got the best deals, anywhere!
          </h2>
          <p className='my-4 max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            molestias, laboriosam quibusdam velit tempora hic. Exercitationem
            alias architecto culpa voluptate delectus ad accusantium, tempore
            doloremque perspiciatis veniam, nostrum, voluptatem incidunt!
          </p>
        </div>
      </section>
      <section className='flex-1 flex items-center bg-slate-900 text-white py-8 p-4'>
        <div className='flex-1 mx-4'>
          <h2 className='font-title text-3xl text-right'>A thousand uses</h2>
          <p className='my-4 max-w-[600px] text-right float-right'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia earum
            quod odio unde quisquam dignissimos omnis? Et repudiandae quo
            facilis at architecto nulla sequi distinctio.
          </p>
        </div>
        <img src='./assets/about-photo2.jpg' width='350px' className='rounded' />
      </section>
      <div className='flex-1 bg-about-bottom bg-cover bg-[center_bottom_40%]' />
    </main>
  )
}
