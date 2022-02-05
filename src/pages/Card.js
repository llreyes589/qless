import React, { useEffect, useState, useContext } from 'react';
import { showCard, updateCard } from '../Api';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';



const Card = () => {
    const { cards, contextUpdateCard } = useContext(GlobalContext)
    let navigate = useNavigate();
    const [card, setCard] = useState(null);
    const [discountType, setDiscountType] = useState('sc');
    const [discountNumber, setDiscountNumber] = useState(1);

    const params = useParams()
    const getDetails = () => {
        setCard(cards.filter(card => card.id === Number(params.id))[0])
    }
    useEffect(() => {
        getDetails()
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault()
        const inputs = {
            id: Number(params.id),
            discount_number: discountNumber
        }
        try {

            const data = await updateCard(inputs.id, inputs.discount_number)
            contextUpdateCard(data)
        } catch (error) {
            alert(error)
        }
        navigate('/cards');
    }

    return (
        <>
            <nav aria-label="breadcrumb" className='mt-2'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"><Link to={'/cards'}>Cards</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Register Discount</li>
                </ol>
            </nav>
            <hr />
            <div className="row mt-3">
                <div className="col-md-6 col-sm-12">
                    <div className='card shadow'>
                        {!card?.discount_number &&
                            <div className="card-header bg-success text-light">
                                Register Discount
                            </div>
                        }
                        <div className="card-body">
                            <p className="lead">Card Details:</p>
                            <div className="row">
                                <div className="col-md-4 col-sm-12">ID:</div>
                                <div className="col-md col-sm-12">{card?.id}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-12">LOAD:</div>
                                <div className="col-md col-sm-12">{card?.load}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-12">PURCHASED DATE:</div>
                                <div className="col-md col-sm-12">{card?.created_at}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-12">EXPIRATION DATE:</div>
                                <div className="col-md col-sm-12">{card?.expires_at}</div>
                            </div>
                            {card?.discount_number ?
                                (<>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">DISCOUNT TYPE:</div>
                                        <div className="col-md col-sm-12">{card?.discount_number.length > 10 ? 'PWD' : 'Senior Citizen'}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">{card?.discount_number.length > 10 ? 'ID NUMBER' : 'CONTROL NUMBER'}</div>
                                        <div className="col-md col-sm-12">{card?.discount_number}</div>
                                    </div>
                                </>)
                                :
                                <>

                                    <hr />
                                    <form onSubmit={e => handleRegister(e)}>
                                        <fieldset>
                                            <small className='text-danger'>A Q-LESS Transport Card can only be registered once and non-reversible.</small>
                                            <div className="form-group">
                                                <label htmlFor="dc_type">Discount type:</label>
                                                <select className='form-control' value={discountType} onChange={e => setDiscountType(e.target.value)}>
                                                    <option value='sc'>Senior Citizen</option>
                                                    <option value='pwd'>PWD</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="discount_number">{discountType === 'sc' ? 'Control Number:' : 'ID Number:'}</label>
                                                <input type="number" value={discountNumber} onChange={e => setDiscountNumber(e.target.value)} className='form-control' />
                                            </div>
                                            <br />
                                            <button className="btn btn-sm btn-success">Register</button>
                                        </fieldset>
                                    </form>
                                </>
                            }
                        </div>
                    </div>

                </div>
                <div className="col-md-6 col-sm-12">
                    <h3>Transactions</h3>
                    <div className='card shadow'>

                        <div className="card-body">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Entry</th>
                                        <th>Exit</th>
                                        <th>Fare</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>GIL PUYAT</td>
                                        <td>LIBERTAD</td>
                                        <td>12</td>
                                        <td>{new Date().toLocaleDateString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Card;
