import React,{Component} from 'react'
import {Link} from 'react-router-dom';

export default  class EditComponent extends Component{
    render(){
        return(
            <div style={{marginTop:50}}>
            <p> Welcome to Edit Component </p>
                <Link to ={"/edit/"+this.props.obj._id} className ="btn btn-primary">Edit</Link>
        </div>
        )
    }
}