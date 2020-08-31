import React from 'react';

Math.clamp = function(val, min, max){ return Math.max(min,Math.min(max,val));}

const cumulativeOffset = function(element) {
    let top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);
    return {top: top,left: left};
};

export default class PhotoCompare extends React.Component{

    _onComparerMouseMove = (e) => {
        if(this.state.isDragging){
            let tmpSliderCoord = e.pageX - cumulativeOffset(this.compareContainer.current).left;
            let tmpSliderPercentage = (tmpSliderCoord / this.compareContainer.current.offsetWidth) * 100;
            tmpSliderPercentage = Math.clamp(tmpSliderPercentage, 1, 98);
            this.setState({
                sliderLeftPercentage: tmpSliderPercentage,
                overlayWidthPercentage: tmpSliderPercentage,
                overlayImageWidthPercentage: Math.clamp(((100 / tmpSliderPercentage) * 100 || 0), 0, 10000)
            })
        }
    }

    _onSliderMouseDown = (e) => {
        this.setState({isDragging: true});
    }

    _onSliderMouseUp = (e) => {
        this.setState({isDragging: false});
    }

    constructor(props){
        super(props);

        this.compareContainer = React.createRef();
        this.overlay = React.createRef();
        this.overlayImage = React.createRef();

        this.state = {
            isDragging: false,
            sliderLeftPercentage: 50,
            overlayWidthPercentage: 50,
            overlayImageWidthPercentage: 200,
        };
    }

    render(){
        return(
            <section ref={this.compareContainer} style={Styles.compareContainer} 
                onMouseDown={this._onSliderMouseDown}
                onMouseMove={this._onComparerMouseMove}
                onMouseLeave={this._onSliderMouseUp}
                onMouseUp={this._onSliderMouseUp}>
                <span style={Styles.imageContainer}>
                    <span style={{...Styles.imageToCompare, ...{backgroundImage: 'url("'+(this.props.after? this.props.after : '')+'")'}}}></span>
                    <span style={{...Styles.label, ...{right: '0px'}}}>after</span>
                </span>
                <span ref={this.overlay} 
                    style={{...Styles.imageContainer, 
                        ...{width: (this.state.overlayWidthPercentage || 50).toString()+'%'}, 
                        ...Styles.imageContainerOverlay}}>
                    <span ref={this.overlayImage} 
                        style={
                            {...Styles.imageToCompare, 
                            ...{width: (this.state.overlayImageWidthPercentage || 50).toString()+'%'}, 
                            ...{backgroundImage: 'url("'+(this.props.before? this.props.before : '')+'")'}}}></span>
                    <span style={{...Styles.label, ...{left: '0px'}}}>before</span>
                </span>
                <span style={{...Styles.sliderBar, ...{left: (this.state.sliderLeftPercentage || '0').toString()+'%'}}}>
                    <span style={Styles.sliderHandle}><strong style={Styles.sliderHandleIcons}>&lsaquo;&nbsp;&rsaquo;</strong></span>
                </span>
            </section>
        );
    }
}

const Styles = {
    compareContainer: {
        position: 'relative',
        width: '100%',
        height: '300px',
        display: 'block',
        backgroundColor: '#444',
        cursor: 'ew-resize',
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height: '100%',
        overflow: 'hidden'
    },
    imageContainerOverlay: {
        margin: '0 0 0 auto'
    },
    imageToCompare: {
        position: 'relative',
        width:'100%',
        height: '100%',
        display: 'block',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    sliderBar: {
        position:'absolute',
        top:0,
        left:'50%',
        width: '6px',
        height: '100%',
        backgroundColor: '#fff',
        opacity:'0.6'
    },
    sliderHandle: {
        position: 'absolute',
        top: '50%',left:'-7px',
        width: '20px', height: '20px',
        transform: 'transformY(-50%)',
        borderRadius: '50%',
        backgroundColor: '#fff'
    },
    sliderHandleIcons: {
        position: 'relative',
        top: '-10px',left:'1px',
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(0,0,0,0.5)',
    },
    label: {
        position: 'absolute',
        bottom: '10px',
        padding: '3px',
        fontSize: '14px',
        color:'#444',
        textTransform:'uppercase',
        backgroundColor: 'rgba(255,255,255, 0.3)'
    }
};