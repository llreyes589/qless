import React from 'react';
import { Link } from 'react-router-dom'


const CardListItem = ({card}) => {
    return (
        <>
            <tr >
                <td>{card.id}</td>
                <td>{card.discount_number ? 'Discounted' : 'Regular'}</td>
                <td>{card.load}</td>
                <td>{card.expires_at}</td>
                <td>
                    {!card.discount_number ?
                        <Link to={`/cards/${card.id}`} className="btn btn-sm btn-success" >Register Discount</Link>
                        :
                        <Link to={`/cards/${card.id}`} className="btn btn-sm btn-primary" >View</Link>
                    }

                    <button className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        </>
    );
};

export default CardListItem;
