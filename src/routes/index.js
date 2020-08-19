import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import LevelSelection from '../screens/level-selection';
import Options from '../screens/options';
import Level from '../screens/level';
import MainScreen from '../screens/main-screen';
import Header from '../component/header';

export default props =>
    <Switch>
        <Route exact path="/">
            <MainScreen />
        </Route>
        <Route exact path="/options">
            <Header />
            <Options />
        </Route>
        <Route exact path="/level-selection">
            <Header />
            <LevelSelection />
        </Route>

        <Route  path="/level/:level" children={<Level />} />
    </Switch>


