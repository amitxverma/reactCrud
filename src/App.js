// import logo from './logo.svg';
import './App.css';
import Datatable from './Components/datatable/Datatable';
import { useState, createContext } from "react";

export const dataText = createContext();

function App() {

  let dataobject = [
    {
      name: "amit kumar",
      username: "amit_verma",
      password: "123456",
      email: "amitverma@outlook.com",
      number: "9779805146"
    },
    {
      name: "aman",
      username: "aman_roy",
      password: "55555",
      email: "amanroy@outlook.com",
      number: "555555555"
    },
    {
      name: "Piyush",
      username: "Piyush_Chauhan",
      password: "66666",
      email: "piyush@outlook.com",
      number: "222222222"
    }
  ];


  const [userData, setUserData] = useState(dataobject);

  return (
    <>
      <dataText.Provider value={{ userData, setUserData }}>
        <Datatable array={dataobject} />
      </dataText.Provider>
    </>
  );
}

export default App;
