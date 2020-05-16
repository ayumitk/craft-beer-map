import React from 'react'
import { makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: `64px`,
  },
}))

const CreateBrewery = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="md" className={classes.root}>
      <div>Add new brewery</div>
    </Container>
  )
}

export default CreateBrewery
