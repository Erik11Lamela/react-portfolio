import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class Contact extends Component {
    render(){
        return(
            <div className = "contact-design">
                <Grid className = "contact-grid-design">
                    <Cell col = {4}>
                        <p><h2> Name: </h2>  Skudaev Arseniy </p> 
                        <br/>
                        <p><h2> University: </h2>  Higher school of economics </p> 
                        <br/>                        
                        <p><h2> Faculty: </h2>  Business Informatics </p> 
                        <br/>
                        <p><h2> Phone number: </h2>  +7 (906) 887 97 57</p> 
                        
                     </Cell>
                    <Cell col = {4}>
                        <h1> Contact me </h1>
                        <hr/>
                        <img   alt = "No icon found"  height = "300px" width = 'auto' src = "https://sun3-13.userapi.com/kn-k1O9F4T6dit0O3LelQZs8q0r4A1FreUlLdg/bUOeoioC_48.jpg"/>
                    </Cell>
                    <Cell col = {4}>  
                        <h2> My social media</h2>
                        <br/>
  
                        <ul >
                            <li> <img alt = "No icon found" height="95px" width = 'auto'src = "https://cdn.iconscout.com/icon/free/png-256/vk-11-721983.png"/> <a href = "https://vk.com/skudaevarsen" target = "_blank"  rel="noopener noreferrer"> Click to visit my VK page </a> </li>
                            <br/>
                            <li> <img alt = "No icon found" height="95px" width = 'auto'src = "https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png"/> <a href = "https://www.facebook.com/profile.php?id=100009535511152" target = "_blank"  rel="noopener noreferrer">Click to visit my Facebook page </a> </li>
                            <br/>
                            <li> <img alt = "No icon found" height="95px" width = 'auto'src = "https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png"/>  arseniy_skudaev@mail.ru </li>
                            <br/>
                            <li> <img alt = "No icon found"  height="95px" width = 'auto'src= "https://cdn.icon-icons.com/icons2/1476/PNG/512/discord_101785.png"/> Max Lavrov #8277</li>
                        </ul>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact