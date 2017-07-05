import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './ui/Home'
import About from './ui/About'
import MemberList from './ui/MemberList'
import  { Left, Right, Whoops404  } from './index'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Left}>
        	<Route path="about" component={About} />
        	<Route path="members" component={MemberList} />
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes