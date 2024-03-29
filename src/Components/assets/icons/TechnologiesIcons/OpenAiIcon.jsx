import React from 'react'
import {SiOpenai} from "react-icons/si";
import { useColorModeValue } from '@chakra-ui/react';



const OpenAiIcon = () => {
  const color = useColorModeValue("black", "white");
  return (

    <div className='icons'>
        <SiOpenai style={{color: color}}/>
    </div>
  )
}

export default OpenAiIcon
