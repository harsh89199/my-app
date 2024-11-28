import React, { useEffect, useState } from "react";
import ItemService from "../services/ItemService"; // Ensure this path is correct, it imports the service for fetching items
import { Item } from "../types/Item"; // Import the 'Item' type definition for type safety
import { Link } from "react-router-dom"; // Import the 'Link' component for navigation between pages

export default function Items() {
    // useState hook to manage the state of 'items' and 'loading'
    const [items, setItems] = useState<Item[]>([]); // 'items' will hold the array of item objects
    const [loading, setLoading] = useState<boolean>(true); // 'loading' will track if data is still being fetched

    // Function to fetch the list of items from the ItemService
    const getItems = () => {
        ItemService.getAll()  // Call the 'getAll' method from ItemService to get the list of items
            .then((response: any) => {  // After the API request succeeds, handle the response
                console.log(response);  // Log the response to inspect the structure
                setItems(response.data.items);  // Assuming the response contains a 'data' property with an 'items' array
                setLoading(false);  // Set 'loading' to false since data is now available
            })
            .catch((e: Error) => {  // If there is an error in fetching data, catch it
                console.log(e);  // Log the error for debugging purposes
                alert(e.message);  // Show an alert with the error message
            });
    };

    // useEffect hook that runs once when the component mounts
    useEffect(() => {
        getItems();  // Call 'getItems' to fetch data when the component is first rendered
    }, []); // Empty array means this effect runs only once after the first render (component mount)

    // If the 'loading' state is true, display a loading message
    if (loading) {
        return <div>Loading...</div>;  // Display "Loading..." while data is being fetched
    }

    // Once data is fetched and loading is false, render the list of items
    return (
        <div className="container is-fluid">
            <section className="section">
                <h1 className="title">Item Catalogue</h1>  {/* Display the title of the page */}
            </section>
            <div className="columns is-multiline">
                {items.length > 0 ? (  // Check if there are items to display
                    items.map((item, index) => (  // If there are items, map through them and render each one
                        <div className="column" key={index}>  {/* Create a column for each item */}
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="card-header-title">{item.name}</h2>  {/* Display the item's name */}
                                </div>
                                <div className="card-content">
                                    <p className="content">{item.id}</p>  {/* Display the item's ID */}
                                    <p className="content">${item.price || 'N/A'}</p>  {/* Display the price, or 'N/A' if no price is available */}
                                </div>
                                <div className="card-footer">
                                    <Link className="button is-rounded is-danger" to={`/items/${item.id}`}>
                                        View Item  {/* A link to view the detailed page of the item */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items available</p>  /* Display a message if no items are available */
                )}
            </div>
        </div>
    );
}
