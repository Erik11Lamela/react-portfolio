import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import Myinfo from './Myinfo'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'

const Main = () => (
    <Switch>
        <Route exact path= "/" component = {Landing} />
        <Route path= "/myInfo" component = {Myinfo} />
        <Route path= "/myProjects" component = {Projects} />
        <Route path= "/myContact" component = {Contact} />
        <Route path= "/myResume" component = {Resume} />
    </Switch>
)
export default Main