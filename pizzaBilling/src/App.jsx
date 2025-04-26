import React, { useState } from "react";

function App() {
  const [size, setSize] = useState("medium");
  const [topping, setTopping] = useState([]);

  const prices = {
    small: 5,
    medium: 7,
    large: 10,
    toppings: {
      cheese: 2,
      mushroom: 2,
      paneer: 2,
    },
  };

  const handleTop = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTopping([...topping, value]);
    } else {
      setTopping(topping.filter((t) => t !== value));
    }
  };

  const calc = () => {
    let total = prices[size] || 0;
    topping.forEach((t) => {
      total += prices.toppings[t] || 0;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Pizza Billing APP</h1>
      <h2>Select size</h2>
      <label>
        <input
          type="radio"
          name="size"
          value="small"
          checked={size === "small"}
          onChange={(e) => setSize(e.target.value)}
        />
        Small(${prices.small})
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="size"
          value="medium"
          checked={size === "medium"}
          onChange={(e) => setSize(e.target.value)}
        />
        Medium(${prices.medium})
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="size"
          value="large"
          checked={size === "large"}
          onChange={(e) => setSize(e.target.value)}
        />
        Large(${prices.large})
      </label>
      <br />

      <h2>Select toppings</h2>
      {Object.keys(prices.toppings).map((t) => (
        <label key={t}>
          <input
            type="checkbox"
            value={t}
            checked={topping.includes(t)}
            onChange={handleTop}
          />
          {t.charAt(0).toUpperCase() + t.slice(1)} (${prices.toppings[t]})
          <br />
        </label>
      ))}

      <h2>Total Price: ${calc()}</h2>
    </div>
  );
}

export default App;