import React from 'react'
import { makeStyles, Button, Container } from '@material-ui/core'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: `64px`,
  },
}))

const BreweryDetails = (props) => {
  const classes = useStyles()
  return (
    <Container maxWidth="md" className={classes.root}>
      <Button onClick={() => props.history.goBack()}>
        <ArrowBackIcon />
        Back
      </Button>
      <div>BreweryDetails</div>
    </Container>
  )
}

export default BreweryDetails
