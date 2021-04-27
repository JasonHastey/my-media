import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropDown from 'react-bootstrap/NavDropDown'
import { logout } from '../redux/actions/userActions.js'

const Header = () => {
	const dispatch = useDispatch()
	const userLogin = useSelector(state => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<header>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>MY MEDIA</Navbar.Brand>
					</LinkContainer>
					<Nav className='ml-auto'>
						<LinkContainer to='/favorites'>
							<Nav.Link>
								<i className='fas fa-shopping-cart' /> My Likes
							</Nav.Link>
						</LinkContainer>
						{userInfo ? (
							<NavDropDown title={userInfo.name} id='username'>
								<LinkContainer to='/account'>
									<NavDropDown.Item>Account</NavDropDown.Item>
								</LinkContainer>
								<NavDropDown.Item onClick={logoutHandler}>
									Logout
								</NavDropDown.Item>
							</NavDropDown>
						) : (
							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user' /> Sign In
								</Nav.Link>
							</LinkContainer>
						)}
					</Nav>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
