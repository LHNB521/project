import React,{Component} from "react";
import './Web.css'

class Web extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:[
                '掘金',
                '思否',
                '廖雪峰',
                '阮一峰',
                '轩枫阁',
                '前端开发指南',
                '前端人的俱乐部',
                'Js Tips',
                '穆乙',
                '白树',
                'AlloyTeam'
            ],
            id:[
                'https://juejin.cn/',
                'https://segmentfault.com/',
                'https://www.liaoxuefeng.com/',
                'http://www.ruanyifeng.com/blog/',
                'https://www.xuanfengge.com/',
                'https://github.com/icepy/Front-End-Develop-Guide',
                'http://f2er.club/',
                'https://www.jstips.co/zh_CN/',
                'https://www.cnblogs.com/pigtail/',
                'https://www.cnblogs.com/PeunZhang/',
                'http://www.alloyteam.com/'
            ]
        }
    }
    render(){
        const ItemList = this.state.name.map((name) =>
            <li><a href={this.state.id[this.state.name.indexOf(name)]} target="_blank">{name}</a></li>
        )
        return(
            <div className="Web">
                <div style={{width:"230px",height:"2px",background:"rgb(238, 238, 238)"}}></div>
              <div>
                  <span>常用网站</span>
              </div>
                <div className="Web_li">
                    <ul>
                        {ItemList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Web;