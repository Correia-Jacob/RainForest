import React from 'react';
import './css/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import SharedCarousel, { Controller } from '@jjunyjjuny/react-carousel';
import { Link, useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 1150px;
  height: 250px;
  margin-left: 50px;
`;
const Item = styled.div`
  background: #dbe4ff;
  text-align: center;
  font-size: 2rem;
  line-height: 145px;
`;
const ControllerBox = styled.div`
  display: flex;
  felx-direction: row;
  justify-content: center;
  margin-top: 15px;
`;

function Home() {
    const history = useHistory();
    return (
        <div className='home'>
            <div className='home__container'>
                <div className='home__carousel'>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img
                                className='home__image'
                                src='https://web.archive.org/web/20190327011717im_/https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2019/EDITORIAL/WIN2/AF_GW/DESKTOP_HERO/DH_M_S_CasualBoots_1x._CB459186236_.jpg'
                                alt=''
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className='home__image'
                                src='https://web.archive.org/web/20210602022453im_/https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-M2Y1NDFkNDQt-w3000._CB669025131_.jpg'
                                alt=''
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Container>
                        <h2 className='home__titles' style={{ textAlign: 'left', userSelect: 'none' }}>Best Sellers</h2>
                        <ControllerBox>
                            <Controller prev carouselId={'BestSellers'} />
                            <SharedCarousel itemCountPerPanel={3} customMode carouselId={'BestSellers'}>
                                <img src='https://m.media-amazon.com/images/I/61UO1jJM-FL._AC_UX679_.jpg' className='home__images' onClick={() => history.push('/hoodie')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/51Wp-KowwXL._AC_SL1024_.jpg' className='home__images' onClick={() => history.push('/applewatch')} alt='' />
                                <img src='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' className='home__images' onClick={() => history.push('/ipad')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg' className='home__images' onClick={() => history.push('/airpods')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/61LEcNh7mAL._AC_UL1024_.jpg' className='home__images' onClick={() => history.push('/shirt')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/919jHf-RRbS._AC_UX342_.jpg' className='home__images' onClick={() => history.push('/jacket')} alt='' />
                            </SharedCarousel>
                            <Controller next carouselId={'BestSellers'} />
                        </ControllerBox>
                    </Container>

                    <Container>
                        <h2 className='home__titles' style={{ textAlign: 'left', userSelect: 'none' }}>Shop the Newest Tech </h2>
                        <ControllerBox>
                            <Controller prev carouselId={'Tech'} />
                            <SharedCarousel itemCountPerPanel={3} customMode carouselId={'Tech'}>
                                <img src='https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg' className='home__images' onClick={() => history.push('/echodot')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg' className='home__images' onClick={() => history.push('/airpods')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/71-2nd6QRnL._AC_SL1400_.jpg' className='home__images' onClick={() => history.push('/pi')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/51Wp-KowwXL._AC_SL1024_.jpg' className='home__images' onClick={() => history.push('/applewatch')} alt='' />
                                <img src='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' className='home__images' onClick={() => history.push('/ipad')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/71z22cRPeeL._AC_SL1000_.jpg' className='home__images' onClick={() => history.push('/arduino')} alt='' />
                            </SharedCarousel>
                            <Controller next carouselId={'Tech'} />
                        </ControllerBox>
                    </Container>

                    <Container>
                        <h2 className='home__titles' style={{ textAlign: 'left', userSelect: 'none' }}>Recommended for you</h2>
                        <ControllerBox>
                            <Controller prev carouselId={'Recommended'} />
                            <SharedCarousel itemCountPerPanel={3} customMode carouselId={'Recommended'}>
                                <img src='https://m.media-amazon.com/images/I/71z22cRPeeL._AC_SL1000_.jpg' className='home__images' onClick={() => history.push('/arduino')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/919jHf-RRbS._AC_UX342_.jpg' className='home__images' onClick={() => history.push('/jacket')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/61LEcNh7mAL._AC_UL1024_.jpg' className='home__images' onClick={() => history.push('/shirt')} alt='' />
                                <img src='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' className='home__images' onClick={() => history.push('/ipad')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/71-2nd6QRnL._AC_SL1400_.jpg' className='home__images' onClick={() => history.push('/pi')} alt='' />
                                <img src='https://m.media-amazon.com/images/I/51Wp-KowwXL._AC_SL1024_.jpg' className='home__images' onClick={() => history.push('/applewatch')} alt='' />
                            </SharedCarousel>
                            <Controller next carouselId={'Recommended'} />
                        </ControllerBox>
                    </Container>

                </div>
            </div>
        </div>
    )
}

export default Home;
