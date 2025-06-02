import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ViewSlip from '../ViewSlip';

export default function ViewSlipsList(props) {

    const data = props.customerData.map((customerInfo) => {
        return (
            <tr key={customerInfo.id}>
                <td>{customerInfo.name}</td>
                <td>{customerInfo.date}</td>
                <td>{customerInfo.billType}</td>
                <td>{customerInfo.amount}</td>
                <td>
                    <button type="button" className="btn btn-outline-primary btn-sm">
                        <ViewSlip slipData={customerInfo}/>
                    </button>
                    <button type="button" className="btn btn-outline-danger btn-sm" style={{ marginLeft: '10px' }}> Download Bill </button>
                </td>
            </tr>
        )
    });

    return (
        <div className="col-md-6">
            <div className="bg-white p-4 shadow rounded text-center min-vh-25">
                <h2>View Slips List</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Customer </th>
                            <th scope="col">Date</th>
                            <th scope="col">Bill Type</th>
                            <th scope="col">Bill Amount</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

ViewSlipsList.propTypes = {
    customerData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            date: PropTypes.string,
            billType: PropTypes.string,
            amount: PropTypes.number
        })
    )
}
