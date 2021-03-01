import styles from './EditProfileModalContainer.module.scss';

import 'react-app-polyfill/ie11';
import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {
  Formik,
  Field,
  Form,
  FormikHelpers
} from 'formik';

import Typography from '../../components/Typography/Typography';
import Button from '../../components/Button/Button';
import {User} from '../../types/User';
import {userSelector} from '../../redux/user/selectors';
import {editUserAction} from '../../redux/user/actions';

interface Values {
  firstName: string;
  lastName: string;
  jobTitle: string,
  description: string
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  jobTitle: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(20, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required')
});

type PropTypes = {
  onClose: () => void
};

const EditProfileModalContainer: FC<PropTypes> = ({onClose}: PropTypes) => {
  const dispatch = useDispatch();

  const user: User = useSelector(userSelector);

  const onEditUser = (user: User) => {
      dispatch(editUserAction({updatedUser: user}));

      onClose();
  };


  return (
    <div className={styles.container}>
      <div className={styles.modal}>
      <Typography size='large' color='secondary' text='Profile information'/>
      <Formik
        initialValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          jobTitle: user.jobTitle,
          description: user.description
        }}
        validationSchema={SignupSchema}
        onSubmit={(
          values: Values,
          {setSubmitting}: FormikHelpers<Values>
        ) => {
          const updatedUser: User = {
            id: user.id,
            firstName: values.firstName,
            lastName: values.lastName,
            jobTitle: values.jobTitle,
            description: values.description,
            followers: user.followers,
            following: user.following,
            photoUrl: user.photoUrl
          }

          onEditUser(updatedUser)
          setSubmitting(true);
        }}
      >
        {({errors, touched}) => (
          <Form className={styles.form}>
            <label htmlFor="firstName">
              <Typography size='small' color='primary' text='Fist Name'/>
            </label>
            <Field className={styles.field} name="firstName" />
            {errors.firstName && touched.firstName ? (
              <Typography size='small' color={'secondary'} text={errors.firstName}/>
            ) : null}

            <label htmlFor="lastName">
              <Typography size='small' color='primary' text='Last Name'/>
            </label>
            <Field className={styles.field} name="lastName" />
            {errors.lastName && touched.lastName ? (
              <Typography size='small' color={'secondary'} text={errors.lastName}/>
            ) : null}

            <label htmlFor="jobTitle">
              <Typography size='small' color='primary' text='Job Title'/>
            </label>
            <Field className={styles.field}  name="jobTitle" />
            {errors.jobTitle && touched.jobTitle ? (
              <Typography size='small' color={'secondary'} text={errors.jobTitle}/>
            ) : null}

            <label htmlFor="description">
              <Typography size='small' color='primary' text='Description'/>
            </label>
            <Field className={styles.field}  name="description" />
            {errors.description && touched.description ? (
              <Typography size='small' color={'secondary'} text={errors.description}/>
            ) : null}

            <div className={styles.actionSection}>
              <Button color='white' text='Cancel' size='large' onClick={onClose}/>
              <Button color='blue' text='Post' size='large' type='submit' onClick={() => {}}/>
            </div>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default EditProfileModalContainer;