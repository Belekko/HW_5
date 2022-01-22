import Binding from "./components/Binding";
import React, { useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import FilterProd from "./components/fitlerArray/FilterProd";

const INIT_STATE = [
    {
        id: Math.random().toString(),
        name: "TeslaPhone",
        price: "1100",
        type: "Electronics",
        aboutProduct: "Very useful object!",
        image: "https://www.aljazeera.net/wp-content/uploads/2021/12/image-14.jpg?resize=1200%2C630",
        display: "",
    },
    {
        id: Math.random().toString(),
        name: "Tesla",
        price: "80000",
        type: "Transport",
        aboutProduct: "Very useful object!",
        image: "https://www.ixbt.com/img/n1/news/2021/3/5/c48b5fec0b41c83f14e0f7dff2fb39ddfb28f62c_large.jpg",
        display: "",
    },
    {
        id: Math.random().toString(),
        name: "Myshyk",
        price: "1200",
        type: "Animals",
        aboutProduct: "Very useful object!",
        image: "https://i.pinimg.com/originals/70/f0/21/70f021840410eea3ba793b07f9a2279d.jpg",
        display: "",
    },
    {
        id: Math.random().toString(),
        name: "ReactJS",
        price: "110000",
        type: "Work",
        aboutProduct: "Very useful object!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AUrlBDCEwf7LkjDO4VC3utL7PGZjJU7D9VP-igCnR13JbL93YXp0wQGHAofPXxg6UM0&usqp=CAU",
        display: "",
    },
];

function App() {
    const [products, setProducts] = useState(INIT_STATE);

    const getProductData = (productData) => {
        setProducts((prevProducts) => [...prevProducts, productData]);
        console.log(products);
    };

    const getFilterredData = (filterData) => {
        setProducts(filterData);
        console.log(filterData);
    };

    return (
        <div className="App">
            <Binding getData={getProductData} />
            <FilterProd data={products} filterData={getFilterredData} />
            {products.map((el) => (
                <Card key={Math.random().toString()}>
                    <div className="card-item">
                        <img className="img" src={el.image} alt="" />{" "}
                        <h1 className="title">{el.name}</h1>
                        <h1 className="price">{el.price}$</h1>
                        <Button>Buy</Button>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default App;
