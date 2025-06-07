// connection.js

let socket = null;
let user = null;
let roomCode = null;

function randomCode() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

function connect(room) {
  socket = new WebSocket(`wss://${window.location.host}`);

  socket.onopen = () => {
    console.log("WebSocket connected");
    socket.send(JSON.stringify({ type: 'join', roomCode: room }));
  };

  socket.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.type === 'start') {
      localStorage.setItem('roomCode', room);
      if (user === 'host') window.location.href = 'p1.html';
      if (user === 'join') window.location.href = 'p2.html';
    }

    if (data.type === "move") {
      const square = data.square;
      if (window.boardHandlers && window.boardHandlers[square]) {
        window.boardHandlers[square]();
      }
    }
  };

  socket.onerror = (err) => {
    console.error("WebSocket error:", err);
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
window.connect = connect;
window.randomCode = randomCode;

// Hook for buttons (host/join)
document.addEventListener("DOMContentLoaded", () => {
  const hostBtn = document.getElementById('hostBtn');
  const joinBtn = document.getElementById('joinBtn');

  if (hostBtn && joinBtn) {
    hostBtn.onclick = () => {
      user = 'host';
      roomCode = randomCode();
      document.getElementById('roomDisplay').innerText = `Room Code: ${roomCode}`;
      connect(roomCode);
    };

    joinBtn.onclick = () => {
      user = 'join';
      roomCode = document.getElementById('roomInput').value.trim().toUpperCase();
      connect(roomCode);
    };
  }
});
