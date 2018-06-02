import  React, { Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import {Link} from 'react-router-dom';

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
            <div className="container">
                <table className="table table-striped">
                    <thread>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Port</td>
                        </tr>
                    </thread>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
                <Link to ={"/edit/"+this.props.obj._id} className ="btn btn-primary">Edit</Link>
            </div>
        )

    }
}