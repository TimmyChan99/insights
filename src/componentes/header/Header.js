import React, {useState} from 'react';
import { Nav,
	 StyledHeader, Logo, MobileIcon,
	NavItem, NavMenu, NavLinks,
	NavBtn
} from '../../assests/styles/Header/Header.styled';
import {FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Header = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click)

	return (
		<StyledHeader>
			<IconContext.Provider value={{ color: '#18181b' }}>
			<Nav>
				<Logo to='/'>
					insights.
				</Logo>
				<MobileIcon onClick={handleClick}>
					{ click ? <FaTimes /> : <FaBars /> }
				</MobileIcon>

				<NavMenu onClick={handleClick} click={click}>
					<NavItem>
						<NavLinks to='/' >Home</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to='/articles' >Articles</NavLinks>
					</NavItem>

          <NavItem>
					<NavLinks to='/' >
					  <NavBtn>SIGN IN</NavBtn>
					</NavLinks>
					</NavItem>
					
          <NavItem>
					<NavLinks to='/' >
					  <NavBtn >SIGN OUT</NavBtn>
					</NavLinks>
					</NavItem>

				</NavMenu>


			</Nav>
			</IconContext.Provider>
		</StyledHeader>
	)
}

export default Header
