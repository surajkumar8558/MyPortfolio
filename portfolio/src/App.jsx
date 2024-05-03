import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';
import Hero  from './sections/Hero';
import About  from './sections/About';
import Skills  from './sections/Skills';
import Projects  from './sections/Projects';
import GetInTouch  from './sections/GetInTouch';
import Footer  from './sections/Footer';
import axios from 'axios';
import ShowMenu from './components/ShowMenu';

function App() {
  // const [jokes, setJokes] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/jokes').
  //   then(response => {
  //     setJokes(response.data)
  //     console.log(response.data);
  //   }).
  //   catch((err) => {
  //     console.log(err);
  //   })
  // }, [])

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

export default App;