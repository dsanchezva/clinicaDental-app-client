
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Treatments from './pages/Treatments'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

function App() {
  

  return (
    <section className='layout'>
      <Navbar className='header'/>
      
      
      <div className='main'>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/treatments' element={<Treatments/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/admin' element={<Admin/>}/>


      </Routes>
      </div>
     
      <Footer className='footer'/>
    </section>
  )
}

export default App
