import React from 'react'
import BlogPosts from '../BlogPosts'
import Navbar from '../Navbar'
import Footer from '../Footer'

function page() {
  return (
    <main className=" w-screen h-auto">
      <Navbar />
      <section className="w-screen h-[420px] md:h-[500px] lg:h-[720px] overflow-hidden bg-explore-pattern object-cover bg-center bg-cover bg-no-repeat bg-blend-soft-light"></section>
      <BlogPosts />
      <Footer />
    </main>
  )
}

export default page
