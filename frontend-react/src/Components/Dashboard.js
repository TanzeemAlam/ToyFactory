import React from 'react'
import CreateSlip from './DashboardComponents/CreateSlip';
import ViewSlipsList from './DashboardComponents/ViewSlipsList';

class Dashboard extends React.Component {
    liveStock = 250;

    data = [
        { id: 1, name: "Tanzeem ", date: "27-05-2025", billType: "Kaccha", amount: 5000 },
        { id: 2, name: "Ilma", date: "25-05-2025", billType: "Pakka", amount: 400 },
        { id: 3, name: "Saniya", date: "19-05-2025", billType: "Kaccha", amount: 15000 }
    ];

    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className="min-vh-100 bg-light p-3">

                    <div className="d-flex justify-content-center mb-4">
                        <div className="bg-white rounded shadow p-4 w-75 text-center">
                            Live stock value - {this.liveStock}
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mb-4"><button type="button" className="btn btn-sm btn-outline-primary">Add/Update Stock</button></div>

                    <div className="row g-3 mb-4">
                        <CreateSlip />

                        <ViewSlipsList customerData={this.data}/>
                    </div>
                </div>
            </>
        );
    }

}

export default Dashboard
