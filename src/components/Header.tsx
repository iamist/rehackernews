import React from 'react';
import logo from '../img/y18.gif';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-between bg-orange-500 p-1">
                <div className="brand flex items-center flex-shrink-0 mr-2">
                    <img src={logo} alt="logo" className='border border-white mr-2' />
                    <h1 className="font-bold">Hacker News</h1>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <ul className="nav-menu flex flex-1 list-none">
                        <li className="mr-1">
                            <NavLink to="/newstories"
                            className={
                                ({isActive}) =>
                                'border-zinc-800 border-r-2 px-2 ' +
                                (isActive ? 'text-white' : 'text-black')
                            }>
                                new
                            </NavLink>
                        </li>
                        <li className="mr-1">
                            <NavLink to="/beststories"
                            className={
                                ({isActive}) =>
                                'border-zinc-800 border-r-2 px-2 ' +
                                (isActive ? 'text-white' : 'text-black')
                            }>
                                past
                            </NavLink>
                        </li>
                        <li className="mr-1">
                            <Link className="border-zinc-800 border-r-2 px-2" to="/comments">
                                comments
                            </Link>
                        </li>
                        <li className="mr-1">
                            <Link className="border-zinc-800 border-r-2 px-2" to="/ask">
                                ask
                            </Link>
                        </li>
                        <li className="mr-1">
                            <Link className="border-zinc-800 border-r-2 px-2" to="/jobs">
                                jobs
                            </Link>
                        </li>
                        <li className="mr-1">
                            <Link className="px-2" to="/submit">
                                submit
                            </Link>
                        </li>
                    </ul>
                    <div className="login-link self-end">
                        <Link to="/login">
                            login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;