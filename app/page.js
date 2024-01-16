import Image from 'next/image'
import Navbar from './Navbar'
import BlogPosts from './BlogPosts'
import Authors from './Authors'
import Ellipse from '@/public/Ellipse.svg'
import Imgglry from '@/public/imageglry.svg'
import Whoarewe from '@/public/whoarewe.svg'
import Footer from './Footer'

export default function Home() {
  return (
    <main className="w-screen min-h-screen h-full flex flex-col">
      <section className="w-screen h-[420px] md:h-[500px] lg:h-[720px] overflow-hidden  bg-hero-pattern object-cover bg-center bg-cover bg-no-repeat bg-blend-soft-light">
        <Navbar />
        <div className=" flex flex-col w-full h-full justify-center gap-8">
          <div className="flex flex-col md:flex-row justify-center h-auto items-center">
            <Image src={Ellipse} alt="Ellipse" width={100} height={100} />
            <h1 className=" text-center font-Tilt text-4xl md:text-6xl lg:text-9xl text-white">
              Life is an Adventure
            </h1>
          </div>
          <h3 className=" text-center font-Neon text-2xl md:text-3xl lg:text-4xl text-white ">
            Travel the world
          </h3>
        </div>
      </section>
      <section className=" flex flex-row justify-center items-center my-6 md:my-12 lg:my-24 mx-4">
        <Image
          src={Imgglry}
          alt="Ellipse"
          className=" w-auto h-auto"
          width={100}
          height={100}
        />
      </section>
      <section className=" flex flex-row justify-center items-center my-6 md:my-12 lg:my-24 mx-4">
        <Image
          src={Whoarewe}
          alt="Ellipse"
          className=" w-[700px] md:w-auto md:h-auto"
          width={700}
          height={700}
        />
      </section>
      <section className="flex flex-wrap md:flex-row min-h-screen">
        <BlogPosts />
        {/* <Authors/> */}
      </section>
      <Footer />
    </main>
  )
}
