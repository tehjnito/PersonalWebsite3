import React from 'react';
import { Helmet } from "react-helmet";
import arrow1 from './img/arrow1.png';
import grdplz from './img/grdplz.png';
import fixedheader from './img/FH-LogoFull.png';
import logo_js from './img/tech-logos/javascript-js-seeklogo.com.svg';
import logo_nodejs from './img/tech-logos/nodejs-seeklogo.com 2.svg';
import logo_reactjs from './img/tech-logos/react-seeklogo.com.svg';
import logo_nextjs from './img/tech-logos/nextjs-logo-seeklogo.com.png';
import logo_reactnative from './img/tech-logos/reactnative_logo.svg';
import logo_mysql from './img/tech-logos/MySQL.png';
import logo_unity from './img/tech-logos/unity-seeklogo.com.svg';
import logo_firebase from './img/tech-logos/firebase-seeklogo.com.svg';
import PortfolioEntry from './portfolio-entry';
import PhotoCompare from './photo-compare';


function Home() {
  return (
    <div id="Home" className="row page-padding">
        <Helmet>
            {/* <title>Home - 👊 Tehjéan Powell</title> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" />
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/fontawesome.min.css" integrity="sha512-8jdwayz5n8F2cnW26l9vpV6+yGOcRAqz6HTu+DQ3FtVIAts2gTdlFZOGpYhvBMXkWEgxPN3Y22UWyZXuDowNLA==" crossorigin="anonymous" /> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" />
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/emojione/4.5.0/lib/js/emojione.min.js" integrity="sha512-E2Ai/A9+KcoBm0lvfnd5krbr7TWUigQGWTfcoMToNpfmCvQKkZdTbpwyIM4PFbCGMtSmMjE/DAXGjVXpWGdFaQ==" crossorigin="anonymous"></script>
        </Helmet>
        <section id="MainNavigation" className="">
            <nav className="">
                <ul className="">
                    <li><a href="#TechStack" data-spy="scroll" data-target="#AboutMe" data-offset="100">Techstack</a></li>
                    &nbsp;<big className="middot"><strong>&middot;</strong></big>&nbsp;
                    <li><a href="#Portfolio" data-offset="100">Portfolio</a></li>
                    &nbsp;<big className="middot"><strong>&middot;</strong></big>&nbsp;
                    <li><a target="_blank" href={process.env.PUBLIC_URL + "/_TehjeanPowell_2020_Resume4.pdf"}>Resumé</a></li>
                    &nbsp;<big className="middot"><strong>&middot;</strong></big>&nbsp;
                    <li><a href="https://github.com/tehjnito" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
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
        <section className="col-12 p-0" style={{marginBottom:'100px'}}>
            <section id="DpContainer" style={Styles.imageFirstContainer}>
                <section style={{...Styles.imagePulse, ...{animationDelay:'0.5s',animationDuration:'2s'}}}></section>
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
        <section id="AboutMe" className="d-none xcol-12 xoffset-md-3 col-lg-12 page-section">
            <header className="section-header">
                <h2 className="title text-gradient-1"><i className="hidden">#</i>About Me</h2>
            </header>
            <section className="content xshadow-lg xtext-italic text-center">
                <p>I'm Tehjéan and I'm an application dev from Jamaica
                    <span className="flag flag-jm"></span>
                </p>
                <p>
                    <span className="emoji emoji-grad"></span>&nbsp;I'm a 2018 NCU (Northern Caribbean University) Graduate
                    <br/>
                </p>
                <p><hr/></p>
                <p>
                    Outside of tech stuff...
                    <ul className="list-style-none">
                        <li>I enjoy listening to and making music <span className="emoji emoji-music1"></span></li>
                        <li>watching anime <span className="emoji emoji-tv"></span></li>
                        <li>watching cars go <i>"vrrroooommmm"</i> <span className="emoji emoji-md emoji-car1"></span></li>
                        <li>and staring into a star-filled night sky <span className="emoji emoji-stars1"></span></li>
                    </ul>
                </p>
            </section>
        </section>
        <section id="TechStack" className="xcol-12 xoffset-md-3 col-lg-12 page-section">
            <header className="section-header">
                <h2 className="title text-gradient-1"><i className="hidden">#</i>TechStack</h2>
            </header>
            <section className="content xshadow-lg xtext-italic text-center">
                <h4><br/><strong>My Most Frequently Used Tools</strong><br/><br/></h4>
                <ul className="d-none list-style-none">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/">Nodejs</a> <small>(ExpressJS)</small></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">ReactJS</a> <small>(Nextjs/ReactNative)</small></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.mysql.com/">MySQL</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/">Firebase</a> <small>(Authentication/Storage/Notifications)</small></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://unity.com/">Unity3D</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/puppeteer/puppeteer/">Puppeteer</a> <small>(Don't ask lol)</small></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://laravel.com/">PHP/Laravel</a> <small>(sometimes-ish)</small></li>
                </ul>
                <ul id="TechStackImageList" className='list-style-none'>
                    <li><img title="Javascript" src={logo_js} alt="Javascript Logo"/><a target='_blank' href="https://developer.mozilla.org/en-US/docs/Web/javascript">Javascript</a></li>
                    <li><img title="NodeJS" src={logo_nodejs} alt="NodeJS Logo"/><a target='_blank' href="https://nodejs.org/">NodeJS</a></li>
                    <li><img title="ReactJS" src={logo_reactjs} alt="ReactJS Logo"/><a target='_blank' href="https://reactjs.org/">ReactJS</a></li>
                    <li><img title="ReactNative" src={logo_reactnative} style={{transform:'scale(0.9)'}} alt="ReactNative Logo"/><a target='_blank' href="https://reactnative.dev/">ReactNative</a></li>
                    <li><img title="NextJS" src={logo_nextjs} style={{transform:'translateY(-5px)'}} alt="NextJS Logo"/><a target='_blank' href="https://nextjs.org/">NextJS</a></li>
                    <li><img title="MySQL" src={logo_mysql} style={{transform:'translateY(2px)'}} alt="MySQL Logo"/><a target='_blank' href="https://www.mysql.com/">MySQL</a></li>
                    <li><img title="Firebase" src={logo_firebase} style={{transform:'scale(0.6) translateY(3px)'}} alt="Firebase Logo"/><a target='_blank' href="https://firebase.google.com/">Firebase</a></li>
                    <li><img title="Unity3D Game Engine" src={logo_unity} style={{transform:'scale(1.3) translateY(-13px)'}} alt="Unity Game Engine Logo"/><a target='_blank' href="https://unity.com/">Unity</a></li>
                </ul>
            </section>
        </section>
        <section id="Portfolio" className="col-12 page-section">
            <header className="section-header">
                <h2 className="title text-gradient-1"><i className="hidden">#</i>Portfolio</h2>
            </header>
            <section style={{minHeight:'600px'}} className="content xshadow-lg">
                <ul className="nav nav-pills flex-column flex-md-row nav-justified pt-3 mb-3" id="PortfolioTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#portfolio-web" role="tab" aria-controls="portfolio-web" aria-selected="true">
                            <span className="shadow">
                                <span className="fa-stack">
                                    <i className="fa fa-sm fa-code text-bold"></i>
                                </span>
                                <span className="text">&nbsp;Web Dev</span>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#portfolio-mobile" role="tab" aria-controls="portfolio-mobile" aria-selected="false">
                            <span className="shadow">
                                <span className="fa-stack">
                                    <i className="fa fa-sm fa-android"></i>
                                </span>
                                <span className="text">&nbsp;Mobile Dev</span>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#portfolio-game" role="tab" aria-controls="portfolio-game" aria-selected="false">
                            <span className="shadow">
                                <span className="fa-stack">
                                    <i className="fa fa-sm fa-gamepad"></i>
                                </span>
                                <span className="text">&nbsp;Game Dev</span>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#portfolio-photo" role="tab" aria-controls="portfolio-photo" aria-selected="false">
                            <span className="shadow">
                                <span className="fa-stack">
                                    <i className="fa fa-sm fa-camera-retro"></i>
                                </span>
                                <span className="text">&nbsp;Photo-Editing</span>
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="portfolio-tabContent">
                    <div className="tab-pane fade show active" id="portfolio-web" role="tabpanel" aria-labelledby="portfolio-web-tab">
                        <PortfolioEntry 
                            featuredImage={"https://tehjnito.surge.sh/_ASSETS/_IMG/Portfolio/WebDev/webja.jpg"}
                            title="Webja"
                            techStack="AngularJS, PHP"
                            renderDescription={
                                () => {return(
                                    <p>
                                        Created in 2017/18, this was a website which allowed people to find and/or advertise across six different categories to the Jamaican population specifically.
                                    </p>
                                );}
                            }/>
                        <PortfolioEntry 
                            featuredImage={grdplz}
                            title="GrandPlaza"
                            techStack="ReactNative, Firebase, Nextjs, ExpressJS"
                            renderDescription={
                                () => {return(
                                    <p>
                                        Created in 2019/20, GrandPlaza was a forum where people would be able to share product/services in groups.
                                        <br/><br/>This platform consisted of an android app and a view-only website.
                                    </p>
                                );}
                            }/>
                        <PortfolioEntry 
                            featuredImage={fixedheader}
                            title="Fixed-Header"
                            techStack="HTML, CSS, JavaScript | Backend -> NodeJS/MongoDB"
                            renderDescription={
                                () => {return(
                                    <p>
                                        Made in 2022. Extremly simple browser extension. Extremely satifying results (for me...).
                                        <br/>It keeps the main navigation bar of certain websites visible regardless of how far down a page you scroll <small><em>(looking at you amazon.com)</em></small>.
                                        <br/><small><em className="text-muted">why aren't all websites created like this? idk...</em></small>
                                        <br/><br/>
                                        <a target='_blank' href="https://addons.mozilla.org/en-US/firefox/addon/fixed-header/"><i className='fa fa-link'></i>&nbsp;View Fixed-Header in the Firefox add-on store</a>
                                        <br/><a target='_blank' href="https://chrome.google.com/webstore/detail/fixed-header/lapaggdajkeoghocfiikgkcfncedpook"><i className='fa fa-link'></i>&nbsp;View Fixed-Header in the Chrome webstore</a>
                                    </p>
                                );}
                            }/>
                    </div>
                    <div className="tab-pane fade" id="portfolio-mobile" role="tabpanel" aria-labelledby="portfolio-mobile-tab">
                        <PortfolioEntry 
                            featuredImage={grdplz}
                            title="GrandPlaza"
                            techStack="ReactNative, Firebase, Nextjs, ExpressJS"
                            renderDescription={
                                () => {return(
                                    <p>
                                        Created in 2019/20, GrandPlaza was a forum where people would be able to share product/services in groups.
                                        <br/><br/>This platform consisted of an android app and a view-only website.
                                    </p>
                                );}
                            }/>
                    </div>
                    <div className="tab-pane fade" id="portfolio-game" role="tabpanel" aria-labelledby="portfolio-game-tab">
                        <PortfolioEntry 
                            featuredImage={"https://tehjnito.surge.sh/_ASSETS/_IMG/Portfolio/GameDev/block-fight-thumb.png"}
                            title="Block Fight"
                            techStack="Unity3D"
                            renderDescription={
                                () => {return(
                                    <p>
                                        Created in 2016, this was a single/couch multiplayer platform fighter for PC.
                                        <br/><i>This kinda got stuck in the prototying phase and was never truly finished :(</i>
                                        <br/>This was also submitted to <a target="_blank" rel="noopener noreferrer" href="https://thegdwc.com/">GDWC</a> for the 2016 game jam.
                                        <br/><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=pF0JjcBq8y8">Watch the gameplay trailer on YouTube</a>
                                    </p>
                                );}
                            }/>
                        {/* <PortfolioEntry 
                            featuredImage={"https://tehjnito.surge.sh/_ASSETS/_IMG/Portfolio/GameDev/squash-thumb.gif"}
                            title="Squash"
                            techStack="Unity3D"
                            renderDescription={
                                () => {return(
                                    <p>
                                        *PROTOTYPE*
                                        <br/>Created in 2015, this was more of an experiment than a real game.
                                        <br/>Squash was an arcade-physics-based-shooter thing...<small><i>(like I said, "experiment"...)</i></small>
                                        <br/>The game was played in a team death-match senario, where projectiles fired would cause damage to enemy players,
                                        however, players have the ability to raise a shield which will block and redirect the direction of the projectiles,
                                        potentially causing another player's attack to backfire.
                                        <br/>Players gain points through-out the match by dealing damage to enemies and collecting crystals.
                                        <br/>You, the player are given three special abilities to help you out in the match.
                                    </p>
                                );}
                            }/> */}
                        <PortfolioEntry 
                            featuredImage={"https://tehjnito.surge.sh/_ASSETS/_IMG/Portfolio/GameDev/tanksalot-thumb.gif"}
                            title="Tanks-a-lot"
                            techStack="Unity3D"
                            renderDescription={
                                () => {return(
                                    <p>
                                        *CLASS PROJECT / CHEESY NAME*
                                        <br/>Created in 2015 - Single Player Action Game for Android.
                                        <br/>Ripped the multiplayer tanks project from Unity's tutorial, scrapped their code (mostly) and re-did the logic to turn it into a single player mission based game for android.
                                    </p>
                                );}
                            }/>
                        {/* <PortfolioEntry 
                            featuredImage={"https://tehjnito.surge.sh/_ASSETS/_IMG/Portfolio/GameDev/dotsandrings-thumb.png"}
                            featuredImageClassName="sm"
                            title="Dots and Rings"
                            techStack="Unity3D"
                            renderDescription={
                                () => {return(
                                    <p>
                                        *SPRINT*
                                        <br/>Created in 2016 - Arcade Game for Android.
                                        <br/>Had a <i>"colorful"</i> idea.
                                        <br/>Wanted to see how fast I could build it.
                                        <br/>Got it working in a day, spent the rest of the week trying to find good sounds for it and then added the screen recording feature.
                                        <br/><a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.Teejae.DotsandRings&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">Find it on the Play Store!</a>
                                    </p>
                                );}
                            }/> */}
                        <PortfolioEntry 
                            featuredImage={"https://tehjnito.surge.sh/_ASSETS/_IMG/Portfolio/GameDev/greedy-bubble-thumb.png"}
                            featuredImageClassName="sm"
                            title="Greedy Bubble"
                            techStack="Unity3D"
                            renderDescription={
                                () => {return(
                                    <p>
                                        *SPRINT / I'm not good at naming things*
                                        <br/>Created in 2015 - Arcade Game for Android.
                                        <br/>Wanted to feel like a Real Game Dev.
                                        <br/>Realized that an android game would be the best way for me to start.
                                        <br/>Wanted to make a Flappy-Bird-difficulty type thing.
                                        <br/>Came up with this <small>(lmao...)</small>.
                                        <br/>Even I hate playing it.
                                        <br/>But got lots of people to try it.
                                        <br/>They all hated it as well.
                                        <br/>I think it worked out quite well...I'm now closer to being a real game dev, i think.
                                        <br/><a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.BerZerkGames.GreedyBubble&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">Find it on the Play Store!</a>
                                    </p>
                                );}
                            }/>
                        <PortfolioEntry 
                            featuredImage={"https://tehjnitodev.files.wordpress.com/2016/12/2016-03-31-11_14_10-le_fps3_teejae_06.png?w=1000&h="}
                            title="FPS[3]"
                            techStack="Unity3D & Photon Networking"
                            renderDescription={
                                () => {return(
                                    <p>
                                        <br/>Created in 2014/15 (I think), this was the very first project I made with the Unity game engine.
                                        <br/>This was a Single/Online Multiplayer First-Person Shooter and it served as a means of me getting to
                                        know the game engine and learning game development principles.
                                        <br/>This was never a completed project, but building & playing it was very fun never-the-less and 
                                        it holds a very special place in my heart muscles &mdash; hence, why I am displaying it publicly.
                                    </p>
                                );}
                            }/>
                    </div>
                    <div className="tab-pane fade" id="portfolio-photo" role="tabpanel" aria-labelledby="portfolio-photo-tab">
                        <section className="row">
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fthe_chair___OG_scaleddown.jpg?alt=media&token=af1c11e5-ea3d-4aae-a2b2-ae21f977f8ee"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fthe_chair__EDITED_scaleddown.jpg?alt=media&token=e5a6aecb-1921-4d79-bc7e-2e7be892cb04"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2FAl%20Shariar%20Apon%20(2)___OG_scaleddown.jpg?alt=media&token=ca113313-35ff-46b5-8f24-37cfe2310ce5"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2FAl%20Shariar%20Apon%20(2)__EDITED_scaleddown.jpg?alt=media&token=1d87e123-adae-4c84-820c-5c19a0c5f8e8"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2FAlex%20Thomas%20Yunnan%20Photo___OG_scaleddown.jpg?alt=media&token=dddf32c4-7d7b-4e98-81b4-8644aa83f57a"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2FAlex%20Thomas%20Yunnan%20Photo__EDITED_scaleddown.jpg?alt=media&token=aaeedd39-cb22-4d62-93b8-403dab88b071"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fburnt_hills___OG_scaleddown.jpg?alt=media&token=424be078-b8e3-42f9-ab09-70b05dd73256"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fburnt_hills__EDITED_scaleddown.jpg?alt=media&token=8b30c69a-ef3b-48b1-a204-ce90daf0c77b"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2FPhotoRetouching%2FIMG_2909___OG_scaleddown.jpg?alt=media&token=b9cf7c0d-cc48-4739-88f1-bf0bad9e6fd5"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2FPhotoRetouching%2FIMG_2909__EDITED_scaleddown.jpg?alt=media&token=f28ec7e7-9726-4a7b-939c-36b2b8887e99"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fcorvette_ftw___OG_scaleddown.jpg?alt=media&token=bfff6271-ff99-4a03-a26e-7a7170306bd8"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fcorvette_ftw__EDITED_scaleddown.jpg?alt=media&token=56550665-0f50-470f-a189-cbb7ecae16ad"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fdinner_outside___OG_scaleddown.jpg?alt=media&token=4fd6ddc1-8333-4203-bf92-810d81d10700"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fdinner_outside__EDITED_scaleddown.jpg?alt=media&token=a4c279b2-1ee6-4b00-95cf-19bec7cb3915"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fjust_married01___OG_scaleddown.jpg?alt=media&token=95018e5f-31a6-42bc-8d7a-e52677c6671d"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fjust_married01__EDITED_scaleddown.jpg?alt=media&token=9f6083c0-c3b8-4489-b41c-f975b3d62ff7"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2FPhotoRetouching%2FSkinRetouching02-02___OG_scaleddown.jpg?alt=media&token=13e611a7-b94e-43e7-896e-31133f2bd635"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2FPhotoRetouching%2FSkinRetouching02-02__EDITED_scaleddown.jpg?alt=media&token=cc1a60e2-e304-4668-9cc7-dae9965a1efb"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Flake_01___OG_scaleddown.jpg?alt=media&token=07502fd3-5610-4ba2-97d5-d89cc6a4cc38"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Flake01__EDITED_scaleddown.jpg?alt=media&token=43abb78c-3f28-451b-9220-0e4ce3f6db74"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fproduct_canjuice___OG_scaleddown.jpg?alt=media&token=89779848-7ef6-44d9-8330-cabb90cd0dbb"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fproduct_canjuice__EDITED_scaleddown.jpg?alt=media&token=e2639192-1cc2-45ce-933b-7ce4bc668232"/>
                            </span>
                            <span className="col-md-6 col-lg-4 item">
                                <PhotoCompare
                                    before="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fsignature%20edits%20free%20raws%20girl1___OG_scaleddown.png?alt=media&token=d7241bff-5e5a-4682-886a-32ff26e4d968"
                                    after="https://firebasestorage.googleapis.com/v0/b/personalwebsite-af7df.appspot.com/o/portfolio-photography%2Fsignature%20edits%20free%20raws%20girl1__EDITED_scaleddown.png?alt=media&token=6d8db4d4-9ad6-49f2-9922-d7c06426e1d0"/>
                            </span>
                        </section>
                    </div>
                </div>
            </section>
        </section>
        <section id="PageFooter">
            <p>&copy;&nbsp;{(new Date()).getFullYear()}</p>
        </section>
        <a id="BackToTop" href="#Home" className="shadow"><i className="fa fa-arrow-up"></i></a>
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
        background: 'radial-gradient(#6c5ce7, #D6A2E8)',
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
        animationDirection: 'alternate-reverse',
        // animationTimingFunction:'cubic-bezier(1, -1, 0, 2)',
        backgroundColor: 'rgba(0,0,0,0.01)'
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
        backgroundImage: 'url("https://avatars0.githubusercontent.com/u/27317894?s=400&u=c8331d631b08f518b432643243e5f0c6be9c2b9e&v=4")',
        // backgroundImage: 'url(https://lh3.googleusercontent.com/7fdrhYFxMRiC6Csvbq4JA2_QRcMqa_C28rAZwV89mpM2sozqNxWDflnRr8etUrbPozqoI3ZdlRjMEAX2h3xwKQiO774V2IS-18czs9gZm5JtdFlnzuToMSVDQgXX1nG4ZbFBdMxAQFCVUMhipC_U7aXehTnYfJvOTDaiYOrxYJumsLD72zIqyCBYsatTcUdEwM2NyV7RgoxGi-t-Q2F9E6RL4xJNvpajIGeVPtsbF3NDKC0Cb6piYViBn2p1ZsXKiStu-ZmYVPJUfvNnrT7E87ZoTxyUD4FsjcsJtAceAtaSfNvtCUKYX_tjVCupKRrDZ8Ow__77jWUH56OrB2saICPh9g7Zevkc27xZ3Zy4E2wz_4ueSelvfJ269fdAcyhZRJBPaNEagiRCxKL-S4ZTrpHpV71ahCRWuYlR-IVNUUm0NqXX0Qg_aS4gIP1XYzq5fhrd-7mgqvrU_2cjChctXC-86hILqu0v7JW_BrpcOW364tbG29CGndvdZ8nfEPn_ezIfDr96egSQae4N4C8_4k3m5q3lqOnxDcILbwi8vd4VF2W58hU8IoeXpva_WGErVVoNeRz6qtJ4m71FIcaI9lK4wUMIFFqLBdOn-lzpm8ou6WDWFLiMkEmoUGYwDzwtaxaqXzCFToN6ByTxiFTBrj5Y3U3mNwvtj0_eUr4aAWoNFMrxSS5jS8mikyVHlw=w738-h984-no?authuser=0)',//'url(https://source.unsplash.com/random?portrait)',
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
