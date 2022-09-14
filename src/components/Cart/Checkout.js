import { useRef, useState } from "react";

import classes from "./checkout.module.css";

const isEmpty = (value) => {
  return value.trim().length === 0;
};

const isNotFiveChars = (value) => {
  return value.trim().length !== 5;
};

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true  
    })

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = !isNotFiveChars(enteredPostal);
    const enteredStreetIsValid = !isEmpty(enteredStreet);

      setFormInputValidity({
          name:enteredNameIsValid,
          street:enteredStreetIsValid,
          postal:enteredPostalIsValid,
          city:enteredCityIsValid
      })

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;

      if(!formIsValid){

          return
      }
  };
    const nameControlClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
    const streetInputClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
    const postalInputClasses = `${classes.control} ${formInputValidity.postal ? '' : classes.invalid}`
    const cityInputClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
          {!formInputValidity.name && <p>Name is required</p> }
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
          {!formInputValidity.street && <p>Street address is required</p> }
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
          {!formInputValidity.postal && <p>Postal code is required</p> }
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
          {!formInputValidity.city && <p>City is required</p> }
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
