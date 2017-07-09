import MainMenu from './ui/MainMenu'
import React, { Component } from 'react';

class Warning extends Components{

	render(){
		
		const  Left = {left} = this.props
		const Right = {right} = this.props
		const Whoops404 = {location} = this.props

		return(

			<div className="page">
				<MainMenu className="main-menu"/>
				{left}
			</div>

			<div className="page">
				{right}
				<MainMenu className="main-menu"/>
			</div>

			<div>
        		<h1>Whoops, resource not found</h1>
        		<p>Could not find {location.pathname}</p>
    		</div>
		)
	}
}

