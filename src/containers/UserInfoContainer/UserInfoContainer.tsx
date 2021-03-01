import React, {FC} from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';
import {User} from '../../types/User';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/selectors';

type PropTypes = {
  className?: string
};

const UserInfoContainer: FC<PropTypes> = ({className}: PropTypes) => {
  const [isOpenCreatePostModal, setOpenCreatePostModal] = React.useState<boolean>(false);
  const [isOpenEditUserModal, setOpenEditUserModal] = React.useState<boolean>(false);

  const user: User = useSelector(userSelector);

  const onCloseCreatePostModal = (): void => setOpenCreatePostModal(false);
  const onOpenCreatePostModal = (): void => setOpenCreatePostModal(true);

  const onCloseEditUserModal = (): void => setOpenEditUserModal(false);
  const onOpenEditUserModal = (): void => setOpenEditUserModal(true);

  return (
    <UserInfo
      className={className}
      user={user}
      isOpenCreatePostModal={isOpenCreatePostModal}
      isOpenEditUserModal={isOpenEditUserModal}
      onCloseCreatePostModal={onCloseCreatePostModal}
      onOpenCreatePostModal={onOpenCreatePostModal}
      onCloseEditUserModal={onCloseEditUserModal}
      onOpenEditUserModal={onOpenEditUserModal}/>
  );
}

export default UserInfoContainer;
