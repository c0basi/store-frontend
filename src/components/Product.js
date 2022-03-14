import './Product.scss';
import { Link } from 'react-router-dom';

const Product = ({ productId, name, price, description, imageUrl, onAdd }) => {
	return (
		<div className="product">
			<img src={imageUrl} alt={name} />
			<div className="product__info">
				<p className="product__info--name">{name}</p>
				<p className="product__info--description">
					{description.substring(0, 100)}...
				</p>
				<p className="product__info--price">${price}</p>
				<div className="info-actions">
					<Link to={`/product/${productId}`} className="info-button">
						View
					</Link>
					<button onClick={onAdd} className="add-button">
						<p>Add to Cart</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
