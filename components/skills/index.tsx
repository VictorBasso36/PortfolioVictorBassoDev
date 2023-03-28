import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/skills/skills.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from "react";



import Button from '../Button';




export default function Skills() {
    

  return (
    <>
        <section className={styles.MainSectionSkills}>
            <div className={styles.MainSectionSkillsContainer}>
                <h2>Habilidades & Tecnlogias</h2>
                <div className={styles.ButtonsSkills}>
                    <Link href="/">
                        <Button text="Resumo" textColor="white" Color="black"/>
                    </Link>
                    <Link href="/" >
                        <p className={styles.SimpleButton}>Sobre mim</p>
                    </Link>
                </div>
                <div className={styles.marquee}>
                    
                    
                        <div className={styles.marqueeInner}>
                        
                            <div>
                                <img src="/figmaicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/githubicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/htmlicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/laravelicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/mysqlicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/nextjsicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/nodejsicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/photoshopicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/reactIcon.png" alt="" />
                            </div>
                            <div>
                                <img src="/reactnativeicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/cssicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/vercelicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/figmaicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/githubicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/htmlicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/laravelicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/mysqlicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/nextjsicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/nodejsicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/photoshopicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/reactIcon.png" alt="" />
                            </div>
                            <div>
                                <img src="/reactnativeicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/cssicon.png" alt="" />
                            </div>
                            <div>
                                <img src="/vercelicon.png" alt="" />
                            </div>
                        
                        </div>
             
                </div>
            </div>
            
        </section>
    </>
  )
}
