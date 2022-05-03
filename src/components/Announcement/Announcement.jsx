import React from 'react';
import './announcement.css';
import postImg from '../../images/post1.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/announcementActions';
import { url } from '../../store/userActions';

const Announcement = ({ post }) => {
  const dispatch = useDispatch();
  const { creator, category, updatedAt, title, description, image, _id } = post;
  const token = localStorage.getItem('BrgyTagapoToken');
  const parsedDate = new Date(updatedAt);
  const year = parsedDate.getFullYear();
  const day = parsedDate.getDate();
  const month = parsedDate.getMonth() + 1;
  const newDate = `${month}/${day}/${year}`;
  const imageUrl = `${url}/images/${image}`;
  const editPost = 'admin-dashboard/post-announcements/edit-post';
  const submitDelete = () => dispatch(deletePost(_id));

  return (
    <article className='announcement shadow-sm'>
      <div
        className='announcement-menu'
        style={token ? { display: 'flex' } : { display: 'none' }}
      >
        <button className='btn'>
          <Link to={`/${editPost}/${_id}`}>Edit</Link>
        </button>
        <button className='btn' onClick={submitDelete}>
          Remove
        </button>
      </div>
      <img
        // loading='lazy'
        // src={!image ? postImg : imageUrl}
        src={image ? imageUrl : postImg}
        alt='announcement'
      />
      <h4>
        {title} <small>{category}</small>
      </h4>
      <span>
        <p>{creator}</p>
        <p>{newDate}</p>
      </span>
      <pre dangerouslySetInnerHTML={{ __html: description }} />
    </article>
  );
};

export default Announcement;
