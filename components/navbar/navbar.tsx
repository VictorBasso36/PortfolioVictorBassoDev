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
          window.scrollTo(0, 0)
        } else {
          document.documentElement.style.overflow = "";
          window.scrollTo(0, 0)
        }
      }, [menu]);

  return (
    <>

      <nav className={navbarClass}>

        {menu &&
        
            <div className={styles.menuNavbar} onClick={() => SetMenu(!menu)}>
                    a
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
              <Link href="/">
                <p>PROJETOS</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>BLOG</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>CONTATO</p>
              </Link>
            </li>
            <li>
              <Link href="/">
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
