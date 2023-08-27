import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './themes/theme';
import './i18n';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
