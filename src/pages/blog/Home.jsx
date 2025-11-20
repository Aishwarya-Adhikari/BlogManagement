import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/layout'
import Card from './components/card/Card'


const Home = () => {
  return (
<>
<Layout>
   <div className='flex flex-wrap justify-center space-x-7 mt-8'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    

   </div>
</Layout>
</>
  )
}

export default Home
