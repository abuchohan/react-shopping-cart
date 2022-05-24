import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Filled with salmon',
        price: 22.99
    },
    {
        id: 'm2',
        name: 'Pork Chops',
        description: 'Chops of the finest Pork!',
        price: 16.5
    },
    {
        id: 'm3',
        name: 'Tikka',
        description: 'Can you handle the spice',
        price: 12.99
    },
    {
        id: 'm4',
        name: 'chips',
        description: 'Potatos chopped up',
        price: 2.99
    }
];

function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map((meals) => (
        <MealItem
            id={meals.id}
            key={meals.id}
            name={meals.name}
            description={meals.description}
            price={meals.price}
        />
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;
