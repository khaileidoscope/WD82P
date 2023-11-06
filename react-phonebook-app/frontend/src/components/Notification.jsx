import "./Notification.css";

function Notification({ notification }) {
  if (notification.length === 0) return null;

  return <div className="success">{notification}</div>;
}

export default Notification;
