import React from 'react';

function LeaseItem({ order, ...props }) {
    const price = parseFloat(order.unit_price);
    const totalPrice = (price * order.qty).toFixed(2);
    return (
        <tr>
            <td><img style={{height:"100px", width:"100px"}} src="https://cstatic.ice.com/media/catalog/product/4/0/40023245_main.jpg"></img></td>
            <td>{order.sku}</td>
            <td>{order.display_name}</td>
            <td>${price}</td>
            <td>{order.qty}</td>
            <td>${totalPrice}</td>
        </tr>
    )
}


export default LeaseItem;