import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/profile/detailstecnologias/detailstecnologias.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from "react";





export default function Detailstecnologias() {
    

  return (
    <>
        <section className={styles.MainDetails}>
          <div className={styles.MainDetailsDiv}>
              <div className={styles.detailsdivtitle}>
                <Image className={styles.stickerTitle} width={185} height={185} src="/stickerestudando.png" alt="Victor Basso Programador"  ></Image>
                <h1>Tecnologias &<br /> detalhes técnicos </h1>
              </div>
              
              <div className={styles.FlexGridDetails}>
                  <div className={styles.DetailsItem}>
                    <strong>Backend</strong>
                    <p>Desenvolvimento de sistemas com laravel ou nodejs, API usando JSON Web Token ou Sanctum, MVC, Regras de Negocio, Manipulação e Analise de dados.</p>
                  </div>
                  <div className={styles.DetailsItem}>
                    <strong>Frontend</strong>
                    <p>Desenvolvimento de Interfaces, SPA, Landing Pages, Web APP, com React, NextJS, HTML, CSS, JavaScript, TypeScript além de conhecimentos avançados de SEO.</p>
                  </div>
                  <div className={styles.DetailsItem}>
                    <strong>Design</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div className={styles.DetailsItem}>
                    <strong>Banco de dados</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div className={styles.DetailsItem}>
                    <strong>Metodologias</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
              </div>
          </div>            
        </section>
    </>
  )
}
