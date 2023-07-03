import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-md:p-5">
      <header className="flex min-h-min flex-col flex-shrink-0 justify-center items-center max-w-7xl w-full overflow-visible flex-nowrap gap-16 p-24">
        <div className="flex justify-between w-full text-lg tracking-[2.5em] max-lg:tracking-[1.2em] max-sm:tracking-[0.6em] max-md:text-base max-sm:text-sm leading-relaxed shrink-0 whitespace-pre relative text-current uppercase text-right">
          <h3>late</h3>
          <h3>summer,</h3>
          <h3>2023</h3>
        </div>
        <h1 className='text-[12.5vw] max-sm:text-[16.5vw] uppercase whitespace-pre font-title'>paws quest</h1>
        <div className='max-w-3xl text-lg flex items-center justify-center flex-col'>
          <p className='uppercase text-center max-lg:max-w-2xl'>
            The world of deck building meets feline ferocity! In paws quest, build your deck and command your cat to overcome challenges and ultimately the holy croquinettes! Get ready to strategize, conquer, and satisfy your cat's hunger pangs.
          </p>
          <button className='bg-[#242423] text-[#F5CB5C] text-sm uppercase p-3 mt-6 rounded-lg hover:bg-[#323230] hover:shadow-inner active:bg-[#151515] lg:text-lg'>
            Start Meow-venture
          </button>
        </div>
        <Image 
          src={'/header-white-cat.png'}  
          alt='El tikiton is ready for adventure' 
          width={1000} height={300}
          priority={true}
          className='rounded-3xl'
          />
      </header>
      <section className='bg-[#333533] w-full flex flex-col gap-12 items-center justify-center p-24'>
        <h2 className='font-title text-[#E8EDDF] text-3xl lg:text-5xl text-left w-full'>  
          Epic encounters
        </h2>
        <div>
          <Image 
            src={'/cartoon_angry_pigeon.png'}  
            alt='Angry pigeon in a dark street' 
            width={1000} height={300}
            priority={true}
            className='rounded-3xl h-96 object-cover'
          />
          <div className='grid grid-cols-1 md:grid-cols-3 shrink gap-6 mt-6'>
            <Image 
              src={'/angry_flies.png'}  
              alt='Angry flies' 
              width={300} height={300}
              priority={true}
              className='rounded-3xl h-96 object-cover'
            />
               <Image 
              src={'/feroce_geecko.png'}  
              alt='Feroce geecko standing on a branch' 
              width={300} height={300}
              priority={true}
              className='rounded-3xl h-96 object-cover'
            />
               <Image 
              src={'/cute_mouse.png'}  
              alt='A cute mouse ready to fight' 
              width={300} height={300}
              priority={true}
              className='rounded-3xl h-96 object-cover'
            />

          </div>
        </div>
      </section>
    </main>
  );
}
