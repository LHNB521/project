import React,{Component} from 'react';
import NumberList from './Mulu/NumberList'
import './Mulu.css'

class Mulu extends Component{
    render(){
        const data = {
            numbers:['1sdsadasdasd','2fasfasgasgasg','3gwgwgaasgas'],
            times:'12:00'
        }
        return(
            <div className="Mulu">
                <NumberList data={data} />

            </div>
        )
    }
}
export default Mulu;