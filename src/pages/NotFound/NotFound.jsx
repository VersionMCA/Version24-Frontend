import React from 'react';
import Layout from '../../components/Layout/Layout';

function NotFound() {
  return (
    <Layout>
      <div className="bg-black h-lvh w-full text-white items-center flex justify-center">
        <div className="flex flex-col  max-w-max text-center">
          <h1 className="text-4xl mb-10">
            <span className="text-primary">404</span> Not Found
          </h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
