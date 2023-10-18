import { Outlet } from 'react-router-dom'
import './App.css'
// import LoginAndRegistration from './components/LoginandRegistration'
// import Banner from './components/banner'
// import Footer from './components/footer'
// import Mainbody from './components/mainbody'
// import Navbar from './components/navbar'
// import Slider from './components/slider'
// import Home from './pages/home'

function App() {
  return (
    <div>
      {/* Apple, Samsung, Sony, Google, Intel */}
     
     <Outlet></Outlet>
    </div>
  )
}

export default App
