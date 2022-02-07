import React, { useContext } from 'react';
import { addNewCard } from '../Api';
import CardListItem from '../components/CardListItem';
import { GlobalContext } from '../context/GlobalState'

const Card = ({ cards }) => {
    const { contextAddNewCard } = useContext(GlobalContext)
    const handleAddNew = async () => {
        const newCard = await addNewCard()
        newCard.transactions = []
        contextAddNewCard(newCard)
    }
    return (
        <>
            <nav aria-label="breadcrumb" className='mt-2'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Cards</li>
                </ol>
            </nav>
            <hr />
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <button className="btn btn-primary col-12" onClick={handleAddNew}>Add new Q-LESS Card</button>
                        </div>
                    </div>
                    <form>
                        <fieldset>

                        </fieldset>
                    </form>
                </div>
                <div className="col-md col-sm-12">
                    <table className='table table-striped table-responsive'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Card Type</th>
                                <th>Load</th>
                                <th>Expires at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards.map(card => (
                                <CardListItem card={card} key={card.id} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Card;
