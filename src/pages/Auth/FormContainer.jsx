import React from 'react';
import PropTypes from 'prop-types';

function FormContainer({ children, title, prefixTitle, isModal }) {
  if (isModal)
    return (
      <section className="section section__regTeam flex  justify-center text-sm">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-offWhite text-2xl font-bold tracking-[2px] md:tracking-[.3rem] uppercase mt-4">
            {prefixTitle} <span className="text-primary">{title}</span>
          </h1>
          {children}
        </div>
      </section>
    );

  return (
    <section className="section section__auth min-h-lvh flex items-center justify-center md:justify-end pt-16 text-sm">
      <div className=" flex flex-col items-center justify-center mt-[-10rem] sm:mt-5 md:mr-32">
        <h1 className="text-offWhite text-2xl lg:text-3xl font-bold tracking-[.3rem] md:tracking-[.65rem] mb-8 md:mb-2 uppercase">
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
  isModal: PropTypes.bool,
};

FormContainer.defaultProps = {
  isModal: false,
};

export default FormContainer;
