import React, {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Post} from '../../types/Post'
import {createPostAction} from '../../redux/posts/actions';
import CreatePostModal from '../../components/CreatePostModal/CreatePostModal';
import {User} from '../../types/User';
import {userSelector} from '../../redux/user/selectors';
import {getCurrentTimestamp} from '../../utils/dateTimeUtils';

type PropTypes = {
  onClose: () => void
};

const CreatePostModalContainer: FC<PropTypes> = ({onClose}: PropTypes) => {

  const dispatch = useDispatch();

  const user: User = useSelector(userSelector);

  const [uploadedPhoto, setUploadedPhoto] = React.useState<string | null>(null);
  const [description, setDescription] = React.useState<string | null>(null);

  const onCreatePost = () => {
    if (!uploadedPhoto) {
      alert('Upload any photos from your library');
    } else {
      const post: Post = {
        id: getCurrentTimestamp() + 1,
        photoUrl: uploadedPhoto,
        description: description ? description : '',
        comments: [],
        createdAt: getCurrentTimestamp(),
        likes: [],
        authorShortcut: {
          id: user.id,
          name: user.name,
          photoUrl: user.photoUrl
        }
      }

      dispatch(createPostAction(post))

      onClose();
    }
  }

  const onChangeDescription = (event: any) => {
    setDescription(event.target.value);
  }

  const onUploadPhoto = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setUploadedPhoto(URL.createObjectURL(img));
    }
  }

  return (
    <CreatePostModal
      uploadedPhoto={uploadedPhoto ?? uploadedPhoto}
      onClose={onClose}
      onChangeDescription={onChangeDescription}
      onUploadPhoto={onUploadPhoto}
      onCreatePost={onCreatePost}/>
  );
}

export default CreatePostModalContainer;
