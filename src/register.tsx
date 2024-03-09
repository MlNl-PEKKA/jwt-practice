// import { useState } from 'react'
// import axios from './api/axios'
import Input from './ui/input'
// const REGISTER_URL = '/register'

const Register = () => {
  //   const [user, setUser] = useState('')
  //   const [pwd, setPwd] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
  //     e.preventDefault()
  //     try {
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       const response = await axios.post<any, any>(
  //         REGISTER_URL,
  //         JSON.stringify({ user, pwd }),
  //         {
  //           headers: { 'Content-Type': 'application/json' },
  //           withCredentials: true,
  //         }
  //       )
  //       console.log(response?.data)
  //       console.log(response?.accessToken)
  //       console.log(JSON.stringify(response))
  //       setUser('')
  //       setPwd('')
  //     } catch (err) {
  //       //do nothing
  //     }
  //   }

  return (
    <section className="flex bg-slate-900 w-[500px] aspect-[3/4]">
      <Input title="Username" />
    </section>
  )
}

export default Register
