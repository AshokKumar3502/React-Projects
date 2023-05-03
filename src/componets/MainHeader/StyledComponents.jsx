import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: black;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */

`;

export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: green;
  font-weight:600;
}
@media (min-width:128px) and (max-width: 460px) {
	color: white;
display: flex;
align-items: center;
text-align:center;
line-space:1px;
font-size:9px;
text-decoration: none;
padding: 2.5%;
height: 100%;
cursor: pointer;
&.active {
	color: green;
  font-weight:600;

	
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
font-size:30px;
@media screen and (max-width: 768px) {
	display: none;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}

`;

export const NavMenu = styled.div`
display: flex;
font-size:20px;
font-weight:300;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 688px) {
	width:100%;
	display:flex;
	font-size:10px;
	align-item:row;

	
}
@media (min-width:128px) and (max-width: 360px) {
	width:100%;
	display:flex;
	font-size:10px;
	padding:0px;
	align-item:row;

	
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display:none;
}


`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
