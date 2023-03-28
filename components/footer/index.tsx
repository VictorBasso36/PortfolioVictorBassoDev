import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/footer/footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <>

      <footer className={styles.MainFooter}>
          <div className={styles.MainFooterContainer}>
            <Link href="/">
              <p>victorbassodev@gmail.com</p>  
            </Link>
            <div className={styles.ContainerIconsFooter}>
              <div>
                <Link href="/">
                  g
                </Link>
              </div>
              <div>
                <Link href="/">
                  l
                </Link>
              </div>
              <div>
                <Link href="/">
                  w
                </Link>
              </div>
              <div>
                <Link href="/">
                  t
                </Link>
              </div>
            </div>
            <Link href="/">
              <p>Copyright © 2023 Victor Basso. All rights reserved.</p>
            </Link>
          </div>
      </footer>
    </>
  )
}
