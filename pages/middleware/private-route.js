/* eslint-disable func-names */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import React from 'react';

const withAuth = (Components) =>
  // eslint-disable-next-line react/display-name
  function (props) {
    const router = useRouter();
    const token = useSelector((state) => state.auth.token);
    React.useEffect(() => {
      if (!token) {
        router.replace('/login');
      }
    }, [token]);
    if (token) {
      return <Components {...props} />;
    }
  };
export default withAuth;
