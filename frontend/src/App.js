import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'

import HomePage from './pages/HomePage.js'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AccountPage from './pages/AccountPage'

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<Container fluid>
					<Route path='/account' component={AccountPage} />
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
