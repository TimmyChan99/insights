import React, {useState} from 'react';
import { Nav,
	 StyledHeader, Logo, MobileIcon,
	NavItem, NavMenu, NavLinks,
	NavBtn
} from '../../assests/styles/Header/Header.styled';
import {FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useAuth } from '../../context/AuthProvider'


const Header = () => {
	const [click, setClick] = useState(false);
	const { currentUser, signout } = useAuth();

	const handleClick = () => setClick(!click)
	
	

	return (
		<StyledHeader>
			<IconContext.Provider value={{ color: '#18181b' }}>
			<Nav>
				<Logo to='/insights/'>
					insights.
				</Logo>
				<MobileIcon onClick={handleClick}>
					{ click ? <FaTimes /> : <FaBars /> }
				</MobileIcon>

				<NavMenu onClick={handleClick} click={click}>
					<NavItem>
						<NavLinks to='/insights/' >Home</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to='/insights/articles' >Articles</NavLinks>
					</NavItem>

				{ currentUser && (	
					<>
				  <NavItem>
						<NavLinks to='/insights/profile' >Profile</NavLinks>
					</NavItem>
					
					<NavItem>
						<NavLinks to='/insights/newpost' >New Article</NavLinks>
					</NavItem>
					</>
					)}

          {currentUser ? (
						<NavItem >
						<NavLinks to='/insights/' >
							<NavBtn onClick={signout}>Log out</NavBtn>
						</NavLinks>
						</NavItem>
					) : (
					<>
						<NavItem>
						<NavLinks to='/insights/signin' >
							<NavBtn>SIGN IN</NavBtn>
						</NavLinks>
						</NavItem>
						
								 <NavItem>
						<NavLinks to='/insights/signup' >
							<NavBtn >SIGN UP</NavBtn>
						</NavLinks>
						</NavItem>
					</>)
					}

				</NavMenu>


			</Nav>
			</IconContext.Provider>
		</StyledHeader>
	)
}

export default Header
