import React, { useEffect, useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import { styled } from '@mui/styles';
import { css }  from '@emotion/react'
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import ContactIcon from './ContactIcon';

const Top = ({ children }) => {
  const location = useLocation();
  const initialTitle = 'click & copy!';
  const [title, setTitle] = useState(initialTitle);
  const [isHover, setIsHover] = useState(false);
  const eMail = 'nhshibahara@gmail.com';

  let color = ''
  switch (location.pathname) {
    case '/music':
      color = 'red'
      break;
    case '/handmade':
      color = 'pink'
      break;
    default:
      color = 'green'
      break;
  }

  let contactSentence = ''
  switch (location.pathname) {
    case '/engineer':
      contactSentence =
        <p>
          I’m available for freelance and full-time projects.
          <br />
          If you are interested in working together, you are very welcome to contact me!
        </p>
      break;
    case '/music':
        contactSentence = <p>If you want to collaborate on creating some music together,<br /> you are very welcome to contact me!</p>
        break;
    case '/handmade':
      contactSentence =
        <p>
          If you have any question about my handmade projects,<br /> feel free to contact me:)
        </p>
        break;
    default:
      contactSentence =
        <p>
          If you want to ask anythig about my projects,<br /> feel free to contact me:)
        </p>
        break;
  }

  const handleTooltipClose = () => {
    setTimeout(() => {setTitle(initialTitle)}, 100);
  };

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(eMail)
    .then(() => {
      setTitle('copied!');
    })
    .catch((err) => {
      console.error('COPY TEXT ERROR: ', err);
    });
  };

  const HomeButtonText = location.pathname === '/' ? 'HERE!' : 'BACK'

  return (
    <TopContainer>
      <TopBar>
        <div style={{display: 'flex', paddingLeft: '12px'}}>
          <Link to='/'><p>📍HOME</p></Link>
          {
            location.pathname === '/' || <Link to={location.pathname} style={{marginLeft: '7px'}}><p>/ {location.pathname.substr(1).toUpperCase()}</p></Link>
          }
        </div>
        {/* <SelectLanguage color={color}>
          English
        </SelectLanguage> */}
      </TopBar>
      {children}
      <Contact>
        <h3>CONTACT</h3>
        {contactSentence}
        <Tooltip
          title={<p style={{ fontSize: '14px', color: '#F2EFE8'}}>{title}</p>}
          followCursor
          onMouseOut={handleTooltipClose}
        >
          <MailAdress color={color} onClick={() => copyTextToClipboard()}>
            <MailOutlineIcon style={{fontSize: '34px'}} className="mail-icon" />
            <p>{eMail}</p>
            <span>copy!</span>
          </MailAdress>
        </Tooltip>
        <ul css={iconContainer}>
          <ContactIcon />
        </ul>
      </Contact>
      <Footer>
        <p>Naho Shibahara @ 2022</p>
      </Footer>
      <HomeButton color={color} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <Link to="/"><HomeIcon color="bgColor" style={{fontSize: '34px'}} /></Link>
        {
          isHover && <span>{HomeButtonText}</span>
        }
      </HomeButton>
    </TopContainer>
  )
}

const TopContainer = styled('section')(({ theme }) => ({
  border: `4px solid ${theme.palette.black.main}`,
  margin: '6.7% 10%',
  [theme.breakpoints.down('md')]: {
    border: `2px solid ${theme.palette.black.main}`,
    margin: '1em 1em'
  },
}))

const TopBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `4px solid ${theme.palette.black.main}`,
  height: 66,
  [theme.breakpoints.down('md')]: {
    borderBottom: `2px solid ${theme.palette.black.main}`,
    height: 44,
  },
  [theme.breakpoints.down('sm')]: {
    '& p': {
      fontSize: '12px',
    }
  },
}))

