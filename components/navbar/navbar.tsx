import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/navbar/navbar.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from "react";


export default function Navbar() {
    //Detectando Scrol
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 3) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const navbarClass = `${styles.MainNav} ${isScrolling ? styles.scrolling : ""}`;



    //Menu
    const [menu, SetMenu] = useState(false)
    useEffect(() => {
        if (menu) {
          document.documentElement.style.overflow = "hidden";
          
        } else {
          document.documentElement.style.overflow = "";
          
        }
      }, [menu]);

  return (
    <>

      <nav className={navbarClass}>

        {menu &&
        
            <div className={styles.menuNavbar} onClick={() => SetMenu(!menu)}>
                <div className={styles.HeaderMenuNavgbar}>
                    <div className={styles.CloseMenu}>
                      <div className={styles.CloseMenuContainer}>
                        <div></div>
                        <div></div>
                      </div>
                        
                    </div>
                </div>
                <div className={styles.menuNavbarContainer}>
                    <Link href="/#Porfolio" scroll={false}>
                      <p>PROJETOS</p>
                    </Link>
                    <Link href="/" target="_blank">
                      <p>BLOG</p>
                    </Link>
                    <Link href="/#Contato" scroll={false}>
                      <p>CONTATO</p>
                    </Link>
                    <Link href="/Resume" scroll={false}>
                      <p>RESUMO</p>
                    </Link>
                </div>
            </div>
        }


        <Link href="/Profile" className={styles.ProfileP}>
          <div className={styles.Profile} style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: 'url("https://avatars.githubusercontent.com/u/66968560?v=4")'
          }}>

          </div>
          {/* <p>Victor</p> */}
        </Link>
        
        <div className={styles.MainMenuNavbar}>
          <ul>
            <li>
              <Link href="/#Porfolio" scroll={false}>
                <p>PROJETOS</p>
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank">
                <p>BLOG</p>
              </Link>
            </li>
            <li>
              <Link href="/#Contato" scroll={false}>
                <p>CONTATO</p>
              </Link>
            </li>
            <li>
              <Link href="/Resume" scroll={false}>
                <p>RESUMO</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.MenuMainMenuNavbar} onClick={() => SetMenu(!menu)}>
          <div className={styles.MenuContainer}>
              <div></div>
              <div></div>
              <div></div>          
          </div>
        </div>
      </nav>
    </>
  )
}
