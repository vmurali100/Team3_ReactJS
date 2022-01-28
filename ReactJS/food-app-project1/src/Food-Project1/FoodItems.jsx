import React, { useState } from 'react';

export const FoodItems = () => {
    const [fooditems, setfooditems] = useState({});
    return (
        <div>
            <form>
                <label htmlFor="id">Id:</label>
                <input type="number" name="id" value={fooditems.id} /><br /><br />

                <label htmlFor="foodid">FoodId:</label>
                <input type="number" name="foodid" value={fooditems.foodid} /><br /><br />

                <label htmlFor="foodname">Food Name::</label>
                <input type="number" name="foodname" value={fooditems.foodname} /><br /><br />

                <label htmlFor="foodcost">Food Cost:</label>
                <input type="number" name="foodcost" value={fooditems.fodcost} /><br /><br />

                <label htmlFor="foodtype">FoodType:</label>
                <select>
                <option value="">Indian</option>
                <option value="">chinese</option>
                <option value="">mexican</option>
                </select>
            </form>
        </div>
    )
};
