import { useState } from "react";

function Checklist({ items }) {
    const [checkedItems, setCheckedItems] = useState(new Set());

    const handleToggle = (item) => {
        setCheckedItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(item)) {
                newSet.delete(item);
            } else {
                newSet.add(item);
            }
            return newSet;
        });
    };

    return (
        <div>
            <h3>Checklist</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={checkedItems.has(item)}
                                onChange={() => handleToggle(item)}
                            />
                            <span style={{ textDecoration: checkedItems.has(item) ? 'line-through' : 'none' }}>
                                {item}
                            </span>
                        </label>
                    </li>
                ))}
            </ul>
            <p>Checked items: {checkedItems.size}</p>
        </div>
    );
}

export default Checklist;
