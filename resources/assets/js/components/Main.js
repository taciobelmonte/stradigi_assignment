import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'whatwg-fetch';
import * as Api from './../util/Api';
import axios from 'axios';
import Index from './Index';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Forgot from './Forgot';
import Reset from './Reset';

import Gallery from './Gallery';
import List from './List';
import Search from './Search';


class Main extends Component {

    state = {
        items:[],
        panels:[],
        search:[],
        offset: 0,
        isLoading:false,
        finished:false,
        amountLoaded:0,
        logged: false
    };

    getImages = () =>{
        this.setState({isLoading: true});

        Api.getInfo('api/getgallery/?offset='+this.state.offset).then(items => {
            const images = [];
            if(items && !items.error){
                items.data.data.forEach(function(element) {

                    images.push({
                        id:element.id,
                        title:element.title,
                        key:0,
                        index:0,
                        src:element.images.fixed_height_small.url,
                        full:element.images.fixed_height.url,
                        imageHeight:element.images.fixed_height.height,
                        imageWidth:element.images.fixed_height.width
                    });
                });

                this.setState(state => ({items: this.state.items.concat(images)}));
                this.setState({offset: this.state.offset+12});
                this.setState({isLoading: false});
                this.setState({amountLoaded: false});

                console.log(this.state.items);

            }
        });
    };

    getContent = () =>{
        Api.getInfo('api/getcontent').then(panels => {

            const contents = [];
            if(panels && !panels.error){

                panels.data.forEach(function(element) {
                    contents.push({
                        title:element.title,
                        text:element.text,
                    });
                });
                this.setState(state => ({panels: contents}));
            }
        });
    };

    search = (query) => {

        this.setState({isLoading: true});

        axios.get('api/getsearch/?query='+ query).then(response=> {
            const images = [];

            if(response && !response.error){

                console.log(response);

                response.data.data.forEach(function(element) {
                    images.push({
                        id:element.id,
                        title:element.title,
                        key:0,
                        index:0,
                        src:element.images.fixed_height_small.url,
                        full:element.images.fixed_height.url,
                        imageHeight:element.images.fixed_height.height,
                        imageWidth:element.images.fixed_height.width
                    });
                });

                this.setState(state => ({search: images}));
                this.setState({isLoading: false});

            } else {
                this.setState({
                    finished: true
                });
            }
        }).catch(error=> {

            });

    };

    render() {
        const {items, isLoading, finished, panels, search} = this.state;

        return (
            <div id="general">
                <Route exact path='/' component={Index} />
                <Route exact path='/home' render={() => {
                    return <Home logged={this.state.logged}/>
                }}/>
                <Route exact path='/register' component={Register} />
                <Route path="/login" component={Login}/>

                <Route exact path='/forgotpassword' component={Forgot} />
                <Route exact path='/password/reset/:token' component={Reset} />

                <Route path="/gallery"
                       render={() => {
                           return <Gallery getImage={this.getImages} items={items} isLoading={isLoading} finished={finished}/>
                       }}
                />
                <Route exact path="/list-items" render={
                    ()=>(
                        <List getContent={this.getContent} panels={panels}/>
                    )
                }/>
                <Route exact path="/search" render={
                    ()=>(
                        <Search search={this.search} searchItems={search} isLoading={isLoading}/>
                    )
                }/>
            </div>
        );
    }
}
export default Main;