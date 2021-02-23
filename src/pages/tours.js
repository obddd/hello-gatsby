import React from 'react';
import Tour from '../components/Tours/Tour';
import Layout from '../components/layout'

const tours = () => {
    return (
        <Layout>
            This is tour page
            <Tour/>
        </Layout>
    );
};

export default tours;