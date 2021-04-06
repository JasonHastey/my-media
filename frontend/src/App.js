import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'

import HomePage from './pages/HomePage.js'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3 '>
				<Container>
					<Route path='/profile' component={ProfilePage} />
					<Route path='/login' component={LoginPage} />
					<Route path='/register' component={RegisterPage} />
					<Route exact path='/' component={HomePage} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
