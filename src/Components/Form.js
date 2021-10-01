import React, { useState } from 'react';
import {
  TextField,
  Button,
} from '@mui/material';
import emailjs from 'emailjs-com';
import { alpha, styled } from '@mui/material/styles';

const initialValues = {
  name: '',
  email: '',
  date: new Date('2014-08-18T21:11:54'),
  message: '',
}

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
})

const Form = () => {

  const [formValues, setFormValues] = useState(initialValues);

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
      },
        (error) => {
          console.log(error.text)
        });
  }

  return (
    <>
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
    </>
  )
}

export default Form;