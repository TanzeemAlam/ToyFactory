import React from 'react';
import LiveStock from './DashboardComponents/LiveStock';
import CreateBill from './DashboardComponents/CreateBill';
import RecentBills from './DashboardComponents/RecentBills';

class Dashboard extends React.Component {
    liveStock = {
        product1: 123,
        product2: 231,
        product3: 10
    }

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
                    
                    <LiveStock stock={this.liveStock} />

                    <br/>
                    <br/>
                    
                    <div className="row g-3 mb-4">
                        <CreateBill />

                        <RecentBills customerData={this.data} />
                    </div>
                </div>
            </>
        );
    }

}

export default Dashboard
