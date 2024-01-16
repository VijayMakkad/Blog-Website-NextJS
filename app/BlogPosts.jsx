'use client'

import React, { useEffect, useState } from 'react'
import { supabase } from './supabase.config'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { BiLike, BiShare } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { FaCircleInfo } from 'react-icons/fa6'

export const fetchCache = 'force-no-store'

const BlogPosts = () => {
  const [BlogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [liking, setLiking] = useState(false)

  const Router = useRouter()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      let { data: posts, error } = await supabase.from('posts').select('*')
      console.log(posts)
      if (error) console.log(error)
      else {
        setBlogPosts(posts)
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const handleLikeCounter = async (voteCount, id) => {
    console.log(voteCount, id)
    const newCount = voteCount + 1
    setLiking(true)
    const { data, error } = await supabase
      .from('posts')
      .update({ votes: newCount })
      .eq('id', id)

    if (error) console.log(error)
    else {
      console.log(data)
      const newPosts = BlogPosts.map((post) => {
        if (post.id === id) {
          return { ...post, votes: newCount }
        } else {
          return post
        }
      })
      setBlogPosts(newPosts)
    }
    setLiking(false)
  }

  const handleShare = (url) => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out this post!',
          url: url,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error))
    } else {
      console.log('Share not supported on this browser, copy this link:', url)
    }
  }

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ')
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'
    } else {
      return text
    }
  }

  const handlePostNavigate = (id) => {
    Router.push(`/Explore/${id}`)
  }

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-fit gap-4 h-fit justify-evenly md: mx-6 my-4">
      {loading && <Spinner size="xl" className=" self-center my-6" />}
      {BlogPosts.length === 0 ? (
        <div>No posts</div>
      ) : (
        BlogPosts.map((post) => (
          <Card maxW="lg" key={post.id} className=" p-4 shadow-md shadow-black">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={post.title} src="https://bit.ly/null" />

                  <Box>
                    <Heading size="sm">Author</Heading>
                    {/* <Text>Creator, Chakra UI</Text> */}
                  </Box>
                </Flex>
                <IconButton
                  variant="solid"
                  colorScheme="gray"
                  aria-label="See More"
                  icon={<FaCircleInfo className=" text-gray-600" />}
                  className=" hover:cursor-pointer"
                  onClick={() => handlePostNavigate(post.id)}
                />
              </Flex>
            </CardHeader>
            <Image
              objectFit="cover"
              src={post.banner_url}
              alt={post.title}
              borderRadius={8}
            />
            <CardBody>
              <Heading size="md">{post.title}</Heading>
              <div className="flex flex-row gap-4">
                {post.tags &&
                  post.tags.map((tag) => (
                    <Badge
                      variant="subtle"
                      colorScheme="teal"
                      key={tag}
                      className="mx-4 my-2"
                    >{`#${tag}`}</Badge>
                  ))}
              </div>
              <Text>{truncateText(post.content, 30)}</Text>
            </CardBody>

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Button
                flex="1"
                isLoading={liking}
                disabled={liking}
                variant="ghost"
                leftIcon={<BiLike />}
                onClick={() => handleLikeCounter(post.votes, post.id)}
              >
                {post.votes}
              </Button>
              <Button
                flex="1"
                variant="ghost"
                leftIcon={<BiShare />}
                onClick={() =>
                  handleShare(`http://localhost:3000/Explore/${post.id}`)
                }
              >
                {' '}
                {/*change url on deployment */}
                Share
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}

export default BlogPosts
