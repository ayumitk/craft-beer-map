import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { Room as RoomIcon, Close as CloseIcon, Public as PublicIcon } from '@material-ui/icons'
import { makeStyles, Paper, Typography, IconButton, Link, CircularProgress } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { usePosition } from 'use-position'
import createMapOptions from '../styles/map'
import Switch from './Switch'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: `100%`,
    height: `calc(100vh - 64px)`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  popover: {
    width: `250px`,
    padding: theme.spacing(2),
    position: `absolute`,
    left: `-110px`,
    top: `-85px`,
    zIndex: 2,
  },
  marker: {
    background: `none`,
    cursor: `pointer`,
    border: 0,
    zIndex: 1,
    '& svg': {
      color: theme.palette.error.main,
      width: `1.5rem`,
      height: `1.5rem`,
      transition: `all .1s ease-out`,
    },
    '&:hover': {
      '& svg': {
        transform: `scale(1.5)`,
      },
    },
    '&:focus': {
      outline: 0,
    },
  },
  close: {
    position: `absolute`,
    right: 0,
    top: 0,
  },
  officialSite: {
    color: theme.palette.primary.light,
    textDecoration: `none`,
    '&:hover': {
      textDecoration: `underline`,
    },
    '& svg': {
      width: `1rem`,
      height: `1rem`,
      verticalAlign: `middle`,
      marginRight: theme.spacing(0.5),
    },
  },
}))

const BreweryMap = (props) => {
  const classes = useStyles()
  const { data } = props
  const [currentId, setCurrentId] = useState(null)

  const [userLat, setUserLat] = useState(null)
  const [userLng, setUserLng] = useState(null)
  const { latitude, longitude, error } = usePosition()

  useEffect(() => {
    if (latitude && longitude) {
      setUserLat(latitude)
      setUserLng(longitude)
    } else if (error) {
      setUserLat(49.2754041)
      setUserLng(-123.1248643)
    }
  }, [latitude, longitude, error])

  const changeBalloon = (id) => {
    const targetId = Number(id)
    if (currentId === targetId) {
      setCurrentId(null)
    } else {
      setCurrentId(targetId)
    }
  }

  const handleClose = () => {
    setCurrentId(null)
  }

  const Marker = ({ name, id, url }) => (
    <>
      <button type="button" id={`brewery-${id}`} className={classes.marker}>
        <RoomIcon />
      </button>
      {id === currentId && (
        <Paper className={classes.popover} elevation={3}>
          <IconButton aria-label="close" onClick={handleClose} className={classes.close}>
            <CloseIcon />
          </IconButton>
          <Typography variant="body1" noWrap>
            <Link component={RouterLink} to={`/brewery/${id}`} color="inherit">
              {name}
            </Link>
          </Typography>
          <Typography variant="caption" noWrap>
            <a href={url} target="_blank" rel="noopener noreferrer" className={classes.officialSite}>
              <PublicIcon />
              {url}
            </a>
          </Typography>
        </Paper>
      )}
    </>
  )

  const beerLocations = data.map((beer) => (
    <Marker lat={beer.lat} lng={beer.lng} key={beer.id} id={beer.id} name={beer.name} url={beer.url} />
  ))

  return (
    <>
      <div className={classes.root}>
        {userLat && userLng ? (
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            defaultCenter={{
              lat: userLat,
              lng: userLng,
            }}
            defaultZoom={14}
            options={createMapOptions}
            onChildClick={(key) => changeBalloon(key)}
          >
            {beerLocations}
          </GoogleMapReact>
        ) : (
          <CircularProgress />
        )}
      </div>
      <Switch currentView="map" />
    </>
  )
}

export default BreweryMap
