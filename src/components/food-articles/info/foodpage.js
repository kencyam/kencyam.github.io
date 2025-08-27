import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Grid, Cell} from 'react-mdl';

import "./foodpage.css";
import articles from './foodsidebar';
import main from './food-articles/food-pics/00004/main.jpg';
import chicken from './food-articles/food-pics/00004/orange_chicken.jpg';
import beef from './food-articles/food-pics/00004/mongolian_beef.jpg';

class Food extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='about-grid'>
                    <Cell col={12}>
                        <div className = 'food-text'>
                            <h1>Foods Blog</h1> 
                         
                        </div>
                    </Cell>

                    <Cell col={8}>
                        <div className = 'food-paragraph'>
                            <h1>Tasty Goody Express</h1>
                            <h2>Nov. 17, 2020</h2>

                            <p>Hi everyone, I’m still here. This blog turned out to be kind of a mistake in terms of timing since I don’t go out anymore due to the current pandemic. <i>Sometimes</i> though, I crave fast food enough where I just get a mask on and run down to get something. This was one of those times.</p>                           
                            <p>Tasty Goody Express is a chain that I like going to because Americanized Chinese food is one of my guiltiest pleasures (much to the disgust of some of my Chinese friends. I don’t care. It’s my mouth and stomach.)</p>
                            <p>Last weekend, I walked into the store and see tables between us and the shop to promote social distancing. It’s a pretty good idea. Sadly, my voice isn’t the loudest, so the server and I had trouble communicating, but we worked together, and I eventually get my food.</p>
                            
                            <img src={main} height="auto" width="auto"/> 

                            <p>Man, I missed this.</p>
                            <p>Like any other Chinese take-out, the servers pile on everything to the point where the box can barely close shut. It takes me a day to finish this meal.</p>
                            <p>Tasty Goody will assume you want half rice/half chow mein, and I defaulted with that order. I personally don’t like their chow mein, but it’s been a while and I thought that I’d like it after a few months. I did not. The fried rice however never disappoints. Classic MSG flavor.</p>
                            
                            <img src={chicken} height="auto" width="auto"/> 
                            
                            <p>The orange chicken was a mistake on my part. There’s a similar dish called “jalapeno chicken” that’s almost identical in every way but less sweet, spicier, and doesn’t have a metallic aftertaste. I thought it was not on the menu today, but I just missed it. The orange chicken was freshly cooked though because it was really crispy despite being drenched in the sauce. Next time, I’ll use my eyes and actually see if there’s jalapeno chicken.</p>
                            
                            <img src={beef} height="auto" width="auto"/> 
                            
                            <p>The Mongolian beef is something special. Someone else ordered it, but he had to wait about five minutes for a new batch, and he agreed to wait. I thought I should try it out too. When I got the item and took a bite, it was genuinely the most tender beef I’ve ever had. You actually did not have to chew, it was that soft. My reality was shifted because I didn’t think beef could ever be this good, and it came from a fast-food chain. I made it a point to always order this because wow, this is amazing. If only I could have taken a picture correctly so you can see this magic.</p>
                            <p>Tasty Goody Express is always a good price for its quantity and quality. The staff is quite nice and patient even though they deal with people like with bad communication. I would always have this place as an option because this place always hits the spot for a whole day.</p>
                        </div>
                        
                    </Cell>

                    <Cell col={4}>
                        <div className = 'sidebar'>
                            <h1>Archive</h1> 
                            {articles.map((article) => (
                                <Link to={'food/'+article.id.toString()}>{article.title}</Link>))}                         
                       
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Food;