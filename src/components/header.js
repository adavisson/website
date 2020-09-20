import React, { useState, useEffect } from 'react'
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import { usePosition } from 'use-position'
import clsx from 'clsx'
import {
  AppBar,
  Collapse,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import AppsIcon from '@material-ui/icons/Apps'
import MenuIcon from '@material-ui/icons/Menu'
import DescriptionIcon from '@material-ui/icons/Description'
import BookIcon from '@material-ui/icons/Book'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { navStyle } from '../styles/theme'

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const [listOpen, setListOpen] = useState(false)
  const [iconCode, setIconCode] = useState('')
  const [city, setCity] = useState('')
  const [cityId, setCityId] = useState('5419384')
  const [temp, setTemp] = useState('')
  const appId = '440287f1b78a560637a7abe6f38d3739'
  const { latitude, longitude, error } = usePosition()

  useEffect(() => {
    const setData = async () => {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          latitude || 39.74
        }&lon=${longitude || -104.99}&units=imperial&appid=${appId}`
      )
      const data = await result.json()
      setCity(data.name)
      setTemp(data.main.temp)
      setIconCode(data.weather[0].icon)
      setCityId(data.id)
    }
    setData()
  }, [latitude, longitude])

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleSocialClick = () => {
    setListOpen(!listOpen)
  }

  const materialNav = () => {
    const classes = navStyle()

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Link
              color="secondary"
              className={classes.weather}
              href={`https://openweathermap.org/city/${cityId}`}
              target="_blank"
            >
              <Typography style={{ alignSelf: 'center' }} variant="h6" nowrap>
                {`${city} ${parseInt(temp)}\xB0F `}
              </Typography>
              <img
                alt="weather icon"
                src={`https://openweathermap.org/img/wn/${iconCode}.png`}
              />
            </Link>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography variant="h6">
              Andrew Davisson
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon color="primary" />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              key="Home"
              onClick={() => {
                navigate('/')
                setOpen(false)
              }}
            >
              <HomeIcon style={{ paddingRight: '5px' }} />
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              key="Projects"
              onClick={() => {
                navigate('/projects')
                setOpen(false)
              }}
            >
              <AppsIcon style={{ paddingRight: '5px' }} />
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem
              button
              key="Resume"
              onClick={() => {
                navigate('/resume')
                setOpen(false)
              }}
            >
              <DescriptionIcon style={{ paddingRight: '5px' }} />
              <ListItemText primary="Resume" />
            </ListItem>
            <Link
              className={classes.link}
              color="secondary"
              href="https://adavisson.github.io/"
            >
              <ListItem button key="Blog">
                <BookIcon style={{ paddingRight: '5px' }} />
                <ListItemText primary="Blog" />
              </ListItem>
            </Link>
            <Divider className={classes.divider} />
            <ListItem className={classes.button} button onClick={handleSocialClick}>
              <ListItemText primary="Social" />
              {listOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={listOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link
                  className={classes.link}
                  color="secondary"
                  href="https://www.linkedin.com/in/andrew-davisson/"
                  target="_blank"
                >
                  <ListItem button className={classes.nested} key="LinkedIn">
                    <LinkedInIcon style={{ paddingRight: '5px' }} />
                    <ListItemText primary="LinkedIn" />
                  </ListItem>
                </Link>
                <Link
                  className={classes.link}
                  color="secondary"
                  href="https://github.com/adavisson"
                  target="_blank"
                >
                  <ListItem button className={classes.nested} key="Github">
                    <GitHubIcon style={{ paddingRight: '5px' }} />
                    <ListItemText primary="Github" />
                  </ListItem>
                </Link>
                <Link
                  className={classes.link}
                  color="secondary"
                  href="https://www.builtincolorado.com/member/akdavisson4/176086"
                  target="_blank"
                >
                  <ListItem
                    button
                    className={classes.nested}
                    key="Built In Colorado"
                  >
                    <LocationCityIcon style={{ paddingRight: '5px' }} />
                    <ListItemText primary="Built In Colorado" />
                  </ListItem>
                </Link>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </div>
    )
  }

  return (
    <React.Fragment>
      {materialNav()}
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
