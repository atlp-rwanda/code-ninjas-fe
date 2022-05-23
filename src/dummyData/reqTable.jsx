/* eslint-disable import/prefer-default-export */
export const getData = () => {
  const data = [
    {
      firstname: 'Demo',
      lastname: 'User',
      destination: 'Huye',
      dateOfReturn: '4 July 2022',
      status: 'rejected',
      imgUrl: 'https://flyclipart.com/thumb2/profile-icon-png-black-196391.png',
    },
    {
      firstname: 'Demo',
      lastname: 'User',
      destination: 'Huye',
      dateOfReturn: '4 July 2022',
      status: 'approved',
      email: 'nms@gmail.com',
      imgUrl: 'https://flyclipart.com/thumb2/profile-icon-png-black-196391.png',
    },
    {
      firstname: 'Demo',
      lastname: 'User',
      destination: 'Huye',
      dateOfReturn: '4 July 2022',
      status: 'pending',
    },
  ];
  return [...data, ...data, ...data, ...data, ...data];
};
