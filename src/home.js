import React from 'react';
import { Helmet } from "react-helmet";
import arrow1 from './img/arrow1.png';

function Home() {
  return (
    <div className="row page-padding">
        <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" />
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/fontawesome.min.css" integrity="sha512-8jdwayz5n8F2cnW26l9vpV6+yGOcRAqz6HTu+DQ3FtVIAts2gTdlFZOGpYhvBMXkWEgxPN3Y22UWyZXuDowNLA==" crossorigin="anonymous" /> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" />
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/emojione/4.5.0/lib/js/emojione.min.js" integrity="sha512-E2Ai/A9+KcoBm0lvfnd5krbr7TWUigQGWTfcoMToNpfmCvQKkZdTbpwyIM4PFbCGMtSmMjE/DAXGjVXpWGdFaQ==" crossorigin="anonymous"></script>
        </Helmet>
        <section id="MainNavigation" className="col-12">
            <nav className="col">
                <ul className="float-right">
                    <li><a href="#AboutMe">About Me</a></li>
                    &nbsp;<big className="middot"><strong>&middot;</strong></big>&nbsp;
                    <li><a href="javascript:void(0)">Portfolio</a></li>
                    &nbsp;<big className="middot"><strong>&middot;</strong></big>&nbsp;
                    <li><a href="javascript:void(0)">Resumé</a></li>
                </ul>
            </nav>
        </section>
        <section className="col-12">
            <header className="text-center">
                <h1 style={Styles.header}>
                    <strong className="xtext-gradient-1">Hey! Look, it's Me!<br/><small><i>(tehjéan)</i></small></strong>
                    <span style={Styles.arrowAnim}>
                        <img style={Styles.headerArrow} src={arrow1}/>
                    </span>
                </h1>
            </header>
        </section>
        <section className="col-12">
            <section style={Styles.imageFirstContainer}>
                <section style={Styles.imagePulse}></section>
                <section className="anim" style={Styles.imageSecondContainer}>
                    <section style={Styles.imageContainer}></section>
                </section>
            </section>
            <section className="text-center">
                <h4 style={Styles.titlesHeading}>
                    <i className="fa fa-terminal text-gradient-1 text-bold pulseFade xanimate__animated xanimate__fadeIn xanimate__slow xanimate__infinite"></i>&nbsp;&nbsp;
                    Web Developer / Mobile App Developer / Photo-Editor
                </h4>
            </section>
            <hr/>
        </section>
        <section id="AboutMe" className="col-12 page-section">
            <header className="section-header">
                <h2 className="title text-gradient-1"><i>#</i>About_Me</h2>
            </header>
            <section className="content xshadow-lg xtext-italic text-center">
                <p>I'm Tehjéan and I'm an application dev from Jamaica
                    <span className="flag flag-jm"></span>
                </p>
                <p>
                    <span class="emoji emoji-grad"></span>&nbsp;I'm a 2018 NCU (Northern Caribbean University) Graduate
                    <br/>
                </p>
                <p><br/><hr/><br/></p>
                <p>
                    Outside of tech stuff...
                    <br/>I enjoy listening to and making music <span class="emoji emoji-music1"></span>
                    <br/>anime <span class="emoji emoji-tv"></span>
                    <br/>watching cars go <i>"vrooooommm"</i> <span class="emoji emoji-md emoji-car1"></span>
                    <br/> and staring into a star-filled night sky <span class="emoji emoji-stars1"></span>
                </p>
            </section>
        </section>
    </div>
  );
}

