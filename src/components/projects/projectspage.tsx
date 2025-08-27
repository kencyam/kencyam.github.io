import { Component } from "react";
import Tabs from "../webpage-components/Tabs/Tabs";
import Tab from "../webpage-components/Tabs/Tab";


class Projects extends Component{
    render() {
        return (
    <Tabs>
        <Tab title="Games">Lemon is yellow</Tab>
        <Tab title="osu!">Strawberry is red</Tab>
        <Tab title="Other">Pear is green</Tab>
    </Tabs>
        )
    }
}

export default Projects;

