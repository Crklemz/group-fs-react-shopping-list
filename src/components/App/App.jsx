import React, {useState, UseEffect, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import Form from '../Form/Form'


function App() {
    let [groceryList, setGroceryList] = useState([]);


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

 

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <Form />
            <section>
                <h2>Shopping List</h2>
                <button>Reset</button>
                <button>Clear</button>
                <ul>
                    {groceryList.map(item =>
                        (<li key={item.id}>{item.item} {item.quantity} {item.unit} <button>Buy</button> <button>Remove</button></li>)
                    )}
                </ul>
            </section>
        </div>
    );
}

export default App;
