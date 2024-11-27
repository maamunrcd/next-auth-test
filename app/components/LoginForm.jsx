import { doSocialLogin } from "@/app/actions"
const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
      <button className='bg-orange-400 text-black p-1 rounded-md m-1 text-lg' type='submit' name='action' value="google">Sign in with Google</button>
      <button className='bg-black text-white p-1 rounded-md m-1 text-lg' type='submit' name='action' value="github">Sign in with Github</button>
    </form>
  )
}

export default LoginForm
