import React from 'react'
// import { Link } from 'react-router-dom'

import './Header.css'

import GitHubIcon from '@material-ui/icons/GitHub';

function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <h3>HandReacting</h3>
            </div>
            <div className="headerRight">
                <a href='https://reactrouter.com/web/api/Link' target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </div>
        </div>
    )
}

export default Header
