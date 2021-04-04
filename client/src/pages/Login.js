import React, { useEffect } from "react";
import { Grid, Card, makeStyles, Modal, Backdrop } from "@material-ui/core";
import CoolImg from "../images/ms1-1.png";
import LoginButton from "../components/LoginButton/LoginButton";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring/web.cjs";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#424242",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

function Login() {
  useEffect(() => {
    handleOpen();
  }, []);

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2
              id="spring-modal-title"
              style={{ textAlign: "center", color: "pink" }}
            >
              Uh-oh!
            </h2>
            <p
              id="spring-modal-description"
              style={{ textAlign: "center", color: "pink" }}
            >
              You must be logged in to use this feature.
            </p>
          </div>
        </Fade>
      </Modal>
      <Grid>
        <Grid item lg={7}>
          <div
            style={{
              position: "absolute",
              left: "32%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={CoolImg} />
          </div>
        </Grid>
        <Grid item lg={5}>
          <div
            style={{
              position: "absolute",
              left: "77%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: "5px 5px 15px grey",
            }}
          >
            <Card className={classes.root} variant="outlined">
              <form>
                <LoginButton />
              </form>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
