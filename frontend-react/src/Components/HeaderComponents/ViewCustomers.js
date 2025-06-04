import React from 'react';
import Header from '../Header';

export default function ViewCustomers() {

  const customerData = [
    { id: 1, name: "Tanzeem ", saleAmount: 5000 },
    { id: 2, name: "Ilma", saleAmount: 400 },
    { id: 3, name: "Saniya", saleAmount: 15000 }
  ];

  const data = customerData.map((customerInfo) => {

    return (
      <tr key={customerInfo.id}>
        <th scope="row">{customerInfo.id}</th>
        <td>{customerInfo.name}</td>
        <td>{customerInfo.saleAmount}</td>
      </tr>
    )
  });

  const customerCount = 3;

  return (
    <>
      <Header title="Toy Factory" searchBar={true} />

      <div className="min-vh-100 bg-light p-3">
        <div className="row g-3 mb-4">
          <table className="table table-striped caption-top">
            <caption>Total Customers - {customerCount} </caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Total Sales</th>
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
