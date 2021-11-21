import {Link} from "react-router-dom";

import {ROUTES} from "../../constants/api";

import './header.scss'

const Header = () => (
  <div className='header'>
    <div className='header__links'>
      {Object.entries(ROUTES).map(([key, value]) => (
        <Link key={key} to={value}>{key}</Link>
      ))}
    </div>
  </div>
)

export default Header