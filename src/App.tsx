import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import './App.css'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

function App({companyName}: {companyName: string}) {

  return (
  <div className="App">
    <Navbar logoText = {companyName} />
    <div className="Routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer company = {companyName} />
  </div>
  )
}

export default App
