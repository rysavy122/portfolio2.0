import MainRoutes from './Components/routes/MainRoutes';
import Navbar from './Components/layout/Navbar'
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <MainRoutes />
      <Footer/>
    </div>
  )
}

export default App
