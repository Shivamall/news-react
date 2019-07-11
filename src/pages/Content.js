import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
 
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    marginBottom: 15,
    maxWidth: '95vw',
  },
  image: {
    width: 300,
 
  },
  
  
  img: {
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'block',
    verticalAlign: 'top'
  },
 
}));

const Article = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={props.item.title} src={props.item.urlToImage} />
              </ButtonBase>
            </Grid>
            <Grid item xs={14} sm container>
              <Grid item xs={8}>
                <Typography className={classes.title}>
                  {props.item.title}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" style={{ textAlign: "right", overflow: "hidden" }}>
                  {props.item.author &&
                    <React.Fragment>Author: {props.item.author}</React.Fragment>
                  }
                </Typography>
              </Grid>
              <Grid item xs={14}>
                <Typography variant="subtitle1">
                  {props.item.content}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      {/* </Grow> */}
    </div>
  )
}

export default Article