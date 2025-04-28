import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'

const Register = async ({ params: {userId}}: SearchParamProps) => {
    const user = await getUser(userId)

  return (
    <div className="flex h-screen max-h-screen">
    {/* passkeyModal */}
   <section className="remove-scrollbar container">
    <div className="sub-container max-w-[860px] flex flex-col py-10">
    <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit mb-12"
          />
        </Link>

      <RegisterForm user={user}/>
        <p className="copyright py-12"> © 2025 Healthcare
        </p>
      

    </div>
    </section>

    <Image src="/assets/images/register-img.png"
    height={1000}
    width={1000}
    alt="patient"
    className="side-img max-w-[390px]"/>
   
  </div>
  )
}

export default Register