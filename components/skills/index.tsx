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
                        <Button text="Resume" textColor="white" Color="black"/>
                    </Link>
                    <Link href="/" >
                        <p className={styles.SimpleButton}>About me</p>
                    </Link>
                </div>
                <div className={styles.marquee}>
                    <div className={styles.marqueeInner}>
                        <div>
                            {svgNext}
                        </div>
                        <div>
                            {svgReact}
                        </div>
                        <div>
                            {svgNode}
                        </div>
                        <div>
                            {svgLaravel}
                        </div>


                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}


const svgNext =
<svg
xmlns="http://www.w3.org/2000/svg"
preserveAspectRatio="xMidYMid"
viewBox="0 0 256 256"
>
<path d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 01-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5z"></path>
</svg>

const svgReact =
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.232 23 20.463">
<circle r="2.05" fill="#61dafb"></circle>
<g fill="none" stroke="#61dafb">
  <ellipse rx="11" ry="4.2"></ellipse>
  <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
  <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
</g>
</svg>

const svgNode = 
<svg
xmlns="http://www.w3.org/2000/svg"
width="589.827"
height="361.238"
version="1.2"
viewBox="0 0 442.37 270.929"
>
    <defs>
    <clipPath id="a">
        <path d="M239.03 226.605l-42.13 24.317a5.085 5.085 0 00-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336a5.1 5.1 0 005.09 0l42.126-24.336a5.096 5.096 0 002.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317a5.123 5.123 0 00-5.1 0"></path>
    </clipPath>
    <linearGradient
        id="b"
        x1="-0.348"
        x2="1.251"
        gradientTransform="rotate(116.114 53.1 202.97) scale(86.48)"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0.3" stopColor="#3E863D"></stop>
        <stop offset="0.5" stopColor="#55934F"></stop>
        <stop offset="0.8" stopColor="#5AAD45"></stop>
    </linearGradient>
    <clipPath id="c">
        <path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39a5.318 5.318 0 00-1.32-.53zm0 0"></path>
    </clipPath>
    <linearGradient
        id="d"
        x1="-0.456"
        x2="0.582"
        gradientTransform="rotate(-36.46 550.846 -214.337) scale(132.798)"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0.57" stopColor="#3E863D"></stop>
        <stop offset="0.72" stopColor="#619857"></stop>
        <stop offset="1" stopColor="#76AC64"></stop>
    </linearGradient>
    <clipPath id="e">
        <path d="M241.066 225.953a5.14 5.14 0 00-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336a5.105 5.105 0 002.46-3.476l-46.18-78.89a5.29 5.29 0 00-1.03-.102c-.14 0-.28.007-.42.02"></path>
    </clipPath>
    <linearGradient
        id="f"
        x1="0.043"
        x2="0.984"
        gradientTransform="translate(192.862 279.652) scale(97.417)"
        gradientUnits="userSpaceOnUse"
    >
        <stop offset="0.16" stopColor="#6BBF47"></stop>
        <stop offset="0.38" stopColor="#79B461"></stop>
        <stop offset="0.47" stopColor="#75AC64"></stop>
        <stop offset="0.7" stopColor="#659E5A"></stop>
        <stop offset="0.9" stopColor="#3E863D"></stop>
    </linearGradient>
    </defs>
    <path
    fill="#689f63"
    d="M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04a8.447 8.447 0 01-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08a8.428 8.428 0 014.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07a8.397 8.397 0 01-4.21 1.12"
    ></path>
    <path
    fill="#689f63"
    d="M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98a1.164 1.164 0 01-1.16 1.26h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7"
    ></path>
    <path
    fill="#333"
    fillRule="evenodd"
    d="M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37a4.946 4.946 0 00-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105A5.154 5.154 0 000 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88a5.1 5.1 0 012.555-4.43l10.72-6.174a5.086 5.086 0 012.56-.688c.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41a2.5 2.5 0 002.56 0 2.568 2.568 0 001.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386a1.282 1.282 0 01-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324a2.568 2.568 0 00-2.544.027c-.78.46-1.262 1.3-1.262 2.21v65a1.788 1.788 0 01-2.684 1.55L281.634 63a5.108 5.108 0 00-5.112 0l-42.37 24.453a5.105 5.105 0 00-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863a5.128 5.128 0 00-2.63-4.47zm141.093 107.164a5.116 5.116 0 002.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44a5.113 5.113 0 00-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0"
    ></path>
    <path
    fill="#689f63"
    fillRule="evenodd"
    d="M394.538 105.2a.97.97 0 01.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69a.97.97 0 01-.98 0l-8.125-4.69a.979.979 0 01-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0"
    ></path>
    <g clipPath="url(#a)" transform="translate(-78.306 -164.016)">
    <path
        fill="url(#b)"
        d="M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"
    ></path>
    </g>
    <g clipPath="url(#c)" transform="translate(-78.306 -164.016)">
    <path
        fill="url(#d)"
        d="M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0"
    ></path>
    </g>
    <g clipPath="url(#e)" transform="translate(-78.306 -164.016)">
    <path
        fill="url(#f)"
        d="M197.02 225.934v107.43h91.683v-107.43zm0 0"
    ></path>
    </g>
