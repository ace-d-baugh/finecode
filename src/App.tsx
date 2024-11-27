import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

function App({companyName}: {companyName: string}) {

  return (
  <>
    <Navbar logoText = {companyName} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    <Footer company = {companyName} />
  </>
  )
}

export default App
