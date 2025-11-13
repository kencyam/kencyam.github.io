import React, {Component} from 'react';
import "./osucompare.css";



interface IProps{

}

interface IState{
    username1: string;
    username2: string;
    items: [];
    items2: [];
    test: [number,number,number,number,number,number,number,number];
    isLoaded: boolean;
    isLoaded2: boolean;
    compareArray: [string,string,string,string,string,string,string,string];
    stringsArray: [string,string,string,string,string,string,string,string];
    apiFront: string;
    apiBack: string;
    data: string;
}



/*

class Osucompare extends React.Component<IProps, IState>{
    constructor(props: IProps){
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

    


    render() {
        return (
        <div>

        </div>
        )
    }
}


export default Osucompare;
*/
class Osucompare extends Component{render() {
        return (<div>OSU COMPARE</div>)}}
export default Osucompare;