import React, { useEffect ,useState} from 'react';
import { showCard, updateCard } from '../Api';
import { useParams, useNavigate  } from 'react-router-dom'

const Card = () => {
    let navigate = useNavigate();
    const [card, setCard] = useState([]);
    const [discountType, setDiscountType] = useState('sc');
    const [discountNumber, setDiscountNumber] = useState(0);

    const params = useParams()
    const details = async() => {
        const data = await showCard(Number(params.id))
        setCard({...card, ...data})
    }
    useEffect(() => {
        details()
    }, []);

    // const handleDiscountTypeChange = (e) =>{
    //     e.preventDefault();
    //     setDiscountType(e.target.value)
    // }
    // const handleDiscountNumberChange = () =>{
    //     e.preventDefault();
    //     setDiscountNumber(Number(e.target.value))
    // }

    const handleRegister = (e) =>{
        e.preventDefault()
        const inputs = {
            id: Number(params.id),
            discount_number: discountNumber
        }
        try{
            
            updateCard(inputs.id, inputs.discount_number)
        }catch(error){
            alert(error)
        }
        navigate('/cards');



    }
    
    return (
        <div className="row justify-content-center mt-3">
            <div className="col-md-6 col-sm-12">
                <div className='card shadow'>
                    <div className="card-header bg-success text-light">
                        Register Discount
                    </div>
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
                        <hr />
                        <form onSubmit={e => handleRegister(e)}>
                            <fieldset>
                                <div className="form-group">
                                    <label htmlFor="dc_type">Discount type:</label>
                                    <select className='form-control' value={discountType} onChange={e => setDiscountType(e.target.value)}>
                                        <option value='sc'>Senior Citizen</option>
                                        <option value='pwd'>PWD</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="discount_number"></label>
                                    {/* <label htmlFor="discount_number">{discountType === 'sc' ? DiscountText.SC : DiscountText.PWD}</label> */}
                                    <input type="number" value={discountNumber} onChange={e => setDiscountNumber(e.target.value)} className='form-control' />
                                </div>
                                <br />
                                <button className="btn btn-sm btn-success">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;
