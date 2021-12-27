import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
      <img 
        className='header_logo'
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/> 

      <div
      className='header_search'>
        <input
        className='header_searchInput' type='text'/>
        <SearchIcon className='heder_searchicon'/>
      </div>

      <div className='header_nav'>
        <div className='header-option'>
          <span
          className='header_optionlineone'
          >
            Hello Guest
          </span>
          <span
            className='header_optionlinetwo'
          >
            Sign in
          </span>
        </div>
        <div className='header-option'>
          <span
            className='header_optionlineone'
          >
            Returns
          </span>
          <span
            className='header_optionlinetwo'
          >
            & Orders
          </span>
        </div>
        <div className='header-option'>
          <span
            className='header_optionlineone'
          >
            Your
          </span>
          <span
            className='header_optionlinetwo'
          >
            Prime
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
