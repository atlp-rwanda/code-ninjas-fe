import React from 'react';
import { useParams } from 'react-router';
import SideBar from '../../SideBar';
import ApprovalComponent from '../../components/tables/ApprovalComponent';

function TripApproval() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="flex bg-clrBackground">
      <SideBar />
      <ApprovalComponent tripId={id} />
    </div>
  );
}

export default TripApproval;