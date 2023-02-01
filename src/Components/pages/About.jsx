import React from 'react'
import rysavy from '../../../public/rysavy.jpeg';
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
import MongoDbIcon from '../assets/icons/TechnologiesIcons/MongoDbIcon';
import VisualStudioIcon from '../assets/icons/TechnologiesIcons/VisualStudioIcon';

import { 
  SlEye,
  SlHeart, 
  SlBubbles, 
  } from 'react-icons/sl';
import { 
  BsBraces, 
} from 'react-icons/bs';


import './pages.css';




const About = () => {
  return (
    <>
      <Box id='about-page'>
        <Text id='about-h1' fontSize="6xl" >Who I am ... </Text>
        <img src={rysavy}></img>
        <Text 
        id='about-text' 
        fontSize="1xl"
      /*  sx={{letterSpacing:'1px'}} */ >... I am <span>Denis Rysavy</span>.<br />A 27 years old <span>full-stack developer</span> living in Bremen, Germany. I love music, art in general, cats, science, technology, math, coding and much more. As a full-stack <span>software developer</span> I am capable of covering the full range of technology between <span>frontend and backend development</span>. I have a big passion for UI and UX principles and love clean and user friendly layouts. But I am also capable of managing server-side operations, for example setting up and running different kinds of servers, creating and connecting to different kinds of databases to handle a variety of tasks from password protected login and signup functionality to shopping systems or user dashboards where the user can create data, read data, update data or delete data (CRUD). And much more !
      <br />
      <br />
      As a Programmer I am a problem solver, tell me whats the issue and with my <span>5 years of Experience</span> I am sure I will find a solution !
      </Text>
      
      </Box>
      <Text className="text-values3">My Qualities</Text>
          <Box className='box-values'>
          <Box className="box-values-header">
            <SlHeart />
              <h1>Made with love</h1>
          </Box>
          <Box className="box-values-header">
            <BsBraces/>
              <h1>Passion for coding</h1>
          </Box>
          <Box className="box-values-header">
            <SlBubbles/>
              <h1>Open for Dialogues</h1>
          </Box>
          <Box className="box-values-header">
            <SlEye />
              <h1>Eye for the Detail</h1>
            </Box>
          </Box>  

      <Text w={'100vw'} mb={20} mt={20} fontSize="6xl" >My Skillset</Text>
      <Box  className="tech-stack-container" bg={'white'} > 
      <Text  w={'100vw'} mb={10} mt={20} fontSize="4xl" >Frontend TechStack</Text>
        <CircularProgress className='tech-stack' mr={5} size='120px' value={92} color='yellow.400' thickness='8px' ><CircularProgressLabel><HtmlIcon/> <Text ml={'12%'} fontSize="12px" >HTML 5</Text></CircularProgressLabel></CircularProgress>
        <CircularProgress className='tech-stack' mr={5} size='120px' value={96} color='yellow.400' thickness='8px' ><CircularProgressLabel><CssIcon/> <Text ml={'12%'} fontSize="12px" >CSS 3</Text></CircularProgressLabel></CircularProgress>
        <CircularProgress className='tech-stack' mr={5} size='120px' value={60} color='yellow.400' thickness='8px' ><CircularProgressLabel><JsIcon/> <Text ml={'12%'} fontSize="12px" >JavaScript</Text></CircularProgressLabel></CircularProgress>
        <CircularProgress className='tech-stack' mr={5} size='120px' value={80} color='yellow.400' thickness='8px' ><CircularProgressLabel> <ReactIcon/> <Text ml={'12%'} fontSize="12px" >React</Text> </CircularProgressLabel></CircularProgress>
      <Text w={'100vw'} mb={10} mt={20} fontSize="4xl" >Backend TechStack</Text>
        <CircularProgress mr={5} size='120px' value={30} color='yellow.400' thickness='8px' ><CircularProgressLabel> <NodeIcon/> <Text ml={'12%'} fontSize="12px" >Node.js</Text> </CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={55} color='yellow.400' thickness='8px' ><CircularProgressLabel> <ExpressIcon/> <Text ml={'12%'} fontSize="12px" >express.js</Text> </CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={60} color='yellow.400' thickness='8px' ><CircularProgressLabel> <PostgresqlIcon/>  <Text ml={'12%'} fontSize="12px" >Postgresql</Text></CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={36} color='yellow.400' thickness='8px' ><CircularProgressLabel> <MongoDbIcon/>  <Text ml={'12%'} fontSize="12px" >MongoDB</Text></CircularProgressLabel></CircularProgress>
      <Text w={'100vw'} mb={10} mt={20} fontSize="4xl" >Version Control and Code Editor</Text>

        <CircularProgress mr={5} size='120px' value={86} color='yellow.400' thickness='8px' ><CircularProgressLabel> <GitIcon/>  <Text ml={'12%'} fontSize="12px" >Git</Text></CircularProgressLabel></CircularProgress>
        <CircularProgress mr={5} size='120px' value={90} color='yellow.400' thickness='8px' ><CircularProgressLabel> <VisualStudioIcon/>  <Text ml={'12%'} fontSize="12px" >VS Code</Text></CircularProgressLabel></CircularProgress>
      </Box>
    </>
  )
}

export default About