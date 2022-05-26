import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import Search from './components/Search';

function App() {
  const DUMMY_PLAYER = [
    { id: 1, username: "rere", email: "rere@gmail.com", experience: "Beginner", level: "1"},
    { id: 2, username: "gita", email: "gita@gmail.com", experience: "Advanced", level: "8"},
    // { id: 3, username: "andri", email: "andri@yahoo.com", experience: "Intermediate", level: "6"},
  ];

  const [playerData, setPlayerData] = useState(DUMMY_PLAYER)
  const [formData, setFormData] = useState(null)

  const addPlayer = (data) => {
    const lastPlayer = playerData[playerData.length - 1]
    
    const newPlayer = {
      ...data,
      id: lastPlayer.id + 1
    }

    setPlayerData((prevState) => {
      return [
        ...prevState,
        newPlayer,
      ]
    })
  }

  const getPlayerData = (data) => {
    setFormData(data)
  }

  const updatePlayer = (data) => {
    setPlayerData((prevState) => {
      const newPlayerData = prevState.filter((player) => player.id !== formData.id)
      console.log("newPlayerData", newPlayerData)

      return [
        ...newPlayerData,
        data
      ]
    })
  }

  return (
    <div className='app'>
      <Form 
        form = {formData}
        onAddPlayer = {addPlayer} 
        onUpdatePlayer = {updatePlayer}
      />
      <Table 
        players = {playerData} 
        onEditPlayer = {getPlayerData}
      />
      <Search />
    </div>
  );
}

export default App;
