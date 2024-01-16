'use client'
import Link from 'next/link'
import React from 'react'

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import Voyage from '@/public/voyage.svg'
import Image from 'next/image'
import { BiPlusCircle } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const isDrawerSidebar = useBreakpointValue({ base: true, md: false })

  return (
    <>
      <Box display={{ lg: 'flex' }} flexBasis={{ lg: 'auto' }}>
        {isDrawerSidebar ? (
          <>
            <Button colorScheme="teal" variant="solid" onClick={onOpen}>
              <GiHamburgerMenu />
            </Button>
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <Image src={Voyage} alt="logo" width={127} height={35} />
                  </DrawerHeader>
                  <DrawerBody className=" font-neon flex flex-col bg-gray-800 text-white items-center gap-12 text-lg font-normal py-12">
                    <Link href="/">Home</Link>
                    <Link href="/Explore">Explore</Link>
                    <Link href="/Post">Create Post</Link>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        ) : (
          <nav className="flex flex-row justify-between w-screen bg-white shadow-lg shadow-gray-500 px-24 py-4 font-Neon text-lg items-center">
            <Link href="/">
              <Image src={Voyage} alt="logo" width={127} height={35} />
            </Link>
            <div className=" flex flex-row gap-8">
              <Link href="/Explore" className="flex items-center gap-1">
                Explore
              </Link>
              <Link href="/Post" className="flex items-center gap-1 ">
                <BiPlusCircle />
                Create Post
              </Link>
            </div>
          </nav>
        )}
      </Box>
    </>
  )
}

export default Navbar
