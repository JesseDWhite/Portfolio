import React, { useState, useRef, useLayoutEffect } from "react";
import {
  TextField,
  Button,
  Card,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import emailjs from "emailjs-com";
import { styled } from "@mui/material/styles";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
    zIndex: 0,
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const Form = (props) => {
  const { viewPort } = props;

  const [formValues, setFormValues] = useState(initialValues);

  const [formSubmit, setFormSubmit] = useState(false);

  const [alert, setAlert] = useState(false);

  const [cardHeight, setCardHeight] = useState(null);

  const contentRef = useRef(null);

  useLayoutEffect(() => {
    if (formSubmit || !contentRef.current) {
      return;
    }

    // recaptcha injects its iframe asynchronously, so keep measuring until it's rendered
    const observer = new ResizeObserver(([entry]) => {
      setCardHeight(entry.target.scrollHeight);
    });

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [formSubmit, viewPort, alert]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xls8lup",
        "template_28bjl2k",
        e.target,
        "user_7NqP1g7sWwPQ6DSyyQyFP",
      )
      .then(
        (result) => {
          setAlert(false);
          setFormValues(initialValues);
          setFormSubmit(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const validateFormFields = (e) => {
    e.preventDefault();

    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.message === ""
    ) {
      return setAlert(true);
    } else {
      return sendEmail(e);
    }
  };

  return (
    <>
      <Card
        elevation={5}
        sx={{
          position: "relative",
          height: formSubmit ? 135 : cardHeight || "auto",
          overflow: "hidden",
          bottom: 0,
          margin: viewPort < 600 ? 1 : 10,
          marginTop: viewPort < 600 ? 5 : "none",
          borderRadius: 2,
          backgroundColor: "#434343",
          color: formSubmit ? "rgb(26, 209, 23)" : "white",
          boxShadow: formSubmit ? "0px 0px 0px 3px rgb(26, 209, 23)" : null,
          transition: "height 0.5s ease, box-shadow 0.5s ease, color 0.5s ease",
        }}
      >
        {alert ? (
          <Alert severity="error" variant="filled">
            <AlertTitle>Error</AlertTitle>
            Please complete all form fields before submitting
          </Alert>
        ) : null}
        <Typography
          ref={contentRef}
          sx={{
            fontSize: "18px",
            padding: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              paddingBottom: 3,
              paddingTop: formSubmit ? 3 : 0,
            }}
          >
            {formSubmit ? "I'LL BE IN TOUCH" : "CONTACT ME"}
          </Typography>
          {formSubmit ? null : (
            <form onSubmit={validateFormFields} id="contactForm" method="POST">
              <StyledTextField
                fullWidth
                color="warning"
                variant="outlined"
                id="nameInput"
                name="name"
                label="Full Name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
              />
              <StyledTextField
                fullWidth
                sx={{
                  marginTop: 3,
                }}
                color="warning"
                id="emailInput"
                name="email"
                label="Email Address"
                type="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
              <StyledTextField
                fullWidth
                sx={{
                  marginTop: 3,
                }}
                color="warning"
                id="messageInput"
                name="message"
                label="Message"
                type="text"
                multiline
                rows={6}
                value={formValues.message}
                onChange={handleInputChange}
              />
              <div
                class="g-recaptcha"
                data-sitekey="6LeI0q8cAAAAAGIry2jEnnREMF3ek6GMRbKZkvwP"
                data-theme="dark"
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                }}
              ></div>
              <Button
                sx={{
                  width: "100%",
                  color: "black",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#b3b3b3",
                  },
                }}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </form>
          )}
        </Typography>
      </Card>
    </>
  );
};

export default Form;
