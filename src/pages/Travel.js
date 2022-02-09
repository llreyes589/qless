import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext, } from '../context/GlobalState';
import { addYear } from '../utils';

const Travel = () => {
    const [lineNo, setLineNo] = useState(1);
    const [cardId, setCardId] = useState('');
    const [entry, setEntry] = useState(1);
    const [exit, setExit] = useState(1);
    const [fare, setFare] = useState('')
    const [stations, setStations] = useState([]);
    const { lineStations, fares, contextAddCardTransaction, getCardDetails } = useContext(GlobalContext)
    const [card, setCard] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
        selectLineNo(lineNo)
        return () => {
            console.log('unmount');
        };
    }, []);

    const handleLineNumberChange = (e) => {
        setLineNo(e.target.value)
        selectLineNo(e.target.value)
        setEntry(1)
        setExit(1)
        setFare(0)
    }

    const selectLineNo = (number) => {
        lineStations.map(line => {
            if (Number(number) === line.line) {
                setStations(line.stations)
            }
        })
    }

    const handleSetEntry = (e) => {
        setEntry(e)
        setExit('')
    }

    const handleSetExit = (e) => {
        setExit(e)
        const selectedFare = fares.filter(fare => {
            if ((fare.entry === entry && fare.exit === e) || (fare.entry === e && fare.exit === entry)) {
                return fare
            }

        })
        setFare(selectedFare[0].fare)
        if (card.discount_number != null) {
            setDiscount(selectedFare[0].fare * .2)
            const discount = selectedFare[0].fare * .2
            setFare(prev => prev - discount)
        }
    }

    const handleSubmitTrasaction = async (e) => {
        e.preventDefault();
        const newTransaction = {
            card_id: cardId,
            line_no: lineNo,
            entry,
            exit,
            fare,
            discount: 20,
            created_at: new Date().toDateString()
        }
        card.load = card.load - fare
        card.expires_at = addYear(new Date(newTransaction.created_at), 5)
        card.transactions = [...card.transactions, newTransaction]
        setIsSuccess(true)

    }

    const handleSetCardId = async (id) => {
        setCardId(id)
        setEntry(1)
        setExit(1)
        setFare(0)
        setDiscount(0)
        // const data = await showCard(id)
        setCard(getCardDetails(id))
        if (card.discount_number != null) {
            setDiscount(fare * .2)
            const discount = fare * .2
            setFare(prev => prev - discount)
        }
    }

    const handleNewTransaction = () => {
        setIsSuccess(prev => !prev)
        setCardId('')
        setEntry(1)
        setExit(1)
        setFare(0)
        setDiscount(0)
        card.discount_number = null
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
                    {isSuccess &&
                        <div className="alert alert-success">
                            <p className="lead">Success! Travel transaction saved. <button className='btn btn-sm btn-primary' onClick={e => handleNewTransaction()}>New Transaction</button></p>
                        </div>
                    }
                    <div className="card shadow">
                        <div className="card-body">
                            <form onSubmit={e => handleSubmitTrasaction(e)}>
                                {card.discount_number != null &&
                                    <span className="badge rounded-pill bg-primary">*Discounted</span>
                                }
                                <div className="form-group">
                                    <label htmlFor="card_id">Card ID</label>
                                    <input type="number" value={cardId} onChange={e => handleSetCardId(e.target.value)} min="1" className='form-control' required />
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
                                    <div className="form-control">{fare && fare.toFixed(2)}</div>
                                </div>
                                {card && card.discount_number != null &&
                                    <div className="form-group">
                                        <label htmlFor="exit">Discount:</label>
                                        <div className="form-control">{discount.toFixed(2)}</div>
                                    </div>
                                }
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
