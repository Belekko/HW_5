import { useState } from "react";
import "./Test.css";
function Test() {
    const [data, setData] = useState({
        id: Math.random().toString(),
        locName: "",
        locType: "",
        for: "",
        about: "",
    });
    const getValue = (event) => {
        setData((prevdata) => ({ ...prevdata, locName: event.target.value }));
    };

    console.log(data);

    return (
        <div className="project">
            <div className="form-info">
                <label>Location's name:</label>
                <input
                    name="name"
                    type="text"
                    className="name"
                    onChange={getValue}
                />
                <label>location types</label>
                <select className="type" value={"type"}>
                    <option value="city">city</option>
                    <option value="town">town</option>
                    <option value="village">village</option>
                </select>
                <label>for:</label>
                <select name="for" className="for">
                    <option value="business">bussines</option>
                    <option value="travel">travel</option>
                    <option value="study">study</option>
                    <option value="fun">fun</option>
                    <option value="security">security</option>
                    <option value="work">work</option>
                    <option value="eco-live">eco-live</option>
                </select>
                <label>Why i need choose this location?</label>
                <textarea
                    className="about"
                    cols="30"
                    rows="10"
                    value={"type your detail's"}
                >
                    type your detail's
                </textarea>
                <button className="add-btn">ADD</button>
            </div>{" "}
        </div>
    );
}

export default Test;
