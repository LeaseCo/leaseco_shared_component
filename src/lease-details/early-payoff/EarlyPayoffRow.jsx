import React from 'react';

function EarlyPayoffRow({ billingCycle, payoffMonth, ...props }) {

    return (
        <tr>
            <td>{billingCycle + 1}</td>
            <td>${payoffMonth.totalPaymentInclTax}</td>
        </tr>
    )
}


export default EarlyPayoffRow;