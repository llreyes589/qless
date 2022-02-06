import React, { useContext, useState } from 'react';
import { saveReloading } from '../Api';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';

const Load = () => {
    const { cards, contextUpdateCard } = useContext(GlobalContext)
    const [cardId, setCardId] = useState(1);
    const [amount, setAmount] = useState(100);
    const [cash, setCash] = useState(100);

    const handleAddLoad = (e) => {
        e.preventDefault()
        const inputs = {
            cardId, amount, cash
        }
        saveReloading(inputs)
    }

    return (
        <>
            <nav aria-label="breadcrumb" className='mt-2'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Card Reloading</li>
                </ol>
            </nav>
            <hr />
            <div className="row justify-content-center mt-3">
                <div className="col-md-6 col-sm-12">
                    <div className='card shadow'>
                        <div className="card-body">
                            <form onSubmit={e => handleAddLoad(e)}>
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="card_id">Card ID:</label>
                                        <input type='number' id='card_id' value={cardId} onChange={e => setCardId(e.target.value)} className='form-control' required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="amount">Desired Amount:</label>
                                        <input type='number' id='amount' value={amount} min='100' max="10000" onChange={e => setAmount(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cash">Cash/Bill:</label>
                                        <input type='number' id="cash" value={cash} min={amount} onChange={e => setCash(e.target.value)} className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="change">Change:</label>
                                        <div className='form-control'>{cash - amount}</div>
                                    </div>

                                    <br />
                                    <button className="btn btn-sm btn-success">Submit</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Load;
