import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import My from './My'
import Nav from './nav/Nav'
import Page from './Page'

import './index.css'

const App: React.FC = () => {

    return (
    <>
    <div className='app'>
        <Router>
        <div className="sidebar">
            <My />
            <Nav />
        </div>
        <div className="cards-section">
            <Routes>
                <Route path="/*" element={<Page />} />
            </Routes>
        </div>
        </Router>
    </div>
    </>
  )
}

export default App
