import React from 'react';
import grdplz from './img/grdplz.png';


export default function WebPortfolio() {
    return(
        <div className="col page-padding">
            <section className="row portfolio-item">
                <section className="col-md-6 portfolio-item-img">
                    <img className="shadow" src="https://tehjnito.surge.sh/_ASSETS/_IMG/Portfolio/WebDev/webja.jpg"/>
                </section>
                <section className="col-md-6 portfolio-item-desc">
                    <h3 className="title">webja</h3>
                    <br/>
                    <small>
                        <p>
                            Created in 2017/18, this was a website which allowed people to find and/or advertise across six different categories to the Jamaican population specifically.
                        </p>
                        <hr/>
                        <p>
                            <strong><i>- Tech Stack: AngularJS, PHP</i></strong>
                        </p>
                    </small>
                </section>
            </section>
            <section className="row portfolio-item">
                <section className="col-md-6 portfolio-item-img">
                    <img className="shadow" src={grdplz}/>
                </section>
                <section className="col-md-6 portfolio-item-desc">
                    <h3 className="title">GrandPlaza</h3>
                    <br/>
                    <small>
                        <p>
                            Created in 2019/20, GrandPlaza was a forum where people would be able to share product/services
                             in groups.
                            <br/>This platform consisted of an android app and a view-only website.
                        </p>
                        <hr/>
                        <p>
                            <strong><i>- Tech Stack: ReactNative, Firebase, Nextjs, ExpressJS</i></strong>
                        </p>
                    </small>
                </section>
            </section>
        </div>
    );
}