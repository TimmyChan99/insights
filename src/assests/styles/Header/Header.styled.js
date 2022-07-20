import styled from "styled-components";
import {Container} from './globalStyles';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: #fff;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 99;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const Nav = styled(Container)`
  display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;

	${Container}
`;

export const Logo = styled(Link)`
 color: #fff;
 justify-self: flex-start;
 cursor: pointer;
 text-decoration: none;
 text-transform: uppercase;
 background-color: #18181b;
 height: fit-content;
 font-weight: 700;
 font-size: 1.3rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  &:hover {
    color: #71717a;
      transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      color: #71717a;
      transition: all 0.3s ease;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
	color: #18181b;
	font-weight: 600;
	font-size: 1.2em;

	&:hover {
      color: #71717a;
      transition: all 0.3s ease;
    }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #71717a;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtn = styled.button`
 background-color: #18181b;
 color: #fff;
 width: 30%;

 &:hover {
      background-color: #3f3f46;
      transition: all 0.3s ease;
    }

	@media screen and (min-width: 960px) {
			width: 100px;
		}
`;
