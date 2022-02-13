import { Component, useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { css }  from '@emotion/react';
import withMediaQuery from '../../Lib/withMediaQuery';

import imgCherryNecklace from '../../assets/handmade/img-cherrynecklace.jpg'
import imgFlowerBag from '../../assets/handmade/img-flowerbag.jpg'
import imgFlowerPouch from '../../assets/handmade/img-flowerpouch.jpg'
import imgHoodWarmer from '../../assets/handmade/img-hoodwarmer.jpg'
import imgWhiteHat from '../../assets/handmade/img-whitehat.jpeg'


const items = [
  { id: 1, title: 'Cherry Motief Necklace', category: 'beads', src: imgCherryNecklace, price: '1,000 JPY', href: 'https://minne.com/items/30112795' },
  { id: 2, title: 'Flower Bag', category: 'crochet', src: imgFlowerBag, price: '1,800 JPY', href: 'https://minne.com/items/31179251' },
  { id: 3, title: 'Flower Pouch (red/yellow)', category: 'crochet', src: imgFlowerPouch, price: '1,000 JPY', href: 'https://minne.com/items/31179177' },
  { id: 4, title: 'Balaclava', category: 'crochet', src: imgHoodWarmer, price: '3,000 JPY', href: 'https://minne.com/items/30440610' },
  { id: 5, title: 'White Crochet Hat', category: 'crochet', src: imgWhiteHat, price: '2,500 JPY', href: 'https://minne.com/items/30626989' },
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  boxShadow: 24,
  p: 4,
  '&:focus': {
    outline: 'none'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      targetItem: {}
    };
  }

  modalShow(item) {
    console.log(item)
    this.setState({ targetItem: item });
    this.setState({ isModal: true });
  }
  modalHide() {
    this.setState({ targetItem: {} });
    this.setState({ isModal: false });
  }
  render() {
    const { isMobile } = this.props;
    return (
      <div css={wrapper}>
        <section css={title}>
          <h2 css={h2}>Handmade Market</h2>
          <div>
            <p>
              crochet / beads / accesorries / clothes
              <br />
              <span style={{fontSize: '16px'}}>all merchs are sold via minne {!isMobile ? "||" : <br />}shipping only in Japan</span>
            </p>
          </div>
        </section>

        <section css={main}>
          {
            isMobile ? <h3>＊・ITEMS・＊</h3> : <h3>＊ ・ ＊ ・ ITEMS  ・ ＊ ・ ＊</h3>
          }
          <div css={itemContainer}>
            {
              items.map((each) => (
                <div key={each.id} css={listItem}>
                  <img src={each.src} alt={each.title} onClick={this.modalShow.bind(this, each)} />
                  <div style={{textAlign: 'left', width: '100%' }}>
                    <p className='title'>{each.title}</p>
                    <a href={each.href} target='_blank' className='purchase'>
                      purchase
                      <ArrowRightIcon color='black' style={{fontSize: '24px'}} />
                    </a>
                    </div>
                </div>
              ))
            }
          </div>
          <Modal
            open={this.state.isModal}
            onClose={this.modalHide.bind(this)}
            aria-labelledby='parent-modal-title'
            aria-describedby='parent-modal-description'
          >
            <Box sx={{ ...style, backgroundColor: 'bgColor.main' }}>
              <div css={modalItem}>
                <img src={this.state.targetItem.src} alt={this.state.targetItem.title} />
                <div css={modalText}>
                  <div>
                    <p className='title'>{this.state.targetItem.title}</p>
                    <p className='price'>{this.state.targetItem.price}</p>
                  </div>
                  <a href={this.state.targetItem.href}>
                    purchase
                    <ArrowRightIcon color='black' style={{fontSize: '24px'}} />
                  </a>
                </div>
              </div>
            </Box>
          </Modal>
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

const h2 = (theme) => css`
  font-family: Share;
  font-style: normal;
  font-weight: normal;
  line-height: 76%;
  letter-spacing: -0.072em;
  ${theme.breakpoints.up('md')} {
    font-size: clamp(153px, 13.22vw, 200px);
  }
  ${theme.breakpoints.down('md')} {
    font-size: 13.3vw;
  }
`

const title = (theme) => css`
  display: flex;
  flex-direction: column;
  & div {
    align-self: center;
    width: fit-content;
    text-align: center;
  }
  ${theme.breakpoints.up('md')} {
    padding: 20px 0 60px;
    & div {
      margin-top: 56px;
      font-size: 30px;
    }
  }
  ${theme.breakpoints.down('md')} {
    padding: 20px 20px 30px;
    & div {
      margin-top: 30px;
      font-size: 14px;
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
    grid-template-columns: repeat(auto-fit, 278px);
    grid-column-gap: 20px;
    grid-row-gap: 66px;
    padding: 0 20px;
  }
  ${theme.breakpoints.down('md')} {
    grid-template-columns: repeat(auto-fit, 32vw);
    grid-row-gap: 26px;
    grid-column-gap: 20px;
  }
`

const listItem = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  & img {
    cursor: pointer;
  }
  & .title {
    letter-spacing: 0;
  }
  ${theme.breakpoints.up('md')} {
    border: 4px solid ${theme.palette.black.main};
    width: 278px;
    /* height: 326px; */
    padding: 32px 36px;
    margin: 0 auto;
    & img {
      width: 200px;
      height: 200px;
      margin-bottom: 16px;
    }
    & .title {
      font-size: 22px;
    }
    & .purchase {
      font-size: 18px;
    }
  }
  ${theme.breakpoints.down('md')} {
    border: 2px solid ${theme.palette.black.main};
    width: 32vw;
    margin: 0 auto;
    padding: 18px 5vw;
    & img {
      width: 21.8vw;
      height: 21.8vw;
      margin-bottom: 12px;
    }
    & .title {
      font-size: 18px;
    }
    & .purchase {
      font-size: 14px;
    }
  }
`

const modalItem = (theme) => css`
  display: flex;
  & img {
    width: 40%;
    height: 40%;
  }
  & .title {
    font-size: 30px;
  }
  & .price {
    font-size: 22px;
    margin-top: 24px;
  }
  & a {
    font-size: 24px;
    cursor: pointer;
    text-align: right;
  }
  ${theme.breakpoints.down('md')} {
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    & img {
      width: 90%;
      height: 90%;
    }
    & .price {
      font-size: 18px;
      margin-top: 8px;
      letter-spacing: -0.1;
    }
    & a {
      font-size: 20px;
      margin-top: 40px;
    }
  }
`

const modalText = (theme) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-left: 30px;
  ${theme.breakpoints.down('md')} {
    margin: 0 30px;
  }
`

export default withMediaQuery([['isMobile', theme => theme.breakpoints.down('md'), {
  defaultMatches: true
}]])(App);
