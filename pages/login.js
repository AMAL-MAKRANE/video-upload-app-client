import AuthLayout from '../components/ui/Layout/AuthLayout'
import Login from '../components/auth/Login'

export default function LoginPage() {
  return <Login />
}

LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
