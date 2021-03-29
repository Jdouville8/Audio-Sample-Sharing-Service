import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FileSubmit() {
  const classes = useStyles();

const [file, setFile] = useState('')

const onChange = e => {
    setFile(e.target.files[0])
}

const log = () => {
    console.log(file)
}

const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file');
}

  return (
      
    <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
        <label>Please choose a File</label>
        <br/>
      <TextField
  name="upload-audio"
  type="file"
  onChange={onChange}
/>
<Button variant="contained" color="primary" value='Upload' onClick={log}>
  Submit
</Button>
    </form>
  );
}
