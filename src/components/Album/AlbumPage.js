import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions    from '@material-ui/core/CardActions';
import CardContent    from '@material-ui/core/CardContent';
import CardMedia      from '@material-ui/core/CardMedia';
import CssBaseline    from '@material-ui/core/CssBaseline';
import Grid           from '@material-ui/core/Grid';
import Toolbar        from '@material-ui/core/Toolbar';
import Typography     from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container      from '@material-ui/core/Container';
import Link           from '@material-ui/core/Link';
import Album          from "./Album";
import ApiService     from "../../services/ApiService";
import { async }      from "q";
import { useState, useEffect } from 'react';

function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Built with '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI.
        </Link>
      </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function AlbumPage() {
  const classes = useStyles();
  let users = ApiService.getUserData();
  users = JSON.parse(users);
  return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Album
              </Typography>
            </Container>
          </div>

          {
            users && users.length && users.map(d => {
              return (
                  <div className="container" style={{
                    overflowY: 'hidden',
                    overflowX: 'scroll !important',
                    height: "auto",
                    width: "100%"
                  }}>
                  <Album data={d}/>
                  </div>
              )
            })
          }
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Copyright />
        </footer>

      </React.Fragment>
  );
}
