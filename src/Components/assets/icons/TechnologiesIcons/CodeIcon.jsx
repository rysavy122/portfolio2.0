import React from 'react'
import { BsCode } from "react-icons/bs";
import { useColorModeValue } from '@chakra-ui/react';

const CodeIcon = () => {
  const color = useColorModeValue("black", "white");

  return (

    <div className='icons'>
        <BsCode title='SourceCode' style={{color: color}}/>
    </div>
  )
}

export default CodeIcon