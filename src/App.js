import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {
	const [products] = useState(['Android', 'Angular', 'App Store', 'Bootstrap', 'Cloudflare', 'CSS3', 'Docker', 'Ember', 'Git', 'HTML5', 'JS', 'Node JS', 'PHP', 'React', 'Rust', 'Sass', 'Unity', 'VueJS','WordPress', 'Yarn']);

	const [cart, setCart] = useState({});
	const [count, setCount] = useState(0);

	const countItems = () => {
		if(Object.keys(cart).length === 0) {
			setCount(0);
		} else {
			let curr = 0;
			Object.keys(cart).forEach(key => {
				curr += cart[key];
			})
			setCount(curr);
		}
	}

	const addItemToCart = (product) => {
		if(Object.keys(cart).includes(product)) {
			const newCart = cart;
			newCart[product] = newCart[product] + 1;
			setCart(newCart);
		} else {
			const newCart = cart;
			newCart[product] = 1;
			setCart(newCart)
		}
		countItems();
	};

	const cartInput = (e, k) => {
		const newCart = cart;
		if(e.target.value === '') {
			newCart[k] = 0
		} else {
			newCart[k] = parseInt(e.target.value);
		}
		setCart(newCart);
		countItems();
	}

  return (
    <div className="App">
			<Router>
				<Header count={count} />
				<Switch>
					<Route exact path="/">
						<Shop
							products={products}
							addItemToCart={addItemToCart}
						/>
					</Route>
					<Route exact path="/cart">
						<Cart cart={cart} cartInput={cartInput} />
					</Route>
				</Switch>
			</Router>
    </div>
  );
}

export default App;
