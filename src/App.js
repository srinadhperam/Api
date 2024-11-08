import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const apiData = await fetch('https://fakestoreapi.com/products');
    const dataForm = await apiData.json();
    setData(dataForm);
  }

  return (
    <div className="d-flex flex-wrap" style={{
      display: "flex",
      flexWrap: "wrap",
      columnGap: "20px",
      rowGap:"20px"
    }}>
      {data.map((item) => {
        return (
          <div key={item.id} style={{ padding: "10px", textAlign: "center",border: "1px solid black",boxShadow: "5px 5px 10px black", }}>
            <img 
              src={item.image} 
              alt={item.title} 
              style={{ width: "250px", height: "250px"}} 
            />
            <h2>Price: ${item.price}</h2>
            <h3 className="text-primary">{item.category}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;