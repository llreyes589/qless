import React from 'react';

const TransactionListItem = ({transaction}) => {
    return (
        <>
            <tr>
                <td>{transaction.entry}</td>
                <td>{transaction.exit}</td>
                <td>{transaction.fare}</td>
                <td>{transaction.created_at}</td>
            </tr>
        </>
    );
};

export default TransactionListItem;
