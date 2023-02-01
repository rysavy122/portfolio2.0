import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { SlArrowDown, SlEmotsmile, SlEqualizer, SlHeart, SlMagicWand,SlScreenDesktop, SlLike, SlScreenSmartphone, SlScreenTablet, SlSpeedometer, SlSizeActual, SlRocket, SlBubbles, SlBulb, SlNote, SlCheck, SlLock  } from 'react-icons/sl';
import { BsCodeSlash, BsPlus, BsCurrencyDollar, BsDash } from 'react-icons/bs';
import { TbEqual, TbHeartHandshake, TbRocket } from 'react-icons/tb';
import {IoIosDesktop, IoIosPhonePortrait, IoIosLaptop,IoIosTabletLandscape,IoIosAdd,IoIosCheckmark} from 'react-icons/io';
import {MdMoreTime, MdOutlineWeb, MdOutlineDesignServices,MdDesktopMac,MdTabletMac,MdPhoneIphone, MdCheck, MdLightbulbOutline, MdOutlineForum, MdOutlineThumbUpAlt,MdOutlineArrowForward, MdInsertEmoticon, MdOutlineHourglassDisabled, MdOutlineHttp, MdOutlineHourglassEmpty, MdOutlineSecurity, MdWarningAmber} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { transform } from 'framer-motion';

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
        transform: `translateY(${isVisible ? '-65vh' : '0'})`,
        transition: 'transform 500ms ease-in-out'
      },
    }}
     >
      <Text id='hi'>
        Hi, nice to meet you !
      </Text>
      <SlArrowDown
      style={{ 
        transform: `rotate(${isVisible ? '180deg' : '0deg'}) translateY(${isVisible ? '-25vh' : '0'})`,
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
        <Text id="intro">
          My Name is <span className="span">Denis Rysavy</span>, I am 27 years old, living in Bremen, Germany 🇩🇪.
          <br/>
          <br />
          <br /> I am a <span className='span'>FullStack WebDeveloper ! 💻 </span> 
          <br />
          <br />
          <br />

          <p>On this Website you can review my work and contact me if you need help with anything Software related.</p>
          <br />
          <br />
          Enjoy exploring ! →
          <Link color={'yellow'} to={'/about'}> About me</Link>
          <br />
          <br />
          <br />
          </Text>
          <Text>Thank you for visiting my online Portfolio ! 🙏</Text>
          <Text className="text-values">My key values</Text>
            <Box className="box-values">
              <Box className="box-values-header">
              <SlSizeActual />
                <h1>Responsive Webdesign</h1>
              </Box>
              <Flex className="responsive">
                <MdDesktopMac />
                <IoIosAdd />
                <MdTabletMac />
                <IoIosAdd />
                <MdPhoneIphone />
                <TbEqual />
                <MdCheck/>
              </Flex>
              <Text p={2} bgColor={'yellow'}>Smartphone, Tablet, Laptop or Desktop ? 100% flexible Screensizes, fits any Device !</Text>
            </Box>
            <Box className="box-values">
              <Box className="box-values-header">
              <SlSpeedometer/>
                <h1>Fast Pageload times</h1>
              </Box>
              <Flex className="responsive">
                <MdOutlineWeb />
                <BsDash />
                <MdOutlineHourglassEmpty/>
                <TbEqual />
                <MdMoreTime />
              </Flex>
              <Text p={2} bgColor={'yellow'}>Lightweight and performant approach to keep the Pageload low. Becaurse time is money . . . </Text>
            </Box>
            <Box className="box-values">
              <Box className="box-values-header">
              <SlLock/>
                <h1>Security</h1>
              </Box>
              <Flex className="responsive">
                <MdOutlineWeb />
                <BsDash />
                <MdOutlineSecurity/>
                <TbEqual />
                <MdWarningAmber />
              </Flex>
              <Text p={2} bgColor={'yellow'}>Internet Security is a huge topic. It is very important to be safe out there.</Text>
            </Box>
            <Box className="box-values">
              <Box className="box-values-header">
              <SlEqualizer />
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
              <Text p={2} bgColor={'yellow'}>Need a special feature or design ? You name it, I make it. Fully customizable to your needs...</Text>
            </Box>
      </Box>
    </Box>
{/*       <Flex id="icon-flexbox" >
        <BsCodeSlash />
          <SlHeart />
          <SlLike />
          <SlMagicWand />
      </Flex> */}
  </>
  );
};

export default Home;