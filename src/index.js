import React from 'react';
import { render } from 'react-dom'
import './index.css';
import './style.css';
import routes from './routes';


window.React = React

render(
	routes, 
	document.getElementById('react-container'))

