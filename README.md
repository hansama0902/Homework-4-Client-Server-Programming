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
git clone https://github.com/hansama0902/Homework-4-Client-Server-Programming.git
cd Homework-4-Client-Server-Programming
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

---

## Usage of GenAI

Used ChatGPT (GPT-4) to assist with the following client-server programming and Socket.IO integration tasks:

Prompt: How can I include sender name and message timestamp in a Socket.IO chat app and display them clearly in React?

Prompt: What is CORS and why does it cause issues when connecting React frontend to a Node.js backend running on a different port?

Prompt: How can I avoid CORS entirely by serving the React build from the same Express server that runs my Socket.IO backend?

---

## Video Demonstration

(Video)[https://youtu.be/6fc9H1M3TRQ]

---

## License

This project is licensed under the MIT License.
