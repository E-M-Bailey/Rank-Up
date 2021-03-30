import React from 'react'
import './Header.css'
import HelpIcon from '@material-ui/icons/Help';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { IconButton, Typography } from '@material-ui/core'

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <TrendingUpIcon className="header-icon" /> 
                <Typography variant="h3">Rate-Up</Typography>
            </div>
            
            <IconButton>
                <HelpIcon />
            </IconButton>
        </div>
    )
}

export default Header
