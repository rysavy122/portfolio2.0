import React from 'react'
import { Text,  } from '@chakra-ui/layout'
import {Image, Card, Heading,Button, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import GithubIcon from '../assets/icons/SocialMedialicons/GithubIcon'



const Projects = () => {
  return (
    <>
      <Text fontSize="6xl" >Projects</Text>
        <SimpleGrid bgColor={'white'} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card>
        <CardHeader>
          <Heading size='md'> First Project</Heading>
        </CardHeader>
        <CardBody>
          <Text>Here will be a short description of the Project...</Text>
        </CardBody>
        <Image
        objectFit='cover'
        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Chakra UI'
      />
        <CardFooter>
          <Button>See live</Button>
          <GithubIcon/>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'> Second Project</Heading>
        </CardHeader>
        <CardBody>
        <Text>Here will be a short description of the Project...</Text>
        </CardBody>
        <Image
        objectFit='cover'
        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Chakra UI'
      />
        <CardFooter>
          <Button>See live</Button>
          <GithubIcon/>

        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'> Third Project</Heading>
        </CardHeader>
        <CardBody>
        <Text>Here will be a short description of the Project...</Text>
        </CardBody>
        <Image
        objectFit='cover'
        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Chakra UI'
      />
        <CardFooter>
          <Button>See live</Button>
          <GithubIcon/>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'> Third Project</Heading>
        </CardHeader>
        <CardBody>
        <Text>Here will be a short description of the Project...</Text>
        </CardBody>
        <Image
        objectFit='cover'
        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Chakra UI'
      />
        <CardFooter>
          <Button>See live</Button>
          <GithubIcon/>
        </CardFooter>
      </Card>
    </SimpleGrid>
    </>
  )
}

export default Projects