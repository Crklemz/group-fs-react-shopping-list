- Database
    - "group-shopping-list"
    -ID, Item, Quantity, Unit
    -Item 80 characters
    -Quantity decimals
    -Unit 20 characters

[x]Header

Make into component:
[] form add inputs (Alex)
[] Item componnent (Chris + Stephen)
    []buy button functions - changes bought boolean to true (querytext put route) - button disappears and is replaced with text saying "purchase"(using react)
    []remove button function - removes the list item from the database (delete route)
[] list component (Alex + Jerry)
    []clear button function - removes all list items from database (delete route)
    []reset button function - changes all list items bought boolean to false (put route) 

all items below are created but some not functional - see "make into component" list above
- Form Add Item
    -Inputs
        -Item
        -Quanity
        -Unit
    -Save Button

- Shopping List Section
    -Title
    -Reset/Clear buttons

    -[Item Components 
        -Item
        -Quantity
        -Unit
        -Buy Button !!make button functional -
            -Remove button show purchased
            -Conditional Render
        -Remove Button !!make button functional -
            -Delete from DB]

Server/Routes (everyone takes one)
    -[x] Get (ALex)
    -[x] Post (Chris)
    -[x] Put (Jerry)
    -[x]Delete (Stephen)
    -[x]/list to server

App.jsx
    -form
    -list
    -item (where we interact with list items buy/remove)




