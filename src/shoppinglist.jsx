import { useState } from "react";

const ShoppingList = () => {
    const [mylist, setmylist] = useState(["Tomato", "Potato", "Onion", "Carrot", "Cabbage"]);
    const [item, setItem] = useState("");

    const handleChange = (evt) => {
        setItem(evt.target.value);
    };
    const handleAddItem = () => {
        setmylist([...mylist, item]);
        setItem("");
    };
    const removeItem = (index) => {
        const newList = mylist.filter((_, i) => i !== index);
        setmylist(newList);
    };
    return (
        <>
            <input value={item} onChange={handleChange} placeholder="Enter your item" />
            <button onClick={handleAddItem}>Add Item</button>
            <button onClick={() => removeItem(mylist.length - 1)}>Remove Last Item</button>
            <ul>
                {mylist.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};
export default ShoppingList;
