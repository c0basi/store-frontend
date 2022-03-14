import { Fragment, useState } from 'react';
import NavBar from '../Navigation/NavBar';
import Backdrop from '../Navigation/Backdrop';
import SideDrawer from '../Navigation/SideDrawer';

const Layout = (props) => {
	const [sideToggle, setSideToggle] = useState(false);

	const toggleHandler = () => {
		setSideToggle(true);
	};

	const removeToggleHandler = () => {
		setSideToggle(false);
	};
	return (
		<Fragment>
			<NavBar click={toggleHandler} />
			<Backdrop show={sideToggle} click={removeToggleHandler} />
			<SideDrawer show={sideToggle} click={removeToggleHandler} />
			<main>{props.children}</main>
		</Fragment>
	);
};

export default Layout;
