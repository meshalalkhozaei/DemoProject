import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Navbar from '../components/Navbar'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
      <div>
          {/* <Navbar/> */}
          <Header />
          <SpecialityMenu />
          <TopDoctors />
          <Banner/>
    </div>
  )
}

export default Home
