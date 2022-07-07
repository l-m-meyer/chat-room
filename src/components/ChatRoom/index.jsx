import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css';

function ChatRoom() {
  const params = useParams();

  const room = chatRooms.find((room) => room.id === params.id);

  if (!room) {
    // TODO: 404
  }

  return (
    <>
      <h2>{room.title}</h2>
      <div>
        <Link>👈 Back to all rooms</Link>
      </div>
      <div className='messages-cointainer'>
        {/* TODO: populate messages */}
      </div>
    </>
  );
}

export { ChatRoom };