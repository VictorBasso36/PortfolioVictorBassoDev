import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
//components
import styles from '@/styles/Home.module.css'
import stylesResumo from '@/styles/Resume.module.css'
//components

import Navbar from '../../../components/navbar/navbar'
import Button from '../../../components/Button'
import Footer from '../../../components/footer/'


export default function Resume() {
  return (
    <>
      <Head>
        <title>Currículo Victor Basso - Programador Fullstack e Web/App Designer</title>
        <meta name="title" content="Victor Basso - Progrador Fullstack e Web/App Designer"/>
        <meta name="description" content="Currículo Victor Basso, um programador Fullstack e designer Web/App especializado em Next.js, Node.js, React, Laravel, Javascript, PHP, MySQL, GitHub, Photoshop e Figma. Comprometido com a satisfação do cliente, Victor cria soluções web e aplicativos inovadores. Com conhecimentos avançados em SEO, ele pode ajudar a melhorar a visibilidade do seu site. Contate Victor para seu próximo projeto!"/>
        <meta name="keywords" content="programador Fullstack, Programador backend, Programador Frontend, designer Web/App, Next.js, Node.js, React, Laravel, PHP, MySQL, Javascript, GitHub, Photoshop, Figma, soluções web, aplicativos inovadores, satisfação do cliente, design intuitivo, experiência do usuário, SEO avançado, visibilidade do site, tráfego orgânico."/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <meta name="revisit-after" content="5 days"/>
        <meta name="author" content="Victor Basso Dev @VictorBasso36"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
    
      <header className={styles.MainHeader}>
        <Navbar/>
      </header>
      <main className={styles.main}>
          {/* Home */}
          <div className={styles.BannerHome} style={{backgroundColor: '#141414'}}>
            <div className={styles.BannerHomeContainer}>
                <div className={stylesResumo.ResumeContainer}>
                    <h1>Currículo em PDF</h1>
                    <p className={stylesResumo.ResumeContainerText}>Olá, meu nome é Victor Basso, tenho 20 anos e sou um <span>Programador Fullstack Junior e designer Web/App</span>. Gosto de criar soluções web e aplicativos inovadores, orquestrando computadores para expressar minha criatividade e ideias por meio de códigos e design. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades.</p>
                    <div className={stylesResumo.ContainerBannerResumo}>
                        <Button Color="white" text="Baixar aqui" color="var(--Second-Color)"/>
                        <Link href="/Profile">
                            <p className={stylesResumo.Aboutme}>Sobre mim</p>
                        </Link>
                    </div>
                </div>
                <Image className={styles.Sticker} layout={"responsive"} alt="Victor Basso Programador" src="/sticker.png" width={250} height={250}>

                </Image>
            </div>  
          </div>
    


      </main>
      <Footer/>
    

    </>
  )
}



const github = 
<svg
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width="32"
height="32"
fill="none"
viewBox="0 0 32 32"
>
<path fill="url(#pattern0)" d="M0 0H32V32H0z"></path>
<defs>
  <pattern
    id="pattern0"
    width="1"
    height="1"
    patternContentUnits="objectBoundingBox"
  >
    <use transform="scale(.01)" xlinkHref="#image0_4_24"></use>
  </pattern>
  <image
    id="image0_4_24"
    width="100"
    height="100"
    xlinkHref="data:image/png;base64,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"
  ></image>
</defs>
</svg>


const whatsapp =
<svg
xmlns="http://www.w3.org/2000/svg"
width="32"
height="32"
fill="#FFF"
viewBox="0 0 128 128"
>
<path d="M64 2C29.8 2 2 29.8 2 64c0 10.5 2.6 20.8 7.7 29.9l-5.3 19.4c-.9 3.1 0 6.3 2.3 8.6s5.5 3.2 8.6 2.4l20.2-5.3c8.8 4.6 18.6 7 28.6 7 34.2 0 62-27.8 62-62 0-16.6-6.4-32.1-18.1-43.8C96.2 8.5 80.6 2 64 2zm0 6c15 0 29.1 5.8 39.6 16.4C114.2 35 120.1 49.1 120 64c0 30.9-25.1 56-56 56-9.3 0-18.6-2.4-26.8-6.8-.4-.2-.9-.4-1.4-.4-.3 0-.5 0-.8.1l-21.3 5.6c-1.5.4-2.5-.4-2.9-.8-.4-.4-1.2-1.4-.8-2.9l5.6-20.6c.2-.8.1-1.6-.3-2.3C10.5 83.5 8 73.8 8 64 8 33.1 33.1 8 64 8zm0 9c-25.9 0-47 21-47 47a47 47 0 006.3 23.5c1.6 2.8 2 6.1 1.2 9.2l-2.9 10.5 11.2-2.9c1-.3 2-.4 3-.4 2 0 4 .5 5.7 1.5C48.4 109 56.1 111 64 111c25.9 0 47-21.1 47-47 0-12.6-4.9-24.4-13.8-33.3C88.4 21.9 76.6 17 64 17zM43.1 36.7h2.8c1.1 0 2.2.1 3.3 2.5 1.3 2.9 4.2 10.2 4.5 10.9.4.7.6 1.6.1 2.6s-.7 1.6-1.5 2.5c-.7.9-1.6 1.9-2.2 2.6-.7.7-1.5 1.5-.6 3s3.8 6.3 8.2 10.2c5.6 5 10.4 6.6 11.9 7.3 1.5.7 2.3.6 3.2-.4.9-1 3.7-4.3 4.7-5.8s2-1.2 3.3-.7c1.4.5 8.6 4.1 10.1 4.8 1.5.7 2.5 1.1 2.8 1.7.4.8.4 3.7-.8 7.2-1.2 3.4-7.2 6.8-10 7-2.7.2-5.2 1.2-17.7-3.7-15-5.9-24.5-21.3-25.2-22.3-.7-1-6-8-6-15.3 0-7.3 3.8-10.8 5.2-12.3 1.4-1.5 2.9-1.8 3.9-1.8z"></path>
</svg>

