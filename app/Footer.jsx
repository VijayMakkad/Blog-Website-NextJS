import React from 'react'
import Image from 'next/image'
import { FaMeta, FaTwitter, FaInstagram } from 'react-icons/fa6'
import { Button, Input } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer className=" w-screen h-auto py-12 flex flex-col gap-12 md:flex-row bg-black md:px-12 justify-between items-center">
      <div className=" flex flex-row">
        <Input
          placeholder="Email"
          colorScheme="teal"
          className=" w-1/3 h-12 rounded-md bg-gray-800 text-white"
        />
        <Button className=" w-1/3 h-12 rounded-md bg-gray-800 text-white">
          Subscribe
        </Button>
      </div>
      <div className=" flex flex-col gap-4">
        <h1 className=" font-Neon font-medium text-3xl text-white">
          Contact us
        </h1>
        <div className=" flex flex-row gap-4 items-center">
          <FaMeta className=" text-white text-4xl " />
          <FaTwitter className=" text-white text-2xl" />
          <FaInstagram className=" text-white text-2xl" />
        </div>
        <div className=" text-white text-sm text-center">{`© 2024 Voyage`}</div>
      </div>
    </footer>
  )
}

export default Footer
