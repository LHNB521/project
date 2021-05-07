import React,{Component} from "react";
import './Nav.css'
class Nav extends Component{

    render(){
        return(
            <div className="Nav">
                <ul className="Nav_ul">
                    <li>首页</li>
                    <li>分类</li>
                    <li>归档</li>
                    <li>关于</li>
                </ul>
            </div>
        )
    }
}
export default Nav;