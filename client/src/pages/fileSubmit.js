import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Fab } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { Box } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import PublishIcon from "@material-ui/icons/Publish";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "auto",
  },
  button: {
    color: "#5e235b",
    position: "relative",
    marginTop: "2%",
    margin: "auto",
    left: "46%",
  },
  label: {
    fontSize: "22px",
  },
  dropzone: {
    backgroundColor: `rgba(0,0,0,0.7)`,
    color: "pink",
    maxHeight: "50%",
    maxWidth: "60%",
    margin: "auto",
  },
  form: {
    height: "50%",
    width: "60%",
    margin: "auto",
    alignContent: "center",
  },
}));

export default function FileSubmit() {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();

  const [file, setFile] = useState("");

  const onChange = (files) => {
    setFile(files);
  };

  const log = () => {
    console.log(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    fetch("/api/files", {
      method: "POST",
      body: formData,
      //   headers: new Headers()
    });

    console.log(formData);
  };

  if (isAuthenticated) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        <form className={classes.form}>
          <div>
            <DropzoneArea
              acceptedFiles={["audio/*,.zip"]}
              Icon={PublishIcon}
              dropzoneClass={classes.dropzone}
              onChange={(files) => onChange(files)}
              style={{ color: "pink" }}
            />
            <Fab
              variant="contained"
              className={classes.button}
              onClick={onSubmit}
            >
              Submit
            </Fab>
          </div>
        </form>
      </div>
    );
  }
  return <Login />;
}
