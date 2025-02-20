import React, { useEffect } from 'react'
import Caraousel from '../components/Caraousel'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = (props) => {
    useEffect(() => {
        document.title = 'GC 2.0 ' + props.title
    }, [props.title]);

  return (
    <div>
      <Caraousel />
      <br />
      <br />
      <About />
      <br />
      <br />
      <hr />
      <Footer/>
    </div>
  )
}

export default Home
