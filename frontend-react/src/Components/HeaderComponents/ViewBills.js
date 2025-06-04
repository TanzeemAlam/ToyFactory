import React from 'react';
import Header from '../Header';
import ViewSlipModal from '../Modal/ViewSlipModal';

export default function ViewBills(props) {

    const customerData = [
        { id: 1, name: "Tanzeem ", date: "27-05-2025", billType: "Kaccha", amount: 5000 },
        { id: 2, name: "Ilma", date: "25-05-2025", billType: "Pakka", amount: 400 },
        { id: 3, name: "Saniya", date: "19-05-2025", billType: "Kaccha", amount: 15000 }
    ];

    const data = customerData.map((customerInfo) => {

        const dataTarget = "#viewModal_" + customerInfo.id;

        return (
            <tr key={customerInfo.id}>
                <th scope="row">{customerInfo.id}</th>
                <td>{customerInfo.name}</td>
                <td>{customerInfo.date}</td>
                <td>{customerInfo.billType}</td>
                <td>{customerInfo.amount}</td>
                <td>
                    <button type="button" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target={dataTarget}>
                        View Slip
                    </button>
                    <ViewSlipModal slipData={customerInfo} />
                    <button type="button" className="btn btn-outline-danger btn-sm" style={{ marginLeft: '10px' }}> Download Bill </button>
                </td>
            </tr>
        )
    });

    const billCount = 3;



    return (
        <>
            <Header title="Toy Factory" searchBar={true} />

            <div className="min-vh-100 bg-light p-3">
                <div className="row g-3 mb-4">
                    <table className="table table-striped caption-top">
                        <caption>Total Bills - {billCount} </caption>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
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
        </>
    )
}
