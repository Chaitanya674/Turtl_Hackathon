import React , { useEffect , useState } from "react";
import Card from "../Components/Card";
import axios from "axios";

const Store = () => {
    const [storedata , Setstore ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('api/store');
            Setstore(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, []);

    return (
        <div  className="events">
            <h2>Welcome to our Green-Store</h2>
            <div className="card-grid">
            {storedata.map((storeitem, index) => (
                <Card
                key={index}
                image={storeitem.imageUrl}
                heading={storeitem.heading}
                buttonLabel="Buy"
                description={storeitem.description}
                link={storeitem.link}
                />
            ))}
            </div>
        </div>
    )
}

export default Store;