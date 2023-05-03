
import React from 'react'

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	} from './StyledComponents';

const MainHeader = () => {
  return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/food' activeStyle>
			Food App
		</NavLink>
		<NavLink to='/api' activeStyle>
		  API 
		</NavLink>
		<NavLink to='/image' activeStyle>
			Image App
		</NavLink>
		<NavLink to='/emoji' activeStyle>
			Emoji App
		</NavLink>
		<NavLink to='/bmi' activeStyle>
		    BMI 
		</NavLink>
		<NavLink to='/counter' activeStyle>
		   Counter
		</NavLink>

		<NavLink to='/youtube' activeStyle>
		  Youtube
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
	
		</NavBtn>
	</Nav>
	</>
  )
}

export default MainHeader