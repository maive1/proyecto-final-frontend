import React from 'react';
import M from 'materialize-css';

class ButonExit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            link: " "  
        }
    }

    componentDidMount(){
        let elem = document.querySelector('.btn');
        M.Btn.init(elem);
    }

    render() {
        return (
        <a class="waves-effect waves-light btn" href="www.google.com">{this.props.link}</a>
        );
    }

};

export default ButonExit;