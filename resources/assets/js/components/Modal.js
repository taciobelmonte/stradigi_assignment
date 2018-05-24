/**
 * Created by Tacio on 23/05/18.
 */

import React, { Component } from 'react';

class Modal extends Component {

    componentDidMount(){
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27){
                this.props.close();
            }
        });
    }

    render() {
        const {currentElement, modalStatus, close} = this.props;

        var classes;
        var overlay;
        var style = {};
        if(modalStatus == true){
            classes = 'animated zoomIn';
            overlay = 'show';
            style = {
                display: "block",
                height: ""+(currentElement.imageHeight+parseInt(100))+"px",
                width: ""+(currentElement.imageWidth+parseInt(50))+"px",
            };
        }else{
            classes = 'animated zoomOut';
            overlay = 'hide';
            style = {
                display: "",
                height: ""+(currentElement.imageHeight+parseInt(100))+"px",
                width: ""+(currentElement.imageWidth+parseInt(50))+"px",
            };
        }

        return (
            <div id="modal">
                <div className={overlay + " overlay"}></div>
                <div className={classes + " inner-modal"} style={style}>
                    <a onClick={close} className="close"></a>
                    <h2 className="title">IMAGE <span className="index">{currentElement.index}</span></h2>
                    <div className="image-content">
                        <img src={currentElement.full} alt=""/>
                    </div>
                    <p className="posted">{currentElement.title}</p>
                </div>
            </div>
        );
    }
}

export default Modal;