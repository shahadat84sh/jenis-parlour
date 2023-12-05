import React from 'react';

const MakeAdmin = () => {
    return (
        <div className='bg-white p-16 rounded-md'>
            <label>
                <span className='text-label font-semibold font-md'>Enter Email</span>
            </label>
           <div className='flex'>
           <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <input type="submit" className='btn bg-pink-500 ms-2' value="Submit" />
           </div>
        </div>
    );
};

export default MakeAdmin;