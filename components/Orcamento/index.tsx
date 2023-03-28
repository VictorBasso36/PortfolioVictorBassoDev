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
          <Button textColor="white" Color="black" text="Clique aqui!" />
        </div>
         
  
      </div>  
    </>
  )
}
