import React,{Component} from 'react';
import './Nav.css'
class Nav extends Component{

    render(){
 
        return(
            <div className="Nav">
                <div className="Nav_mulu">
                    <button>目录</button>
                </div>
                <div className="Nav_fenlei">
                    <button>分类</button>
                </div>
            </div>
        )
    }
}
export default Nav;