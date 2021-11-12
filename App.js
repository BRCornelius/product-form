import { useState } from "react";
import "./styles.css";

// {
//   name: "Alkaline Water",
//   price: 10,
//   imgSrc: "https://scene7.samsclub.com/is/image/samsclub/0019396807511_A?$DT_Zoom$",
//   quantity: 1
// }

export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [productArray, setProductArray] = useState([]);

  const submitValues = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const url = event.target.url.value;

    if (!productArray.includes((element) => element.name === name)) {
      setProductArray([{ name, price, url, quantity: 1 }, ...productArray]);
    }
  };

  const increaseQuantity = (name) => {
    const currentArray = [...productArray];
    const current = currentArray.find((element) => element.name === name);
    current.quantity += 1;
    setProductArray(currentArray);
  };

  return (
    <div className="App">
      <form onSubmit={submitValues}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Price</label>
        <input
          name="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Url</label>
        <input
          name="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type="submit" />
      </form>
      {productArray.map((product) => (
        <div
          className="product-container"
          onClick={() => increaseQuantity(product.name)}
        >
          <img className="product-image" src={product.url} alt={product.name} />
          <h1>Name: {product.name}</h1>
          <h3>Price: {product.price}</h3>
          <h3>Quantity: {product.quantity}</h3>
        </div>
      ))}
    </div>
  );
}
