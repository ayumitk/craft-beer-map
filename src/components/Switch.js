import React from 'react'
import { makeStyles, Button, ButtonGroup } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing(2),
    position: `fixed`,
    zIndex: 3,
    textAlign: `center`,
  },
  disabled: {
    background: `#55615f`,
    pointerEvents: `none`,
    color: `#859793`,
  },
}))

const Switch = (props) => {
  const classes = useStyles()
  const { currentView } = props

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="primary" aria-label="view switch buttons">
        <Button component={RouterLink} to="/" className={currentView === 'map' && classes.disabled}>
          Map
        </Button>
        <Button component={RouterLink} to="/list" className={currentView === 'list' && classes.disabled}>
          List
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Switch
