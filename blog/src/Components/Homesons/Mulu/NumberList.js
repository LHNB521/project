import React,{Component} from "react";
import { Link ,Router} from 'react-router-dom';
import './NumberList.css'
class NumberList extends Component{
    constructor(props) {
        super(props);
        this.state={
            numbers:[],
            times:''
        }
        //this.handleClick=this.handleClick.bind(this)
    }
    componentDidMount() {
        this.tick()
    }
    tick(){
        this.setState({
            numbers: this.props.data.numbers,
            times:this.props.data.times
        })
    }
    // handleClick(){
    //     console.log("hu")
    // }
    render() {
        const listTems = this.state.numbers.map((number) =>
            <li>{number}</li>
        )
        return(
            <div className="NumberList">
               <Router>
                <ul>
                    <Link
                        to={{pathname:'../Page/Page'}}>
                    >
                        {listTems}
                    </Link>

                </ul>
               </Router>
            </div>
        )
    }
}


export default NumberList;