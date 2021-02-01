import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Main from './Main';
import Nav from './navbar/nav'
const Root=()=>{
    return (
        <Router>
            <Nav/>
            <Main/>
        </Router>
    )
}

ReactDOM.render(<Root/>,document.getElementById('container'))
