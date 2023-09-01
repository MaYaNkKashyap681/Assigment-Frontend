import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectType from './components/ProjectType'
import ImageChanger from './components/ImageChanger'
import Community from './components/Community'
import StoriesSection from './components/StoriesSection'

const App = () => {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <div className='pt-[72rem]'></div>
            <ProjectType />
            <Community />
            <StoriesSection />
            <ImageChanger />
        </div>
    )
}

export default App