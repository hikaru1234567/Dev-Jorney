import React from 'react';
import {Link} from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faFilePen ,faArrowRight} from '@fortawesome/free-solid-svg-icons';


const NavBar = ({isAuth}) => {
  return (
    <nav>
      <Link to="/">
   <FontAwesomeIcon icon={faHouse} />
    ホーム</Link>

    <Link to="/note">
    <FontAwesomeIcon icon={faFilePen} />ノート</Link>
    {isAuth ?<Link to="/login">
    <FontAwesomeIcon icon={faArrowRight} />ログイン</Link> :
    <>
    <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />記事投稿</Link>
    <Link to="/logout">
    <FontAwesomeIcon icon={faArrowRight} />ログアウト</Link>
        
    </>}
   </nav>
  );
};

export default NavBar