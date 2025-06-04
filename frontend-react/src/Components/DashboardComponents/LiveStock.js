import PropTypes from 'prop-types'
import { useState } from 'react'
import UpdateStockModal from '../Modal/UpdateStockModal'

export default function LiveStock(props) {

  const products = props.stock.map((product) => {

    return (
      <li key={product.id} className="list-group-item"> {product.name} - {product.quantity}</li>
    )
  });

  return (
    <>
      <div className="col-md-6 mx-auto">
        <div className="card w-100" style={{ width: 18 + 'em' }}>
          <div className="card-body text-white bg-dark">
            <h5 className="card-title text-center">Live Stock Value</h5>
          </div>
          <ul className="list-group list-group-flush">
            {products}
          </ul>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center mb-4">
        <button type="button" className="btn btn-outline-primary btn-lg" data-bs-toggle="modal" data-bs-target="#updateStockModal">
          Add/Update Stock
        </button>
        <UpdateStockModal title="Update Stock" />
      </div>
    </>
  )
}

LiveStock.propTypes = {
  stock: PropTypes.shape({
    productId: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number
  })
}
