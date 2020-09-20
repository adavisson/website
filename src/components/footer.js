import React from 'react'
import { Divider, Link, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import { bottomBarStyle } from '../styles/theme'

const Footer = () => {
  const classes = bottomBarStyle()

  return (
    <div>
      <div className="phantom" />
      <div className="footer">
        <Link
          className={classes.link}
          color="secondary"
          href="https://github.com/adavisson"
          target="_blank"
        >
          <GitHubIcon className={classes.icon} />
          <Typography className={classes.text}>Github</Typography>
        </Link>
        <Divider className={classes.divider} orientation="vertical" />
        <Link
          className={classes.link}
          color="secondary"
          href="https://www.linkedin.com/in/andrew-davisson"
          target="_blank"
        >
          <LinkedInIcon className={classes.icon} />
          <Typography className={classes.text}>LinkedIn</Typography>
        </Link>
        <Divider className={classes.divider} orientation="vertical" />
        <Link
          className={classes.link}
          color="secondary"
          href="https://www.builtincolorado.com/member/akdavisson4/176086"
          target="_blank"
        >
          <LocationCityIcon className={classes.icon} />
          <Typography className={classes.text}>Built In Colorado</Typography>
        </Link>
      </div>
    </div>
  )
}

export default Footer
