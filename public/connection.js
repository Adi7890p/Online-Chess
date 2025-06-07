function randomCode() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

let socket;
let user;
let roomCode;
let isSocketReady = false;

function connect(room) {
  socket = new WebSocket(`wss://${window.location.host}`);

  socket.onopen = () => {
    isSocketReady = true;
    socket.send(JSON.stringify({ type: 'join', roomCode: room }));
  };

  socket.onmessage = (e) => {
    const data = JSON.parse(e.data);

    if (data.type === 'start') {
      localStorage.setItem('roomCode', room);

      // Host goes to p1.html, Join goes to p2.html
      if (user === 'host') {
        window.location.href = 'p1.html';
      } else if (user === 'join') {
        window.location.href = 'p2.html';
      }
    }

    if (data.type === 'move') {
      const square = data.square;

      if (window.boardHandlers && typeof window.boardHandlers[square] === 'function') {
        window.boardHandlers[square](); // Mirror the move on other client
      } else {
        console.warn('No board handler for', square);
      }
    }
  };

  socket.onerror = (err) => {
    console.error('WebSocket error:', err);
  };
}

function sendMove(squareId) {
  if (socket && isSocketReady && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type: "move", roomCode, square: squareId }));
  } else {
    console.warn("WebSocket not ready. Move not sent:", squareId);
  }
}

// Make it globally available to script.js
window.sendMove = sendMove;

// Host button
document.getElementById('hostBtn').onclick = () => {
  user = 'host';
  roomCode = randomCode();
  document.getElementById('roomDisplay').innerText = `Room Code: ${roomCode}`;
  connect(roomCode);
};

// Join button
document.getElementById('joinBtn').onclick = () => {
  user = 'join';
  roomCode = document.getElementById('roomInput').value.trim().toUpperCase();
  connect(roomCode);
};
