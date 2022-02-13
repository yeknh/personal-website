import React from 'react';
import { styled } from '@mui/styles';
import { css }  from '@emotion/react';

import imgPlayground from '../assets/music/img-playground.jpeg'
import imgDaydream from '../assets/music/img-daydream.jpeg'

const items = [
  {
    id: 1,
    status: "1st DEMO EP",
    title: "playground",
    artwork: imgPlayground,
    bandCamp: 'https://nahoshibahara.bandcamp.com/album/playground',
    theDomestic: 'https://ttosdomestic.thebase.in/items/50576866',
    thistimeOnline: 'http://thistimerecords.shop-pro.jp/?pid=162676908'
  },
  {
    id: 2,
    status: "2nd DEMO EP",
    title: "daydream",
    artwork: imgDaydream,
    bandCamp: 'https://nahoshibahara.bandcamp.com/album/daydream',
    theDomestic: 'https://ttosdomestic.thebase.in/items/56787546',
    thistimeOnline: ''
  }
]

const Discography = () => {
  return (
    items.map(({ id, artwork, status, title, tracks, bandCamp, theDomestic, thistimeOnline }) => {
      return (
        <DiscogItem key={id}>
          <div css={discogInfo}>
            <div>
              <img src={artwork} alt={title} />
            </div>
            <div>
              <p style={{ marginBottom: '12px', fontWeight: 'bold'}}>
                {status} 「{title}」
              </p>
              <p css={shopLinks}>
                Available on:<br />
                <a href={bandCamp} target="_blank">BandCamp</a>
                <span> / </span>
                <a href={theDomestic} target="_blank">The Domestic</a>
                {
                  thistimeOnline ? <span> / </span> : ''
                }
                {
                  thistimeOnline ? <a href={thistimeOnline} target="_blank">THISTIME Online</a> : ''
                }
              </p>
            </div>
          </div>
        </DiscogItem>
      )
    })
  )
};

const DiscogItem = styled('div')(({theme}) => ({
  marginBottom: '72px',
}))

const discogInfo = (theme) => css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 20px;
  & div:first-of-type {
    margin-right: 20px;
  }
  & img {
    width: 200px;
    height: 200px;
  }
  & p {
    text-align: left;
  }
  ${theme.breakpoints.down('lg')} {
    flex-direction: column;
    padding: 0 20px;
    justify-content: center;
    font-size: 18px;
    & div:first-of-type {
      margin-right: 0;
      margin-bottom: 20px;
    }
    & p {
      text-align: center;
    }
  }
`

const shopLinks = (theme) => css`
  text-align: left;
  font-size: 18px;
  & a {
    transition: all .1s ease .1s;
    &:hover {
      background-color: ${theme.palette.red.main} !important;
      color: ${theme.palette.bgColor.main} !important;
    }
  }
  ${theme.breakpoints.down('lg')} {
    font-size: 16px;
  }
`
export default Discography;