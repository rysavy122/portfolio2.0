import React from 'react'
import rysavy from '../../../public/rysavy.jpeg';
import './pages.css';
import { Text , Box} from '@chakra-ui/layout';
import { CircularProgress, CircularProgressLabel, } from '@chakra-ui/react';
import HtmlIcon from '../assets/icons/TechnologiesIcons/HtmlIcon';
import CssIcon from '../assets/icons/TechnologiesIcons/CSSIcon';
import JsIcon from '../assets/icons/TechnologiesIcons/JsIcon';
import ReactIcon from '../assets/icons/TechnologiesIcons/ReactIcon';
import NodeIcon from '../assets/icons/TechnologiesIcons/NodeIcon';
import ExpressIcon from '../assets/icons/TechnologiesIcons/ExpressIcon';
import PostgresqlIcon from '../assets/icons/TechnologiesIcons/PostgresqlIcon';
import GitIcon from '../assets/icons/TechnologiesIcons/GitIcon';


const About = () => {
  return (
    <>
      <Box id='about-page'>
        <Text w={'100vw'} mb={20} mt={20} fontSize="6xl" >Who I am ... </Text>
        <img src={rysavy}></img>
        <Text 
        id='about-text' 
        fontSize="1xl"
      /*  sx={{letterSpacing:'1px'}} */ >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quae nulla autem quo aperiam possimus atque? Itaque eos nobis error in distinctio similique laboriosam maiores nulla dolorem illum! Quo facilis quaerat qui doloribus harum deleniti officia numquam? Sint, numquam necessitatibus a fugit blanditiis ea rem cupiditate laboriosam minima neque dolorum. Praesentium, error ab necessitatibus nulla officia provident voluptates in recusandae, debitis perferendis earum, mollitia voluptatibus autem neque vitae eius ducimus veritatis ipsam omnis molestiae! Expedita corrupti autem beatae dolorem reprehenderit consequatur modi corporis dolor laudantium? Dicta rem nulla, ducimus consectetur magnam, neque alias eum ab libero error saepe qui hic? </Text>
      </Box>

      <Text w={'100vw'} mb={20} mt={20} fontSize="6xl" >My Skillset</Text>
      <Box bg={'white'} > 
        <CircularProgress mr={5} size='120px' value={92} color='yellow.400' thickness='8px' ><CircularProgressLabel><HtmlIcon/> <Text ml={'12%'} fontSize="12px" >HTML 5</Text></CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={96} color='yellow.400' thickness='8px' ><CircularProgressLabel><CssIcon/> <Text ml={'12%'} fontSize="12px" >CSS 3</Text></CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={60} color='yellow.400' thickness='8px' ><CircularProgressLabel><JsIcon/> <Text ml={'12%'} fontSize="12px" >JavaScript</Text></CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={80} color='yellow.400' thickness='8px' ><CircularProgressLabel> <ReactIcon/> <Text ml={'12%'} fontSize="12px" >React</Text> </CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={30} color='yellow.400' thickness='8px' ><CircularProgressLabel> <NodeIcon/> <Text ml={'12%'} fontSize="12px" >Node.js</Text> </CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={55} color='yellow.400' thickness='8px' ><CircularProgressLabel> <ExpressIcon/> <Text ml={'12%'} fontSize="12px" >express.js</Text> </CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={60} color='yellow.400' thickness='8px' ><CircularProgressLabel> <PostgresqlIcon/>  <Text ml={'12%'} fontSize="12px" >Postgresql</Text></CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={86} color='yellow.400' thickness='8px' ><CircularProgressLabel> <GitIcon/>  <Text ml={'12%'} fontSize="12px" >Git</Text></CircularProgressLabel></CircularProgress>
      </Box>
    </>
  )
}

export default About