import React from 'react'

export default function Dashboard() {
    let liveStock = 250;
    return (
        <>
            <div className="min-vh-100 bg-light p-3">

                <div className="d-flex justify-content-center mb-4">
                    <div className="bg-white rounded shadow p-4 w-75 text-center">
                        Live stock value - {liveStock}
                    </div>
                </div>

                <div className="d-flex justify-content-center mb-4"><button type="button" class="btn btn-sm btn-outline-primary">Add/Update Stock</button></div>

                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <div className="bg-white p-4 shadow rounded text-center min-vh-25">
                            <h2>Create Slip</h2>
                            <br />
                            <form>
                                <div class="row mb-3">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="product">Product</label>
                                        <select class="form-select" id="product">
                                            <option selected>Choose...</option>
                                            <option value="1">Product 1</option>
                                            <option value="2">Product 2</option>
                                            <option value="3">Product 2</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="quantity">Quantity</label>
                                        <input type="text" class="form-control" placeholder="" aria-label="" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <legend class="col-form-label col-sm-2 pt-0">Bill Type</legend>
                                    <div class="col-sm-10">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                            <label class="form-check-label" for="gridRadios1"> Kaccha Bill </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                            <label class="form-check-label" for="gridRadios2"> Pakka Bill </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Bill Amount" aria-label="Bill Amount" />
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="bg-white p-4 shadow rounded text-center min-vh-25">
                            <h2>View Slips List</h2>

                            <table class="table">
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
                                    <tr>
                                        <td>Tanzeem Alam</td>
                                        <td>25-05-2025</td>
                                        <td>Kaccha</td>
                                        <td>5000</td>
                                        <td>
                                            <button type="button" class="btn btn-outline-primary btn-sm"> View Slip </button>
                                            <button type="button" class="btn btn-outline-danger btn-sm" style={{ marginLeft: '10px' }}> Download Bill </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
