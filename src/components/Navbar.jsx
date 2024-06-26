import React from 'react'
const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white mx-auto w-full  px-8 py-2'>
            <div className="md:mycontainer mx-auto flex justify-between items-center h-14 py-2">
                <div className="logo font-bold text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP</span>
                    <span className='text-green-500'>/ &gt;</span>
                </div>
                <a href='https://github.com/humayun-987/Password-manager'>
                    <button className="github_logo flex text-white text-md rounded-full items-center font-bold bg-green-700 px-1 py-1 gap-2 ring-white ring-1">
                        <img src="icons/github.svg" alt="logo" width={25} className='invert' />
                        <span className='mx-1'>Github</span>
                    </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
