/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import "./Widget.css"

function Widget() {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            Width="340"
            height="100%"
            style={{border:"none",overflow:"hidden",padding:"10px",borderRadius:"8px"}}
            onScroll="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            >
            </iframe>
        </div>
    )
}

export default Widget
