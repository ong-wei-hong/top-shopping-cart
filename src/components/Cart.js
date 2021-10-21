export default function Cart( { cart, cartInput }) {
	const keyDown = (e) => {
		if((e.key.length === 1 && isNaN(parseInt(e.key)))){
			e.preventDefault();
		}
	}

	return(
		<div className="main wrapper">
			<h1>Cart</h1>
			<div className="products">
				{Object.keys(cart).map((k) => (
					<div className="product product-cart" key={k}>
						<i className={'fab fa-' + k.replace(/ /, '-').toLowerCase()}></i>
						<p>{k}</p>
						<input type="number" value={cart[k]} className="cart-input" onKeyDown={keyDown} onChange={e => cartInput(e, k)} min="0" />
					</div>
				))}
			</div>
		</div>
	)
}
