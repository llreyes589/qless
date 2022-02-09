import React, { useEffect, useState, useContext, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';
import TransactionListItem from '../components/TransactionListItem';



const Card = () => {
    const { cards, contextUpdateCard, getCardDetails } = useContext(GlobalContext)
    let navigate = useNavigate();
    const [card, setCard] = useState(null);
    const [discountType, setDiscountType] = useState('sc');
    const [discountNumber, setDiscountNumber] = useState(1);
    const [input, setInput] = useState();
    const inputCard = useRef();

    const handleChange = () => {

        const scRegex = /(\d{0,2})(\d{0,4})(\d{0,4})/
        const pwdRegex = /(\d{0,4})(\d{0,4})(\d{0,4})/
        const cardValue = inputCard.current.value
          .replace(/\D/g, '')
          .match(discountType === 'sc' ? scRegex : pwdRegex);
          inputCard.current.value = !cardValue[2]
          ? cardValue[1]
          : `${cardValue[1]}-${cardValue[2]}${`${
              cardValue[3] ? `-${cardValue[3]}` : ''
            }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`;
        const numbers = inputCard.current.value;
        setDiscountNumber(numbers);
      };

    const params = useParams()

    useEffect(() => {
        setCard(getCardDetails(params.id))
        handleChange();
    }, [input]);

    const handleRegister = (e) => {
        e.preventDefault()
        card.discount_number = discountNumber
        contextUpdateCard(card)
        navigate('/cards');
    }

    return (
        <>
            <nav aria-label="breadcrumb" className='mt-2'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page"><Link to={'/cards'}>Cards</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{!card?.discount_number ? "Register discount" : 'View details'}</li>
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
                                <div className="col-md col-sm-12">{card?.purchased_at}</div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-12">EXPIRATION DATE: </div>
                                <div className="col-md col-sm-12">{card?.expires_at}</div>
                            </div>
                            {card?.discount_number ?
                                (<>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">DISCOUNT TYPE:</div>
                                        <div className="col-md col-sm-12">{card?.discount_number.length > 12 ? 'PWD' : 'Senior Citizen'}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">{card?.discount_number.length > 12 ? 'ID NUMBER' : 'CONTROL NUMBER'}</div>
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
                                                <input ref={inputCard} onChange={handleChange} min={discountType === 'sc' ? 10 : 12} max={discountType === 'sc' ? 10 : 12} type="text" className='form-control' placeholder={discountType === 'sc' ? '__-____-____' : '____-____-____'} required />
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
                                    {card && card.transactions.map((transaction,index) => (
                                        <TransactionListItem transaction={transaction} key={index} />
                                    ))}
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
