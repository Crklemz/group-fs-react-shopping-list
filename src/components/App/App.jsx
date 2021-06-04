import React, {useState, UseEffect, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    let [groceryList, setGroceryList] = useState([]);
    let [listItem, setListItem] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemUnit, setItemUnit] = useState('');

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        axios.get('/list')
        .then(response => {
            setGroceryList(response.data)
        }).catch(error => {
            alert('error getting groceryList');
            console.log(error);
        })
    }//end getList

    const addItem = () => {
        axios.post('/list', {item: listItem, quantity: itemQuantity, unit: itemUnit})
        .then(response => {
            setListItem('');
            setItemQuantity('');
            setItemUnit('');
            getList();
        }).catch(error => {
            alert('error adding item');
            console.log(error);
        })
    }//end addItem

    const handleSubmit = (event) => {
        event.preventDefault();
        if (listItem && itemQuantity && itemUnit) {
            addItem();
        } else {
            alert('Fill out the form pweeez')
        }
    }//end handle submit

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
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
            <section>
                <h2>Shopping List</h2>
                <ul>
                    {groceryList.map(item =>
                        (<li key={item.id}>{item.item} {item.quantity} {item.unit}</li>)
                    )}
                </ul>
            </section>
        </div>
    );
}

export default App;
