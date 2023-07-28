import * as React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react'
import App from './App'
import './index.css'
// /Users/rysavy/Desktop/myPortfolio/Components/routes/Root.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>

)