import React from 'react';

function LeaseItem({ order, ...props }) {
    const price = parseFloat(order.unit_price);
    const totalPrice = (price * order.qty).toFixed(2);
    return (
        <tr>
            <td>{order.sku}</td>
            <td>{order.display_name}</td>
            <td>${price}</td>
            <td>{order.qty}</td>
            <td>${totalPrice}</td>
        </tr>
    )
}


export default LeaseItem;