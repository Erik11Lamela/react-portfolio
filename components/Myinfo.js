import React, {Component} from 'react'
import { Grid, Cell, List,ListItem,ListItemAction,ListItemContent,Checkbox } from 'react-mdl'

class Myinfo extends Component {
    render(){
        return(
            <div className = "about-me">
                <Grid>
                    <Cell col = {4} className = "left-cell-info">
                    <img alt = "Not found"  className = "img-resume"  height = "300px" width = 'auto' src = "https://sun3-13.userapi.com/kn-k1O9F4T6dit0O3LelQZs8q0r4A1FreUlLdg/bUOeoioC_48.jpg"/>
                     
                        <List style={{width: '350px' }} className = "list-info">
                             <ListItem>
                                 <ListItemContent ><div>Secondary education:</div></ListItemContent>
                                 <ListItemAction>
                                    <Checkbox defaultChecked />
                                 </ListItemAction>
                             </ListItem>
                             <ListItem>
                                <ListItemContent > <div>Higher education:</div> </ListItemContent>
                                <ListItemAction>
                                     unfinished
                                </ListItemAction>
                            </ListItem>
                            <ListItem>
                                <ListItemContent > <div>Driving license </div></ListItemContent>
                                <ListItemAction>
                                <Checkbox defaultChecked />
                                </ListItemAction>
                            </ListItem>
                            <ListItem>
                                <ListItemContent > <div>Category: </div></ListItemContent>
                                <ListItemAction>
                                B
                                </ListItemAction>
                            </ListItem>
                            <ListItem>
                                <ListItemContent > <div>Languages:</div> </ListItemContent>
                                <ListItemAction>
                                <ul>
                                    <li> Russian (native)</li>
                                    <li> English (advanced)</li>
                                </ul>
                                </ListItemAction>
                            </ListItem>
                            <ListItem>
                                <ListItemContent> <div> Nationalies: </div></ListItemContent>
                                <ListItemAction>
                                <ul>
                                    <li> Russia</li>
                                    <li> Israil</li>
                                </ul>
                                </ListItemAction>
                            </ListItem>
                        </List>
                    </Cell>
                    <Cell col = {4} className = "ext-about-me">
                        
                       <div>
                           <h2> About me (extended) </h2>
                           <p> Студент 4-го курса университета ХСЕ ВШЭ. Увлекаюсь футболом, баскетболом, теннисом и веб-дизайном.
                            В 2017 закончил физико-математическую школу "Школа №9". и с 2017 года учусь в высшей школе экономики на факультете Бизнес-информатика.
                            </p> <p>Знание английского на уровне "advanced" подтвержден сдачей экзамена IELTS. 
                            Также проходил месячные курсы английского языка в американских лагерях в 2012 и 2016 годах.</p>
                            Водительские права получил в апреле 2020 года,<br/> машина имеется, марка - KIA RIO.                        
                       </div>

                    </Cell>
                    <Cell col = {4} className = "right-cell-info">
                        <h2> Unrelated to anything </h2>
                        <h3>
                            My top 5 all time favorite movies: 
                        </h3>
                        <ol>
                            <li> Superfast (2015) </li>
                            <li> Bolt (2008) </li>
                            <li> Begin again (2013) </li>
                            <li> Mosters inc. (2001) </li>
                            <li> The Incredibles (2004) </li>
                        </ol>
                        <h3>
                            My top 5 all time favorite tv shows: 
                        </h3>
                        <ol>
                            <li>  The Flash (2014 - ...) </li>
                            <li>  Bojack Horseman (2014-2020) </li>
                            <li>  Daredevil (2015 - 2018) </li>
                            <li>  Mr Robot (2015 -2019) </li>
                            <li>  Avatar: The Last Airbender. (2005-2008) </li>
                        </ol>
                        <h3>
                        My top 5 all time favorite characters: 
                        </h3>
                        <ol>
                            <li>  Zuko (from: Avatar: The Last Airbender) </li>
                            <li>  General Iroh (from: Avatar: The Last Airbender) </li>
                            <li>  Rhino the hamster (from: Bolt) </li>
                            <li>  Prfessor Farnsworth (from: Futurama) </li>
                            <li>  Mr. Peanutbutter (from: Bojack Horseman) </li>
                        </ol>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Myinfo