import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { SlArrowDown, SlEmotsmile, SlEqualizer, SlHeart, SlMagicWand,SlScreenDesktop, SlLike, SlScreenSmartphone, SlScreenTablet, SlSpeedometer, SlSizeFullscreen  } from 'react-icons/sl';
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
          <span className='span'>Welcome to my site ! </span> 
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
          <Text>Thank you for visiting my online Portfolio ! 🙏</Text>
        </Text>

      </Box>
    </Box>
      <Flex mt={-40}>
          <SlSpeedometer/>
          <SlSizeFullscreen />
          <SlScreenDesktop />
          <SlScreenSmartphone />
          <SlScreenTablet />
          <SlHeart />
          <SlEqualizer />
          <SlLike />
          <SlEmotsmile />
          <SlMagicWand />
      </Flex>
  </>
  );
};

export default Home;