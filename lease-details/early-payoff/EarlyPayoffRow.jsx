import React from 'react';

function LeaseItem({ payoffMonth, ...props }) {

    return (
        <tr>
            <td>{payoffMonth.earlyPaymentAmount}</td>
            <td>{payoffMonth.salesTaxOnPayment}</td>
            <td>{payoffMonth.totalPaymentInclTax}</td>
        </tr>
    )
}


export default LeaseItem;