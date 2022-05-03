import React, { useEffect, useState } from 'react';
import './announcements.css';
import Title from '../../components/Title/Title';
import Announcement from '../../components/Announcement/Announcement';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAnnouncements } from '../../store/announcementActions';

const Events = () => {
  const dispatch = useDispatch();
  let announcements = useSelector((state) => state.announcements.announcements);
  announcements = [...announcements].reverse();

  // Set current category
  const [category, setCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchAllAnnouncements(category));
  }, [dispatch, category]);

  return (
    <section className='announcements py-4 minHeight100'>
      <Title text='Announcements & Schedules' />
      <div className='announcements-content container'>
        <ul>
          <li>
            <button
              className='btn btn-primary'
              onClick={() => setCategory(null)}
            >
              All
            </button>
          </li>
          <li>
            <button
              className='btn btn-primary'
              onClick={() => setCategory('schedule')}
            >
              Barangay Schedule
            </button>
          </li>
          <li>
            <button
              className='btn btn-primary'
              onClick={() => setCategory('scholarship')}
            >
              Scholarship
            </button>
          </li>
          <li>
            <button
              className='btn btn-primary'
              onClick={() => setCategory('pwd')}
            >
              PWDs
            </button>
          </li>
          <li>
            <button
              className='btn btn-primary'
              onClick={() => setCategory('clinic')}
            >
              Clinic Schedules
            </button>
          </li>
        </ul>
        <div className='announcements-content--posts'>
          {announcements.length ? (
            announcements.map((post, index) => {
              return <Announcement post={post} key={index} />;
            })
          ) : (
            <h1>No announcement at the moment</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
