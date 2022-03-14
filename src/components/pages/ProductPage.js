import './ProductPage.scss';
import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProductDetails } from '../../redux/products/product-actions';
import { addToCart } from '../../redux/cart/cart-actions';

const ProductPage = ({ match, history }) => {
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;
	useEffect(() => {
		if (product && match.params.id !== product.id) {
			dispatch(getProductDetails(match.params.id));
			console.log('dynaic url');
			console.log(match.params.id);
		}
	}, [dispatch, product.id, match.params.id]);

	const addToCartHandler = () => {
		dispatch(addToCart({ qty, id: product.id }));
		history.push('/cart');
	};
	return (
		<div className="productpage">
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<Fragment>
					<div className="productpage__left">
						<div className="productpage__left--image">
							<img src={product.imageUrl} alt={product.name} />
						</div>
						<div className="productpage__left--info">
							<p className="productpage__left--info__name">{product.name}</p>
							<p className="productpage__left--info__price">
								Price: ${product.price}
							</p>
							<p className="productpage__left--info__description">
								{product.description}
							</p>
						</div>
					</div>
					<div className="productpage__right">
						<div className="productpage__right__info">
							<p>
								Price: <span>${product.price}</span>
							</p>
							<p>
								Status:{' '}
								<span>
									{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
								</span>
							</p>
							<p>
								Qty
								<select value={qty} onChange={(e) => setQty(e.target.value)}>
									{[...Array(product.countInStock).keys()].map((x) => (
										<option key={x + 1} value={x + 1}>
											{x + 1}
										</option>
									))}
								</select>
							</p>
							<p>
								<button type="button" onClick={addToCartHandler}>
									Add to Cart
								</button>
							</p>
						</div>
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default ProductPage;
