import React,{Component} from "react";
import './Avatar.css'
import img from '../img/1.png'
import github from '../img/github.png'
class Avatar extends Component{
    render(){
        return(
            <div className="Avatar">
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
                <span style={{float:'left',margin:"0px 20px"}}><img src={github}/>Github</span>
            </div>
        )
    }
}

export default Avatar;