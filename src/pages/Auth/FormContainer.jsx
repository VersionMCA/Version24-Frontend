import React from 'react';
import PropTypes from 'prop-types';

function FormContainer({ children, title, prefixTitle }) {
  return (
    <section className="section section__auth min-h-lvh flex items-center justify-center md:justify-end py-24 text-sm ">
      <div className=" flex flex-col items-center justify-center mt-5 md:mr-32">
        <h1 className="text-white text-2xl lg:text-3xl font-bold tracking-[5px] md:tracking-[10px] mb-2 uppercase">
          {prefixTitle} <span className="text-primary">{title}</span>
        </h1>
        {children}
      </div>
    </section>
  );
}

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  prefixTitle: PropTypes.string.isRequired,
};

export default FormContainer;
