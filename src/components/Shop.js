export default function Shop({ products, addItemToCart }) {
	return(
		<div className="main wrapper">
			<h2>Shop</h2>
			<p className="italic">Click on an item to add to cart</p>
			<div className="products">
				{products.map((product) => (
					<div className="product-link product" key={product} onClick={() => addItemToCart(product)}>
						<i className={'fab fa-' + product.replace(/ /, '-').toLowerCase()}></i>
						<p>{product}</p>
					</div>
				))}
			</div>
		</div>
	)
}
