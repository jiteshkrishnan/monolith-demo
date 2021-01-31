import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Main from './Main';

const Root=()=>{
    return (
        <Router>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<Link className="navbar-brand" to="/contact" >Contacts</Link>
<Link className="navbar-brand" to="/todos" >Todos</Link>
        </nav>
            <Main/>
        </Router>
    )
}

ReactDOM.render(<Root/>,document.getElementById('container'))
