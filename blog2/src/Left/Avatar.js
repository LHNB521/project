import React,{Component} from "react";
import './Avatar.css'
import img from '../img/1.png'
import github from '../img/github.png'
class Avatar extends Component{
    render(){
        return(
            <div className="Avatar">
                <div style={{width:"250px",height:"10px",background:"rgb(238, 238, 238)",marginLeft:'-10px'}}></div>
                <img src={img} />
                <span>长江小浩</span>
                <div className="Avatar_nav">
                    <ul>
                        <li>
                            <sapn>200</sapn><br />
                            <span>日志</span>
                        </li>
                        <li>
                            <sapn>33</sapn><br />
                            <span>分类</span>
                        </li>
                        <li>
                            <sapn>2</sapn><br />
                            <span>标签</span>
                        </li>
                    </ul>
                </div>
                <a href="https://github.com/LHNB521">
                    <span style={{float:'left',margin:"0px 20px"}}>
                        <img style={{width:"20px",height:"20px",float:"left"}} src={github} />
                        Github
                    </span>
                </a>
                <div style={{clear:"both"}}></div>
            </div>

        )
    }
}

export default Avatar;