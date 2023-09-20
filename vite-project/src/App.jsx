import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchHandle = (e) => {
    e.preventDefault();
    const newData = data.filter((item) => item.name.includes(searchValue));
    setData(newData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/');
      const result = await response.json();
      setData([...result]);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={searchHandle}>Search</button>
      </div>
      <div className="container">
        {data.map((e, i) => (
          <div key={i} className="card">
            <div
              style={{
                backgroundImage: `url(${e.url})`,
                height: '150px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <h5>{e.name}</h5>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
