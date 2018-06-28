import Loadable from '../loadable/LoadableLinear'
import Home from '../../pages/home/Home'

const SignIn = Loadable({
  loader: () => import('../../pages/signIn'),
})

const SignUp = Loadable({
  loader: () => import('../../pages/signUp'),
})

const ResetPassword = Loadable({
  loader: () => import('../../pages/resetPassword'),
})

const ConfirmPasswordReset = Loadable({
  loader: () => import('../../pages/confirmPasswordReset'),
})

const Terms = Loadable({
  loader: () => import('../../pages/terms/Terms'),
})

SignIn.preload()
SignUp.preload()
ResetPassword.preload()
ConfirmPasswordReset.preload()
Terms.preload()

export const publicRoutes = [
  {
    Component: Home,
    pathname: '/',
    name: 'Home',
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
  {
    Component: Terms,
    pathname: '/Terms',
    name: 'Terms',
    exact: false,
  },
]
