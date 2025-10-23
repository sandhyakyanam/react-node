import React from 'react'

export default function SignUp() {
  return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action=''>
                    <div className="mb-3">
                        <label htmlFor='firstname'><strong>FirstName</strong></label>
                        <input type="text" placeholder='Enter FirstName'  className='form-control rounded-0'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='secodname'><strong>SecondName</strong></label>
                        <input type="text" placeholder='Enter SecondName' className='form-control rounded-0'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder='Enter email' className='form-control rounded-0'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='phonenumber'><strong>Phonenumber</strong></label>
                        <input type="number" placeholder='Enter Phonenumber' className='form-control rounded-0'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='profilephoto'><strong>ProfilePhoto</strong></label>
                        <input type="" placeholder='Enter ProfilePhoto' className='form-control rounded-0'/>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
