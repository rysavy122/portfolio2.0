import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};


const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'black' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'black',      
      },
    })
  }
});

export default theme;
