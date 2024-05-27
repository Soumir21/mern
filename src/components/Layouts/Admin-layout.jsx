import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaRegUser, FaHome  } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
export const Adminlayout = () => {
  return (
    <>
      <header>
        <div className='container'>
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                <FaRegUser /> users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <MdContacts />contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <MdOutlineMedicalServices /> service
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                 <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}
