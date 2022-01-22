import "./Binding.css";
import React, { useState } from "react";
function Binding(props) {
    const [product, setProduct] = useState({
        id: Math.random().toString(),
        name: "",
        price: "",
        type: "",
        image:'',
        aboutProduct: "",

    });

    
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "product-name") {
            setProduct({ ...product, name: value });
        } else if (name === "product-type") {
            setProduct({ ...product, type: value });
        } else if (name === "product-price") {
            setProduct({ ...product, price: value });
        } else if(name=== 'product-img'){
            setProduct({ ...product, image: value });
        }else{
            setProduct({...product,aboutProduct:value})
        }
    };
    const onSubmitHandler = (product) => {
        console.log(product);
        props.getData(product)
        console.log(product)



    };
    return (
        <div className="project">
            <div className="block-1">
                <label>product name:</label>
                <input
                    name="product-name"
                    type="text"
                    className="product-name"
                    value={product.name}
                    onChange={onChangeHandler}
                />
                <label>product price:($)</label>
                <input
                    name="product-price"
                    type="number"
                    className="product-price"
                    value={product.price}
                    onChange={onChangeHandler}
                />
                <label>Product type</label>
                <select
                    name="product-type"
                    className="product-type"
                    value={product.type}
                    onChange={onChangeHandler}
                >
                    <option value="Transport">Transport</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Work">Work</option>
                    <option value="Animals">Animals</option>
                    <option value="Books">Books</option>
                </select>
            </div>
            <div className="block-2">
                <label>image's url:</label>
                <input name="product-img" type="text"  value={product.img}
                    onChange={onChangeHandler}/>
                <label>About product:</label>
                <textarea
                    name="about-product"
                    value={product.aboutProduct}
                    cols="30"
                    rows="10"
                    className="textArea"
                    onChange={onChangeHandler}
                ></textarea>
                <button onClick={()=> onSubmitHandler(product)} className="add-btn">ADD</button>
            </div>
        </div>
    );
}

export default Binding;
