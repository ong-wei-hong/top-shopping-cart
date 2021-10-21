import { Switch, Route, Link } from 'react-router-dom';

export default function Header({ count }) {
	const checkout = () => alert('Thank you for shoppping with us!');

	return(
		<header>
			<div className="wrapper header">
				<div className="header-left">
					<Link to='/'>
						<h1 className="home">Developmental Store</h1>
						</Link>
					<p>Technologies for Devs</p>
				</div>
				<div className="header-right">
					<div className="count">
						<p>Items in cart:</p>
						<p>{count}</p>
					</div>
					<Switch>
						<Route exact path="/cart">
							<button className="checkout" onClick={checkout}>Checkout</button>
						</Route>
						<Route exact path="/">
							<Link to="/cart" className="icon-link">
								<i className="fas fa-shopping-cart"></i>
							</Link>
						</Route>
					</Switch>
				</div>
			</div>
		</header>
	)
};
