import React, {Component} from 'react'
import { Tabs, Tab, Grid, Cell, CardTitle, Card, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';
import './Projects.css';
class Projects extends Component {
    constructor (props){
        super(props);
        this.state = {activeTab: 0};
    }
    chooseProjectType(){
        if (this.state.activeTab === 0){
            return(
                
                <Card className = "card-design"shadow = {5} style = {{minWidth: '450'}}>
                   <h1 > <a href = "https://erik11lamela.github.io/currency-converter/" rel = "noopener noreferrer" target="_blank">Currency Converter </a></h1>
                    <CardTitle style = {{color: '#fff', height: '326px', background: 'url(https://cdn0.iconfinder.com/data/icons/finance-141/33/currency_converter-512.png) center / cover'}}> </CardTitle>
                    <CardText>
                        API data guarantees  fresh conversion rates, so the result is never wrong
                    </CardText>
                    <CardActions border>
                    <a href = "https://github.com/Erik11Lamela/currency-converter" rel = "noopener noreferrer" target="_blank"> <button >GitHub </button> </a>
                     <button disabled>CodePen </button>
                     <a href = "https://erik11lamela.github.io/currency-converter/" rel = "noopener noreferrer" target="_blank">   <button >Live </button> </a>
                    </CardActions>
                    <CardMenu style = {{color:"#fff"}}>
                        <IconButton name = "share"></IconButton>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1){
            return(
                <Card className = "card-design"shadow = {5} style = {{minWidth: '450', }}>
                <h1 > <a href = "https://erik11lamela.github.io/react-app/" rel = "noopener noreferrer" target="_blank"> Employee Directory</a> </h1>
                 <CardTitle style = {{color: '#fff', height: '326px', background: 'url(https://cdn1.iconfinder.com/data/icons/human-resource-management-set-1-3/64/2-20-512.png) center / cover'}}> </CardTitle>
                 <CardText>
                     This project includes a form, all CRUD operations and different data types (radio buttons, dates, checkboxes, etc). 
                 </CardText>
                 <CardActions border>
                    <a href = "https://github.com/Erik11Lamela/react-app" rel = "noopener noreferrer" target="_blank"> <button >GitHub </button> </a>
                     <button disabled>CodePen </button>
                     <a href = "https://erik11lamela.github.io/react-app/" rel = "noopener noreferrer" target="_blank">   <button >Live </button> </a>
                 </CardActions>
                 <CardMenu style = {{color:"#fff"}}>
                     <IconButton name = "share"></IconButton>
                 </CardMenu>
             </Card>
            )
        } else if (this.state.activeTab === 2){
            return(
                <Card className = "card-design"shadow = {5} style = {{minWidth: '450'}}>
                   <h1 > <a href = "https://erik11lamela.github.io/tic-tac-toe" rel = "noopener noreferrer" target="_blank"> Tic tac toe </a> </h1>
                    <CardTitle style = {{color: '#fff', height: '326px', background: 'url(https://cdn2.iconfinder.com/data/icons/business-flatcircle/512/strategy-512.png) center / cover'}}> </CardTitle>
                    <CardText>
                        A classic multiplayer tic tac toe game. Singleplayer mode is also possible
                    </CardText>
                    <CardActions border>
                    <a href = "https://github.com/Erik11Lamela/tic-tac-toe"  rel = "noopener noreferrer" target="_blank"> <button >GitHub </button> </a>
                     <button disabled>CodePen </button>
                     <a href = "https://erik11lamela.github.io/tic-tac-toe" rel = "noopener noreferrer" target="_blank">   <button >Live </button> </a>
                    </CardActions>
                    <CardMenu style = {{color:"#fff"}}>
                        <IconButton name = "share"></IconButton>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 3){
            return(
                <Card className = "card-design"shadow = {5} style = {{minWidth: '450'}}>
                   <h1 > Stock market web app </h1>
                    <CardTitle style = {{color: '#fff', height: '326px', background: 'url(https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Stock-512.png) center / cover'}}> </CardTitle>
                    <CardText>
                        A stock market app that includes analytical module, personal portfolio module and chat module
                        <h2>
                            Not deployed yet
                        </h2>
                    </CardText>
                    <CardActions border>
                        <button disabled>GitHub </button>
                        <button disabled>CodePen </button>
                        <button disabled>LiveDemo </button>
                    </CardActions>
                    <CardMenu style = {{color:"#fff"}}>
                        <IconButton name = "share"></IconButton>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 4){
            return(
                <Card className = "card-design"shadow = {5} style = {{minWidth: '450'}}>
                   <h1 > Chat app </h1>
                    <CardTitle style = {{color: '#fff', height: '326px', background: 'url(https://cdn0.iconfinder.com/data/icons/evil-icons-user-interface/64/cloud_text-512.png) center / cover'}}> </CardTitle>
                    <CardText>
                        Chat application with socket.io, cors and express
                    </CardText>
                    <CardActions border>
                      <a href="https://dashboard.heroku.com/apps/my-custom-react-chat-app" rel = "noopener noreferrer" target="_blank"><button >Heroku </button> </a> 
                      <a href="https://app.netlify.com/sites/trusting-kirch-246c55/overview" rel = "noopener noreferrer" target="_blank"> <button > Netlify </button> </a> 
                      <a href = "https://trusting-kirch-246c55.netlify.app/" rel = "noopener noreferrer" target="_blank">  <button >Live </button></a>
                    </CardActions>
                    <CardMenu style = {{color:"#fff"}}>
                        <IconButton name = "share"></IconButton>
                    </CardMenu>
                </Card>
            )
        } 
    }
    render(){
        return(
            <div className = "projects-page-design">
                <Tabs activeTab={this.state.activeTab} onChange = {(tabId)=> this.setState({ activeTab: tabId}) }ripple>
                    <Tab> API Data </Tab>
                    <Tab> Form (CRUD Operations)</Tab>
                    <Tab> Game </Tab>
                    <Tab> Stock market software </Tab> 
                    <Tab> Chat </Tab>
                </Tabs>
                <section className = "projects-grid">
                    <Grid className= "projects-grid">
                        <Cell col = {12}>
                             <div className = "project-content">{this.chooseProjectType()}</div>
                        </Cell>
                    </Grid>
                   {/** {this.chooseProjectType()}*/} 
                </section>
            </div>
        )
    }
}
export default Projects