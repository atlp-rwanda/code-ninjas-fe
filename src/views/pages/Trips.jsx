/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../../components/tables/TripRequests';
import { columns } from '../../components/tables/shared/reqColumns';
import { getData } from '../../dummyData/reqTable';
import SideBar from '../../SideBar';

const Trip = () => {
  const { page } = useSelector((state) => state.page);
  const data = React.useMemo(() => getData(), []);
  const reqColumns = React.useMemo(() => columns, []);

  return (
    <div className="flex bg-clrBackground">
      <SideBar />
      <div className="w-full h-full p-4 m-8 overflow-y-auto">
        <div className="p-2">
          {page === 'trips' ? <Table columns={reqColumns} data={data} /> : <div />}
        </div>
      </div>
    </div>
  );
};

export default Trip;