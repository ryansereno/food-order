import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMealsData = (mealsObject) => {
      const loadedMeals = [];
      for (const mealKey in mealsObject) {
        //this transformation is specific to firebase
        loadedMeals.push({
          id: mealKey,
          description: mealsObject[mealKey].description,
          name: mealsObject[mealKey].name,
          price: mealsObject[mealKey].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals(
      {
        url: "https://react-test-fd9c9-default-rtdb.firebaseio.com/meals.json",
      },
      transformMealsData
    );
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
          <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.MealsError}>
          <p>Something went wrong</p>
      </section>
    );
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
