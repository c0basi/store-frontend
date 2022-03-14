import './NavBar.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = (props) => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((total, items) => +items.qty + total, 0);
	};
	return (
		<nav className="navbar">
			{/* logo */}
			<div className="navbar__logo">
				<h2>MERN Shopping Cart</h2>
			</div>

			{/* links */}
			<ul className="navbar__links">
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						<span>Cart</span>
						<span className="cartlogo__badge">{getCartCount()}</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
			<div className="navbar__hamburgerMenu" onClick={props.click}>
				<i className={'fas fa-bars'}></i>
			</div>
		</nav>
	);
};

export default NavBar;
