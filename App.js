import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/Main'
import { Link } from 'react-router-dom'
function App() {
    console.log("fdfd")
  return (

    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title={<Link style = {{color : "white"}}to = "/" > Portfolio </Link>} scroll>
            <Navigation>
                <Link to="/myResume">Resume</Link>
                <Link to="/myInfo">About me</Link>
                <Link to="/myProjects">Projects</Link>
                <Link to="/myContact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolio"> 
            <Navigation>
                <Link to="/myResume">Resume</Link>
                <Link to="/myInfo">About me</Link>
                <Link to="/myProjects">Projects</Link>
                <Link to="/myContact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
   
  );
}

export default App;
