import AuthLayout from '../components/common/Layout/AuthLayout'
import Register from '../components/auth/Register'

export default function RegisterPage() {
  return <Register />
}

RegisterPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
