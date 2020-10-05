import { useFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { updatePhoto } from '../../redux/profileReducer';

const UserSettings = ({updatePhoto}) => {
  const formik = useFormik({
    initialValues: {
      image: null
    },
    onSubmit: values  => {
      updatePhoto(values.image)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2><b>Settings</b></h2>
      <div>
        <input 
          type="file" 
          name="image" 
          id="image"
          onChange={(evt) => {
            formik.setFieldValue("image", evt.target.files[0]);
          }} />
      </div>

      <br/> 
      
      
      <button type='submit' className='button'>Save Settings</button>
    </form>
  )
}

const mapStateToProps = (state) => ({ })

export default compose(
  connect(mapStateToProps, {updatePhoto}),
  withAuthRedirect
)(UserSettings)