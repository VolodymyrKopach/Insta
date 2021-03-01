import React, {FC} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import {Post as PostEntity} from '../../types/Post'
import {addLikeAction, deleteLikeAction} from '../../redux/posts/actions';
import {User} from '../../types/User';
import {userSelector} from '../../redux/user/selectors';
import Post from '../../components/Post/Post';

type PropTypes = {
  className?: string;
  post: PostEntity
};

const PostContainer: FC<PropTypes> = ({className, post}: PropTypes) => {

  const dispatch = useDispatch();

  const [postToOpen, setPostToOpen] = React.useState<PostEntity | null>(null);

  const onClosePostModal = (): void => setPostToOpen(null);
  const onOpenPostModal = (): void => setPostToOpen(post);

  const user: User = useSelector(userSelector);
  const isLiked = post.likes.some(like => like.authorShortcut.id === user.id);
  const toggleLike = () => {
    const like = {
      authorShortcut: {
        id: user.id,
        name: user.firstName,
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
    <Post
      className={className}
      post={post}
      toggleLike={toggleLike}
      isLiked={isLiked}
      postToOpen={postToOpen}
      setPostToOpen={setPostToOpen}
      onClosePostModal={onClosePostModal}
      onOpenPostModal={onOpenPostModal}/>
  );
}

export default PostContainer;
