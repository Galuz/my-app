import MainMenu from './MainMenu'
import React, { Component } from 'react';

class Home extends Component {

	render(){
		return(

			<div className="home">
        		<MainMenu className="home-page-menu"/>
        		<div id="homebox">
            		<h1>Rock Appreciation Society</h1>
        		</div>
    		</div>
		)
		
	}
	
}

export default Home