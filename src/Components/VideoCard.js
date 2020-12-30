import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './../StyleSheets/VideoCard.css'

function VideoCard() {
    return (
        <div className="VideoCard">
            <div className="videocard__thumbnail">

            </div>

            <div className="videocard__details">
                <Avatar alt="" src=""/>
                <div className="videocard__info">
                    <span className="videocard__title">Video Title</span>
                    <span className="videocard__uploader">Uploader</span>
                    <span className="videocard__meta">{0 + 'K views • 0 days ago'}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
