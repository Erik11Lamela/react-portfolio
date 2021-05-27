import React, {Component} from 'react'
import { Cell, Grid, ProgressBar } from 'react-mdl'

import WorkExpAndEducation from './WorkExpAndEducation'


class Resume extends Component {
    render(){
        return(
           <Grid className = "resume-grid">
               <Cell col = {6}>
               <img alt = "Not found"  className = "img-resume"  height = "300px" width = 'auto' src = "https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/54371128_2605774029452750_1474735591550615552_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=ITkZ4TlwQ3sAX_JLLsI&_nc_ht=scontent-hel3-1.xx&oh=46b31e3d64937871b11ca55a3f5bf348&oe=60C9A7B9"/>
               <h2> About me </h2>
               <p> Студент 4-го курса университета ХСЕ ВШЭ. Увлекаюсь футболом, баскетболом, теннисом и веб-разработкой. </p>
                <div className = "skills">
                     <h2>Frontend skills:</h2>
                     <ul>
                         <li><ProgressBar progress={55} /> HTML</li>
                         <li><ProgressBar progress={40} /> CSS</li>
                         <li><ProgressBar progress={65} /> JavaScript</li>
                         <li><ProgressBar progress={60} /> ReactJS</li>
                         <li><ProgressBar progress={10} /> Angular</li>
                         <li><ProgressBar progress={35} /> NodeJS</li>
                     </ul>                    
                </div>
                <div className = "languages">
                    <h2> Languages: </h2>
                    <ul style = {{fontSize:"x-large"}}>
                        <li> Russian (native) </li>
                        <li> English (advanced) </li>
                    </ul>
                </div>
               </Cell>
               <Cell col = {6}>
                   <div className = "name-spec">
                       <h1> Skudaev Arseniy </h1>
                       <p style = {{fontSize : "x-large"}}> programmer / frontend developer 
                       <img alt = "No icon found"  height = "150px" width = 'auto' className = "frontend-img" src = "https://cdn3.iconfinder.com/data/icons/web-design-set/64/file-icon-html-css-end-front-development-icons-developer-format-512.png"/>
                       </p>
                       <hr/>
                   </div>                      
                   
                    <WorkExpAndEducation/>
               </Cell>
           </Grid>
        )
    }
}
export default Resume