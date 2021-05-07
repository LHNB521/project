import React,{Component} from 'react';
import './Right.css'
import Page from '../Right/Page'
class Right extends Component{
    render(){
        return(
            <div className="Right">
                <Page />
                <Page />
                <Page />
                <Page />
            </div>
        )
    }
}
export default Right;