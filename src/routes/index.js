import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import LevelSelection from '../screens/level-selection';
import Options from '../screens/options';
import Level from '../screens/level';
import MainScreen from '../screens/main-screen';

export default props =>
    <Switch>
        <Route exact path="/">
            <MainScreen />
        </Route>
        <Route exact path="/options">
            <Options />
        </Route>
        <Route exact path="/level-selection">
            <LevelSelection />
        </Route>

        <Route  path="/level/:level" children={<Level />} />
    </Switch>


