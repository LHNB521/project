import React,{Component} from "react";
import './Page.css'
class Page extends Component{

    render() {
        return(
            <div className="Page">
                <div className="Page_title">标题</div>
                <div className="Page_title1">
                    <span>时间 </span>
                    <span> | </span>
                    <span> 分类</span>
                </div>
                <div className="Page_content">内容</div>
                <div className="Page_button">阅读全文</div>
            </div>
        )
    }
}
export default Page;