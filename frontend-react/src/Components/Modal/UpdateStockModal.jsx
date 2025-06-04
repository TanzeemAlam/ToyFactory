import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function UpdateStockModal(props) {


    return (
        <>
            <div className="modal fade" id="updateStockModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{props.title}</h5>
                            <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Update your stock here
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger btn-lg">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

UpdateStockModal.propTypes = {
    title: PropTypes.string
}
