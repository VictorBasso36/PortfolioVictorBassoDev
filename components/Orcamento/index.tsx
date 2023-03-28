import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/orcamento/orcamento.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from "react";

import Button from '../Button/';

export default function Orcamento() {



  return (
    <>

      <div className={styles.MainOrcamento}>
        <div className={styles.MainOrcamentoCotainer}>
          <h3>Dúvidas & Orçamento</h3>
          <Link href="https://wa.me/5511999978633?text=Ol%C3%A1!%20Aqui%20%C3%A9%20o%20Victor%20Basso,%20programador%20fullstack%20e%20webdesigner.%20Estou%20dispon%C3%ADvel%20para%20conversar%20sobre%20seus%20projetos%20e%20ideias%20para%20a%20web.%20Obrigado!" target="_blank">
            <Button textColor="white" Color="black" text="Clique aqui!" />
          </Link>
        </div>
         
  
      </div>  
    </>
  )
}
