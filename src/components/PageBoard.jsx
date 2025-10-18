import Event from './Event';
import { BoardWrapper, BoardTitle, EventList, BoardBox } from './PageBoard.styled';

const PageBoard = ({ events }) => {
  return (
   <>
        <BoardBox>
      <BoardTitle>Upcoming Events</BoardTitle>
      </BoardBox>
       <BoardWrapper>
      <EventList>
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </EventList>
    </BoardWrapper>
    </>
  );
};

export default PageBoard;
