// import { useState } from 'react'
import './App.css'
import { Hero, Demo, Navbar, Analyze, Footer, Gamification, Create, CTA, Secure, Purpose, Asistance } from '@/components';

// import styles, { layout } from "./style";

const App = () => (

  <div className='bg-primary overflow-hidden flex flex-col items-center'>
    <div className='w-full'>
        <Navbar />
    </div>
    <div className={`bg-primary w-full`}>
      <div className={`w-full`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary  flex flex-col w-4/5`}>
        <Demo />
        <Purpose />
        <Gamification />
        <Create />
        <Asistance />
        <Analyze />
        <Secure />
        <CTA />
    </div>
    <div className={` bg-[#162044] w-full`}>
      <div className={``}>
      <Footer />
      </div>
    </div>

  </div>
  ) 

export default App