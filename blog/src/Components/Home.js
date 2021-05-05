import React,{Component} from 'react';
import Title from './Homesons/Title';
import Nav from './Homesons/Nav';
import Mulu from './Homesons/Mulu'
class Home extends Component{
    render(){
        return(
            <div>
                <Title />
                <Nav />
                <Mulu />
            </div>

        )
    }
}
export default Home;