import './HomePage.scss';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../Product';
import { getProducts as listProducts } from '../../redux/products/product-actions';
import { addToCart } from '../../redux/cart/cart-actions';

const HomePage = () => {
	const dispatch = useDispatch();
	const getProducts = useSelector((state) => state.products);
	const { products, loading, error } = getProducts;

	// find a way to di that
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	const addToCartHandler = (qty, id) => {
		dispatch(addToCart({ qty, id }));
	};

	return (
		<div className="homepage">
			<h2 className="homepage__title">Latest Products</h2>
			<div className="homepage__products">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>{error}</h2>
				) : (
					products.map((product) => (
						<Product
							key={product.id}
							productId={product.id}
							name={product.name}
							price={product.price}
							description={product.description}
							imageUrl={product.imageUrl}
							onAdd={addToCartHandler.bind(null, 1, product.id)}
						/>
					))
				)}
				{/* <Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product /> */}
			</div>
		</div>
	);
};

export default HomePage;
