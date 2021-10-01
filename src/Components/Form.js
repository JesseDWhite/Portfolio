import React, { useState } from 'react';
import {
  TextField,
  Button,
} from '@mui/material';

const initialValues = {
  name: '',
  organization: '',
  date: new Date('2014-08-18T21:11:54'),
  message: '',
}

const Form = () => {

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log(formValues);
  }

  return (
    <>
      <form onSubmit={handleSubmission}>
        <TextField
          sx={{
            width: '100%'
          }}
          id='nameInput'
          name='name'
          label='Full Name'
          type='text'
          value={formValues.name}
          onChange={handleInputChange}
        />
        <TextField
          sx={{
            width: '100%',
            marginTop: 3
          }}
          id='organizationInput'
          name='organization'
          label='Organization'
          type='text'
          value={formValues.organization}
          onChange={handleInputChange}
        />
        <TextField
          sx={{
            width: '100%',
            marginTop: 3
          }}
          id='messageInput'
          name='message'
          label='Message'
          type='text'
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