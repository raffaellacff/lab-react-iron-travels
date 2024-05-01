
import {useState} from "react";
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
    const [travels, setTravels] = useState(travelPlansData);

    const handleDelete = (index) => {
        const updatedTravels = [...travels];
        updatedTravels.splice(index, 1);
        setTravels(updatedTravels);
    }

    return (
        <div className="container">
            {travels.map((element) => (
                <div className="card">
                    <img src={element.image} />
                    <div className="information">
                        <h4>{element.destination}  ({element.days} days)</h4>
                        <h5>{element.description}</h5>
                        <h5>Price: {element.totalCost}€</h5>
                        
                        <span>             
                        {element.totalCost > 350 ? 
              <span className="premium-label">Premium</span> : 
              <span className="great-label">Great Deal!</span>}
                        </span>

                        {element.allInclusive && <span className="inclusive-label">All-inclusive</span>}

                        <button onClick={()=> handleDelete(element.index)}>Delete</button>

                    </div>
                </div>
            ))}
        </div>
    );
}

