import Loadable from '../loadable/LoadableLinear'
import TestComponent from '../testComponent/TestComponent'
import SignIn from '../../pages/signIn/';

// const SignIn = Loadable({
//   loader: () => import('../../pages/signIn'),
// })

const SignUp = Loadable({
  loader: () => import('../../pages/signUp'),
})

const ResetPassword = Loadable({
  loader: () => import('../../pages/resetPassword'),
})

const ConfirmPasswordReset = Loadable({
  loader: () => import('../../pages/confirmPasswordReset'),
})

// SignIn.preload()
// SignUp.preload()
// ResetPassword.preload()
// ConfirmPasswordReset.preload()

export const publicRoutes = [
  {
    Component: TestComponent,
    pathname: '/testComponent',
    name: 'Test Component',
    exact: true,
  },
  {
    Component: SignIn,
    pathname: '/SignIn',
    name: 'SignIn',
    exact: false,
  },
  {
    Component: SignUp,
    pathname: '/SignUp',
    name: 'SignUp',
    exact: false,
  },
  {
    Component: ResetPassword,
    pathname: '/ResetPassword',
    name: 'ResetPassword',
    exact: false,
  },
  {
    Component: ConfirmPasswordReset,
    pathname: '/ConfirmPasswordReset',
    name: 'ConfirmPasswordReset',
    exact: false,
  },
]
