import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  passwordConfirmation: Yup.string().test(
    'passwords-match',
    'Passwords must match',
    function (value) {
      return this.parent.password === value
    }
  ),
})