const Styles = {
    header: {
        margin: '40px 0 0 0',
        fontSize: '56px',
        // color:'#7e25f2'
        color:'#a29bfe'
    },
    headerArrow: {
        position: 'relative',
        height: '50px',
        transform: 'rotateZ(160deg)',
    },
    arrowAnim: {
        position: 'relative',
        display:'inline-block',
        top: '25px', left: '0px',
    },
    imageFirstContainer: {
        position: 'relative',
        // top:'calc(50% - 190px)',left: 'calc(50% - 190px)',
        // transform: 'transalte(50%,50%)',
        width:'360px',
        height: '360px',
        padding: '10px',
        margin: '10px auto 30px auto',
        display:'block'
    },
    imageSecondContainer: {
        position: 'relative',
        width:'100%',
        height: '100%',
        padding:'15px',
        borderRadius: '50%',
        backgroundColor:'#a29bfe',
        background: 'radial-gradient(#6c5ce7,  #D6A2E8)',
        // boxShadow: '0px 4px 20px 2px rgba(212,212,212,1)',
        boxShadow: '0px 4px 20px 2px #b3a2e8',
        animationName: 'AnimZoom1',
        animationDuration: '0.5s'
    },
    imagePulse: {
        position: 'absolute',
        top: '-6px', left: '-6px',
        width: 'calc(100% + 12px)', height: 'calc(100% + 12px)',
        borderRadius: '50%',
        animationName: 'pulse',
        animationDuration: '3s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'infinite',
        // animationDirection: 'alternate-reverse',
        backgroundColor: 'rgba(0,0,0,0.02)'
    },
    imageContainer: {
        position:'relative',
        width:'100%',
        height: '100%',
        display:'block',
        borderRadius: '50%',
        overflow:'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://lh3.googleusercontent.com/7fdrhYFxMRiC6Csvbq4JA2_QRcMqa_C28rAZwV89mpM2sozqNxWDflnRr8etUrbPozqoI3ZdlRjMEAX2h3xwKQiO774V2IS-18czs9gZm5JtdFlnzuToMSVDQgXX1nG4ZbFBdMxAQFCVUMhipC_U7aXehTnYfJvOTDaiYOrxYJumsLD72zIqyCBYsatTcUdEwM2NyV7RgoxGi-t-Q2F9E6RL4xJNvpajIGeVPtsbF3NDKC0Cb6piYViBn2p1ZsXKiStu-ZmYVPJUfvNnrT7E87ZoTxyUD4FsjcsJtAceAtaSfNvtCUKYX_tjVCupKRrDZ8Ow__77jWUH56OrB2saICPh9g7Zevkc27xZ3Zy4E2wz_4ueSelvfJ269fdAcyhZRJBPaNEagiRCxKL-S4ZTrpHpV71ahCRWuYlR-IVNUUm0NqXX0Qg_aS4gIP1XYzq5fhrd-7mgqvrU_2cjChctXC-86hILqu0v7JW_BrpcOW364tbG29CGndvdZ8nfEPn_ezIfDr96egSQae4N4C8_4k3m5q3lqOnxDcILbwi8vd4VF2W58hU8IoeXpva_WGErVVoNeRz6qtJ4m71FIcaI9lK4wUMIFFqLBdOn-lzpm8ou6WDWFLiMkEmoUGYwDzwtaxaqXzCFToN6ByTxiFTBrj5Y3U3mNwvtj0_eUr4aAWoNFMrxSS5jS8mikyVHlw=w738-h984-no?authuser=0)',//'url(https://source.unsplash.com/random?portrait)',
        // backgroundImage: 'url(https://lh3.googleusercontent.com/Iert92PPgnxKwICw1IiR6wnesRWt9vwjOuVbR7gs14x9i8XxxlAPXVFJ0WoQbZCfSMKxvh2IHZ98rYfrdxK-2uIL-qsPx1xo4zf4rHp7lEClGEdsWFMpQMUYd9pN2RKdI6sNvWGXXHavsfhLPaAD1auI1x_eypw2ES0dnu0xLIKar--LlU90M1giLcAgY4VJNxMc0cpb9BfnLvrxayC579lmV4-X_VE-ccmWT9-cKlqmivR7n4D42nMkVzRs_lwTCxxzlffLxodU_CO-ZD2YdTWKeEcjP8v8CYHuwsAavvHYhUGG_9Bq0T1STJheaT1-2-JZdIrrlcThZhGQpRejlDCFzk-F-nyosSF2CgQg01pdZ_X0CN2McHoQxB2wiGRn8PZmFdmWlA--2Q0i8E6LkIb_WggTnhpW5zcBvZq36JsccRMiMRjGIwN0YJpmEvsJJlJl3R74XkuDZmL1hECCiH207feGlhQogEoEbIFN4VMPRPS2ryhvWraL6JZFG_2vV5JpQkYJ6VijBJwGWbEMc8LjJDiHSZnfjiyAKbYRB0-mZwa1f3uXO5TeaKVRjsDdSROkRL2TG5Xyi-2h8YOpK4sikdYR5l7TK3N78cPunNzmyqJ-Qf2PMWt5re2ErZMo2b5kA1m_VD3EEgHO5RkNeLPDaZutcHRgN0Lz_KpIm-w2U2iEaR1gDACzmSCVvQ=w480-h640-no?authuser=0)',
        backgroundColor: '#f5f5f5',
        // display:'none',
        // boxShadow: '0px 4px 20px 2px rgba(212,212,212,1)'
    },
    titlesHeading: {
        position: 'relative',
        display: 'inline-block',
        padding: '20px',
        borderRadius: '13px',
        border: '1px solid rgba(0,0,0,0.0.6)',
        textShadow: '0px 0px 7px rgba(150, 150, 150, 0.5)',
        backgroundColor: '#fff'
    }
};

export default Home;
