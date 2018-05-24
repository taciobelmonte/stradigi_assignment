import React, { Component } from 'react';
import {DebounceInput} from 'react-debounce-input';
import Header from './Header';
import Modal from './Modal';
import Image from './Image';

class Search extends Component {

    //Defining states of component
    state = {
        query : '',
        currentElement: {},
        modal: false
    };

    //Method to update query state
    updateQuery = (query) => {
        this.setState({ query: query.trim() });
        this.props.search(query, 30);
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

    //Function to close lightbox
    close = ()=>{
        this.setState({
            modal: false,
        });
    };

    render() {
        const {query, searchItems, isLoading} = this.props;

        return (
            <div id="general">
                <Header link="Logout"/>
                <div className="col-80 search-box">
                    <h2>Search</h2>
                    <p>Type a term in the box below to search more gifs.</p>

                    <DebounceInput
                        className="input-search"
                        minLength={3}
                        debounceTimeout={1000}
                        value={query}
                        placeholder="Insert a term here"
                        onChange={(event)=> this.updateQuery(event.target.value)} />

                    <div className="center-loading">
                        {isLoading
                            ? <div key={0} className="loading"><div></div><div></div><div></div></div>
                            : ""
                        }
                    </div>

                </div>

                <section id="items">
                    <div className="container">
                        <div className="inner">
                            {searchItems.map((item,i) => (
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
                        </div>
                    </div>
                </section>
                <Modal close={this.close} modalStatus={this.state.modal} currentElement={this.state.currentElement}/>
            </div>
        );
    }
}
export default Search;
