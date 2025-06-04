import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <Header title="Toy Factory" searchBar={true} />
            <Dashboard />
            <Footer />
        </>
    )
}
