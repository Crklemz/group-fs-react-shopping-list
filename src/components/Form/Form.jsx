import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form({addItem}) {

    let [listItem, setListItem] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemUnit, setItemUnit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (listItem && itemQuantity && itemUnit) {
            addItem({item: listItem, quantity: itemQuantity, unit: itemUnit});
            setListItem('');
            setItemQuantity('');
            setItemUnit('');
        } else {
            alert('Fill out the form pweeez')
        }
    }//end handle submit

    return (
            <form onSubmit={handleSubmit}>
                <h2>Add an Item!</h2>
                <label>Item</label>
                <input type="text" placeholder="Item" value={listItem} onChange={(event) => setListItem(event.target.value)} />
                <label>Quantity</label>
                <input type="number" placeholder="Quantity" value={itemQuantity} onChange={(event) => setItemQuantity(event.target.value)} />
                <label>Unit</label>
                <input type="text" placeholder="Unit" value={itemUnit} onChange={(event) => setItemUnit(event.target.value)} />
                <button type="submit" value="Submit">Add Item</button>
            </form>
    )
}

Form.propTypes = {
    addItem: PropTypes.func.isRequired,
};

export default Form