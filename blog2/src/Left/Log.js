import React,{Component} from "react";
import './Log.css'
class Log extends Component{
    render(){
        return(
            <div className="Log">
                <span style={{fontSize:'25px'}}>长江小浩</span>
                <br />
                <span style={{fontSize:'10px'}}>this is my blog!</span>
            </div>
        )
    }
}
export default Log;