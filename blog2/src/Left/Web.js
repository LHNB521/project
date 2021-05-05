import React,{Component} from "react";
import './Web.css'

class Web extends Component{
    render(){
        return(
            <div className="Web">
                <div style={{width:"230px",height:"2px",background:"rgb(238, 238, 238)"}}></div>
              <div>
                  <span>常用网站</span>
              </div>
                <div className="Web_li">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Web;