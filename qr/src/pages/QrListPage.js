import React, { useEffect, useState } from 'react'
import axios from "axios";
function QrListPage() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get("/api/items")
          .then(response => setItem(response.data))
          .catch(error => console.error(error));
      }, []);

  return (
    <div>
      <ul>
        {item.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QrListPage