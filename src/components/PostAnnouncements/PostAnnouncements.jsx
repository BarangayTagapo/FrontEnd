import React, { useEffect, useState } from 'react';
import './postAnnouncements.css';
import Title from '../Title/Title';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { announcementActions } from '../../store/announcementsSlice';
import {
  editAnnouncement,
  fetchAnnouncement,
} from '../../store/announcementActions';
import { useParams } from 'react-router-dom';

const PostAnnouncements = () => {
  const { postId } = useParams();
  let { category, title, description } = useSelector(
    (state) => state.announcements.currAnnouncement
  );
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (category === '') category = 'schedule';

    const form = new FormData();
    file && form.append('image', file);
    form.append('category', category);
    form.append('title', title);
    form.append('description', description);
    // Send form
    dispatch(editAnnouncement(form, postId, setIsLoading));
  };

  // Fetch post to be edited
  useEffect(() => {
    postId && dispatch(fetchAnnouncement(postId));
  }, [postId, dispatch]);

  return (
    <article className='post-Ann'>
      <Title text={postId ? 'Edit Announcement' : 'Post new announcements'} />
      <div className='post-Ann-content'>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          {/* Categories */}
          <div>
            <label>
              Announcement's category
              <select
                name='category'
                value={category}
                onChange={(e) => {
                  dispatch(
                    announcementActions.setCurrAnnCategory(e.target.value)
                  );
                }}
              >
                <option value='schedule'>Barangay Schedules</option>
                <option value='scholarship'>Scholarships</option>
                <option value='pwd'>PWDs</option>
                <option value='clinic'>Clinic Schedules</option>
              </select>
            </label>
          </div>
          {/* Title */}
          <div>
            <label>
              Title
              <input
                type='text'
                name='title'
                value={title}
                onChange={(e) =>
                  dispatch(announcementActions.setCurrAnnTitle(e.target.value))
                }
              />
            </label>
          </div>
          {/* Title */}
          <div>
            <label>
              Image
              <input
                type='file'
                name='image'
                accept='image/*'
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
          </div>
          {/* Descriptions */}
          <div>
            Descriptions
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(e, editor) =>
                dispatch(
                  announcementActions.setCurrAnnDescription(editor.getData())
                )
              }
            />
          </div>
          {/* Submit button */}
          <div>
            <label>
              <input
                type='submit'
                value={isLoading ? 'Loading...' : 'Post Announcement'}
                className='btn btn-primary'
              />
            </label>
          </div>
        </form>
      </div>
    </article>
  );
};

export default PostAnnouncements;
