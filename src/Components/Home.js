import React from 'react'
import VideoCard from './VideoCard'
import './../StyleSheets/Home.css'

function Home() {
    return (
        <div className="home">
            <div className='home__section'>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>

            <div className='home__highlights'>
                <div className='home__header'>
                    <span>BREAKING NEWS</span>
                </div>
                <div className='home__section'>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                </div>
            </div>

            <div className='home__section'>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
        </div>
    )
}

export default Home
