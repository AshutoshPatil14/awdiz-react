import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const nav = useNavigate();
  const [tshirt, setTshirt] = useState([
    {
      id: 1,
      name: "T-shirt 1",
      price: 100,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QNr1PTkYM6nRbIYDcyCAM-PIU1QHMYCOcCefeYnkbo62mutQY-QZq_ufeBdjrFN0aBqyFJwyOggz-BMN_iK-RC4KqeEPUYyqRcVl3-jJ&usqp=CAc",
    },
    {
      id: 2,
      name: "T-shirt 2",
      price: 200,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QNr1PTkYM6nRbIYDcyCAM-PIU1QHMYCOcCefeYnkbo62mutQY-QZq_ufeBdjrFN0aBqyFJwyOggz-BMN_iK-RC4KqeEPUYyqRcVl3-jJ&usqp=CAc",
    },
    {
      id: 3,
      name: "T-shirt 3",
      price: 300,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QNr1PTkYM6nRbIYDcyCAM-PIU1QHMYCOcCefeYnkbo62mutQY-QZq_ufeBdjrFN0aBqyFJwyOggz-BMN_iK-RC4KqeEPUYyqRcVl3-jJ&usqp=CAc",
    },
    {
      id: 4,
      name: "T-shirt 4",
      price: 400,
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QNr1PTkYM6nRbIYDcyCAM-PIU1QHMYCOcCefeYnkbo62mutQY-QZq_ufeBdjrFN0aBqyFJwyOggz-BMN_iK-RC4KqeEPUYyqRcVl3-jJ&usqp=CAc",
    },
  ]);
  return (
    <div
      className="main"
      style={{
        display: "flex",
        cursor: "pointer",
        justifyContent: "space-between",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {tshirt.map((tshirt) => (
        <div
          className="card"
          key={tshirt.id}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            backgroundColor: "gray",
          }}
          onClick={() => nav(`/useParams/${tshirt.id}`)}
        >
          <img style={{ width: "200px" }} src={tshirt.image} />
          <h4>{tshirt.name}</h4>
          <p>Price ₹{tshirt.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
