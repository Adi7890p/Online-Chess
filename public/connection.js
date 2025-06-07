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
    if (data.type === 'start' && user=='host') {
      localStorage.setItem('roomCode', room);
      window.location.href = 'p1.html';
    }
    if (data.type === 'start' && user=='join') {
      localStorage.setItem('roomCode', room);
      window.location.href = 'p2.html';
    }
    if (data.type === "move") {
    const square = data.square;
    if (window.boardHandlers[square]) {
      window.boardHandlers[square]();  // trigger same move
    }
  }
  };
}


document.getElementById('hostBtn').onclick = () => {
  user='host';
  roomCode = randomCode();
  document.getElementById('roomDisplay').innerText = `Room Code: ${roomCode}`;
  connect(roomCode);

};


document.getElementById('joinBtn').onclick = () => {
  user='join';
  roomCode = document.getElementById('roomInput').value.trim().toUpperCase();
  connect(roomCode);
  
};

function sendMove(squareId) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type: "move", roomCode, square: squareId }));
  } else {
    console.warn("WebSocket not ready. Move not sent:", squareId);
  }
}
window.sendMove = sendMove;
