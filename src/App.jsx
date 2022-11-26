import { useState, useEffect } from "react";
import "./App.css";
import { Storage } from "aws-amplify";

function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState("");
  useEffect(() => {
    const getImage = async () => {
      const image = await Storage.get(
        "materialType/b3b706f8-9a29-450b-96af-cce95bd08f6c/0.png"
      );
      setImage(image);
    };
    getImage();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={image} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
