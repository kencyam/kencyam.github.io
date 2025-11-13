/*import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import "./osucompare.css";


//TODO: remove react-mdl to nondeprecated library and then change to TypeScript
class Osucompare extends Component{

    constructor(props){
        super(props);
        this.state = {
            username1: '',
            username2: '',
            items: [],
            items2: [],
            test: [0,0,0,0,0,0,0,0],
            isLoaded: false,
            isLoaded2: false,
            compareArray: [" "," "," "," "," "," "," "," "],
            stringsArray: ['pp_raw','ranked_score','playcount','accuracy',
                            'total_seconds_played','count_rank_ss','count_rank_s','count_rank_a'],
            apiFront: 'https://osu.ppy.sh/api/get_user?u=',
            apiBack: '&type=string&k=0e3bbb67ccefa7ef86637b2c01dccba1bf2d4405',

            //this is for getting input
            data:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.player1Change = this.player1Change.bind(this);
        this.player2Change = this.player2Change.bind(this);

    }

    componentDidMount(){
    }

    handleChange(event)
    {
        event.preventDefault(); //So website doesn't refresh page when submit
        //console.log('Result', this.state.username1, this.state.username2)
        
        fetch(''.concat(this.state.apiFront,this.state.username1,this.state.apiBack))
        .then((res) =>{
            return res.json()})
        .then(json=>{
            this.setState({
                isLoaded:false,
                items: json,             
            });

            if(this.state.items[0] != null){
                this.setState({
                    isLoaded: true,
                })
            }

        });
        
        fetch(''.concat(this.state.apiFront,this.state.username2,this.state.apiBack))
            .then(res => {return res.json()})
            .then(json=>{
                this.setState({
                isLoaded2:false,
                items2: json,
            })

            if(this.state.items2[0] != null){
                this.setState({
                    isLoaded2: true,
                })
            }

        });
        
        
        
    }

    player1Change(event)
    {
        this.setState({username1: event.target.value});
        //console.log(this.state.username1)
    }

    player2Change(event)
    {
        this.setState({username2: event.target.value});
    }

    compare(event){
        compareArray = [" "," "," "," "," "," "," "," "]
        var compareArray = this.state.compareArray
        
        //the async means it will render without the fetching completing in time
        //this stops it so I don't get an error
        if(this.state.isLoaded === true && this.state.isLoaded2 === true)
            //console.log(this.state.items[0]['user_id'])
            var arrayLen = this.state.stringsArray.length;
            for(var i = 0; i < arrayLen; i++){
                if(Number(this.state.items[0][this.state.stringsArray[i]]) > Number(this.state.items2[0][this.state.stringsArray[i]])){
                    compareArray[i] = '>';
                }

                else if(Number(this.state.items[0][this.state.stringsArray[i]]) < Number(this.state.items2[0][this.state.stringsArray[i]])){
                    compareArray[i] = '<';
                }

                else{
                    compareArray[i] = '=';
                }

                //console.log(compareArray);
            }   

    }
    
    render() {
        var{isLoaded, items, items2, compareArray} = this.state;
        
        return(
            
            <div style={{width: '100%', margin: 'auto'}}>
                {this.compare()}
                <Grid>
                    <Cell col={12}>
                        <div className = 'compare-title'>
                            <h1>osu! Player Comparison</h1> 
                         
                        </div>

                    </Cell>

                    <Cell col={12}>
                        <div className = 'compare-title'>
                            
                            <form>
                                <label>Player 1</label>
                                <input type='Text' name='player1' onChange={this.player1Change}/>

                                <label>Player 2</label>
                                <input type='Text' name='player2' onChange={this.player2Change}/>
                                <button
                                    onClick={this.handleChange}>Submit</button>
                            </form>
                         
                        </div>

                    </Cell>

                    <Cell col={5}>
                        <div className = 'compare'>
                            <h1>Player 1</h1>   
                            {items.map(item=>(
                                <div key={item.id}>
                                
                                <p>Name: {item.username}</p>
                                <p>Weighted pp: {item.pp_raw} </p>
                                <p>Ranked score: {item.ranked_score} </p>
                                <p>Playcount: {item.playcount} </p>
                                <p>Accuracy: {Number(item.accuracy).toFixed(2)} </p>
                                <p>Playtime (hours): {(item.total_seconds_played/3600).toFixed(2)} </p>
                                <p>SS Count: {item.count_rank_ss} </p>
                                <p>S Count: {item.count_rank_s} </p>
                                <p>A Count: {item.count_rank_a}</p>
                                </div>
                            ))}
                                
                        </div>
                    </Cell>

                    <Cell col={2}>
                        <div className = 'compare'>
                            <h1>&nbsp;</h1>
                            <p>&nbsp;</p>
                            <p>{compareArray[0]}</p>
                            <p>{compareArray[1]}</p>
                            <p>{compareArray[2]}</p>
                            <p>{compareArray[3]}</p>
                            <p>{compareArray[4]}</p>
                            <p>{compareArray[5]}</p>
                            <p>{compareArray[6]}</p>
                            <p>{compareArray[7]}</p>

                                
                        </div>
                    </Cell>

                    <Cell col={5}>
                        <div className = 'compare'>
                            <h1>Player 2</h1>
                            {items2.map(items2=>(
                                <div key={items2.id}>
                                
                                <p>Name: {items2.username}</p>
                                <p>Weighted pp: {items2.pp_raw} </p>
                                <p>Ranked score: {items2.ranked_score} </p>
                                <p>Playcount: {items2.playcount} </p>
                                <p>Accuracy: {Number(items2.accuracy).toFixed(2)} </p>
                                <p>Playtime (hours): {(items2.total_seconds_played/3600).toFixed(2)} </p>
                                <p>SS Count: {items2.count_rank_ss} </p>
                                <p>S Count: {items2.count_rank_s} </p>
                                <p>A Count: {items2.count_rank_a}</p>
                                </div>
                            ))}
                        </div>
                    </Cell>
                </Grid>

            </div>    

        )
    }
}

export default Osucompare;
*/