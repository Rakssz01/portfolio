import React from "react";
import { makeStyles,withStyles, } from '@material-ui/core/styles';


import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Form.css";
import { noAuto } from "@fortawesome/fontawesome-svg-core";
import Box from '@material-ui/core/Box';
import { green } from "@material-ui/core/colors";
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#1e272e',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#1e272e',
    }
  },
})(TextField);
const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(45deg,  #28313B 30%, #485461 90%)',
    backgroundColor: '#485460',
    border: 0,
    '&:hover': {
      backgroundColor:"#535c68",
      color: '#FFF'
  },
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px #1e272e',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:"auto"
  },
  yonn: {
    // background: 'linear-gradient(45deg,  #28313B 30%, #485461 90%)',
    Color: 'secondary',
    borderColor: 'orange',
    '&$focused$notchedOutline': {
      borderColor: 'orange'
   }
  }
});
const Forms = () => {
  const classes = useStyles();
  return (
    <div className="mt-5 pb-2 color">
        <h2 className="text-center mb-4 siz">Contact me</h2>
      <Grid
        container
        xs={8}
        spacing={3}
        alignItems="center"
        className="mx-auto"
      >
        <Grid item xs={12} sm={6}>
          <CssTextField id="standard-basic" label="Name" color="secondary" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CssTextField id="standard-basic" label="Email" color="secondary" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <CssTextField
          mt={20}
            id="standard-basic"
            label="Message"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        
      </Grid>
      <Box display="flex" justifyContent="center" my={5}>
  <Button className={classes.root}>Send</Button> 
  </Box>

      
    </div>
  );
};

export default Forms;
