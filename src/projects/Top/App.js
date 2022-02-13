import { Component } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/styles';
import { Tooltip } from '@mui/material';
import { css }  from '@emotion/react';
import withMediaQuery from '../../Lib/withMediaQuery';

import imgFlower from '../../assets/img-flower.svg'
import imgFlowerFill from '../../assets/img-flowerFill.svg'

class App extends Component {
  render() {
    const { isMobile } = this.props;
    return (
      <Wrapper>
        <section css={key}>
          <h1 css={h1}>Naho<br />Shibahara</h1>
          <span className="flower"><img src={imgFlower} alt="flower" /></span>
          <span className="flower-fill"><img src={imgFlowerFill} alt="flower" /></span>
        </section>

        <section css={main}>
          {
            isMobile ? <h3>＊・ABOUT・＊</h3> : <h3>＊ ・ ＊ ・ ABOUT  ・ ＊ ・ ＊</h3>
          }
          <p>
            Hi I’m Naho 👋<br />
            Welcome to my space:)
            <br /><br />
            Available in Japanese, English, and Korean.<br />
            you can see all kind of my projects on this site.
            <br /><br />
            Click a title which you are interested in!<br />
            Enjoy!
          </p>
        </section>

        <section css={menu}>
          <MenuLeft>
            <div><Link to="/engineer">Front-end Develop</Link></div>
            <div><Link to="/handmade">Handmade Market</Link></div>
          </MenuLeft>
          <MenuRight>
            <Tooltip
            title={<p style={{ fontSize: '12px', color: '#F2EFE8'}}>coming soon...</p>}
            followCursor
          ><div><p>＊   ＊   ＊</p></div></Tooltip>
            <div><Link to="/music">Music</Link></div>
          </MenuRight>
        </section>
      </Wrapper>
    )
  }
}

const Wrapper = styled('div')(({ theme }) => ({
  '& section': {
    '&:last-child': {
      borderBottom: 'none',
    }
  },
  [theme.breakpoints.up('md')]: {
    '& section': {
      borderBottom: `4px solid ${theme.palette.black.main}`,
    }
  },
  [theme.breakpoints.down('md')]: {
    '& section': {
      borderBottom: `2px solid ${theme.palette.black.main}`,
    }
  },
}))

const menu = (theme) => css`
  display: flex;
  align-items: stretch;
  ${theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`

