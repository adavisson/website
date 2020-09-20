import React from 'react';
import { Card, CardContent, Button, Typography, CardActions } from '@material-ui/core'
import { cardStyle } from '../styles/theme'

const ProjectCard = (props) => {

  const classes = cardStyle();
  return (
    <Card className={classes.root} color="primary">
      <CardContent>
        <Typography className={classes.title} color="secondary">
          {props.title}
        </Typography>
        <Typography className={classes.body} color="primary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" href={props.repository} target="_blank">
          Github
        </Button>
        {props.link && (
          <Button variant="contained" color="secondary" href={props.link}>
            Demo
          </Button>
        )}
        {props.blog && (
          <Button variant="contained" color="secondary" href={props.blog} target="_blank">
            Blog Post
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
 
export default ProjectCard;