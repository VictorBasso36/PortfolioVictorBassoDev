import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/porfolio/porfolio.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'

import Button from '../Button/';

export default function Porfolio() {


  return (
    <>

      <div className={styles.MainPortfolio} id="Porfolio">
        <div className={styles.MainPortfolioContainer}>
            <h3>Web Design & Development Portfolio</h3>
            <div className={styles.PorfolioHere}>
            <Swiper
            loop={true}
            spaceBetween={30}
            autoplay={{ delay: 2000 }}
            slidesPerView={2.5}  
            centeredSlides={true}
            grabCursor={true}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              280: {
                slidesPerView: 1.4,
                spaceBetween: 30,
              },
              850: {
                slidesPerView: 1.4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              }
            }}
          >

            <SwiperSlide >
              <Link href="/" title="Victor Basso Dev Perfil" >
                <div className={styles.MainPortfolioItem}  style={{ backgroundImage: `url('/Rectangle 4.png')` }}  >
                   
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
              <Link href="https://grupogenesis.com.br/" target="_blank" title="Victor Basso Dev Perfil">
                <div className={styles.MainPortfolioItem} style={{ backgroundImage: `url('/Rectangle 1.png')` }}  >
                   
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
              <Link href="https://arquelab.com.br/" target="_blank" title="Victor Basso Dev Perfil">
                <div className={styles.MainPortfolioItem} style={{ backgroundImage: `url('/Rectangle 2.png')` }}  >
                   
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
              <Link href="https://arquebricks.com.br/" target="_blank" title="Victor Basso Dev Perfil">
                <div className={styles.MainPortfolioItem} style={{ backgroundImage: `url('/Rectangle 3.png')` }}  >
                   
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
              <Link href="https://github.com/VictorBasso36" target="_blank" title="Victor Basso Dev Perfil">
                <div className={styles.MainPortfolioItem} style={{ backgroundImage: `url('/github-wallpaper-scaled.jpeg')` }}  >
                   
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
              <Link href="https://www.linkedin.com/in/victor-basso-b3090a189/" target="_blank" title="Victor Basso Dev Perfil">
                <div className={styles.MainPortfolioItem} style={{ backgroundImage: `url('/LinkedIn-simbolo.jpg')` }}  >
                   
                </div>
              </Link>
            </SwiperSlide>
        
          </Swiper>

            </div>
        </div>
      </div>  
    </>
  )
}


