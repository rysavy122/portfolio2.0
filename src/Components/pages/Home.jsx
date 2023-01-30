import { Box ,Text} from '@chakra-ui/layout'
import { SlArrowDown } from "react-icons/sl";

import React from 'react'

const Home = () => {
  return (
   <Box css={{
    "@media (min-width: 768px)": {
      height: "90vh",
    },
  }}  h={'30vh'} >
    <Text id='hi' mt={'20vh'} w={'100vw'} fontSize="6xl" >Hi, nice to meet you !</Text>
    <SlArrowDown title='more' id='more' />
   </Box>
  )
}

export default Home