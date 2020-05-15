import React from 'react'
import { Button, Container } from '@material-ui/core'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'

const BreweryDetails = (props) => (
  <Container maxWidth="md">
    <Button onClick={() => props.history.goBack()}>
      <ArrowBackIcon />
      Back
    </Button>
    <div>BreweryDetails</div>
  </Container>
)

export default BreweryDetails
