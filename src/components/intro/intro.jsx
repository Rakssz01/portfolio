import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import mypic from '../../assets/img/myimg.jpg'
import './intro.css'
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd } from '@fortawesome/free-solid-svg-icons'
import {IconButton} from '@material-ui/core';
import { FaTwitter,FaLinkedin,FaGithub } from 'react-icons/fa';
const useStyles = makeStyles((theme) => ({

  icon:{
    color:"#bdc3c7"
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
const Intro = () => {
  
  const classes = useStyles();
    return (
        <div className="container mb-5 lol">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div clasNames="profile">
              <div className="avatar mx-auto">
                <img src={mypic} alt="Circle" className="img-raised rounded-circle img-fluid" />
              </div>
              <div className="name text-center">
                <h2 className="rafs">Rafin Khan</h2>
                <p>Web Developer</p>
                <div>
                <IconButton className={classes.icon}><FaGithub /></IconButton>
                <IconButton className={classes.icon}><FaTwitter/></IconButton>
                <IconButton className={classes.icon}><FaLinkedin /></IconButton>
                </div>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-twitter"></i> </a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-8 text-center mx-auto">
          <p>Hi, I'm a MERN stack web developer.I love developing web apps.Always keep myself updated with
             the latest technology and try to give my best </p>
        </div>
        </div>
        </div>
    )
}

export default Intro
