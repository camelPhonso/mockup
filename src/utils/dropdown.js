import React, {useState} from "react";
export default function Dropdown() {
    const [selectedValue, setSelectedValue] = useState('');
 
    function handleChange (event)  {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            
          <select id="dropdown" value={selectedValue} onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          {selectedValue && <p>You selected: {selectedValue}</p>}
        </div>
    );
};