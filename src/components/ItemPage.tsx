import React, { useEffect, useState } from "react"; // Importing React and necessary hooks from React
import ItemService from "../services/ItemService"; // Import the service to interact with the API for items
import { Item } from "../types/Item"; // Import the 'Item' type to provide type safety
import { Link, useParams } from "react-router-dom"; // Import 'Link' for navigation and 'useParams' to access route parameters

export default function ItemPage() {

    const [item, setItem] = useState<Item>();  // Define state for a single 'item', initially undefined
    const { id } = useParams();  // Extract the 'id' parameter from the URL using useParams (from React Router)

    // Function to fetch a single item based on the 'id'
    const getItem = (id: string) => {
        ItemService.get(id)  // Call the 'get' method of ItemService with the item ID
            .then((response: any) => {  // If the API request is successful, handle the response
                setItem(response.data);  // Store the fetched item data in the 'item' state
                console.log(item);  // Log the item (although this might show the previous state due to async nature)
            })
            .catch((e: Error) => {  // If an error occurs during the fetch, catch it
                console.log(e);  // Log the error
                alert(e.message);  // Show an alert with the error message
            })
    }

    // useEffect hook that runs after the component mounts
    useEffect(() => {
        if (id) {  // Check if 'id' exists (ensures that the id is available from URL)
            getItem(id);  // Call the getItem function with the ID to fetch the data
        }
    }, []);  // The empty dependency array means this effect will run only once, after the first render

    return (
        <section className="section">  {/* Section element for wrapping the content */}
            <h1 className="title">{item?.name}</h1>  {/* Display the item name, safely using optional chaining */}
            <p className="content">{item?.id}</p>  {/* Display the item's ID, with optional chaining */}
            <p className="content">${item?.price || 'N/A'}</p>  {/* Display the item's price, or 'N/A' if not available */}
        </section>
    );
}
