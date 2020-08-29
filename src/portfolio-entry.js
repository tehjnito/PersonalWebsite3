import React from 'react';


export default function PortfolioEntry(props) {
    return(
        <div className="col page-padding">
            <section className="row portfolio-item">
                <section className="col-md-6 portfolio-item-img">
                    <img className={"shadow"+(props.featuredImageClassName?" "+props.featuredImageClassName: "")} src={props.featuredImage}/>
                </section>
                <section className="col-md-6 portfolio-item-desc">
                    <h3 className="title">{props.title || ''}</h3>
                    <br/>
                    <small>
                        {(typeof props.renderDescription == 'function')? props.renderDescription() : ''}
                        <hr/>
                        <p>
                            <strong><i>- Tech Stack: {props.techStack || ''}</i></strong>
                        </p>
                    </small>
                </section>
            </section>
        </div>
    );
}