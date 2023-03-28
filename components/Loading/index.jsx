import Head from 'next/head'
import Image from 'next/image'
//  
import Link from 'next/link'
import React, { useState, useEffect } from "react";



import Button from '../Button';




export default function Loading({ progress }) {
    

  return (
    <div>
    <div>Carregando...</div>
    <div>{progress}%</div>
    <div style={{ width: `${progress}%`, height: "10px", backgroundColor: "blue" }} />
  </div>
  )
}




