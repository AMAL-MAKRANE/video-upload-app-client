import styled from 'styled-components'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import LoadingScreen from '../components/LoadingScreen';
import React, { useEffect } from 'react';
import Link from 'next/link';

const Title = styled.h1`
  font-size: 50px;
  color: red;
`

const BiggerTitle = styled(Title)`
  font-size: 100px;
`

export default function Home() {
    return (
        <div className={styles.container}>
            <title>FatsCast</title>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.headerH1}>FatsCast</h1>

                </div>

                <div className={styles.section1}>
                    <div styles={{ marginLeft: '0', paddingLeft: '0' }}>
                        {/* <Image src="/group10.png" width={46} height={176} alt="img style" /> */}
                    </div>
                    <div className={styles.section1Desc}>
                        <h1 className={styles.title}>
                            you don't have any videos
                        </h1>
                        <p className={styles.description}>
                            Watch your prefareable vidoes and upload them
                        </p>
                        <Link href='./register'><div className={styles.btnStart}><i class="bi bi-steam"></i><span>ADD video</span></div></Link>
                    </div>
                    <Image src='/video_files.png' width={640} height={383} styles={{ flexBasis: '60%' }} alt="img style" />
                </div>






            </main>

            <footer className={styles.footer}>
                <a
                    href="youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className={styles.footerTitle}>
                        Enjoy your videos<br />
                        ✨Amal makrane


                    </span>
                </a>
            </footer>



        </div>
    )
}
