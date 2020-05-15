import React from 'react'
import { Search as SearchIcon, Add as AddIcon } from '@material-ui/icons'
import { fade, makeStyles, AppBar, Toolbar, Typography, InputBase, Button, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    zIndex: 3,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& a:hover': {
      textDecoration: `none`,
    },
  },
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
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
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          <Link component={RouterLink} to="/" color="inherit">
            Vancouver Brewery Map
          </Link>
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Searchâ€¦"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Button variant="contained" component={RouterLink} to="/create">
          <AddIcon />
          Add Brewery
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
