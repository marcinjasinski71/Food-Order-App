import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Sushi',
		description: 'Finest fish and veggies',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Schnitzel',
		description: 'A german specialty!',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Barbecue Burger',
		description: 'American, raw, meaty',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Green Bowl',
		description: 'Healthy...and green...',
		price: 18.99,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map(meal => (
		<ul>
			<li className={classes.name}>{meal.name}</li>
			<li className={classes.description}>{meal.description}</li>
			<li className={classes.price}>Price: ${meal.price}</li>
		</ul>
	));

	return (
		<section className={classes.meals}>
			<ul>{mealsList}</ul>
		</section>
	);
};

export default AvailableMeals;
