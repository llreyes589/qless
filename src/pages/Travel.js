import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext, } from '../context/GlobalState';
import { addNewTransaction } from '../Api';

const Travel = () => {
    const [lineNo, setLineNo] = useState(1);
    const [cardId, setCardId] = useState(1);
    const [entry, setEntry] = useState(1);
    const [exit, setExit] = useState(1);
    const [fare, setFare] = useState('')
    const [stations, setStations] = useState([]);
    const { fare_matrix, fares, contextAddCardTransaction } = useContext(GlobalContext)
    useEffect(() => {
        selectLineNo(lineNo)
        return () => {
            console.log('unmount');
        };
    }, []);

    const handleLineNumberChange = (e) => {
        setLineNo(e.target.value)
        selectLineNo(e.target.value)
    }

    const selectLineNo = (number) => {
        // setStations([...stations])
        const line = fare_matrix.map(matrix => {
            if (number == matrix.line) {
                setStations(matrix.stations)
            }
        })
    }

    const handleSetEntry = (e) =>{
        setEntry(e)
        setExit('')
    }

    const handleSetExit = (e) =>{
        setExit(e)
        const selectedFare = fares.filter(fare => {
            if(fare.entry === entry && fare.exit === e){
                return fare
            }

        })
        setFare(selectedFare[0].fare)
    }

    const handleSubmitTrasaction = async(e) => {
        e.preventDefault();
        const inputs = {
            card_id: cardId,
            line_no: lineNo,
            entry,
            exit,
            fare,
            // discount
        }

        const data = await addNewTransaction(inputs)
        contextAddCardTransaction(data)

    }

    return (
        <>
            <nav aria-label="breadcrumb" className='mt-2'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Travel</li>
                </ol>
            </nav>
            <hr />
            <div className='row justify-content-center'>
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body">
                            <form onSubmit={e => handleSubmitTrasaction(e)}>
                                <div className="form-group">
                                    <label htmlFor="card_id">Card ID</label>
                                    <input type="number" value={cardId} onChange={e => setCardId(e.target.value)} min="0" className='form-control' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="line_no">Line Number</label>
                                    <select id="line_no" value={lineNo} onChange={e => handleLineNumberChange(e)} className='form-control'>
                                        <option value="1">Line 1</option>
                                        <option value="2">Line 2</option>
                                    </select>
                                </div>
                                {stations &&
                                    <>
                                        <div className="form-group">
                                            <label htmlFor="entry">Entry</label>
                                            <select id="entry" value={entry} onChange={e => handleSetEntry(e.target.value)} className='form-control' required>

                                                <option value="">--SELECT ENTRY STATION--</option>
                                                {stations.map(station => (
                                                    <option value={station} key={station}>{station}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exit">Exit</label>
                                            <select id="exit" value={exit} onChange={e => handleSetExit(e.target.value)} className='form-control' required>
                                                <option value="">--SELECT EXIT STATION--</option>
                                                {stations.map(station => (
                                                    <option value={station} key={station}>{station}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </>
                                }
                                <div className="form-group">
                                    <label htmlFor="exit">Fare</label>
                                    <div className="form-control">{fare}</div>
                                </div>
                                <br />
                                <button className="btn btn-success col-md-12">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Travel;
