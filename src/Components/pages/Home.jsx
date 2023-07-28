import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

import {

  MdMoreTime, 
  MdOutlineWeb, 
  MdOutlineDesignServices,
  MdOutlineDesktopMac,
  MdTabletMac,
  MdPhoneIphone, 
  MdCheck, 
  MdLightbulbOutline, 
  MdOutlineForum,
  MdOutlineArrowForward, 
  MdInsertEmoticon, 
  MdOutlineSecurity, 
  MdWarningAmber, 
  MdOutlineAttachMoney 

} from 'react-icons/md';

import { 

  SlArrowDown, 
  SlEqualizer, 
  SlSpeedometer, 
  SlSizeActual, 
  SlLock  

} from 'react-icons/sl';

import { BsDash } from 'react-icons/bs';
import { TbEqual } from 'react-icons/tb';
import { IoIosAdd } from 'react-icons/io';



const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  function handleClick() {
    setIsVisible(!isVisible);
  }
  
  return (
    <> 
    <Box
    id="container-home"
     css={{
      "@media (min-width: 768px)": {
        height: '100vh',
        transform: `translateY(${isVisible ? '-65vh' : '0'})`,
        transition: 'transform 500ms ease-in-out'
      },
      "@media (max-width: 568px)": {
        height: '100vh',
        height: isVisible ? "300vh" : "370vh",
        transform: `translateY(${isVisible ? '-60vh' : '0'})`,
        transition: 'transform 500ms ease-in-out'
      },
    }}
     > <Link to={'/contact'}>
      <Text pb={4} id='hi'>Hi, nice to meet you !</Text>
      </Link>
      <SlArrowDown
      style={{ 
        transform: `rotate(${isVisible ? '180deg' : '0deg'}) translateY(${isVisible ? '-28vh' : '0'})`,
      }}
      onClick={handleClick} 
      title='click me' 
      id='more' />
      <Box id="spacer"/>
      <Box 
        id="box-hidden"
        style={{ 
          transform: `opacity(${isVisible ? '1' : '0'})`,
          transition: 'transform 500ms ease-in-out',
          display: isVisible ? "block" : "none" 
        }}>
        <Box id="intro">
          <Box mb={16} bg={'white'}>
            <Text>My Name is <Link to="/about"><span id='denis-rysavy' className="span">Denis Rysavy</span></Link>,</Text>
            <Text pb={6} >I am a <span className='span'>full stack developer... </span> 💻 </Text>
          </Box>
          <Box mb={16} bg={'white'} >
          <Text pt={0} bg={'white'}><Link to="/"><span id="home" >Welcome </span></Link>to my portfolio website ! <br/>✌️</Text>
            <Text>On this Website you can <Link id='about-link' color={'yellow'} to={'/projects'}><span id='projects' >review my work</span></Link> and <Link id='about-link' color={'yellow'} to={'/contact'}><span>contact me</span></Link> if you need help with anything Software related.</Text>
          </Box>
          <Text mb={31} p={3} bg={'white'} >Find out more <Link to={'/about'}><span id="about-me" >About me</span>.</Link></Text>
          <Text mt={20} mb={'20vh'} p={2} bg={'white'}><span id="thank-you">Thank you </span>for visiting my portfolio website ! <br/>🙏</Text>
          </Box>
          <Text className="text-values2">My key values</Text>
          <Box className='box-values'>
          <Box className="box-values2-header">
          <h1>Responsiveness</h1>
            <SlSizeActual />
              <p>Mobile, tablet, or desktop ? Doesnt matter, the Design will adjust to all Screensizes.</p>
          </Box>
          <Box className="box-values2-header">
          <h1>Pageload</h1>
            <SlSpeedometer/>
              <p>Low pageload not only makes the page faster, it is also good for SEO. Time is money ...</p>
          </Box>
          <Box className="box-values2-header">
          <h1>Security</h1>
            <SlLock/>
            <p>Keeping your data protected. It is very important to be safe out there.</p>
          </Box>
          <Box className="box-values2-header">
          <h1>Customazibility</h1>
            <SlEqualizer />
          <p>Everything is 100% handmade, customizable based on youre needs ...</p>
            </Box>
          </Box>         
      </Box>
      <Box
          style={{ 
          transform: `opacity(${isVisible ? '1' : '0'})`,
          transition: 'transform 500ms ease-in-out',
          display: isVisible ? "none" : "block"
        }}>
          <Text className="text-values">My key values</Text>
            <Box className="box-values">
              <Box className="box-values-header">
                <Box className='value-icon-container'>
                  <SlSizeActual/>
                </Box>
                <h1>Responsive Webdesign</h1>
              </Box>
              <Flex className="responsive">
                <MdOutlineDesktopMac />
                <IoIosAdd />
                <MdTabletMac />
                <IoIosAdd />
                <MdPhoneIphone />
                <TbEqual />
                <MdCheck/>
              </Flex>
              <Text borderBottom={'1px'} p={2} bgColor={'#fff942'}>Smartphone, Tablet, Laptop or Desktop ? 100% flexible Screensizes, fits any Device !</Text>
            </Box>
            <Box className="box-values">
              <Box className="box-values-header">
                <Box className='value-icon-container'>
                  <SlSpeedometer/>
                </Box>
                <h1>Fast pageload times</h1>
              </Box>
              <Flex className="responsive">
                <MdOutlineWeb />
                <IoIosAdd />
                <MdMoreTime/>
                <TbEqual />
                < MdOutlineAttachMoney/>
              </Flex>
              <Text borderBottom='1px' p={2} bgColor={'#fff942'}>Keeping the pageload times low has many advantages. Remember, time is money... </Text>
            </Box>
            <Box className="box-values">
              <Box className="box-values-header">
                <Box className='value-icon-container'>
                  <SlLock/>
                </Box >
                <h1>Security</h1>
              </Box>
              <Flex className="responsive">
                <MdOutlineWeb />
                <BsDash />
                <MdOutlineSecurity/>
                <TbEqual />
                <MdWarningAmber />
              </Flex>
              <Text borderBottom={'1px'} p={2} bgColor={'#fff942'}>Internet Security is a huge topic. It is very important to be safe out there.</Text>
            </Box>
            <Box className="box-values">
              <Box className="box-values-header">
                <Box className='value-icon-container'>
                  <SlEqualizer/>
                </Box>
                <h1>100% Customizable</h1>
              </Box>
              <Flex className="responsive">
                <MdLightbulbOutline />
                <MdOutlineArrowForward />
                <MdOutlineForum/>
                <MdOutlineArrowForward />
                <MdOutlineDesignServices />
                <TbEqual />
                <MdInsertEmoticon />
              </Flex>
              <Text borderBottom={'1px'} p={2} bgColor={'#fff942'}>Need a special feature or design ? You name it, I make it. Fully customizable to your needs...</Text>
            </Box>
      </Box>
    </Box>
  </>
  );
};

export default Home;