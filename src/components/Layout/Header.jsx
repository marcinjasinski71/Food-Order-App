import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/mealtable.png';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
	return (
		<>
			<header className={classes.header}>
				<span className={classes.logo}>
					Click<span className={classes['logo-n']}>'n'</span>Eat
				</span>
				<HeaderCartButton />
			</header>

			<div className={classes['main-image']}>
				<img src={mealsImage} alt='Packages with food and sauce' />
			</div>
		</>
	);
};

export default Header;
