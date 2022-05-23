/* eslint-disable import/prefer-default-export */
import {
  AvatarCell,
  ReviewTrip,
  SelectColumnFilter,
  StatusPill,
  TripApprovalModal,  //eslint-disable-line
} from '../TripRequests'; //eslint-disable-line

const columns = [
  {
    Header: 'Trip Details',
    accessor: 'firstname',
    Cell: AvatarCell,
    imgAccessor: 'imgUrl',
    emailAccessor: 'email',
  },
  {
    Header: 'Destination',
    accessor: 'destination',
  },
  {
    Header: 'Return Date',
    accessor: 'dateOfReturn',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: StatusPill,
    Filter: SelectColumnFilter, // new
    filter: 'includes',
  },
  {
    Header: 'Review',
    accessor: 'review',
    Cell: ReviewTrip,
    Filter: SelectColumnFilter, // new
    filter: 'includes',
  },
];

export { columns };
