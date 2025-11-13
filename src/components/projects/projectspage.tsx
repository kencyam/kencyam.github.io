import { Component } from "react";
import Tabs from "../webpage-components/Tabs/Tabs";
import Tab from "../webpage-components/Tabs/Tab";
import CustomCard from "../webpage-components/Card/CustomCard";
import Cards from "../webpage-components/Card/Cards";

//Images
import gamebg1 from "./images/cromadic.png";
import gamebg2 from "./images/copyright.png";
import gamebg3 from "./images/Gameshow.png";
import gamebg4 from "./images/kemono.png";

//CSS
import "./projectspage.css";
class Projects extends Component{
    render() {
        return (
<div>
    <div className = 'projects-title'>
        <h1>Projects Page</h1> 
    </div>
    <div className='projects-page'>
        <Tabs>
            {/*TODO: The tabs are not centered in the ul, fix it later*/}
            <Tab title="Games">
                <Cards>
                    <CustomCard 
                        title='Cromatic' 
                        description='Singleplayer adventure game of a crow trying to find their clanmate. Created for Capstone project in Unity.' 
                        image={gamebg1}
                        url='https://169anullptr.itch.io/cromadicgame'
                        buttontext = 'itch.io'>
                    </CustomCard>
                    <CustomCard 
                        title='Gameshow Game' 
                        description='Networked gameshow themed multiplayer party game. Created with Unity for class project.' 
                        image={gamebg3}
                        url='https://github.com/kcyam/Gameshow-Game'
                        buttontext='Github'>
                    </CustomCard>
                    <CustomCard 
                        title='Maya Modeling Demo' 
                        description='Short game and demo showing my monster and character model created from Maya.' 
                        image={gamebg4}
                        url='https://github.com/kcyam/Maya-Model-Demo'
                        buttontext='Github'>
                    </CustomCard>
                    <CustomCard 
                        title='Walking Home' 
                        description='A game where the player tries to save their mother and home. Created during 2019 Global Game Jam.' 
                        image={'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/18/Note_Block_JE2_BE2.png'}
                        url='https://globalgamejam.org/2019/games/walking-home'
                        buttontext='Download Site'>
                    </CustomCard>
                    <CustomCard 
                        title='Avoiding Copyright' 
                        description='A silly &#34;horror&#34; game where the player find lawyers to save themself from Cease and Desist orders. Created in Unity.' 
                        image={gamebg2}
                        url='https://github.com/kcyam/Avoiding-Copyright'
                        buttontext='Github'>
                        </CustomCard>

                </Cards>
            </Tab>
            <Tab title="osu!">
                <Cards>
                    <CustomCard
                        title='December osu! Storyboard'
                        description='A storyboard project that pays homage to Elite Beat Agents (currently WIP).'
                        url='https://osu.ppy.sh/beatmapsets/2441621#osu/5327098'
                        buttontext='Visit'>
                    </CustomCard>
                    <CustomCard
                        title='Who is better than me in osu'
                        description='A program that outputs a csv file of all players higher ranked'
                        url='https://github.com/kencyam/list-of-higher-ranked-osu-players'
                        buttontext='Github'>
                    </CustomCard>
                    <CustomCard
                        title='osu! Map pp-rank and Year Grapher'
                        description='A project that will graph players&#39; top 200 plays by year ranked and raw pp. Uses osu!&#39;s API'
                        url='https://github.com/kencyam/map-year-and-top-play-graph'
                        buttontext='Github'>
                    </CustomCard>
                    <CustomCard
                        title='osu! Tourney the World'
                        description='Log in users from osu! tournaments and journal how many people you&#39;ve met'
                        url='https://github.com/kcyam/osu_Tourney_the_world'
                        buttontext='Github'>
                    </CustomCard>
                    <CustomCard
                        title='osu! Stats Compare'
                        description='A project that will compare two osu! players and their stats by calling osu!&#39;s API.'
                        url='https://kcyam.github.io/personal/#/osucompare'
                        buttontext='Visit'>
                    </CustomCard>

                </Cards>
            </Tab>
            <Tab title="Other">
                <Cards>
                    <CustomCard
                        title='HarmonAI'
                        description='AI that will take .csv files converted from .mp3 files and play them on Minecraft Noteblocks. Made with Malmo.'
                        image={'https://alecjacksone.github.io/HarmonAI/images/HarmonAIn.png'}
                        url='https://alecjacksone.github.io/HarmonAI/'
                        buttontext='Visit'>
                    </CustomCard>
                </Cards>
            </Tab>
        </Tabs>
    
    </div>
    
</div>
        )
    }
}

export default Projects;

