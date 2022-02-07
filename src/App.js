import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cards from './pages/Cards';
import Card from './pages/Card';
import Load from './pages/Load'
import Travel from './pages/Travel'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchCards } from './Api'
import { GlobalContext } from './context/GlobalState'
import {sortArray} from './utils'


function App() {
  const { cards, fetchAllCards, fare_matrix } = useContext(GlobalContext)
  const [loading, setLoading] = useState(true)
  const addNewCard = (card) => {
    // setCards([...cards, card])
  }

  useEffect(() => {
    init()
  }, []);


  const init = async () => {
    const data = await fetchCards();
    // const newFairMatrix = fare_matrix.map(matrix => {
    //   return {
    //     ...matrix, fair: [...matrix.stations.map(station => {
    //       return{
    //         entry: station, exit: sortArray(...station), fair: 11
    //       }
    //     })]
    //   }
    // })
    // console.log(newFairMatrix)
    fetchAllCards(data)
    setLoading(false)
  }





  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? <p>Loading...</p> :
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="cards" element={<Cards cards={cards} addNewCard={addNewCard} />} />
            <Route path="cards/:id" element={<Card />} />
            <Route path="card-reloading" element={<Load />} />
            <Route path="travel-sim" element={<Travel />} />
          </Routes>
        }

      </div>
    </>
  );
}

export default App;
