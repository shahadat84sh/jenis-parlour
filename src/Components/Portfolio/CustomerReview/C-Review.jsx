import React from 'react';

const CReview = () => {
    return (
        <form className='w-2/3 space-y-3 flex flex-col'>
            <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
            <input type="text" placeholder="Your company's name" className="input input-bordered input-secondary w-full max-w-xs" />
            <textarea className="textarea textarea-secondary w-2/3" placeholder="Description"></textarea>
            <input  className="btn btn-outline btn-secondary btn-md w-32" type="submit" value="Submit" />
            </form>
    );
};

export default CReview;