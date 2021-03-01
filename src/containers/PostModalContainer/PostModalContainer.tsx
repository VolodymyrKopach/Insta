import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Post} from '../../types/Post'
import {Comment} from '../../types/Comment'
import {addCommentAction, addLikeAction, deleteLikeAction} from '../../redux/posts/actions';
import PostModal from '../../components/PostModal/PostModal';
import {User} from '../../types/User';
import {userSelector} from '../../redux/user/selectors';
import {getCurrentTimestamp} from '../../utils/dateTimeUtils';

type PropTypes = {
  onClose: () => void,
  post: Post
};

const PostModalContainer: FC<PropTypes> = ({post, onClose}: PropTypes) => {

  const dispatch = useDispatch();

  const user: User = useSelector(userSelector);

  const [comment, setComment] = React.useState<string>('');
  const onChangeComment = (event: any) => {
    setComment(event.target.value);
  }

  const onAddComment = () => {
    if (comment.trim() !== '') {
      const newComment: Comment =
        {
          authorShortcut: {
            id: user.id,
            name: user.name,
            photoUrl: user.photoUrl
          },
          text: comment,
          createdAt: getCurrentTimestamp(),
          likes: 0
        }
      dispatch(addCommentAction({comment: newComment, postId: post.id}));

      setComment('');
    }
  }

  const isLiked = post.likes.some(like => like.authorShortcut.id === user.id);
  const toggleLike = () => {
    const like = {
      authorShortcut: {
        id: user.id,
        name: user.name,
        photoUrl: user.photoUrl
      }
    }

    if (isLiked) {
      dispatch(deleteLikeAction({like: like, postId: post.id}));
    } else {
      dispatch(addLikeAction({like: like, postId: post.id}));
    }
  }

  return (
    <PostModal
      post={post}
      comment={comment}
      onClose={onClose}
      onChangeComment={onChangeComment}
      onAddComment={onAddComment}
      toggleLike={toggleLike}
      isLiked={isLiked}/>
  );
}

export default PostModalContainer;
