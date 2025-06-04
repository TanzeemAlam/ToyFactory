import React, { useRef } from 'react'

export default function CreateBill() {

    const resetButtonRef = useRef(null);

    function createSlip(e) {

        //handling browser reload
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        console.log(Object.fromEntries(formData.entries()));

        alert('Slip created');

        resetForm();
    }

    function uploadSlipData() {

    }

    function resetForm() {
        resetButtonRef.current.click();
        alert('Form cleared');
    }

    return (
        <div className="col-md-6" id="createSlip">
            <div className="bg-white p-4 shadow rounded text-center min-vh-25">
                <h2 className="text-3xl font-bold underline">Create Bill</h2>
                <br />
                <form onSubmit={createSlip}>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" name="firstName" className="form-control" placeholder="First name" aria-label="First name" required/>
                        </div>
                        <div className="col">
                            <input type="text" name="lastName" className="form-control" placeholder="Last name" aria-label="Last name" required/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="product">Product</label>
                            <select className="form-select" id="product" defaultValue="1" required>
                                <option value="1">Product 1</option>
                                <option value="2">Product 2</option>
                                <option value="3">Product 2</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="quantity">Quantity</label>
                            <input type="text" name="quantity" className="form-control" placeholder="" aria-label="" required/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Bill Type</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Kaccha" defaultChecked={true} required/>
                                <label className="form-check-label" htmlFor="gridRadios1" style={{ float: 'left' }}> Kaccha  </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Pakka" />
                                <label className="form-check-label" htmlFor="gridRadios2" style={{ float: 'left' }}> Pakka </label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" name="amount" className="form-control" placeholder="Bill Amount" aria-label="Bill Amount" required/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <input type="date" id="dateInput" className="form-control" required/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <button type="submit" className="btn btn-outline-primary btn-lg">Create</button>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <button type="reset" ref={resetButtonRef} className="btn btn-outline-secondary btn-sm" style={{float: 'left'}}> Reset</button>
                        </div></div>
                </form>
            </div>
        </div>
    )
}
