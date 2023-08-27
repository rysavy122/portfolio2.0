import React from 'react'
import { BsCode } from "react-icons/bs";
import { useColorModeValue } from '@chakra-ui/react';



const CodeIcon = () => {
  const bg = useColorModeValue("black", "white");

  return (

    <div className='icons'>
        <BsCode style={{backgroundColor: bg}}/>
    </div>
  )
}

export default CodeIcon