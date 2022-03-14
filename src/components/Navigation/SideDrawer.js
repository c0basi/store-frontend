import './SideDrawer.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({ show, click }) => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	// separate this
	const getCartCount = () => {
		return cartItems.reduce((total, items) => +items.qty + total, 0);
	};
	const sideDrawerClass = `sidedrawer ${show ? 'show' : ''}`;
	return (
		<div className={sideDrawerClass}>
			<ul className="sidedrawer__links" onClick={click}>
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						<span>Cart</span>
						<span className="sidedrawer__links--cartbadge">
							{getCartCount()}
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
