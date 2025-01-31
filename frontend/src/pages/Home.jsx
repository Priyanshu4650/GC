import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Caraousel from '../components/Caraousel'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = (props) => {
    useEffect(() => {
        document.title += ' ' + props.title
    }, [props.title]);

  return (
    <div>
      <Navbar />
      <Caraousel />
      <About />
      <Footer />
    </div>
  )
}

export default Home
