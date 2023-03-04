import Moment from "react-moment"
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from "react";

// all alert's posts are fetched from api displyed in <article>
const Post = ({ post }) => {

    const [nav, setNav] = useState(true);
    const handleClick = () => setNav(!nav);

    return (
        <article>
                <div className="alertInRow">
                    <h2>{post.alert_type}</h2>
                    <p>
                        <Moment format="D MMM YYYY ">{post.timestamp}</Moment> at <Moment format=" kk:mm">{post.timestamp}</Moment>
                    </p>

                {/* toggle effect for notification button */}
                <div id='button' className="iconStyle" style={{ float: 'right' }}>
                    <button type='button' onClick={handleClick} style={{ fontSize: 'small' }} >
                        {nav ?
                            <><NotificationsOffIcon /><h2>Mark As False Alarm</h2></> :
                            <><NotificationsActiveIcon /><h2>Mark As True Alarm </h2></>
                        }
                    </button>
                </div>
                        </div>
            <p>Driver : {post.driver_friendly_name} / {post.vehicle_friendly_name}</p>
            {/* <p>Date : {post.timestamp}</p> */}
            {/* <p>Post ID : {post.id}</p> */}
        </article>
    )
}
export default Post