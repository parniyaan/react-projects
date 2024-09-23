// src/components/DataPage.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadData } from '../utils/loadData'; // Import the utility function to load data

const DataPage = () => {
    const { name } = useParams(); // Get the icon name from the URL
    const [data, setData] = useState(null); // State to hold the fetched data
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading to true before fetching
            try {
                const result = await loadData(name); // Fetch data using the name parameter
                if (result) {
                    setData(result); // Set the fetched data to state
                } else {
                    setError("Data not found."); // Handle case where data is not found
                }
            } catch (error) {
                setError("Error fetching data.");
                console.log(error)
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchData(); // Call the fetchData function
    }, [name]); // Run this effect whenever the name changes

    if (loading) {
        return <p>Loading...</p>; // Display loading message while fetching data
    }

    if (error) {
        return <p>{error}</p>; // Display error message if there's an error
    }

    if (!data) {
        return <p>No data available.</p>; // Display message if no data is available
    }

    return (
        <div>
            <h1>{data.title || "No Title"}</h1>
            <p>{data.description || "No description available."}</p>
            {data.details && <p>{data.details}</p>}
        </div>
    );
};

export default DataPage;
