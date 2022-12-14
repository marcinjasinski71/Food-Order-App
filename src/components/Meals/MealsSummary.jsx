import classes from './MealsSummary.module.css';

const MealsSummary = () => {
	return (
		<section className={classes.summary}>
			<h2>Delicious</h2>
			<p className={classes['summary-and']}>&</p>
			<h3>Simply delivered</h3>
			<p className={classes.menulist}>Menu:</p>
		</section>
	);
};

export default MealsSummary;
