import './App.css';
import Hero from './components/hero';
import Projects from './components/projects';
import About from './components/about';
import Upcoming from './components/upcoming';
import Footer from './components/footer';
import CustomCursor from './components/cursor';
import PageLoader from './components/loader';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Atrin Web Dev | Clean, Modern Websites</title>
        <meta
          name="description"
          content="Atrin builds fast, modern websites with SEO in mind. Explore clean web development projects and more."
        />
        <meta
          name="keywords"
          content="web development, SEO, modern websites, atrin, frontend, portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Atrin Web Dev | Portfolio" />
        <meta
          property="og:description"
          content="Explore high-quality web development projects with focus on performance and SEO."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.atrinshahroudi.com/" />
        <meta property="og:image" content="https://www.atrinshahroudi.com/assets/profile.jpg" />
        <link rel="canonical" href="https://www.atrinshahroudi.com/" />
      </Helmet>

      <PageLoader />
      <CustomCursor />
      <Hero />
      <Projects />
      <About />
      <Upcoming />
      <Footer />
    </>
  );
}

export default App;
