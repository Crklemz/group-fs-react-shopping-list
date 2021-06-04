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

    const addItem = (newItem) => {
        axios.post('/list', newItem)
        .then(response => {
            getList();
        }).catch(error => {
            alert('error adding item');
            console.log(error);
        })
    }//end addItem

    const handleRemove = (id) => {

        
        axios({
            method: 'DELETE',
            url: `/list/${id}`
        }).then(response => {
            getList();
        }).catch(error => {
            alert('error getting groceryList after remove button clicked');
            console.log(error);
        })
    }//end handleRemove

    


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <Form addItem={addItem}/>
            <section>
                <h2>Shopping List</h2>
                <button>Reset</button>
                <button>Clear</button>
                <ul>
                    {groceryList.map(item =>
                        (<li key={item.id}> {item.item} {item.quantity} {item.unit} <button>Buy</button> <button onClick={() => handleRemove(item.id)} type="remove" value="Remove">Remove</button></li>)
                    )}
                </ul>
            </section>
        </div>
    );
}

export default App;
