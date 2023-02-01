import React from 'react'
import { Text, Flex, Link  } from '@chakra-ui/layout'
import {Image, Card, Heading,Button, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import CodeIcon from '../assets/icons/technologiesIcons/CodeIcon'





const Projects = () => {
  return (
    <div id='project-page'>
      <Text id="projects-h1" fontSize="6xl" >Projects</Text>
        <SimpleGrid m={5} w={100} bgColor={'white'} spacing={10} templateColumns='repeat(auto-fill, minmax(90vw, 1fr))'>
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
        <CardFooter justifyContent={'space-between'}>
          <a href='https://github.com/' target={'_blank'} >
            <Button>Visit me</Button>
          </a>
          <Link  href='https://github.com/' isExternal>
            <CodeIcon cursor={'pointer'} id="codeicon"/>       
          </Link>         
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
        <CardFooter justifyContent={'space-between'}>
        <a href='https://github.com/' target={'_blank'} >
            <Button>Visit me</Button>
          </a>
          <Link  href='https://github.com/' isExternal>
            <CodeIcon cursor={'pointer'} id="codeicon"/>       
          </Link>         
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
        <CardFooter justifyContent={'space-between'}>
        <a href='https://github.com/' target={'_blank'} >
            <Button>Visit me</Button>
          </a>
          <Link  href='https://github.com/' isExternal>
            <CodeIcon cursor={'pointer'} id="codeicon"/>       
          </Link>         
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
        <CardFooter justifyContent={'space-between'}>
        <a href='https://github.com/' target={'_blank'} >
            <Button>Visit me</Button>
          </a>
          <Link href='https://github.com/' isExternal>
            <CodeIcon cursor={'pointer'} id="codeicon"/>       
          </Link>         
        </CardFooter>
      </Card>
    </SimpleGrid>
    </div>
  )
}

export default Projects