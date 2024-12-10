import React, { useState, useEffect } from 'react'
import './infoUser.css'
import img from '../../images/Logo-jswebs.png'
import { Link as Anchor } from "react-router-dom";
function ProfilePage({ handleLogout }) {





  return (
    <div className='userInfoContainer'>

      <div className='userInfo'>

        <div className='info'>
          <img src={img} alt="User Avatar" />
          <div className='deColumnInfo'>
            <h3>SebastianDevp</h3>
            <Anchor to={`/`}>Ver perfil</Anchor>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfilePage;