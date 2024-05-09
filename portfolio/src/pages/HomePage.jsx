import Nav from '../components/Nav';
import Hero  from '../sections/Hero';
import About  from '../sections/About';
import Skills  from '../sections/Skills';
import Projects  from '../sections/Projects';
import GetInTouch  from '../sections/GetInTouch';
import Footer  from '../sections/Footer';
import axios from 'axios';
import ShowMenu from '../components/ShowMenu';

function HomePage() {

  return (
    <>
    <div className='bg-background'>
      <Nav/>
      <ShowMenu/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <GetInTouch/>
      <Footer/>
      </div>
    </>
  )
}

export default HomePage;