</svg>

const svgLaravel =
<svg
xmlns="http://www.w3.org/2000/svg"
width="176"
height="51"
viewBox="0 0 176 51"
>
    <path
    fill="#FF2D20"
    fillRule="evenodd"
    d="M67.057 11.723V34.67h8.362v3.958H62.605V11.723h4.452zm24.078 11.415v-2.42h4.219v17.91h-4.22v-2.422c-.567.897-1.374 1.602-2.42 2.114-1.044.512-2.096.768-3.154.768-1.368 0-2.62-.25-3.755-.749a8.782 8.782 0 01-2.923-2.056 9.549 9.549 0 01-1.896-2.998 9.613 9.613 0 01-.678-3.613 9.67 9.67 0 01.678-3.594 9.508 9.508 0 011.896-3.016 8.79 8.79 0 012.923-2.057c1.135-.5 2.387-.75 3.755-.75 1.058 0 2.11.257 3.155.77 1.045.512 1.852 1.217 2.42 2.113zm-.388 8.725a6.226 6.226 0 00.388-2.19c0-.77-.13-1.5-.388-2.192a5.548 5.548 0 00-1.083-1.806 5.245 5.245 0 00-1.684-1.23c-.659-.307-1.388-.461-2.188-.461-.8 0-1.523.154-2.168.461-.645.308-1.2.718-1.664 1.23a5.276 5.276 0 00-1.064 1.806 6.489 6.489 0 00-.368 2.191c0 .769.122 1.5.368 2.19a5.27 5.27 0 001.064 1.807 5.29 5.29 0 001.664 1.23c.645.308 1.368.461 2.168.461s1.53-.153 2.188-.46a5.234 5.234 0 001.684-1.23 5.543 5.543 0 001.083-1.807zm7.936 6.764v-17.91h11.459v4.122h-7.24v13.788h-4.219zm26.75-15.489v-2.42h4.219v17.91h-4.22v-2.422c-.568.897-1.374 1.602-2.42 2.114-1.044.512-2.096.768-3.154.768-1.369 0-2.62-.25-3.755-.749a8.782 8.782 0 01-2.923-2.056 9.549 9.549 0 01-1.896-2.998 9.613 9.613 0 01-.678-3.613 9.65 9.65 0 01.678-3.594 9.508 9.508 0 011.896-3.016 8.79 8.79 0 012.923-2.057c1.135-.5 2.386-.75 3.755-.75 1.058 0 2.11.257 3.155.77 1.045.512 1.851 1.217 2.42 2.113zm-.388 8.725a6.226 6.226 0 00.387-2.19c0-.77-.13-1.5-.387-2.192a5.548 5.548 0 00-1.084-1.806 5.245 5.245 0 00-1.684-1.23c-.658-.307-1.387-.461-2.187-.461-.8 0-1.523.154-2.168.461-.645.308-1.2.718-1.664 1.23a5.276 5.276 0 00-1.065 1.806 6.489 6.489 0 00-.368 2.191c0 .769.122 1.5.368 2.19a5.27 5.27 0 001.065 1.807 5.29 5.29 0 001.664 1.23c.645.308 1.368.461 2.168.461s1.53-.153 2.187-.46a5.234 5.234 0 001.684-1.23 5.543 5.543 0 001.084-1.807zm21.523-11.146h4.274l-6.926 17.91h-5.302l-6.926-17.91h4.274l5.303 13.715 5.303-13.715zm13.476-.46c5.746 0 9.664 5.055 8.928 10.972h-13.998c0 1.545 1.571 4.532 5.302 4.532 3.21 0 5.36-2.803 5.362-2.805l2.85 2.19c-2.548 2.702-4.635 3.943-7.903 3.943-5.84 0-9.797-3.668-9.797-9.416 0-5.2 4.09-9.416 9.256-9.416zm-5.059 7.859h10.112c-.031-.345-.579-4.532-5.086-4.532-4.507 0-4.993 4.187-5.026 4.532zm16.735 10.511V11.723h4.22v26.904h-4.22zM49.764 11.513a.8.8 0 01.028.208v10.924a.796.796 0 01-.403.691l-9.234 5.279v10.463a.796.796 0 01-.403.69L20.478 50.787c-.044.026-.093.041-.14.058-.019.006-.036.017-.054.022a.812.812 0 01-.412 0c-.022-.006-.042-.018-.063-.026a.718.718 0 01-.132-.054L.402 39.77A.796.796 0 010 39.078V6.306a.8.8 0 01.028-.208c.006-.024.02-.045.028-.067.016-.042.03-.085.052-.124.015-.026.037-.047.054-.07.024-.032.044-.066.072-.094.023-.023.053-.04.079-.06.029-.022.055-.048.088-.067l.001-.001L10.04.106a.81.81 0 01.8 0l9.638 5.509h.002c.032.02.058.046.088.068.026.02.055.037.078.06.028.028.048.062.072.093.018.024.04.045.055.071.022.039.036.082.052.124.008.022.021.043.028.067a.8.8 0 01.027.208v20.469l8.032-4.591V11.721a.8.8 0 01.027-.208c.007-.024.02-.044.029-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.07.024-.032.044-.066.072-.093.023-.023.052-.04.078-.06.03-.023.056-.05.089-.068v-.001l9.638-5.509a.808.808 0 01.801 0l9.637 5.509h.001c.034.02.06.046.09.068.025.02.055.038.078.06.028.028.048.062.071.093.018.024.04.045.055.071.023.039.036.082.052.124.009.023.022.043.028.067zm-1.578 10.671V13.1l-3.373 1.928-4.658 2.663v9.084l8.03-4.591zm-9.637 16.433v-9.09l-4.584 2.598L20.88 39.54v9.175l17.669-10.1zM1.606 7.685v30.932l17.668 10.1v-9.174l-9.23-5.186-.002-.003-.004-.001c-.032-.018-.057-.044-.086-.066-.026-.02-.054-.036-.077-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.026-.044-.049-.06-.077l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.029-.03-.057-.038-.089v-.001c-.011-.038-.012-.078-.017-.117-.003-.03-.012-.059-.012-.09v-21.39L4.98 9.613 1.606 7.685zm8.834-5.968l-8.027 4.59 8.027 4.588 8.028-4.589-8.028-4.589zm4.176 28.638l4.658-2.662V7.685l-3.372 1.928-4.659 2.663v20.007l3.373-1.928zM39.352 7.133l-8.028 4.588 8.028 4.589 8.027-4.589-8.027-4.588zm-.803 10.558l-4.659-2.663-3.372-1.928v9.084l4.658 2.663 3.373 1.928V17.69zm-18.473 20.47l11.775-6.674 5.886-3.336-8.022-4.586-9.237 5.28-8.418 4.812 8.016 4.504z"
    ></path>
</svg>





