import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {IconButton} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import './Nav.css'
import { FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({

    icon:{
      color:"white"
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, .1),
    }
  }));
export default function Navv() {
    
    const classes = useStyles();
  return (
    <div className="container-fluid">
    <div className="container-fluid">
     <AppBar position="static" color="default" elevation={0} className={classes.appBar} style={{ background: 'transparent',color: 'white'}}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            RAFIN KHAN
          </Typography>
          <nav>
            <Link variant="button" href="#" className={classes.link} style={{ color: 'white'}}>
            <IconButton className={classes.icon}>
            <FaGithub />
</IconButton>
            
            </Link>
            <Link variant="button" href="#" className={classes.link} style={{ color: 'white'}}>
            <IconButton className={classes.icon}>
            <FaLinkedin />
</IconButton>
           
            </Link>
            <Link variant="button" href="#" className={classes.link} style={{ color: 'white'}}>
            <IconButton className={classes.icon}>
            <FaTwitter/>
</IconButton>
           
            </Link>
          </nav>
          
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}
