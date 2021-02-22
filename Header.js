import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {

    const [{user},dispatch]=useStateValue()

    return (
        <div className="header">
          <div className="header__left">
              <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"/>
              <div className="header_input">
                  <SearchIcon/>
                  <input type="text" placeholder="Search Facebook"/>
              </div>
          </div>

          <div className="header__middle">
              <div className="header_option header_option-active">
                 <HomeIcon fontSize="large"/> 
              </div>
              <div className="header_option ">
                 <FlagIcon fontSize="large"/> 
              </div>
              <div className="header_option">
                 <SubscriptionsIcon fontSize="large"/> 
              </div>
              <div className="header_option">
                 <StorefrontIcon fontSize="large"/> 
              </div>
              <div className="header_option">
                 <SupervisedUserCircleIcon fontSize="large"/> 
              </div>
          </div>

          <div className="header__right">

              <div className="header_info">
                  <Avatar src={user.photoURL}/>
                  <h4>{user.displayName}</h4>
              </div>
              <IconButton>
                  <AddIcon/>
              </IconButton>
              <IconButton>
                  <ForumIcon/>
              </IconButton>
              <IconButton>
                 <NotificationsActiveIcon/> 
              </IconButton>
             <IconButton>
                 <ExpandMoreIcon/>
             </IconButton>
                 
     
          </div>

          
        </div>
    )
}

export default Header
