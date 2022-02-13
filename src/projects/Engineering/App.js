import { Component } from 'react';
import { css }  from '@emotion/react';
import withMediaQuery from '../../Lib/withMediaQuery';

import iconHtml from '../../assets/icon-html.svg'
import iconCss from '../../assets/icon-css.svg'
import iconJavascript from '../../assets/icon-javascript.svg'
import iconJquery from '../../assets/icon-jquery.svg'
import iconPhp from '../../assets/icon-php.svg'
import iconPug from '../../assets/icon-pug.svg'
import iconReact from '../../assets/icon-react.svg'
import iconSass from '../../assets/icon-sass.svg'
import iconStylus from '../../assets/icon-stylus.svg'
import iconVue from '../../assets/icon-vuejs.svg'
import iconVuetify from '../../assets/icon-vuetify.svg'
import iconXd from '../../assets/icon-xd.svg'
import iconFigma from '../../assets/icon-figma.svg'

const icons = [
  { id: 1, title: 'html', src: iconHtml },
  { id: 2, title: 'css', src: iconCss },
  { id: 3, title: 'javaScript', src: iconJavascript },
  { id: 4, title: 'jquery', src: iconJquery },
  { id: 5, title: 'pug', src: iconPug },
  { id: 6, title: 'sass', src: iconSass },
  { id: 7, title: 'stylus', src: iconStylus },
  { id: 8, title: 'Vue', src: iconVue },
  { id: 9, title: 'Vuetify', src: iconVuetify },
  { id: 10, title: 'React', src: iconReact },
  { id: 11, title: 'php', src: iconPhp },
  { id: 12, title: 'Figma', src: iconFigma },
  { id: 13, title: 'XD', src: iconXd },
]


class App extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <div css={wrapper}>
        <section css={title}>
          <h2 css={h2}>Front-end Develop</h2>
          <div>
            <p>
            Since starting my career as a front-end engineer at a company, I've done remote work for agencies.
            <br />
            And now, I've just begin my journey as a freelance front-end developer:)
            </p>
          </div>
        </section>

        <section css={main}>
          {
            isMobile ? <h3>＊・SKILL・＊</h3> : <h3>＊ ・ ＊ ・ SKILL  ・ ＊ ・ ＊</h3>
          }
          <div css={itemContainer}>
            {
              icons.map(({ id, title, src }) => (
                <div key={id} css={item}>
                  <img src={src} alt={title} />
                  <p>{title}</p>
                </div>
              ))
            }
            <div css={flexCenter}><p>keep studying... :)</p></div>
          </div>
        </section>
      </div>
    )
  }
}

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
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

const h2 = (theme) => css`
  text-align: left;
  font-family: Share;
  font-style: italic;
  font-weight: bold;
  line-height: 76%;
  z-index: -1;
  letter-spacing: -0.072em;
  ${theme.breakpoints.up('md')} {
    font-size: clamp(153px, 17.7vw, 268px);
  }
  ${theme.breakpoints.down('md')} {
    font-size: 22vw;
  }
`

const title = (theme) => css`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  & div {
    margin-top: 36px;
    align-self: flex-end;
    width: fit-content;
    text-align: left;
  }
  ${theme.breakpoints.down('lg')} {
    & div {
      & p {
        padding-left: 16px;
      }
    }
  }
  ${theme.breakpoints.down('md')} {
    padding: 10px 0 40px 0;
    & div {
      margin-top: 30px;
      align-self: flex-start;
      padding: 0 10px 0 6px;
      & p {
        font-size: 14px;
      }
    }
  }
`

const main = (theme) => css`
  text-align: center;
  & h3 {
    font-family: Share;
    line-height: 76%;
    letter-spacing: 0.128em;
  }
  ${theme.breakpoints.up('md')} {
    padding: 80px 0 240px;
    & h3 {
      font-size: 40px;
      margin-bottom: 84px;
    }
  }
  ${theme.breakpoints.down('md')} {
    padding: 60px 0 100px;
    & h3 {
      font-size: 30px;
      margin-bottom: 64px;
    }
  }
`

const itemContainer = (theme) => css`
  display: grid;
  justify-content: center;
  ${theme.breakpoints.up('md')} {
    grid-template-columns: repeat(auto-fit, 242px);
    grid-column-gap: 20px;
    grid-row-gap: 66px;
    padding: 0 100px;
  }
  ${theme.breakpoints.down('md')} {
    grid-template-columns: repeat(auto-fit, 34vw);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
`

const item = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${theme.breakpoints.up('md')} {
    border: 4px solid ${theme.palette.black.main};
    width: 242px;
    height: 256px;
    margin: 0 auto;
    & img {
      width: 94px;
      height: 94px;
      margin-bottom: 40px;
    }
  }
  ${theme.breakpoints.down('md')} {
    border: 2px solid ${theme.palette.black.main};
    width: 34vw;
    height: 36.25vw;
    margin: 0 auto;
    & img {
      width: 12.5vw;
      height: 12.5vw;
      margin-bottom: 16px;
    }
  }
`

export default withMediaQuery([['isMobile', theme => theme.breakpoints.down('md'), {
  defaultMatches: true
}]])(App);
