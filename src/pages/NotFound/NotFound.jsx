import React from 'react';
import Layout from '../../components/Layout/Layout';
import BlankPageNote from '../../components/BlankPageNote/BlankPageNote';

function NotFound() {
  return (
    <Layout>
      <BlankPageNote
        heading1="Page"
        heading2="Not Found"
        para="Sorry, the page you are looking for does not exist."
      />
    </Layout>
  );
}

export default NotFound;
