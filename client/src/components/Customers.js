import React, { Component } from 'react';
import axios from 'axios';

import CustomerList from './CustomerList';

class Customers extends Component {
    state = {
        customers: [],
        loading: true
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = () => {
        axios.get(`http://localhost:3001/api/customers`)
            .then(resp => {
                this.setState({
                    customers: resp.data,
                    loading:false
                });
            })
            .catch(error => {
                console.log("Error fetching and parsing data", error);
            });
    }

    render() {
        return (
            <div>
                <div className="main-header">
                    <div className="inner">
                        <h1 className="main-title">Customers</h1>    
                    </div>   
                </div>    
                <div className="main-content">
                    {
                        (this.state.loading)
                            ? <p>Loading...</p>
                            : <CustomerList data={this.state.customers} />
                    }          
                </div>
            </div>
        )
    }
}

export default Customers;
