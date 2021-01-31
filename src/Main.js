import React from 'react'
import { Switch,Route} from 'react-router-dom'
import {default as Contact} from './contacts/App'
import {default as Todos} from './todos/App'

const Main = () => {
    return (
        <Switch>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/todos" component={Todos}></Route>
        </Switch>
    )
}

export default Main;
