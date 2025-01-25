import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';
import PackageManageTable from '../../../components/adminSide/PackageManageTable/PackageManageTable';

const ManagePackagePage = () => {

    
   

    return (
        <div>
            <Helmet>
                <title>Dashboard | Manage Package</title>
            </Helmet>
            <PackageManageTable></PackageManageTable>
        </div>
    );
};

export default ManagePackagePage;