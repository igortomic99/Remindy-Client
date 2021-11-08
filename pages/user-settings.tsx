import { withUrqlClient } from 'next-urql';
import React from 'react'
import { Layout } from '../components/Layout';
import { createUrqlClient } from '../utils/createUrqlClient';

const UserSettings = ({}) => {
        return (<Layout>
            <div className="flex justify-center items-center mt-44">This page wont be developed</div>
        </Layout>);
}

export default withUrqlClient(createUrqlClient)(UserSettings);