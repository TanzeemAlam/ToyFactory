import React from 'react';
import PropTypes from 'prop-types';

export default function ViewSlipModal(props) {

  const customerId = props.slipData.id;

  return (
    <>
      <div className="modal fade" id={`viewModal_${customerId}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`title_${customerId}`}>Bill</h5>
              <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul>
                <li>Name: {props.slipData.name}</li>
                <li>Date: {props.slipData.date}</li>
                <li>Bill Type: {props.slipData.billType}</li>
                <li>Amount: {props.slipData.amount}</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-danger btn-sm">Download Bill</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ViewSlipModal.propTypes = {
  slipData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    billType: PropTypes.string,
    amount: PropTypes.number
  })
}
