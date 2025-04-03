# Real-Time Chat Application (Socket.IO + React + Vite)

## Homework 4: Client/Server Programming  
CS 5010 - Program Design Paradigms  
Instructor: John Alexis Guerra Gómez  
Author: Shuhan Dong

---

## Description

This project is a real-time chat application that reimplements the Socket.IO tutorial (up to Step 5) using a modern frontend stack based on React 19 and Vite. It improves the original implementation by showing who sent each message and when it was received. Additionally, a typing indicator feature has been added as a creative enhancement.

---

## Installation and Setup

1. Clone the Repository

```
git clone https://github.com/your-username/SocketIO-Chat-React-Vite.git
cd SocketIO-Chat-React-Vite
```

2. Install Dependencies

```
npm install
```

3. Build the Frontend

```
npm run build
```

4. Start the Application

```
npm start
```

Then visit `http://localhost:3000` in your browser.

---

## Key Features

- Real-time messaging using Socket.IO
- Built with React 19 and Vite
- Displays sender name, timestamp, and socket ID for each message
- Typing indicator shows when another user is currently typing
- Clean, minimal UI with intuitive user input

---

## Creative Addition: Typing Indicator

This application includes a typing indicator feature. When a user begins typing in the input field, other connected users will see a message such as:

[Username] is typing...

The typing message disappears after a few seconds of inactivity. This feature adds interactivity and realism to the chat experience, similar to modern messaging platforms.

---

## Technical Details

- Frontend: React 19, Vite, socket.io-client
- Backend: Express, socket.io
- Scripts:
  - `npm start` – starts the backend server and serves the frontend
  - `npm run frontend` – runs the Vite-powered React frontend (dev only)
  - `npm run build` – builds the frontend for production

---

## Video Demonstration

[Add your video link here]

---

## License

This project is licensed under the MIT License.
