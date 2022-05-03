import React, { useEffect } from 'react';
import './applications.css';
import Title from '../Title/Title';
import Application from '../Application';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllApplications } from '../../store/applicationActions';

const Applications = () => {
  let applicants = useSelector((state) => state.application.applicants);
  const dispatch = useDispatch();
  if (applicants.length) applicants = [...applicants].reverse();

  useEffect(() => {
    dispatch(fetchAllApplications());
  }, [dispatch]);

  return (
    <section className='dashApp'>
      <Title text={'Online applications requests'} />
      <div className='dashApp-content'>
        {applicants.length ? (
          applicants.map((applicant, index) => {
            return <Application key={index} applicant={applicant} />;
          })
        ) : (
          <h1>No applicants</h1>
        )}
      </div>
    </section>
  );
};

export default Applications;
