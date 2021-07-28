import React from 'react'
import './titlebar.scss'

export const TitleBar = () => {
    return(
        <>
        <div className='titlebar'>
        <div>
        <h1>Title Bar Logo</h1>
        </div>
        <div className="searchBar">
            <input placeholder= "Search Through Aditya's Content" />
        </div>
        <div className="navbar">
            <h1>New Posts!</h1>
        </div>
        </div>
        </>
    )
}