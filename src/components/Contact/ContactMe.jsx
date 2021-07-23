import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import EmailIcon from "@material-ui/icons/Email";
import FlagIcon from "@material-ui/icons/Flag";
import PhoneIcon from "@material-ui/icons/Phone";
import PlaceIcon from "@material-ui/icons/Place";
import React, { useState } from "react";
import { Element } from "react-scroll";
import "./ContactMe.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#C0C0C0	",
    padding: "1rem",
  },
  labelColor: {
    color: "gold",
  },
}));

const ContactMe = () => {
  const classes = useStyles();
  const [name, setName] = useState("Arifur Rahman Arif");
  const [email, setEmail] = useState("ararif@yahho.com");
  const [message, setMessage] = useState("whatever you want.....");

  return (
    <div className="main-contact">
      <Element id="contact" marginHeight="15rem">
        <h1>Connect with Me</h1>
        <div className="contact-info">
          <div className="contact-content">
            <p>
              {" "}
              <PlaceIcon /> Danziger Straße 241, Berlin 10407
            </p>
            <p>
              {" "}
              <FlagIcon /> Berlin, Germany
            </p>
            <p>
              {" "}
              <EmailIcon /> ararif.aa@gmail.com
            </p>
            <p>
              {" "}
              <PhoneIcon /> +4917621649289
            </p>
          </div>
          <div className="contact-message">
            <h2>Let's talk about you !!</h2>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Enter your Full Name"
                className={classes.labelColor}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Write a Message"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </div>
        </div>
        {/* <div className="social">
          <SocialMedia />
        </div> */}
      </Element>
    </div>
  );
};

export default ContactMe;
