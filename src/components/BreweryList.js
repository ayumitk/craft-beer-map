import React from 'react'
import { Public as PublicIcon } from '@material-ui/icons'
import { makeStyles, Typography, Link, Container, Card, CardActions, CardContent, Button } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import Switch from './Switch'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: `64px`,
  },
  summary: {
    marginBottom: theme.spacing(1),
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
  result: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))

const BreweryList = (props) => {
  const classes = useStyles()
  const { data } = props
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography className={classes.result}>{data.length} Breweries</Typography>
      {data.map((brewery) => (
        <Card className={classes.summary} key={brewery.id}>
          <CardContent>
            <Typography variant="body1" noWrap>
              <Link component={RouterLink} to={`/brewery/${brewery.id}`} color="inherit" variant="h5">
                {brewery.name}
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              Aliquip quis dolore laboris ad aliquip occaecat do id pariatur.
            </Typography>
            <Typography variant="body2" noWrap>
              <a href={brewery.url} target="_blank" rel="noopener noreferrer" className={classes.officialSite}>
                <PublicIcon />
                {brewery.url}
              </a>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={RouterLink} to={`/brewery/${brewery.id}`}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
      <Switch currentView="list" />
    </Container>
  )
}

export default BreweryList
