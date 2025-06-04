import React from 'react';
import LiveStock from './DashboardComponents/LiveStock';
import CreateBill from './DashboardComponents/CreateBill';
import RecentBills from './DashboardComponents/RecentBills';

class Dashboard extends React.Component {
    liveStock = [
        { productId: 1, name: "Product 1", quantity: 4000 },
        { productId: 2, name: "Product 2", quantity: 300 },
        { productId: 3, name: "Product 3", quantity: 100 },
        { productId: 4, name: "Product 4", quantity: 6000 },
    ]

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
