// App.tsx
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './pages/About'
import './App.css'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

function App({companyName}: {companyName: string}) {

  return (
    <>
      <div className="App">
        <Header logoText = {companyName} />
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer company = {companyName} />
      </div>
    </>
  )
}

// More Information from videos:
// https://www.youtube.com/watch?v=WgXU7XAZYmQ
// https://www.youtube.com/watch?v=p5LIqg-oNbs
// https://www.youtube.com/watch?v=bdqSEBSXBPk
// https://www.youtube.com/watch?v=HHTHyz1FBNM

export default App
