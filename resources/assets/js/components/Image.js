import React, { Component } from 'react';
import Modal from './../components/Modal';

class Image extends Component {

    updateStatus = (e,index,title,full, modalStatus,imageHeight, imageWidth) => {
        this.props.changeStatus(index, title, full, modalStatus,imageHeight, imageWidth);
    };

    render() {
        const {src, title, index, full, imageHeight, imageWidth} = this.props;

        return (
            <div className="zoomIn animated item col-25" onClick={(event)=> this.updateStatus(event.target.value, index,title,full,true,imageHeight, imageWidth)}
                 style={{ backgroundSize:'cover', backgroundImage: `url(${src})` }}
            >
            </div>
        );
    }
}

export default Image;

