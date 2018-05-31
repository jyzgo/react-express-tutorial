import  React, { Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class IndexComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state = {serverports :[]};

    }


    render(){
        return (
                <div style={{marginTop:50}}>
                <p>Welcome from Index Component</p>
            </div>
        )
    }
}