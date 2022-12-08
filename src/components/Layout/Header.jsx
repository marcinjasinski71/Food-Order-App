import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/mealtable.png';

const Header = props => {
	return (
		<>
			<header className={classes.header}>
				<h1>Click'n'Eat!</h1>
				<button>Cart</button>
			</header>

			<div className={classes['main-image']}>
				<img src={mealsImage} alt='Packages with food and sauce' />
			</div>
		</>
	);
};

export default Header;
