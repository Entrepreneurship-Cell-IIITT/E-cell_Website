import React from 'react'
import './SocialMedia.css'

import { IconButton, colors, withTheme } from '@mui/material';
import InstagramTcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function SocialMedia() {

  const white = {
    color: 'grey'
  }

  return (
    <div className='social-media'>
      <div className='MuiIconButton-root' >
        <IconButton component="a" href="YOUR_TWITTER_LINK" target="_blank">
          <MailOutlineIcon style={white} />
        </IconButton>

        <IconButton component="a" href="YOUR_GITHUB_LINK" target="_blank">
          <InstagramTcon style={white} />
        </IconButton>

        <IconButton component="a" href="YOUR_TWITTER_LINK" target="_blank">
          <TwitterIcon style={white} />
        </IconButton>

        <IconButton component="a" href="YOUR_LINKEDIN_LINK" target="_blank">
          <LinkedInIcon style={white} />
        </IconButton>

        <IconButton component="a" href="YOUR_FACEBOOK_LINK" target="_blank">
          <FacebookIcon style={white} />
        </IconButton>
      </div>
    </div>
  )
}

export default SocialMedia
