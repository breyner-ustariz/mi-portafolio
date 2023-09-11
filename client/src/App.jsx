import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/header/Nav';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ParticlesBackground from "./components/ParticlesBackground";
import Social from "./components/Social";
//import Theme from "./pages/Theme";
import { useState } from 'react';

const App = () => {
 const [color, setColor] = useState('text-white');
 const [bgcolor, setBgColor] = useState('bg-white');
 const [borderColor, setBorderColor] = useState('border-white');

 const changeColor = ( textColor, bgColor, borColor ) => {
   setColor(textColor);
   setBgColor(bgColor);
   setBorderColor(borColor);
 }
  
  return (
    <BrowserRouter>
      <ParticlesBackground  colorElegido={changeColor} bgColor={bgcolor}/>
      <Nav color={color} bgcolor={bgcolor} />
      
      <Routes>
        <Route path="/" element={<Home color={color} bgcolor={bgcolor} borderColor={borderColor} />} />
        <Route path="/sobremi" element={<About color={color} bgcolor={bgcolor}/>} />
        <Route path="/portafolio" element={<Portfolio color={color} bgcolor={bgcolor}/>} />
        <Route path="/servicios" element={<Services color={color} bgcolor={bgcolor}/>} />
        <Route path="/contacto" element={<Contact color={color} bgcolor={bgcolor} borderColor={borderColor}/>} />
      </Routes>
      <Social color={color}/>
    </BrowserRouter>    
  )
}

export default App
