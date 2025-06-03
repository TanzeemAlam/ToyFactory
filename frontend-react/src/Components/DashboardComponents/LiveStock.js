import PropTypes from 'prop-types'
import React from 'react'

export default function LiveStock(props) {
  return (
    <>
      <div className="col-md-6 mx-auto">
        <div className="card w-100" style={{ width: 18 + 'em' }}>
          <div className="card-body text-white bg-dark">
            <h5 className="card-title text-center">Live Stock Value</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Product 1 - {props.stock.product1}</li>
            <li className="list-group-item">Product 2 - {props.stock.product2}</li>
            <li className="list-group-item">Product 3 - {props.stock.product3}</li>
          </ul>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center mb-4"><button type="button" className="btn btn-lg btn-outline-primary">Add/Update Stock</button></div>
    </>
  )
}

LiveStock.propTypes = {
  product1: PropTypes.number,
  product2: PropTypes.number,
  product3: PropTypes.number
}
