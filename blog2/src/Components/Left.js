import React,{Component} from 'react';
import './Left.css'
import Log from '../Left/Log'
import Nav from '../Left/Nav'
import Avatar from "../Left/Avatar";
import Web from "../Left/Web"
class Left extends Component{
    render(){
        return(
            <div className="Left">
                <Log />
                <Nav />
                <Avatar />
                <Web />
            </div>
        )
    }
}
export default Left;