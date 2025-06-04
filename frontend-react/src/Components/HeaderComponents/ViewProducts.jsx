import React from 'react';
import Header from "../Header";
import AddProductModal from '../Modal/AddProductModal';

export default function ViewProducts() {

    const products = [
        { id: 1, name: "Product 1", quantity: 4000 },
        { id: 2, name: "Product 2", quantity: 300 },
        { id: 3, name: "Product 3", quantity: 100 },
        { id: 4, name: "Product 4", quantity: 6000 },
    ];

    const productData = products.map((product) => {

        return (
            <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
            </tr>
        )
    });

    const productCount = 4;

    return (
        <>
            <Header title="Toy Factory" searchBar={true} />

            <div className="min-vh-100 bg-light p-3">
                <div className='row g-3 mb-4'>
                    
                </div>

                <div className="row g-3 mb-4">
                    <table className="table table-striped caption-top">
                        <caption>Total Products - {productCount} </caption>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