const MenuLeft = styled('div')(({ theme }) => ({
  borderRight: `4px solid ${theme.palette.black.main}`,
  width: '48%',
  '& div': {
    '&:first-child': {
      fontFamily: 'Noto Sans Display, sans-serif',
      fontWeight: 'bold',
      transition: 'all .2s ease .2s',
      background: 'linear-gradient(to right, red 50%, blue 50%)',
      background: `linear-gradient(to left, ${theme.palette.bgColor.main} 50%, ${theme.palette.green.main} 50%) right`,
      backgroundSize: '200%',
      '&:hover': {
        backgroundPosition: 'left',
        color: `${theme.palette.bgColor.main}`,
      }
    },
    '&:last-child': {
      textAlign: 'center',
      fontFamily: 'Share, cursive',
      lineHeight: '107%',
      transition: 'all .2s ease .2s',
      background: 'linear-gradient(to right, red 50%, blue 50%)',
      background: `linear-gradient(to left, ${theme.palette.bgColor.main} 50%, ${theme.palette.pink.main} 50%) right`,
      backgroundSize: '200%',
      '&:hover': {
        backgroundPosition: 'left',
        color: `${theme.palette.bgColor.main}`,
      }
    }
  },
  [theme.breakpoints.up('xl')]: {
    '& div': {
      '&:first-child': {
        padding: '6px 0 60px 0',
        fontSize: '142px',
      },
      '&:last-child': {
        padding: '56px 0',
        fontSize: '69px',
      }
    },
  },
  [theme.breakpoints.down('xl')]: {
    '& div': {
      '&:first-child': {
        padding: '6px 0 60px 0',
        fontSize: '11vw',
      },
      '&:last-child': {
        padding: '56px 0',
        fontSize: '4.5vw',
      }
    },
  },
  [theme.breakpoints.up('md')]: {
    '& div': {
      '&:first-child': {
        borderBottom: `4px solid ${theme.palette.black.main}`,
        letterSpacing: -12,
        lineHeight: '0.8',
        textAlign: 'left',
      }
    }
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    borderRight: 'none',
    '& div': {
      height: 'clamp(95px, 20vw, 120px)',
      '&:first-child': {
        borderBottom: `2px solid ${theme.palette.black.main}`,
        letterSpacing: 0,
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 'clamp(20px, 8vw, 70px)',
        lineHeight: '1.3',
      },
      '&:last-child': {
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 'clamp(35px, 10.5vw, 70px)',
      }
    },
  }
}))
const MenuRight = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '& div': {
    '&:first-child': {
      '& p': {
        fontFamily: 'Cantata One, serif',
        lineHeight: '76%',
        textAlign: 'center',
        letterSpacing: '0.128em',
        cursor: 'default'
      },
    },
    '&:last-child': {
      transition: 'all .2s ease .2s',
      background: 'linear-gradient(to right, red 50%, blue 50%)',
      background: `linear-gradient(to left, ${theme.palette.bgColor.main} 50%, ${theme.palette.red.main} 50%) right`,
      backgroundSize: '200%',
      '&:hover': {
        backgroundPosition: 'left',
        color: `${theme.palette.bgColor.main}`,
      },
      flexGrow: 1,
      textAlign: 'center',
      fontFamily: 'Cantata One, serif',
      '& a': {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }
    }
  },
  [theme.breakpoints.up('xl')]: {
    '& div': {
      '&:first-child': {
        padding: '64px 0',
        '& p': {
          fontSize: '70px'
        }
      },
      '&:last-child': {
        fontSize: '194px',
        lineHeight: '91%',
      }
    },
  },
  [theme.breakpoints.down('xl')]: {
    '& div': {
      '&:first-child': {
        '& p': {
          fontSize: '4.5vw'
        }
      },
      '&:last-child': {
        fontSize: '12.6vw',
        lineHeight: '91%',
      }
    },
  },
  [theme.breakpoints.up('md')]: {
    width: '52%',
    '& div': {
      '&:first-child': {
        borderBottom: `4px solid ${theme.palette.black.main}`,
        padding: '64px 0',
      },
    }
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    '& div': {
      height: 'clamp(95px, 20vw, 120px)',
      '&:first-child': {
        borderTop: `2px solid ${theme.palette.black.main}`,
        borderBottom: `2px solid ${theme.palette.black.main}`,
        fontSize: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '&:last-child': {
        lineHeight: '90%',
        padding: '20px 0',
        fontSize: 'clamp(40px, 12.6vw, 83px)',
        '& a': {
          lineHeight: 1.1,
        }
      }
    },
  }
}))


const h1 = (theme) => css`
  font-family: 'Share', cursive;
  font-size: 268px;
  text-align: left;
  font-style: italic;
  font-weight: bold;
  line-height: 76%;
  letter-spacing: -0.072em;
  ${theme.breakpoints.down('lg')} {
    font-size: 17.4vw;
  }
`

const key = (theme) => css`
  padding: 16px 0;
  position: relative;
  span {
    position: absolute;
    &.flower {
      right: 17%;
      top: 10%;
      @media screen and (min-width: theme) and (max-width: $lg) {
        body {
          font-size: 0.1rem;
        }
        html {
          font-size: calc(100vw / 14.4);
        }
      }
    }
    &.flower-fill {
      right: 3%;
      top: 30%;
    }
  }
  ${theme.breakpoints.down('xl')} {
    span {
    position: absolute;
    &.flower {
      & img {
        width: 10vw;
      }
    }
    &.flower-fill {
      & img {
        width: 10vw;
      }
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
    padding: 80px 20px 100px;
    & h3 {
      font-size: 40px;
      margin-bottom: 84px;
    }
    & p {
      font-size: 24px;
    }
  }
  ${theme.breakpoints.down('md')} {
    padding: 60px 10px;
    & h3 {
      font-size: 30px;
      margin-bottom: 34px;
    }
    & p {
      font-size: 18px;
    }
  }
`

export default withMediaQuery([['isMobile', theme => theme.breakpoints.down('md'), {
  defaultMatches: true
}]])(App);