const linkedin =
<svg
xmlns="http://www.w3.org/2000/svg"
width="32"
height="32"
fill="#FFF"
viewBox="0 0 50 50"
>
<path d="M8 3.01c-3.47 0-5.99 2.08-5.99 4.94 0 2.87 2.58 5.04 5.99 5.04 3.47 0 5.99-2.12 5.99-5.1-.16-2.87-2.63-4.88-5.99-4.88zM3 15c-.55 0-1 .45-1 1v29c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V16c0-.55-.45-1-1-1H3zm15 0c-.55 0-1 .45-1 1v29c0 .55.45 1 1 1h9a1 1 0 001-1V29.5c0-2.37 1.82-4.3 4.14-4.48.12-.02.24-.02.36-.02s.24 0 .36.02c2.32.18 4.14 2.11 4.14 4.48V45a1 1 0 001 1h9c.55 0 1-.45 1-1V28c0-6.47-3.47-13-11.21-13-3.52 0-6.18 1.36-7.79 2.49V16c0-.55-.45-1-1-1H18z"></path>
</svg>

const telefone =
<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="url(#pattern0)" d="M0 0H32V32H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01)" xlinkHref="#image0_4_25"></use>
        </pattern>
        <image
          id="image0_4_25"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEp0lEQVR4nO3dSYgdRRgA4I77vhKXqBHcQQ+iXhQxeNCTuOCCStwwjFuUeIqJAQ+iBE+uUQ+iCIJicEsU3OIWQRTEEDAiGsxixCWamE3F5JNiOiomceZNpru66tV3n5n6+3/Tr6vqr7+rqiiKoiiKoug47Ic78DHW4zcswJ3YM/b4+gouxQ+27QscGnuc2cNOmGl45mOH2GPOFg7Au3pzS+xxZwlH17ehXq0NPxt7/FnBGUN8XwxlHsbEjiMLmFg/PW2vG2LHkjxcj41GR7h1HRU7pmRh0igmY7O3y61rBHA5NmnGpJGMqW/hVKzTnNUYHzvOJISZNVZo3muxY00C5mjPdbHj7TSco12/4LDYcXcWXtG+ubHj7iysFMdVsWPvpHriFsPKsky/9YQsFs+c9j+CHYePxHVl7GvQKXg6ckJ+wsGxr0Nn4Hbx3RP7OnQGJsTOBr6KfR06A7tiTeSErI19Hfp56WRrvo99DToFN4nrjdjXoFMwFn9ETMiNsa9B5+ClSMlYjb1jx985uChSQmbEjr2TsCO+bjkZy7FH7Ng7K8IkcWLsmDsN+9QbSG34pNT/Di8pM1pKyFnNf8QygL3CRK3hZMyOHWdSMKXBZPyOY2LHmBTsMsKK9+GYFTu+JDVYjbIknDeJHV+S8HJDSZldan1HlpBxWNVQUqaN/keoD4SjaQ0lZCPOix1fcsLkDe83lJRVODF2jMnB4Q0W1C3HEbFjTA4u1pyFoRlB7BiTgycaTMo7YX8/doxJCW0zGpwwBs+GbYDYcSYFp9TLH015qqwC956UyZo1q0wce0/K4w0n5f5ex9TXsPMI+p/06u7YcSYlFEljacNJmRk7zqTg5IaPUwePlO+U3pJyRYMNBzZ7tDx99ZaU6Zr3TGik1vO/cb/Cwy0k5bmwoxk71pRWhp9vISnzsG/seJOA3fBeC0lZMNIGBHX92a14q17FXlcffr0XB1W5wf71Cm7TlvSyn1Kvxd01xAGlH0NXpCrTOcqiFpLyKy4cYixj6va23/Twe+dm1wIkbDy1dA5+U93Cdov+jjgbn47w94ay2oEqJ6G9H5Zpx+zNG104bhTPvIR+MOOqXOB4fKcdi/FYAyfCfsY1VS5w0na2nO2KV0ONQZUDnIBvpS8cwxvIYn2tvrcvk4fXs+gjiSND9wZ5CJPKqckvfBp8JP5SPkIx4bFVBrXDC+UjrADcnPR3i8G39bSx9tWmUGN2SJX4guRseVmU9OufDC7dPyQv06vUYVoL28Ft+azK6KUA66VvfZVZyepSaVtVZbin8oF0za8yfV3fg9I0pcqVwQnXaLwTqy0rsu8DZrBKso1t4e0VnhIvqPoBdscDuu2+qt/gknoXr2ve7NvqSoxv4UhELz7v+8OrBkt8BupdvJhCPVfpcvSfs/QvRkrGBpz+92CKf+Dc+tbRlj9x2b+GUGzjuN3kFkqPQr+Wq7cYQPG/tbxTG2oLEpJx7Tb+dDGMxAyM4qRyQ5YF2ZE2wc7HC9vR/CAsiZzW+uBzhwPDu97r+t81w1wOCV0mxsYee780/TwTt+FJfFi3XV9XV8CHYusJscdZFEVRFEVRVEP4Czo6iWQ6CRWgAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>