import React, {FC} from 'react';

import UserInfo from '../../components/UserInfo/UserInfo';

type PropTypes = {
  className?: string
};

const UserInfoContainer: FC<PropTypes> = ({className}: PropTypes) => {
  const [isOpenCreatePostModal, setOpenCreatePostModal] = React.useState<boolean>(false);

  const onCloseCreatePostModal = (): void => setOpenCreatePostModal(false);

  const onOpenCreatePostModal = (): void => setOpenCreatePostModal(true);

  return (
    <UserInfo
      className={className}
      isOpenCreatePostModal={isOpenCreatePostModal}
      onCloseCreatePostModal={onCloseCreatePostModal}
      onOpenCreatePostModal={onOpenCreatePostModal}/>
  );
}

export default UserInfoContainer;
