import React, { useState } from 'react'
import { Search as SearchIcon, Add as AddIcon } from '@material-ui/icons'
import {
  fade,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  Link,
  Paper,
  MenuItem,
  IconButton,
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux'
import { inputAddress } from '../store/actions/inputAction'
import beer from '../beer.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    zIndex: 3,
    position: `fixed`,
    top: 0,
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  title: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
    '& a': {
      display: `flex`,
    },
    '& span': {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    '& a:hover': {
      textDecoration: `none`,
    },
  },
  logo: {
    width: `1.5rem`,
    verticalAlign: `sub`,
    marginRight: theme.spacing(0.5),
  },
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width: `100%`,
    color: 'inherit',
  },
  inputInput: {
    width: `100%`,
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
  },
  autocompleteDropdownContainer: {
    position: `absolute`,
    zIndex: 99999,
    top: `40px`,
    left: 0,
    width: `100%`,
  },
  createBtnLg: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2),
      display: 'block',
    },
  },
  createBtnSm: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}))

const Header = ({ latLng, inputAddress }) => {
  const classes = useStyles()

  const [address, setAddress] = useState('')

  const handleChange = (address) => {
    setAddress(address)
  }

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((newLatLng) => inputAddress(newLatLng))
      .catch((error) => console.error('Error', error))
  }

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link component={RouterLink} to="/" color="inherit">
              <img src={beer} alt="beer" className={classes.logo} />
              <span>Vancouver Brewery Map</span>
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <PlacesAutocomplete
              value={address}
              onChange={(address) => handleChange(address)}
              onSelect={(address) => handleSelect(address)}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <>
                  <InputBase
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                    })}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                  <Paper className={classes.autocompleteDropdownContainer}>
                    {loading && <MenuItem>Loading...</MenuItem>}
                    {suggestions.map((suggestion) => {
                      const style = suggestion.active ? { background: `rgba(255,255,255,0.08)` } : {}
                      return (
                        <MenuItem {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</MenuItem>
                      )
                    })}
                  </Paper>
                </>
              )}
            </PlacesAutocomplete>
          </div>
          <Button variant="contained" component={RouterLink} to="/create" className={classes.createBtnLg}>
            <AddIcon style={{ verticalAlign: `top` }} />
            Add Brewery
          </Button>
          <IconButton aria-label="Add Brewery" component={RouterLink} to="/create" className={classes.createBtnSm}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

const mapStateToProps = ({ latLng }) => ({ latLng })

const mapDispatchToProps = (dispatch) => ({
  inputAddress(latLng) {
    dispatch(inputAddress(latLng))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
