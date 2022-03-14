import './CartPage.scss';
import CartItem from '../CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cart/cart-actions';
import { cartActions } from '../../redux/cart/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart({ qty, id }));
	};

	const removeItemHandler = (id) => {
		dispatch(cartActions.removeItemFromCart(id));
	};

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => +item.qty + qty, 0);
	};

	const getCartSubTotal = () => {
		return cartItems.reduce((price, item) => item.qty * item.price + price, 0);
	};
	return (
		<div className="cartpage">
			<div className="cartpage__left">
				<h2>Shopping Cart</h2>
				{cartItems.length === 0 ? (
					<div>
						<h3>
							Your Cart is Empty. <Link to="/">Go back</Link>
						</h3>
					</div>
				) : (
					cartItems.map((cartItem) => (
						<CartItem
							key={cartItem.product}
							item={cartItem}
							qtyChangeHandler={qtyChangeHandler}
							onRemove={removeItemHandler}
						/>
					))
				)}
			</div>
			<div className="cartpage__right">
				<div className="cartpage__right--info">
					<p>Subtotal ({getCartCount()}) items</p>
					<p>${getCartSubTotal().toFixed(2)}</p>
				</div>
				<div>
					<p>
						<button>Proceed To Checkout</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
