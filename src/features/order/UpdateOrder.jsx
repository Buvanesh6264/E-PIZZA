import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <>
      <fetcher.Form method="PATCH" className="text-right">
        <Button type={'primary'}>Make Priority</Button>
      </fetcher.Form>
    </>
  );
};

export const action = async () => {
  console.log('Update Action');
  return null;
};

export default UpdateOrder;
