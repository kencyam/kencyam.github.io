/*import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import bg from './images/cromadic.png';
import bg2 from './images/Gameshow.PNG';
import bg3 from './images/kemono.png';
import bg4 from './images/copyright.png';



//TODO: Remove now deprecated react-mdl and change to tsx
class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className='projects-grid'>
                    

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#fff', height: '160px' ,background:`url(${bg})`, backgroundSize:'cover',
                                        backgroundPosition: 'center', borderColor:'black'}} expand>
                            Cromadic
                        </CardTitle>
                        <CardText>Singleplayer adventure game of a crow trying to find their clanmate. Created for Capstone project in Unity.</CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://169anullptr.itch.io/cromadicgame" rel="noopener noreferrer" target="_blank">
                                itch.io
                            </a>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#cf0', height: '160px',background:`url(${bg2})`, backgroundSize:'cover',
                                            backgroundPosition: 'center', borderColor: '#fff'}}>
                            Gameshow Game
                        </CardTitle>
                        <CardText>Networked gameshow themed multiplayer party game. Created with Unity for class project. 
                        </CardText>
                        <CardActions border>
                            <Button colored>
                            <a href="https://github.com/kcyam/Gameshow-Game" rel="noopener noreferrer" target="_blank">
                                Github
                            </a>
                            </Button>
                                
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#000', height: '160px',background:`url(${bg3})`, backgroundSize:'cover',
                                            backgroundPosition: 'center'}}>
                            Maya Modeling Demo
                        </CardTitle>
                        <CardText>Short game and demo showing my monster and character model created from Maya.</CardText>
                        <CardActions border>
                            <Button colored>
                            <a href="https://github.com/kcyam/Maya-Model-Demo" rel="noopener noreferrer" target="_blank">
                                Github
                            </a>
                            </Button>
                                
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#0ff', height: '160px',
                                            background:`url(https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/18/Note_Block_JE2_BE2.png)`, backgroundSize:'cover',
                                            backgroundPosition: 'center'}}>
                            Walking Home
                        </CardTitle>
                        <CardText>A game where the player tries to save their mother and home. Created during '19 Global Game Jam</CardText>
                        <CardActions border>
                            <Button colored>
                            <a href="https://globalgamejam.org/2019/games/walking-home" rel="noopener noreferrer" target="_blank">
                                Download site
                            </a>
                            </Button>
                                
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#000', height: '160px',background:`url(${bg4})`, backgroundSize:'cover',
                                            backgroundPosition: 'center'}}>
                            Avoiding Copyright
                        </CardTitle>
                        <CardText>A silly "horror" game where the player find lawyers to save themself from Cease and Desist orders. Created in Unity.</CardText>
                        <CardActions border>
                            <Button colored>
                            <a href="https://github.com/kcyam/Avoiding-Copyright" rel="noopener noreferrer" target="_blank">
                                Github
                            </a>
                            </Button>
                                
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className='projects-grid'>
                    

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#fff', height: '160px' ,background:`url(https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/18/Note_Block_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20200317191535)`, backgroundSize:'cover',
                                        backgroundPosition: 'center', borderColor:'black'}} expand>
                            HarmonAI
                        </CardTitle>
                        <CardText>AI that will take .csv files converted from .mp3 files and play them on Minecraft Noteblocks. Made with Malmo.</CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://github.com/AlecJacksonE/HarmonAI/code" rel="noopener noreferrer" target="_blank">
                                Github
                            </a>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#f00', height: '160px',background:`url(http://www.jibble.org/impossible-sudoku/UNSOLVABLE-1.png)`, backgroundSize:'cover',
                                            backgroundPosition: 'center'}}>
                            SudokuAI
                        </CardTitle>
                        <CardText>AI that will find a solution for any n x m grid as efficiently as possible. Project for class. e-mail me for a demo. 
                        </CardText>
                        <CardActions border>
                            <Button colored>
                            <a href="https://github.com/edyounis/Sudoku_Student" rel="noopener noreferrer" target="_blank">
                                Github (for shell)
                            </a>
                            </Button>
                                
                        </CardActions>
                    </Card>
                </div>
            )
        }

        else if(this.state.activeTab === 2){
            return(
                <div className='projects-grid'>
                    

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#000', height: '160px' , backgroundSize:'cover',
                                        backgroundPosition: 'center', borderColor:'black'}} expand>
                            osu!Compare
                        </CardTitle>
                        <CardText>A project that will compare two osu! players and their stats by calling osu!'s API.</CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://kcyam.github.io/personal/#/osucompare" rel="noopener noreferrer" target="_blank">
                                Link
                            </a>
                            </Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color:'#000', height: '160px' , backgroundSize:'cover',
                                        backgroundPosition: 'center', borderColor:'black'}} expand>
                            osu! Map pp-rank Grapher
                        </CardTitle>
                        <CardText>A project that will graph players' top 100 plays by year ranked and raw pp. Uses osu!'s API</CardText>
                        <CardActions border>
                        <Button colored>
                            <a href="https://github.com/kcyam/osu_pp_and_year_comparer" rel="noopener noreferrer" target="_blank">
                                Link
                            </a>
                            </Button>
                        </CardActions>
                    </Card>

                    
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs" >
                <h1>Projects Page</h1>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) =>
                    this.setState({activeTab: tabId}) } ripple>
                        <Tab className="project-tab"><h1>Games</h1></Tab>
                        <Tab className="project-tab"><h1>AI</h1></Tab>
                        <Tab className="project-tab"><h1>Other</h1></Tab>
                </Tabs>

                
                <Grid>

                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()};</div>
                    </Cell>
                </Grid>
                    
                
            </div>
        )
    }
}

export default Projects;
*/