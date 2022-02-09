import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Load = () => {
    const { contextUpdateCard, getCardDetails } = useContext(GlobalContext)
    const [cardId, setCardId] = useState('');
    const [card, setCard] = useState([]);
    const [amount, setAmount] = useState(100);
    const [cash, setCash] = useState(100);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(false);


    const handleAddLoad = async (e) => {
        e.preventDefault()
        if (card !== undefined) {
            card.load = Number(card.load) + Number(amount)
            contextUpdateCard(card)
            setIsSuccess(true)
        } else {
            setError(prev => !prev)
        }
    }

    const handleNewLoad = () => {
        setIsSuccess(prev => !prev)
        setCardId(1)
        setAmount(100)
        setCash(100)

    }

    const handleSetCardId = (e) => {
        setCardId(e)
        setCard(getCardDetails(e))
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
                    {isSuccess &&
                        <div className="alert alert-success">
                            <p className="lead">Success! Load added. <button className='btn btn-sm btn-primary' onClick={e => handleNewLoad()}>New Load</button></p>
                        </div>
                    }
                    {error &&
                        <div className="alert alert-danger">
                            <p className="lead">Error! Card not found.</p>
                        </div>
                    }

                    <div className='card shadow'>
                        <div className="card-body">
                            <form onSubmit={e => handleAddLoad(e)}>
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="card_id">Card ID:</label>
                                        <input type='number' id='card_id' value={cardId} onChange={e => handleSetCardId(e.target.value)} className='form-control' required min={1} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="amount">Desired Amount:</label>
                                        <input type='number' id='amount' value={amount} min='100' max="10000" onChange={e => setAmount(e.target.value)} className='form-control' required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cash">Cash/Bill:</label>
                                        <input type='number' id="cash" value={cash} min={amount} onChange={e => setCash(e.target.value)} className='form-control' required />
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
