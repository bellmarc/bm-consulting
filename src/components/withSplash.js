import React, { Component } from 'react';
import'../style/withSplash.css';

function LoadingScreen(){
    return (
        <div className="splash-screen">
            One moment while your app loads.
            <div className="loading-ani">~</div>
        </div>
    )
}

function withSplash() {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                loading: true
            }
        }

        // async componentDidMount(){
        // try {

        // }}

    }
}


export default withSplash