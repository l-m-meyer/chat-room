import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css';

function ChatRoom() {
  const params = useParams();

  const room = chatRooms.find((x) => x.id === params.id);

  if (!room) {
    // TODO: 404
  }

  return (
    <>
      <h2>{room.title}</h2>
      <div>
        <Link to={`/room/${room.id}`}>👈 Back to all rooms</Link>
      </div>
      <div className='messages-container'>
        {/* TODO: populate messages */}
      </div>
    </>
  );
}

export { ChatRoom };