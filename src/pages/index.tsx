import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
//components

import Navbar from '../../components/navbar/navbar'
import Button from '../../components/Button/'
import Skills from '../../components/skills'
import Footer from '../../components/footer/'


export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Basso - Progrador Fullstack e Web/App Designer</title>
        <meta name="title" content="Victor Basso - Progrador Fullstack e Web/App Designer"/>
        <meta name="description" content="Conheça Victor Basso, um programador Fullstack e designer Web/App especializado em Next.js, Node.js, React, Laravel, Javascript, PHP, MySQL, GitHub, Photoshop e Figma. Comprometido com a satisfação do cliente, Victor cria soluções web e aplicativos inovadores. Com conhecimentos avançados em SEO, ele pode ajudar a melhorar a visibilidade do seu site. Contate Victor para seu próximo projeto!"/>
        <meta name="keywords" content="programador Fullstack, Programador backend, Programador Frontend, designer Web/App, Next.js, Node.js, React, Laravel, PHP, MySQL, Javascript, GitHub, Photoshop, Figma, soluções web, aplicativos inovadores, satisfação do cliente, design intuitivo, experiência do usuário, SEO avançado, visibilidade do site, tráfego orgânico."/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <meta name="revisit-after" content="5 days"/>
        <meta name="author" content="Victor Basso Dev @VictorBasso36"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.MainHeader}>
        <Navbar/>
      </header>
      <main className={styles.main}>
          {/* Home */}
          <div className={styles.BannerHome}>
            <div className={styles.BannerHomeContainer}>
                <h1>Hi, i´m Victor&nbsp;Basso</h1>
                <p>Desenvolvedor de software <span>Fullstack</span>_</p>
                <div className={styles.ButtonsHere}>
                  <Link href="/Contact"> 
                    <Button text="Contato" color="var(--Second-Color)"/>
                  </Link>
                  <Link href="/Profile" className={styles.SimpleButton}>
                    <p>Sobre mim</p>
                  </Link>
                </div>
               
                <Image className={styles.Sticker}  alt="Victor Basso Programador" src="/sticker.png" width={280} height={280}>

                </Image>
            </div>  
          </div>
          {/* skills */}
          <Skills/>
      </main>
      <Footer/>

    </>
  )
}
