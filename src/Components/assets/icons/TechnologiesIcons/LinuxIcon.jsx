import React from 'react'
import { SiLinux } from "react-icons/si";
import { useColorModeValue } from '@chakra-ui/react';


const AngularIcon = () => {
  const color = useColorModeValue("black", "white");
  return (

    <div className='icons'>
        <SiLinux style={{color: color}}/>
    </div>
  )
}

export default AngularIcon
