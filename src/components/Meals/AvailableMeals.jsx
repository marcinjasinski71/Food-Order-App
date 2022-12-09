import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'French Fries',
		description: 'Best fries from fresh potatoes',
		price: 11.99,
	},
	{
		id: 'm2',
		name: 'Mac and Cheese',
		description: 'Classic, worldwide burger.',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'BBQ Burger',
		description: 'American, raw, meaty',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Salad Bowls',
		description: 'Healthy mixed salads. So fresh !',
		price: 7.99,
	},
	{
		id: 'm5',
		name: 'Black Reaper',
		description: 'Can you handle our SO-SPICY-BURGER?',
		price: 9.99,
	},
	{
		id: 'm6',
		name: 'Polish Pierogis',
		description: 'Classic Polish dumplings with cheese',
		price: 10.99,
	},
	{
		id: 'm7',
		name: 'Lasagna',
		description: 'Over 5000 Calories in once. Dig it!',
		price: 18.99,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map(meal => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			<Card>{mealsList}</Card>
		</section>
	);
};

export default AvailableMeals;
