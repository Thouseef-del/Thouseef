import React from 'react';
import './Days.css';
import lge from './nutroso-high-resolution-logo-transparent.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Days = () => {
  return (
    <>
      <div>
        <nav>
          <div className='nav_logo'>
            <a href='/home'><img src={lge} alt='logo' /></a>
          </div>
          <ul className='nav_links'>
            <li className='link'><a href='/home'>Home</a></li>
            <li className='link'><a href='#'>Program</a></li>
            <li className='link'><a href='#'>Services</a></li>
            <li className='link'><a href='#'>About</a></li>
            <li className='link'><a href='#'>Contact_us</a></li>
          </ul>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
        </nav>
      </div>

      <div className='container'>
        <div className='left'>
          <a href='#'>
            <h1 className='tex'>Get Diet By Consulting</h1>
          </a>
        </div>

        <div className='right'>
          <a href='#'>
            <h1 className='tex'>AI Default</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default Days;
