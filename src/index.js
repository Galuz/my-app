import React from 'react';
import { render } from 'react-dom'
import './index.css';
import './style.css';
//import Member from './ui/Member';
import MemberList from './ui/MemberList';


window.React = React

render(
	<MemberList />, 
	document.getElementById('react-container'))

