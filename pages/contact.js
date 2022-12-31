import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/contact.module.css'
import LOGO from '../public/logo.jpg'

import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }
    const closeNav = () => {
        setNavIsOpen(false) 
    }

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=320, initial-scale=1.0" />
                <title>portfolio</title>
            </Head>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.headerlogo}>
                            <Link href="/"><Image src={LOGO} alt="logo" /></Link>
                        </div>

                        <div className={styles.headermenu}>
                            <ul className={styles.menu}>
                                <li><Link href="./#about">ABOUT</Link></li>
                                <li><Link href="./#skills">SKILLS</Link></li>
                                <li><Link href="./#works">WORKS</Link></li>
                                <li><Link href="./contact">CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className={navIsOpen ? styles.open : styles.close}>

<button className={styles.btn} onClick={toggleNav}>
    <span className={styles.bar}></span>
    <span className={styles.srOnly}>MENU</span>
</button>

<ul className={styles.list}>
    <li className={styles.menuall}>
        <h2><span className={styles.spanborder}>MENU</span></h2>
    </li>
    <li>
        <Link href="./#about" className={styles.LinkMenu} onClick={closeNav}>
            ＞ ABOUT
        </Link>
    </li>
    <li>
        <Link href="./#skills" className={styles.LinkMenu} onClick={closeNav}>
            ＞ SKILLS
        </Link>
    </li>
    <li>
        <Link href="./#works" className={styles.LinkMenu} onClick={closeNav}>
            ＞ WORKS
        </Link>
    </li>
    <li>
        <Link href="./contact" className={styles.LinkMenu} onClick={closeNav}>
            ＞ CONTACT
        </Link>
    </li>
</ul>
</nav>

</header>
            <div className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.contactwrapper}>
                        <h2><span className={styles.spanborder}>CONTACT</span></h2>
                        <div className={styles.contactcontents}>
                            <h1>お問い合わせは、下記フォームよりお願いいたします。</h1>
                            <form id="form" action="" method="post">
                                <div className={styles.contactblock}>
                                    <label className={styles.label} htmlFor="contactname">お名前（必須）</label>
                                    <input className={styles.contactname} type="text" />
                                </div>

                                <div className={styles.contactblock}>
                                    <label className={styles.label} htmlFor="contactmall">メールアドレス（必須）</label>
                                    <input className={styles.contactmall} type="text" />
                                </div>

                                <div className={styles.contactblock}>
                                    <label className={styles.label} htmlFor="contactmessage">お問い合わせ内容</label>
                                    <input className={styles.contactmessage} type="text" />
                                </div>
                                <p className={styles.coment}>
                                    ※必須項目は必ずご記入ください<br /><br />
                                    ※現在こちらのフォームは停止しております</p>

                                <input className={styles.formbtn} type="submit" value="送信する" />
                                <div className={styles.backbtn}>
                                    <Link href="/">← Back</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footercontents}>
                        <p className={styles.footertext}>
                            ©️ YUKI.K portfolio_ver.1
                        </p>

                    </div>

                </div>
            </footer>
        </>
    )
}
