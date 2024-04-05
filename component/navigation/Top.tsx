import Image from 'next/image'

const Top = () => {
  return (
    <section className="absolute container mx-auto  px-4 py-4 bg-transparent">
        <div>
            <div className="flex justify-between items-center ">
                <div>
                    <Image
                    width={271}
                    height={56}
                    src={'/assets/images/logo/home/ratehammer_logo.svg'}
                    alt='rate hammer logo'
                    />
                </div>
               
                <div><button className='font-extrabold text-green-600 '>jhhjghv</button></div>
            </div>
        </div>
    </section>
  )
}

export default Top