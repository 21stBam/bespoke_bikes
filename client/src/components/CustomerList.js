import React from 'react';
import Customer from './Customer';
import NoData from './NoData';

const CustomerList = props => {
    
    const result = props.data;
    let customers;
    if(result.length) {
        console.log(result.length);
        customers = result.map(customer => {
            return <Customer data={customer} key={customer.id} />
        });
    } else {
        customers = <NoData />
    }

    return (
        <ul>
            {customers}
        </ul>
    )
};

export default CustomerList