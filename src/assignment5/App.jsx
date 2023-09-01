import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectType from './components/ProjectType'
import ImageChanger from './components/ImageChanger'

const App = () => {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <div className='pt-[72rem]'></div>
            <ProjectType />
            <ImageChanger />
        </div>
    )
}

export default App