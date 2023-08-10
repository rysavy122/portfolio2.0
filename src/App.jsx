import MainRoutes from './Components/routes/MainRoutes';
import Navbar from './Components/layout/Navbar'
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import { useColorModeValue } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";

import './App.css'


function App() {
  const leftBorderColor = useColorModeValue("black", "white");
  const color = useColorModeValue("yellow", "black");
  return (
    <Box borderLeftColor={leftBorderColor} className="App">
      <Navbar/>
      <Header/>
      <MainRoutes />
      <Footer/>
    </Box>
  )
}

export default App
