import "./FilterProd.css";
import React, { useState } from "react";
function FilterProd(props) {
    const [select, setSelect] = useState("Select All");
    const [input, setInput] = useState("");

    const lowerInput = input.toLowerCase();
    const finish = props.data
        .filter((el) => (select === "Select All" ? el : select == el.type))
        .filter((el) => el.name.toLowerCase().includes(lowerInput) === true);

    const onChangeInputHandler = (e) => {
        props.filterData(finish);
        setInput(e.target.value);
    };

    const onChangeSelectHandler = (e) => {
        props.filterData(finish);
        setSelect(e.target.value);
    };

    return (
        <div className="filter">
            <input
                name="input"
                type="text"
                value={input}
                onChange={onChangeInputHandler}
            />
            <select
                name="select"
                value={select}
                onChange={onChangeSelectHandler}
            >
                <option value="Select All">Select All</option>
                <option value="Transport">Transport</option>
                <option value="Electronics">Electronics</option>
                <option value="Work">Work</option>
                <option value="Books">Books</option>
                <option value="Animals">Animals</option>
            </select>
        </div>
    );
}

export default FilterProd;

/* props.data.forEach(e=> {
    if( select === "Select All"){
        e.style.display=''
    }else if(e.type === select){
        e.style.display= ''
    }else{
        e.style.display = 'none'
    }
});
*/

/* const onChangeHandler = (e) => {
    const name = e.target.name;
    if (name === "select") {
        
        
    } else if (name === "input") {
        setInput(e.target.value);
        props.filterData(finish);
    }
}; */

/* {
    if (select === "Select All") {
        return el;
    } else {
        return select === el.type;
    }
}) */
