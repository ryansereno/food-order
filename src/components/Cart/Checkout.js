import classes from "./checkout.module.css";

const Checkout = (props) => {
  return (
    <form action="">
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name"  />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street address</label>
        <input type="text" id="street"  />
      </div>
      <div className={classes.control}>
        <label htmlFor="zip">Zip code</label>
        <input type="text" id="zip"  />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city"  />
      </div>
        <button>Confirm</button>
    </form>
  );
};

export default Checkout;
