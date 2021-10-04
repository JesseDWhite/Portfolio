import React, { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  Typography
} from '@mui/material';
import emailjs from 'emailjs-com';
import { styled } from '@mui/material/styles';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const StyledTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'aqua',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'orange',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'aqua',
    },
  },
});

const Form = () => {

  const [formValues, setFormValues] = useState(initialValues);

  const [formSubmit, setFormSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xls8lup', 'template_28bjl2k', e.target, 'user_7NqP1g7sWwPQ6DSyyQyFP')
      .then((result) => {
        console.log(result)
        setFormValues(initialValues);
        setFormSubmit(true);
      },
        (error) => {
          console.log(error.text)
        });
  };

  return (
    <>
      <Card
        sx={{
          position: 'relative',
          minHeight: 100,
          bottom: 0,
          margin: 10,
          borderRadius: 5,
          backgroundColor: 'rgb(23,58,94)',
          color: formSubmit ? 'rgb(26, 209, 23)' : 'white',
          boxShadow: formSubmit ? '0px 0px 0px 3px rgb(26, 209, 23)' : null,
        }}
      >
        <Typography
          sx={{
            fontSize: '18px',
            padding: 3
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'center',
              marginBottom: 3,
            }}
          >
            {formSubmit ? 'THANKS!' : 'CONTACT ME'}
          </Typography>
          {formSubmit ? null :
            <form
              onSubmit={sendEmail}
              id='contactForm'
            >
              <StyledTextField
                fullWidth
                color='warning'
                variant='outlined'
                id='nameInput'
                name='name'
                label='Full Name'
                type='text'
                value={formValues.name}
                onChange={handleInputChange}
              />
              <StyledTextField
                fullWidth
                sx={{
                  marginTop: 3
                }}
                color='warning'
                id='emailInput'
                name='email'
                label='Email Address'
                type='email'
                value={formValues.email}
                onChange={handleInputChange}
              />
              <StyledTextField
                fullWidth
                sx={{
                  marginTop: 3
                }}
                color='warning'
                id='messageInput'
                name='message'
                label='Message'
                type='text'
                multiline
                rows={6}
                value={formValues.message}
                onChange={handleInputChange}
              />
              <Button
                sx={{
                  width: '100%',
                  marginTop: 5
                }}
                type='submit'
                variant='contained'
                color='success'>
                Submit
              </Button>
            </form>
          }
        </Typography>
      </Card>
    </>
  )
}

export default Form;