import PropTypes from "prop-types";
import {BoardItem, BoardText} from './Event.styled'
import { FaUser, FaMapMarkerAlt, FaDollarSign, FaGift , FaClock } from "react-icons/fa";


const Event = ({event}) => {
      const startTime = new Date(event.time.start).toLocaleTimeString([], {  year: 'numeric', month: 'short',  hour: '2-digit', minute: '2-digit' });
  const endTime = new Date(event.time.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <BoardItem>
      <BoardText>{event.name}</BoardText>
      <p><FaMapMarkerAlt/>{event.location}</p>
      <p><FaUser/>{event.speaker}</p>
      <p><FaDollarSign/>{event.type}</p>
      <p><FaClock />{startTime}-{endTime}</p>
    </BoardItem>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Event;
