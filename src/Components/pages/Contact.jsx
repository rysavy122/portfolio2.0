import { Box ,Text} from '@chakra-ui/layout'
import {Button, Input, Textarea } from '@chakra-ui/react'
import { SlPaperPlane } from "react-icons/sl";
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Box p={5}>
        <Text mb={20} fontSize="6xl" >Hit me up !</Text>
        <Input mb={3} borderRadius={1} variant='outline' placeholder='Whats youre name ? ' />
        <Input required={true} type={'email'} mb={3} borderRadius={1} variant='outline' placeholder='Whats youre email ?' />

        <Input mb={3} borderRadius={1} variant='outline' placeholder='Whats the matter ? ' />
        <Textarea h={180} mb={1} borderRadius={1} variant='outline' placeholder='Tell me more about it ...' />
          <Button 
          mt={1} 
          w={'100%'}
          borderRadius={1}
          _hover={{
          backgroundColor:'yellow.300'}} 
          bg={'yellow'}  
          type='submit'><SlPaperPlane style={{margin:'1px'}}/>
          </Button>
      </Box>
   </div>
  )
}

export default Contact