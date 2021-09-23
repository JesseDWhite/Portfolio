import React from 'react';
import { Link, SpeedDial } from '@mui/material';
import { GitHub, LinkedIn, PhoneIphone, Email } from '@mui/icons-material';

const Contact = () => {

  return (
    <>
      <Link href='https://github.com/JesseDWhite' underline='hover'><GitHub /></Link>
      <Link href='https://www.linkedin.com/in/jesse-d-white/' underline='hover'><LinkedIn /></Link>
      <Link href='tel:5035237527' underline='hover'><PhoneIphone /></Link>
      <Link
        href='https://mail.google.com/mail/?view=cm&fs=1&to=jesse.white6@gmail.com'
        underline='hover'>
        <Email />
      </Link>
    </>
  )
}

export default Contact