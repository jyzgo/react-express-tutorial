import  React, { Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class IndexComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state = {serverports :[]};

    }

    componentDidMount(){
        axios.get('http://localhost:4200/serverport').then(response=>{
            this.setState({serverports:response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    tabRow(){
        return this.state.serverports.map(function (object,i) {
            return <TableRow obj ={object} key={i}/>;
        });
    }


    render(){
        return (
                <div style={{marginTop:50}}>
                <p>Welcome from Index Component</p>
            </div>
        )
    }
}