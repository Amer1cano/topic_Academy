import { lazy, useEffect } from "react"
// import Foot from "./footer/Foot"
// import Head from "./head/head-section/Head"
// import Navbar from "./head/navbar/Navbar"
// import Contact from "./pages/Contact/Contact"
// import Courses from "./pages/Courses/Courses"
// import Faq from "./pages/FAQ/Faq"
// import Graduate from "./pages/Graduates/Graduate"
// import Grant from "./pages/Grant/Grant"
// import Map from "./pages/Map/Map"
// import Results from "./pages/Results/Results"
// import Secttion1 from "./pages/Section1/Secttion1"
// import Why from "./pages/Why/Why"
const Foot  = lazy(()=>import('./footer/Foot'))
const Head = lazy(()=>import('./head/head-section/Head'))
const Navbar = lazy(()=>import('./head/navbar/Navbar'))
const Contact = lazy(()=>import('./pages/Contact/Contact'))
const Courses = lazy(()=>import('./pages/Courses/Courses'))
const Faq = lazy(()=>import('./pages/FAQ/Faq'))
const Graduate = lazy(()=>import('./pages/Graduates/Graduate'))
const Grant = lazy(()=>import('./pages/Grant/Grant'))
const Map = lazy(()=>import('./pages/Map/Map'))
const Results = lazy(()=>import('./pages/Results/Results'))
const Secttion1 = lazy(()=>import('./pages/Section1/Secttion1'))
const Why = lazy(()=>import('./pages/Why/Why'))
import Aos from "aos"
import 'aos/dist/aos.css'

const App = () => {
  useEffect(()=>{
    Aos.init({
    })
  },[])

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Head/>
      <Secttion1/>
      <Results/>
      <Grant/>
      <Graduate/>
      <Courses/>
      <Why/>
      <Faq/>
      <Contact/>
      <Map/>
      <Foot/>
    </div>
  )
}

export default App