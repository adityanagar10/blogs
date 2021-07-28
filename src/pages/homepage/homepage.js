import React from 'react'
import './homepage.scss'
import { TitleBar } from '../../components/titlebar/titlebar'

export const HomePage = () => {
    return(
        <>
        <TitleBar />
        <div className="homepageTitle">
        <p>
            <span className="title">Welcome to my blog!</span>
            <button className="learnFromMe"> Learn From Me! </button>
        </p>
        </div>
        </>
    )
}