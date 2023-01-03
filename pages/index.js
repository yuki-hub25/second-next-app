import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import LOGO from '../public/logo.jpg'
import ABOUT from '../public/profile1.jpg'
import SKILLS1 from '../public/image-2.png'
import SKILLS2 from '../public/image-3.png'
import SKILLS3 from '../public/image-4.png'
import SKILLS4 from '../public/image-5.png'
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



            <div className={styles.mein}>
                <div className={styles.container}>
                    <div className={styles.mein}>
                        <h1>YUKI.K </h1>
                        <p>website production portfolio site</p>
                    </div>

                </div>
            </div>
                <div className={styles.about} id="about">
                    <div className={styles.container}>
                        <div className={styles.profile}>
                            <h2><span className={styles.spanborder}>ABOUT</span></h2>
                            <Image className={styles.profilephoto} src={ABOUT} alt="profile" />
                            <div className={styles.profiletext}>
                            <h1>YUKI.K</h1>
                        </div>
                        <div className={styles.profilecontents}>
                            <p>栄養系の短期大学に進学し、栄養士資格を取得。<br />
                                趣味で通っていた料理教室にて、スタジオ運営/営業スタッフとして従事。<br /><br />
                                現在は、広告系事務職にて<br />
                                SNS（Facebook/Twitter/LINE）広告の、配信内容の設定/設定依頼内容の精査を主に担当。<br /><br />
                                HTML/CSSを中心に、<br />JavaScript/WordPressを含めて独学で勉強中です。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.skills} id="skills">
                <div className={styles.container}>
                    <div className={styles.skillswrapper}>
                        <h2><span className={styles.spanborder}>SKILLS</span></h2>
                        <div className={styles.skillscontents}>
                            <div className={styles.skillsblock}>
                                <div className={styles.block}>
                                    <Image className={styles.skilllogo} src={SKILLS1} alt="logo-2" />
                                    <h1>Sales　</h1>
                                </div>
                                <p className={styles.skilltext}>
                                    <br />
                                    ▼個人向け無形商材（料理教室の回数券/資格）の営業 <br />
                                    　　新規顧客：新規会員の獲得/通い方プランの提案 <br />
                                    　　既存顧客：回数券の追加購入・資格取得の提案 <br /><br />
                                    ▼責任者経験<br />
                                    　　店舗の売上管理/後輩教育/勉強会の実施<br /><br />
                                    ▼接客経験<br />
                                    　　クレーム対応/電話・問い合わせ対応 <br />
                                    　　料理・パン・ケーキの講習開講<br />
                                </p>
                            </div>

                            <div className={styles.skillsblock}>
                                <div className={styles.block}>
                                    <Image className={styles.skilllogo} src={SKILLS2} alt="logo-3" />
                                    <h1>Computer</h1>
                                </div>
                                <p className={styles.skilltext}>
                                    <br /><br /><br />▼ビジネスメール対応<br /><br />
                                    ▼PCスキル<br />
                                    　　PowerPoint：会議資料の作成が可能なレベル<br />
                                    　　Excel：関数、データ表の作成が可能なレベル<br />
                                </p>
                            </div>

                            <div className={styles.skillsblock}>
                                <div className={styles.block}>
                                    <Image className={styles.skilllogo} src={SKILLS3} alt="logo-4" />
                                    <h1>License</h1>
                                </div>
                                <p className={styles.skilltext}>
                                    <br /><br /><br /><br /> ▼栄養士免許<br /><br />
                                    ▼普通自動車運転免許
                                </p>
                            </div>

                            <div className={styles.skillsblock}>
                                <div className={styles.block}>
                                    <Image className={styles.skilllogo} src={SKILLS4} alt="logo-5" />
                                    <h1>Learning</h1>
                                </div>
                                <p className={styles.skilltext}>
                                    <br /><br /> ※現在、独学にて勉強中です<br /><br />
                                    ▼Webサイト作成スキル<br />
                                    　　HTML , CSS , JavaScript<br />
                                    　　WordPress , SASS<br /><br />
                                    ▼デザイン制作ソフト<br />
                                    　　Illustrator , Photoshopbr<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.works} id="works">
                <div className={styles.container}>
                    <div className={styles.workswrapper}>
                        <h2><span className={styles.spanborder}>WORKS</span></h2>
                        <div className={styles.workcontents}>
                            <div className={styles.worksblock}>
                                <h1 className={styles.workportfolio}>①本ポートフォリオ</h1>
                                <p>
                                    ▼HTML・CSS・SASS<br />
                                    　　レスポンシブ対応<br />
                                    　　モバイル表示時のハンバーガーメニューは、主にHTML・CSSで作成<br /><br />
                                    ▼JavaScript <br />
                                    　　モバイル表示時のハンバーガーメニューのうち、一部分導入<br /><br />

                                </p>
                            </div>

                            <div className={styles.worksblock}>
                                <h1 className={styles.workcopycoding}>②見本サイトの模写コーディング</h1>
                                <p>以下URLより、Gitページにてご確認ください。</p>
                                {/* <!-- 別サイトのURLを添付時に以下記載 */}
                                <a href="ここにリンク先のURLを入れる" target="_blank" rel="noopener noreferrer">githubのここにリンク先のURLを入れる</a>


                            </div>

                            <div className={styles.worksblock}>
                                <h1 className={styles.workIllustrator}>③バナーの模写（Illustrator）</h1>


                            </div>

                            <div className={styles.worksblock}>
                                <h1 className={styles.workPhotoshop}>④バナーの模写（Photoshop）</h1>


                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footercontents}>
                        <p className={styles.footertext}>
                            ©︎ YUKI.K portfolio_ver.1
                        </p>

                    </div>

                </div>
            </footer>

        </>
    )
}
