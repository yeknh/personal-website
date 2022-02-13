import { Component } from 'react';
import { css }  from '@emotion/react';

import iconSoundCloud from '../../assets/icon-soundcloud.svg'
import iconYouTube from '../../assets/icon-youtube.svg'

import Discography from '../../components/Discography';

export class App extends Component {
  render() {
    return (
      <div css={wrapper}>
        <section css={title}>
          <h2 css={h2}>Music</h2>
          <p>
            My music projects here.
            <br />
            Demo EP are on sale, please check it out!
            <br /><br />
            If you want to try to listen to them, you can do on YouTube and SoundCloud.
          </p>
        </section>

        <section css={main}>
          <div css={mainContents}>
            <div><h4>Discography</h4></div>
            <div style={{ paddingTop: '28px'}}><Discography /></div>
          </div>
          <div css={mainContents} style={{ marginTop: '140px'}}>
            <div><h4>Social Media</h4></div>
            <div css={iconContainer} style={{ paddingTop: '28px'}}>
              <a href="https://soundcloud.com/yeknh" target="_blank" style={{ marginBottom: '70px'}}>
                <img src={iconSoundCloud} alt="soundcloud" />
                <div css={iconTextBox}>
                  <p>SoundCloud</p>
                  <p>songwriting / cover tracks </p>
                </div>
              </a>
              <a href="https://www.youtube.com/user/0u0nahoho" target="_blank">
                <img src={iconYouTube} alt="youtube" />
                <div css={iconTextBox}>
                  <p>Youtube</p>
                  <p>songwriting / cover videos </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const wrapper = ( theme ) => css`
  & section {
    &:last-child {
      border-bottom: none;
    }
  }
  ${theme.breakpoints.up('md')} {
    & section {
      border-bottom: 4px solid ${theme.palette.black.main};
    }
  }
  ${theme.breakpoints.down('md')} {
    & section {
      border-bottom: 2px solid ${theme.palette.black.main};
    }
  }
`

const title = (theme) => css`
  padding: 36px 0 60px;
  & p {
    font-size: 20px;
  }
  ${theme.breakpoints.down('md')} {
    padding: 36px 20px 60px;
    & p {
      font-size: 16px;
    }
  }
`
const h2 = (theme) => css`
  font-family: Cantata One;
  font-size: 248px;
  line-height: 76%;
  letter-spacing: -0.072em;
  margin-bottom : 88px;

  ${theme.breakpoints.down('md')} {
    font-size: clamp(60px, 18.75vw, 168px);
    margin-bottom : 40px;
  }
`

const main = (theme) => css`
  padding: 100px 0 500px;
  & h4 {
    font-family: 'Cantata One', serif;
    font-size: 80px;
    line-height: 76%;
    letter-spacing: -0.072em;
    text-align: right;
    padding-right: 50px;
  }
  ${theme.breakpoints.down('lg')} {
    padding: 20px 0 200px;
      & h4 {
        font-size: clamp(26px, 8.13vw, 73px);
        margin-bottom : 40px;
        text-align: left;
      }
  }
`

const mainContents = (theme) => css`
  display: flex;
  & > div {
    width: 50%;
  }
  ${theme.breakpoints.down('lg')} {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`

const iconContainer = (theme) => css`
  & a {
    display: flex;
    align-items: center;
  }
  & img {
    margin-right: 44px;
  }
  ${theme.breakpoints.down('lg')} {
    padding: 0 20px;
    & a {
      justify-content: center;
    }
    & img {
      width: 10vw;
      height: 10vw;
      margin-right: 16px;
    }
  }
`

const iconTextBox = (theme) => css`
  text-align: left;
  & p:first-of-type {
    font-size: 20px;
    font-weight: bold;
  }
  & p:last-of-type {
    font-size: 18px;
  }
  ${theme.breakpoints.down('md')} {
    & p:first-of-type {
      font-size: 18px;
      font-weight: bold;
    }
    & p:last-of-type {
      font-size: 16px;
    }
  }
`

export default App;
