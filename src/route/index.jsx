import React,{Component, component} from "react";
import {HashRouter,Switch,Route} from "react-router-dom"
import home from "../pages/home/Home"
class RouterIndex extends Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={home} />
                </Switch>
            </HashRouter>
        )
    }
}
export default RouterIndex;