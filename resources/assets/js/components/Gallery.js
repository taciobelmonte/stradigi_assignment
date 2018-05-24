import React, { Component } from 'react';

import Header from './Header';
import Image from './Image';
import Modal from './Modal';

class Gallery extends Component {

    state ={
        currentElement: {},
        modal: false
    };

    componentDidMount(){
        this.props.getImage();
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    //Function to close lightbox
    close = ()=>{
        this.setState({
            modal: false,
        });
    };

    changeStatus = (index, title, full, modalStatus,imageHeight, imageWidth) => {
        console.log(modalStatus);

        if(modalStatus == true){
            let modalStatus = false;
        }else{
            let modalStatus = true;
        }

        this.setState({currentElement: {
            index: index+1,
            title:  title,
            full: full,
            imageHeight: parseInt(imageHeight),
            imageWidth:parseInt(imageWidth)
        },
        modal: modalStatus});
    };

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.props.items.length && !this.props.isLoading
        ) {
            this.props.getImage();
        }
    };

    render(){
        const {items, isLoading, finished} = this.props;

        return (
            <div id="general">
                <Header link="Logout"/>
                <section id="items">
                    <div className="container">
                        <div className="inner">
                            {items.map((item,i) => (
                                <Image id={item.id}
                                       title={item.title}
                                       key={i}
                                       index={i}
                                       src={item.src}
                                       full={item.full}
                                       imageHeight={item.imageHeight}
                                       imageWidth={item.imageWidth}
                                       changeStatus={this.changeStatus}
                                />
                            ))}
                            {isLoading || finished
                                ? <div key={0} className="loading"><div></div><div></div><div></div></div>
                                : ""
                            }
                        </div>
                    </div>
                </section>
                <Modal close={this.close} modalStatus={this.state.modal} currentElement={this.state.currentElement}/>
            </div>
        );
    }
}
export default Gallery;