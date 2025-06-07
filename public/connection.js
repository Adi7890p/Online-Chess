// connection.js

function randomCode() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

let socket;
let user;
let roomCode;

function connect(room) {
  socket = new WebSocket(`wss://${window.location.host}`);

  socket.onopen = () => {
    socket.send(JSON.stringify({ type: 'join', roomCode: room }));
  };

  socket.onmessage = (e) => {
    const data = JSON.parse(e.data);

    if (data.type === 'start') {
      localStorage.setItem('roomCode', room);
      if (user === 'host') {
        window.location.href = 'p1.html';
      } else if (user === 'join') {
        window.location.href = 'p2.html';
      }
    }

    if (data.type === 'move') {
      const square = data.square;
      if (window.boardHandlers && typeof window.boardHandlers[square] === 'function') {
        window.boardHandlers[square]();
      } else {
        console.warn("Handler not found for:", square);
      }
    }
  };

  socket.onerror = (e) => {
    console.error("WebSocket error:", e);
  };

  socket.onclose = () => {
    console.warn("WebSocket closed.");
  };
}

function sendMove(squareId) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type: "move", roomCode, square: squareId }));
  } else {
    console.warn("WebSocket not ready. Move not sent:", squareId);
  }
}

window.sendMove = sendMove;

// Button event listeners for host/join

document.getElementById('hostBtn').onclick = () => {
  user = 'host';
  roomCode = randomCode();
  document.getElementById('roomDisplay').innerText = `Room Code: ${roomCode}`;
  connect(roomCode);
};

document.getElementById('joinBtn').onclick = () => {
  user = 'join';
  roomCode = document.getElementById('roomInput').value.trim().toUpperCase();
  connect(roomCode);
};
