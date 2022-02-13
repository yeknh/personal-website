import React, { Component, useState, useEffect } from 'react';
import { styled } from '@mui/styles';
import { css , keyframes, useTheme }  from '@emotion/react';
import { gsap } from "gsap";

import iconIg from '../assets/icon-ig.svg'
import iconTwitter from '../assets/icon-twitter.svg'
import iconGithub from '../assets/icon-github.svg'
import iconLinkedin from '../assets/icon-linkedin.svg'

const ContactIcon = () => {
  const icons = [
    { id: 1, title: 'Instagram', src: iconIg, href: 'https://www.instagram.com/yeknh_/' },
    { id: 2, title: 'Twitter', src: iconTwitter, href: 'https://twitter.com/yeknh_' },
    { id: 3, title: 'Github', src: iconGithub, href: 'https://github.com/yeknh' },
    { id: 4, title: 'LinkedIn', src: iconLinkedin, href: 'https://www.linkedin.com/in/yeknh/' },
  ]

  const onEnter = ({ currentTarget }) => {
    let tl = gsap.timeline({ paused: true });
    tl.to(currentTarget, 0.8, { scale: 0.9 }, 0.1)
    tl.to(currentTarget, 1.8, { scale: 1.2, ease: "elastic.out(1.2, 0.4)" }, 1.2)
    tl.timeScale(2.6)
    tl.restart()
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, 1.8, { scale: 1, ease: "elastic.out(1.2, 0.4)" }, 1.2)
  };

  return (
    icons.map(({ id, title, src, href }) => {
      return (
        <li
          key={id}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <a href={href} className="button button--bubble" target="_blank"><img src={src} alt={title} /></a>
        </li>
      )
    })
  )
};

export default ContactIcon;
