import './App.css'
import Hero from './components/hero'
import Projects from './components/projects'
import About from './components/about'
import Upcoming from './components/upcoming'
import Footer from './components/footer'
import CustomCursor from './components/cursor'
import PageLoader from './components/loader'

function App() {


  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Upcoming></Upcoming>
      <Footer></Footer>
    </>
  )
}

export default App
