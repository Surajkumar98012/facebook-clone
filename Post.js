import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import CountButton from './CountButton'

function Post({profilePic,image,username,timestamp,message}) {
    
    return (
        <div className="post">
           <div className="post_top">
           <Avatar className="post_avatar" src={profilePic}/>
             <div className="post_topInfo">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</
                p>
              </div>
            </div> 
           <div className="post_bottom">
             <p>{message}</p>
           </div>

           <div className="post_image">
           <img src={image} alt=""/>
           </div>

           <div className="post_options">
             <div className="post_option">
             <ThumbUpIcon/><br/>
             <CountButton incrimentBy={1} buttonColor={"#2e81f4"}/>
             </div>

             <div className="post_option">
             <ChatBubbleOutlineIcon/>
             <p>Comment</p>
             </div>

             <div className="post_option">
             <NearMeIcon/>
             <p>Share</p>
             </div>

             <div className="post_option">
             <AccountCircleIcon/>
             <ExpandMoreOutlinedIcon/>
             
             </div>
           </div>
        </div>
    )
}

export default Post
