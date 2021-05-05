import React,{Component} from 'react';
import './Left.css'
import Log from '../Left/Log'
import Nav from '../Left/Nav'
import Avatar from "../Left/Avatar";
class Left extends Component{
    render(){
        return(
            <div className="Left">
                <Log />
                <Nav />
                <Avatar />
            </div>
        )
    }
}
export default Left;