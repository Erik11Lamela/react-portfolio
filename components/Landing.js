import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className = "Landing-grid">
                  <Cell col = {12}>
                      <img src = "http://outdosystem.com/wp-content/uploads/2019/09/web-development-course.png"
                      alt = "avatar"
                      className = "avatar-img"
                      />
                      <div className = "banner-text">
                          <h1> Front-end programmer </h1>
                          <hr/>
                          <ul>
                              <li>JavaScript</li>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>NodeJS</li>
                              <li>ReactJS</li>
                          </ul>
                          <div className = "social-links">
                              {/**LinkedIn */}
                              <a href = "http://google.com" rel = "noopener noreferrer" target = "_blank">
                                  <i className = "fa fa-linkedin-square"  aria-hidden="true"></i>
                              </a>
                               {/**GitHub */}
                               <a href = "http://google.com" rel = "noopener noreferrer" target = "_blank">
                                  <i className = "fa fa-github-square"  aria-hidden="true"></i>
                              </a>
                                
                               {/**Youtube */}
                               <a href = "http://google.com" rel = "noopener noreferrer" target = "_blank">
                                  <i className = "fa fa-youtube-square"  aria-hidden="true"></i>
                              </a>
                          </div>
                      </div>

                  </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing