import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import My from './My'
import Nav from './nav/Nav'
import About from './cards/About'
import Contact from './cards/Contact'
import Education from './cards/Education'
import Experience from './cards/Experience'
import Skills from './cards/Skills'
import Interests from './cards/Interests'

import './index.css'

const App: React.FC = () => {

    return (
    <>
    <div className='app'>
        <My />
        <Router>
        <Routes>
            <Route path='about' element={ <About /> } />
            <Route path='education' element={ <Education /> } />
            <Route path='experience' element={ <Experience /> } />
            <Route path='skills' element={ <Skills /> } />
            <Route path='interests' element={ <Interests /> } />
            <Route path='contact' element={ <Contact /> } />
        </Routes>

        <Nav />

        </Router>
    </div>
    </>
  )
}

export default App
