function randomCode() {
  return Math.random().toString(36).substr(2, 6).toUpperCase();
}

let socket;
let roomCode;

function connect(room) {
  socket = new WebSocket(`wss://${window.location.host}`);

  socket.onopen = () => {
    socket.send(JSON.stringify({ type: 'join', roomCode: room }));
  };

  socket.onmessage = (e) => {
    const data = JSON.parse(e.data);
    
    if (data.type === "move") {
    const square = data.square;
    if (window.boardHandlers[square]) {
      window.boardHandlers[square]();  // trigger same move
    }
  }
  };
}
function sendMove(squareId) {
  socket.send(JSON.stringify({ type: "move", roomCode, square: squareId }));
}

document.getElementById('hostBtn').onclick = () => {
  roomCode = randomCode();
  document.getElementById('roomDisplay').innerText = `Room Code: ${roomCode}`;
  connect(roomCode);
  if (data.type === 'start') {
      localStorage.setItem('roomCode', room);
      window.location.href = 'p1.html';
    }
};


document.getElementById('joinBtn').onclick = () => {
  roomCode = document.getElementById('roomInput').value.trim().toUpperCase();
  connect(roomCode);
  if (data.type === 'start') {
      localStorage.setItem('roomCode', room);
      window.location.href = 'p2.html';
    }
};