const Contact = styled('div')(({ theme }) => ({
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '80px 0',
  borderTop: `4px solid ${theme.palette.black.main}`,
  '& > h3': {
    letterSpacing: '0.128em',
    marginBottom: '28px',
  },
  '& > p': {
    letterSpacing: '0.128em',
    marginBottom: '40px',
  },
  [theme.breakpoints.up('xl')]: {
    '& > h3': {
      fontSize: '70px',
    },
    '& > p': {
      fontSize: '18px',
    }
  },
  [theme.breakpoints.down('xl')]: {
    '& > h3': {
      fontSize: '60px',
    },
    '& > p': {
      fontSize: '20px',
    }
  },
  [theme.breakpoints.down('md')]: {
    padding: '80px 20px',
    borderTop: `2px solid ${theme.palette.black.main}`,
    '& > h3': {
      fontSize: '40px',
    },
    '& > p': {
      fontSize: '16px',
      marginBottom: '80px',
    }
  },
}))

const MailAdress = styled('div')(({ theme, color }) => ({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  marginBottom: '40px',
  cursor: 'pointer',
  '& > p': {
    lineHeight: 2,
  },
  '& > span': {
    lineHeight: 2,
  },
  [theme.breakpoints.up('md')]: {
    '& > p': {
      padding: '0 20px',
      border: `4px solid ${theme.palette.black.main}`,
      height: '100%',
    },
    '& > span': {
      height: '100%',
      padding: '0 20px',
      border: `4px solid ${theme.palette.black.main}`,
      borderLeft: 'none',
      backgroundColor: theme.palette[color].main,
      color: theme.palette.bgColor.main
    },
    '& .mail-icon': {
      display: 'none',
    }
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    flexDirection: 'column',
    marginTop: '10px',
    marginBottom: '80px',
    '& > p': {
      position: 'relative',
      backgroundColor: theme.palette.black.main,
      color: theme.palette.bgColor.main,
      padding: '4px 10px',
      borderRadius: 16,
      userSelect: 'all',
      fontSize: 'clamp(12px, 88%, 16px)',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderRight: '5px solid transparent',
        borderLeft: '5px solid transparent',
        borderBottom: `15px solid ${theme.palette.black.main}`,
      }
    },
    '& > span': {
      display: 'none'
    },
    '& .mail-icon': {
      marginBottom: '10px',
    }
  }
}))

const Footer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: 14,
  height: 46,
  borderTop: `4px solid ${theme.palette.black.main}`,
  [theme.breakpoints.down('md')]: {
    height: 30,
    borderTop: `2px solid ${theme.palette.black.main}`,
  },
}))

const SelectLanguage = styled('div')(({ theme, color }) => ({
  backgroundColor: theme.palette[color].main,
  color: theme.palette.bgColor.main,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 16px',
  cursor: 'pointer',
  borderLeft: `4px solid ${theme.palette.black.main}`,
  [theme.breakpoints.down('md')]: {
    borderLeft: `2px solid ${theme.palette.black.main}`,
  },
}))

const HomeButton = styled('button')(({ theme, color }) => ({
  backgroundColor: theme.palette[color].main,
  height: 60,
  width: 60,
  border: 'none',
  boxShadow: '0px 2px 7px 0px #ccc',
  borderRadius: '50%',
  cursor: 'pointer',
  position: 'fixed',
  bottom: '6%',
  right: '2%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform ease-in 0.1s, box-shadow ease-in 0.25s',
  '&:focus': {
    outline: 0
  },

  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: theme.palette[color].main,
    boxShadow: '0 2px 25px rgba(255, 0, 130, 0.2)'
  },

  '&:active': {
    transform: 'scale(0.9)',
    backgroundColor: theme.palette[color].main,
    boxShadow: '0 2px 25px rgba(255, 0, 130, 0.2)'
  },

  '& span': {
    position: 'absolute',
    color: theme.palette[color].main,
    top: '-48%',
    fontWeight: 'bold',
    fontSize: '16px',
    letterSpacing: 3
  },

  [theme.breakpoints.down('md')]: {
    right: '3vw',
  }
}))

const iconContainer = (theme) => css`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${theme.breakpoints.down('md')} {
    width: 70vw;
  }
`


export default Top;
