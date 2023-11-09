import './App.css'
import Sidebar from './Sidebar'
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
function App() {

  return (
    <div className='flex flex-row h-full'>
      <div className='w-[20%]'>
      <Sidebar />
      </div>
    
    <div className='w-full p-4'>
    <Routes>
   <Route path="/home" element={<Home />} />
   <Route path="/projects" element={<Projects />} />
   <Route path="/experiences" element={<Experiences />} />
   {/* <Route path="/tech-stack" element={<TechStack />} /> */}
   <Route path="/aboutme" element={<AboutMe />} />
</Routes>

      {/* <RightCard /> */}

    </div>

    </div>
  )
}

export default App
