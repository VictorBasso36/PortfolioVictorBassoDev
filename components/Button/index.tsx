import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/button/button.module.css'
import Link from 'next/link'

export default function Button(props:any) {
    return (
      <>
          <button className={styles.MainButton} style={{
              backgroundColor: `${props.Color}`
          }}>
                <p style={{color: `${props.textColor}`}}>
                    {props.text}
                </p>
          </button>
      </>
    )
  }
  