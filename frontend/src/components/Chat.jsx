import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "../stylesheets/Chat.css";

const socket = io();

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    socket.on("chat message", (data) => {
      console.log("Message received:", data);
      setMessages((prev) => [...prev, data]);
    });
    return () => socket.off("chat message");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim() && input.trim()) {
      socket.emit("chat message", { user, message: input });
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">Socket.IO Chat Room</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="chat-input"
      />

      <div className="chat-box">
        <ul className="chat-messages">
          {messages.map((msg, index) => (
            <li key={index} className="chat-message">
              <div className="chat-user">
                {msg.user}
                <span className="chat-time">[{msg.time}]</span>
              </div>
              <div>{msg.message}</div>
              <div className="chat-sender-id">Sender ID: {msg.senderId}</div>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="chat-input"
        />
        <button type="submit" className="chat-button">Send</button>
      </form>
    </div>
  );
};

export default Chat;

