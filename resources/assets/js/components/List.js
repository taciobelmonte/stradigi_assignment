import React, { Component } from 'react';
import Header from './Header';

class List extends Component {

    componentDidMount(){
        this.props.getContent();
    }

    render() {
        const {panels } = this.props;
        console.log(panels);

        return (

            <div id="general">
                <Header link="Logout"/>
                <section id="panel" className="col-100">

                    {panels.map((item,i) => (
                        <article key={i} className="panel-item col-55 inner">
                            <div className="center col-75">
                                <h2>{item.title}</h2>
                                <div className="content-text"> <p>{item.text}</p> </div>
                                </div>
                        </article>
                    ))}

                </section>
            </div>
        );
    }
}

export default List;

