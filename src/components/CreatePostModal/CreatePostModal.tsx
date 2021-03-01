import styles from './CreatePostModal.module.scss';

import React, {FC, ReactNode} from 'react';
import classNames from 'classnames';

import photos from '../../assets/img/photos.svg'
import Button from '../Button/Button';
import Typography from '../Typography/Typography';

type PropTypes = {
  className?: string,
  uploadedPhoto: string | null,
  onClose: () => void,
  onUploadPhoto: (event: any) => void,
  onChangeDescription: (event: any) => void,
  onCreatePost: () => void
};

const CreatePostModal: FC<PropTypes> = (
  {
    onClose,
    onUploadPhoto,
    uploadedPhoto,
    onChangeDescription,
    onCreatePost
  }: PropTypes) => {

  const renderUploadedPhoto = (): ReactNode => {
    if (uploadedPhoto) {
      return (
        <img className={styles.uploadedPhoto} src={uploadedPhoto} alt='uploaded photo'/>
      );
    }

    return (
      <>
        <img src={photos} alt='uploaded photo'/>
        <Typography
          className={styles.uploadTitle}
          size='medium'
          color='white'
          text='Upload any photos from your library'/>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <div className={classNames(styles.modal, classNames)}>
        <input id='photoInput' className={styles.photoInput} type="file" name="myImage" accept="image/*"
               onChange={onUploadPhoto}/>
        <label htmlFor='photoInput' className="file-loader-label">
          <div className={styles.uploadPhotoSection}>
            {renderUploadedPhoto()}
          </div>
        </label>
        <div className={styles.description}>
          <Typography size='small' color='secondary' text='Description'/>
          <textarea
            onChange={onChangeDescription}
            className={styles.descriptionInput}
            name="comment"
            placeholder='Description...'/>
        </div>
        <div className={styles.actionSection}>
          <Button color='white' text='Cancel' size='large' onClick={onClose}/>
          <Button color='blue' text='Post' size='large' onClick={onCreatePost}/>
        </div>
      </div>
    </div>
  );
}

export default CreatePostModal;
