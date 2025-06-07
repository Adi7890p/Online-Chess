/*
this code fullly written by Ak & its copyright :)... 
*/

let flag = false, flag1 = false, flag4 = 'bp', flag5 = 4, flag6 = 1, flag7 = 1, flag10 = 0, flag11 = false;
let bp = [], str, strl = '', strl1 = '';
let bpc = 16, wpc = 16, kcpb, kcpw;
let token = [], checkpathl = [], token1 = [], pinned = {};
let blc = [], whc = [];
let pec = ['b'];
let checker1 = '', castelw = true, castelb = true, cb1 = true, cb2 = true, cw1 = true, cw2 = true, checked = false, castel = false, castelid = '', bypass = false;
let promotionpiece = '';
let restrictw = [], restrictb = [];
let restrictwp = [], restrictbp = [];
let bl = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'];
let wh = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'];
let s, z, p, n = 1, t, c, position;
let a1 = 'a1', a2 = 'a2', a3 = 'a3', a4 = 'a4', a5 = 'a5', a6 = 'a6', a7 = 'a7', a8 = 'a8';
let b1 = 'b1', b2 = 'b2', b3 = 'b3', b4 = 'b4', b5 = 'b5', b6 = 'b6', b7 = 'b7', b8 = 'b8';
let c1 = 'c1', c2 = 'c2', c3 = 'c3', c4 = 'c4', c5 = 'c5', c6 = 'c6', c7 = 'c7', c8 = 'c8';
let d1 = 'd1', d2 = 'd2', d3 = 'd3', d4 = 'd4', d5 = 'd5', d6 = 'd6', d7 = 'd7', d8 = 'd8';
let e1 = 'e1', e2 = 'e2', e3 = 'e3', e4 = 'e4', e5 = 'e5', e6 = 'e6', e7 = 'e7', e8 = 'e8';
let f1 = 'f1', f2 = 'f2', f3 = 'f3', f4 = 'f4', f5 = 'f5', f6 = 'f6', f7 = 'f7', f8 = 'f8';
let g1 = 'g1', g2 = 'g2', g3 = 'g3', g4 = 'g4', g5 = 'g5', g6 = 'g6', g7 = 'g7', g8 = 'g8';
let h1 = 'h1', h2 = 'h2', h3 = 'h3', h4 = 'h4', h5 = 'h5', h6 = 'h6', h7 = 'h7', h8 = 'h8';


let temp1;
let sel = g1;
let checker;
let bqCounter = 1,bbCounter = 2,brCounter = 2,bkCounter = 2;
let wqCounter = 1,wbCounter = 2,wrCounter = 2,wkCounter = 2;
let a1e = document.getElementById(a1), a2e = document.getElementById(a2), a3e = document.getElementById(a3), a4e = document.getElementById(a4), a5e = document.getElementById(a5), a6e = document.getElementById(a6), a7e = document.getElementById(a7), a8e = document.getElementById(a8);
let b1e = document.getElementById(b1), b2e = document.getElementById(b2), b3e = document.getElementById(b3), b4e = document.getElementById(b4), b5e = document.getElementById(b5), b6e = document.getElementById(b6), b7e = document.getElementById(b7), b8e = document.getElementById(b8);
let c1e = document.getElementById(c1), c2e = document.getElementById(c2), c3e = document.getElementById(c3), c4e = document.getElementById(c4), c5e = document.getElementById(c5), c6e = document.getElementById(c6), c7e = document.getElementById(c7), c8e = document.getElementById(c8);
let d1e = document.getElementById(d1), d2e = document.getElementById(d2), d3e = document.getElementById(d3), d4e = document.getElementById(d4), d5e = document.getElementById(d5), d6e = document.getElementById(d6), d7e = document.getElementById(d7), d8e = document.getElementById(d8);
let e1e = document.getElementById(e1), e2e = document.getElementById(e2), e3e = document.getElementById(e3), e4e = document.getElementById(e4), e5e = document.getElementById(e5), e6e = document.getElementById(e6), e7e = document.getElementById(e7), e8e = document.getElementById(e8);
let f1e = document.getElementById(f1), f2e = document.getElementById(f2), f3e = document.getElementById(f3), f4e = document.getElementById(f4), f5e = document.getElementById(f5), f6e = document.getElementById(f6), f7e = document.getElementById(f7), f8e = document.getElementById(f8);
let g1e = document.getElementById(g1), g2e = document.getElementById(g2), g3e = document.getElementById(g3), g4e = document.getElementById(g4), g5e = document.getElementById(g5), g6e = document.getElementById(g6), g7e = document.getElementById(g7), g8e = document.getElementById(g8);
let h1e = document.getElementById(h1), h2e = document.getElementById(h2), h3e = document.getElementById(h3), h4e = document.getElementById(h4), h5e = document.getElementById(h5), h6e = document.getElementById(h6), h7e = document.getElementById(h7), h8e = document.getElementById(h8);

let whcb = document.getElementById('wh');
let blcb = document.getElementById('bl');
let restrict_black = [], restrict_white = [];//for discovery check

let bq1 = document.createElement("i");
bq1.setAttribute("class", "fa-solid fa-chess-queen");
bq1.style.color = "#ffffffe1";

let bq2 = document.createElement("i");
bq2.setAttribute("class", "fa-solid fa-chess-queen");
bq2.style.color = "#ffffffe1";

let bq3 = document.createElement("i");
bq3.setAttribute("class", "fa-solid fa-chess-queen");
bq3.style.color = "#ffffffe1";

let bq4 = document.createElement("i");
bq4.setAttribute("class", "fa-solid fa-chess-queen");
bq4.style.color = "#ffffffe1";

let bq5 = document.createElement("i");
bq5.setAttribute("class", "fa-solid fa-chess-queen");
bq5.style.color = "#ffffffe1";

let bq6 = document.createElement("i");
bq6.setAttribute("class", "fa-solid fa-chess-queen");
bq6.style.color = "#ffffffe1";

let bq7 = document.createElement("i");
bq7.setAttribute("class", "fa-solid fa-chess-queen");
bq7.style.color = "#ffffffe1";

let bq8 = document.createElement("i");
bq8.setAttribute("class", "fa-solid fa-chess-queen");
bq8.style.color = "#ffffffe1";

let bq9 = document.createElement("i");
bq9.setAttribute("class", "fa-solid fa-chess-queen");
bq9.style.color = "#ffffffe1";

// Store in a list
let bql = [bq1, bq2, bq3, bq4, bq5, bq6, bq7, bq8,bq9];

let bb1 = document.createElement("i");
bb1.setAttribute("class", "fa-solid fa-chess-bishop");
bb1.style.color = "#ffffffe1";

let bb2 = document.createElement("i");
bb2.setAttribute("class", "fa-solid fa-chess-bishop");
bb2.style.color = "#ffffffe1";

let bb3 = document.createElement("i");
bb3.setAttribute("class", "fa-solid fa-chess-bishop");
bb3.style.color = "#ffffffe1";

let bb4 = document.createElement("i");
bb4.setAttribute("class", "fa-solid fa-chess-bishop");
bb4.style.color = "#ffffffe1";

let bb5 = document.createElement("i");
bb5.setAttribute("class", "fa-solid fa-chess-bishop");
bb5.style.color = "#ffffffe1";

let bb6 = document.createElement("i");
bb6.setAttribute("class", "fa-solid fa-chess-bishop");
bb6.style.color = "#ffffffe1";

let bb7 = document.createElement("i");
bb7.setAttribute("class", "fa-solid fa-chess-bishop");
bb7.style.color = "#ffffffe1";

let bb8 = document.createElement("i");
bb8.setAttribute("class", "fa-solid fa-chess-bishop");
bb8.style.color = "#ffffffe1";

let bb9 = document.createElement("i");
bb9.setAttribute("class", "fa-solid fa-chess-bishop");
bb9.style.color = "#ffffffe1";

let bb10 = document.createElement("i");
bb10.setAttribute("class", "fa-solid fa-chess-bishop");
bb10.style.color = "#ffffffe1";

// List of all bishops
let bbl = [bb1, bb2, bb3, bb4, bb5, bb6, bb7, bb8, bb9,bb10];

let br1 = document.createElement("i");
br1.setAttribute("class", "fa-solid fa-chess-rook");
br1.style.color = "#ffffffe1";

let br2 = document.createElement("i");
br2.setAttribute("class", "fa-solid fa-chess-rook");
br2.style.color = "#ffffffe1";

let br3 = document.createElement("i");
br3.setAttribute("class", "fa-solid fa-chess-rook");
br3.style.color = "#ffffffe1";

let br4 = document.createElement("i");
br4.setAttribute("class", "fa-solid fa-chess-rook");
br4.style.color = "#ffffffe1";

let br5 = document.createElement("i");
br5.setAttribute("class", "fa-solid fa-chess-rook");
br5.style.color = "#ffffffe1";

let br6 = document.createElement("i");
br6.setAttribute("class", "fa-solid fa-chess-rook");
br6.style.color = "#ffffffe1";

let br7 = document.createElement("i");
br7.setAttribute("class", "fa-solid fa-chess-rook");
br7.style.color = "#ffffffe1";

let br8 = document.createElement("i");
br8.setAttribute("class", "fa-solid fa-chess-rook");
br8.style.color = "#ffffffe1";

let br9 = document.createElement("i");
br9.setAttribute("class", "fa-solid fa-chess-rook");
br9.style.color = "#ffffffe1";

let br10 = document.createElement("i");
br10.setAttribute("class", "fa-solid fa-chess-rook");
br10.style.color = "#ffffffe1";

// List of all black rooks
let brl = [br1, br2, br3, br4, br5, br6, br7, br8, br9,br10];

let bk1 = document.createElement("i");
bk1.setAttribute("class", "fa-solid fa-chess-knight");
bk1.style.color = "#ffffffe1";

let bk2 = document.createElement("i");
bk2.setAttribute("class", "fa-solid fa-chess-knight");
bk2.style.color = "#ffffffe1";

let bk3 = document.createElement("i");
bk3.setAttribute("class", "fa-solid fa-chess-knight");
bk3.style.color = "#ffffffe1";

let bk4 = document.createElement("i");
bk4.setAttribute("class", "fa-solid fa-chess-knight");
bk4.style.color = "#ffffffe1";

let bk5 = document.createElement("i");
bk5.setAttribute("class", "fa-solid fa-chess-knight");
bk5.style.color = "#ffffffe1";

let bk6 = document.createElement("i");
bk6.setAttribute("class", "fa-solid fa-chess-knight");
bk6.style.color = "#ffffffe1";

let bk7 = document.createElement("i");
bk7.setAttribute("class", "fa-solid fa-chess-knight");
bk7.style.color = "#ffffffe1";

let bk8 = document.createElement("i");
bk8.setAttribute("class", "fa-solid fa-chess-knight");
bk8.style.color = "#ffffffe1";

let bk9 = document.createElement("i");
bk9.setAttribute("class", "fa-solid fa-chess-knight");
bk9.style.color = "#ffffffe1";

let bk10 = document.createElement("i");
bk10.setAttribute("class", "fa-solid fa-chess-knight");
bk10.style.color = "#ffffffe1";

// List of all black knights
let bkl = [bk1, bk2, bk3, bk4, bk5, bk6, bk7, bk8, bk9,bk10];


let bp1 = document.createElement("i");
bp1.setAttribute("class", "fa-solid fa-chess-pawn");
bp1.style.color = '#ffffffe1';
g1e.append(bp1);
let bp2 = document.createElement("i");
bp2.setAttribute("class", "fa-solid fa-chess-pawn");
bp2.style.color = '#ffffffe1';
g2e.append(bp2);
let bp3 = document.createElement("i");
bp3.setAttribute("class", "fa-solid fa-chess-pawn");
bp3.style.color = '#ffffffe1';
g3e.append(bp3);
let bp4 = document.createElement("i");
bp4.setAttribute("class", "fa-solid fa-chess-pawn");
bp4.style.color = '#ffffffe1';
g4e.append(bp4);
let bp5 = document.createElement("i");
bp5.setAttribute("class", "fa-solid fa-chess-pawn");
bp5.style.color = '#ffffffe1';
g5e.append(bp5);
let bp6 = document.createElement("i");
bp6.setAttribute("class", "fa-solid fa-chess-pawn");
bp6.style.color = '#ffffffe1';
g6e.append(bp6);
let bp7 = document.createElement("i");
bp7.setAttribute("class", "fa-solid fa-chess-pawn");
bp7.style.color = '#ffffffe1';
g7e.append(bp7);
let bp8 = document.createElement("i");
bp8.setAttribute("class", "fa-solid fa-chess-pawn");
bp8.style.color = '#ffffffe1';
g8e.append(bp8);

h1e.append(br1);
h2e.append(bk1);
h3e.append(bb1);
let bq = document.createElement("i");
bq.setAttribute("class", "fa-solid fa-chess-queen");
bq.style.color = "#ffffffe1";
h4e.append(bq1);
let bk = document.createElement("i");
bk.setAttribute("class", "fa-solid fa-chess-king");
bk.style.color = "#ffffffe1";
h5e.append(bk);

h6e.append(bb2);
h7e.append(bk2);
h8e.append(br2);



let wq1 = document.createElement("i");
wq1.setAttribute("class", "fa-solid fa-chess-queen");
wq1.style.color = "#403f3f";

let wq2 = document.createElement("i");
wq2.setAttribute("class", "fa-solid fa-chess-queen");
wq2.style.color = "#403f3f";

let wq3 = document.createElement("i");
wq3.setAttribute("class", "fa-solid fa-chess-queen");
wq3.style.color = "#403f3f";

let wq4 = document.createElement("i");
wq4.setAttribute("class", "fa-solid fa-chess-queen");
wq4.style.color = "#403f3f";

let wq5 = document.createElement("i");
wq5.setAttribute("class", "fa-solid fa-chess-queen");
wq5.style.color = "#403f3f";

let wq6 = document.createElement("i");
wq6.setAttribute("class", "fa-solid fa-chess-queen");
wq6.style.color = "#403f3f";

let wq7 = document.createElement("i");
wq7.setAttribute("class", "fa-solid fa-chess-queen");
wq7.style.color = "#403f3f";

let wq8 = document.createElement("i");
wq8.setAttribute("class", "fa-solid fa-chess-queen");
wq8.style.color = "#403f3f";
let wq9 = document.createElement("i");
wq9.setAttribute("class", "fa-solid fa-chess-queen");
wq9.style.color = "#403f3f";

let wql = [wq1, wq2, wq3, wq4, wq5, wq6, wq7, wq8,wq9];

let wb1 = document.createElement("i");
wb1.setAttribute("class", "fa-solid fa-chess-bishop");
wb1.style.color = "#403f3f";

let wb2 = document.createElement("i");
wb2.setAttribute("class", "fa-solid fa-chess-bishop");
wb2.style.color = "#403f3f";

let wb3 = document.createElement("i");
wb3.setAttribute("class", "fa-solid fa-chess-bishop");
wb3.style.color = "#403f3f";

let wb4 = document.createElement("i");
wb4.setAttribute("class", "fa-solid fa-chess-bishop");
wb4.style.color = "#403f3f";

let wb5 = document.createElement("i");
wb5.setAttribute("class", "fa-solid fa-chess-bishop");
wb5.style.color = "#403f3f";

let wb6 = document.createElement("i");
wb6.setAttribute("class", "fa-solid fa-chess-bishop");
wb6.style.color = "#403f3f";

let wb7 = document.createElement("i");
wb7.setAttribute("class", "fa-solid fa-chess-bishop");
wb7.style.color = "#403f3f";

let wb8 = document.createElement("i");
wb8.setAttribute("class", "fa-solid fa-chess-bishop");
wb8.style.color = "#403f3f";

let wb9 = document.createElement("i");
wb9.setAttribute("class", "fa-solid fa-chess-bishop");
wb9.style.color = "#403f3f";

let wb10 = document.createElement("i");
wb10.setAttribute("class", "fa-solid fa-chess-bishop");
wb10.style.color = "#403f3f";

let wbl = [wb1, wb2, wb3, wb4, wb5, wb6, wb7, wb8, wb9];


let wr1 = document.createElement("i");
wr1.setAttribute("class", "fa-solid fa-chess-rook");
wr1.style.color = "#403f3f";

let wr2 = document.createElement("i");
wr2.setAttribute("class", "fa-solid fa-chess-rook");
wr2.style.color = "#403f3f";

let wr3 = document.createElement("i");
wr3.setAttribute("class", "fa-solid fa-chess-rook");
wr3.style.color = "#403f3f";

let wr4 = document.createElement("i");
wr4.setAttribute("class", "fa-solid fa-chess-rook");
wr4.style.color = "#403f3f";

let wr5 = document.createElement("i");
wr5.setAttribute("class", "fa-solid fa-chess-rook");
wr5.style.color = "#403f3f";

let wr6 = document.createElement("i");
wr6.setAttribute("class", "fa-solid fa-chess-rook");
wr6.style.color = "#403f3f";

let wr7 = document.createElement("i");
wr7.setAttribute("class", "fa-solid fa-chess-rook");
wr7.style.color = "#403f3f";

let wr8 = document.createElement("i");
wr8.setAttribute("class", "fa-solid fa-chess-rook");
wr8.style.color = "#403f3f";

let wr9 = document.createElement("i");
wr9.setAttribute("class", "fa-solid fa-chess-rook");
wr9.style.color = "#403f3f";

let wr10 = document.createElement("i");
wr10.setAttribute("class", "fa-solid fa-chess-rook");
wr10.style.color = "#403f3f";

let wrl = [wr1, wr2, wr3, wr4, wr5, wr6, wr7, wr8, wr9,wr10];

let wk1 = document.createElement("i");
wk1.setAttribute("class", "fa-solid fa-chess-knight");
wk1.style.color = "#403f3f";

let wk2 = document.createElement("i");
wk2.setAttribute("class", "fa-solid fa-chess-knight");
wk2.style.color = "#403f3f";

let wk3 = document.createElement("i");
wk3.setAttribute("class", "fa-solid fa-chess-knight");
wk3.style.color = "#403f3f";

let wk4 = document.createElement("i");
wk4.setAttribute("class", "fa-solid fa-chess-knight");
wk4.style.color = "#403f3f";

let wk5 = document.createElement("i");
wk5.setAttribute("class", "fa-solid fa-chess-knight");
wk5.style.color = "#403f3f";

let wk6 = document.createElement("i");
wk6.setAttribute("class", "fa-solid fa-chess-knight");
wk6.style.color = "#403f3f";

let wk7 = document.createElement("i");
wk7.setAttribute("class", "fa-solid fa-chess-knight");
wk7.style.color = "#403f3f";

let wk8 = document.createElement("i");
wk8.setAttribute("class", "fa-solid fa-chess-knight");
wk8.style.color = "#403f3f";

let wk9 = document.createElement("i");
wk9.setAttribute("class", "fa-solid fa-chess-knight");
wk9.style.color = "#403f3f";

let wk10 = document.createElement("i");
wk10.setAttribute("class", "fa-solid fa-chess-knight");
wk10.style.color = "#403f3f";

let wkl = [wk1, wk2, wk3, wk4, wk5, wk6, wk7, wk8, wk9,wk10];



let wp1 = document.createElement("i");
wp1.setAttribute("class", "fa-solid fa-chess-pawn");
wp1.style.color = '#403f3f';
b1e.append(wp1);
let wp2 = document.createElement("i");
wp2.setAttribute("class", "fa-solid fa-chess-pawn");
wp2.style.color = '#403f3f';
b2e.append(wp2);
let wp3 = document.createElement("i");
wp3.setAttribute("class", "fa-solid fa-chess-pawn");
wp3.style.color = '#403f3f';
b3e.append(wp3);
let wp4 = document.createElement("i");
wp4.setAttribute("class", "fa-solid fa-chess-pawn");
wp4.style.color = '#403f3f';
b4e.append(wp4);
let wp5 = document.createElement("i");
wp5.setAttribute("class", "fa-solid fa-chess-pawn");
wp5.style.color = '#403f3f';
b5e.append(wp5);
let wp6 = document.createElement("i");
wp6.setAttribute("class", "fa-solid fa-chess-pawn");
wp6.style.color = '#403f3f';
b6e.append(wp6);
let wp7 = document.createElement("i");
wp7.setAttribute("class", "fa-solid fa-chess-pawn");
wp7.style.color = '#403f3f';
b7e.append(wp7);
let wp8 = document.createElement("i");
wp8.setAttribute("class", "fa-solid fa-chess-pawn");
wp8.style.color = '#403f3f';
b8e.append(wp8);


a1e.append(wr1);
a2e.append(wk1);
a3e.append(wb1);
a4e.append(wq1);
let wk = document.createElement("i");
wk.setAttribute("class", "fa-solid fa-chess-king");
wk.style.color = "#403f3f";
a5e.append(wk);
a6e.append(wb2);
a7e.append(wk2);
a8e.append(wr2);

let dump = document.getElementById('dump');


let wkc = [], bkc = [], d = [];

let a1l = ['w', wr1], a2l = ['w', wk1], a3l = ['w', wb1], a4l = ['w', wq1], a5l = ['w', wk], a6l = ['w', wb2], a7l = ['w', wk2], a8l = ['w', wr2];
let b1l = ['w', wp1], b2l = ['w', wp2], b3l = ['w', wp3], b4l = ['w', wp4], b5l = ['w', wp5], b6l = ['w', wp6], b7l = ['w', wp7], b8l = ['w', wp8];
let c1l = [], c2l = [], c3l = [], c4l = [], c5l = [], c6l = [], c7l = [], c8l = [];
let d1l = [], d2l = [], d3l = [], d4l = [], d5l = [], d6l = [], d7l = [], d8l = [];
let e1l = [], e2l = [], e3l = [], e4l = [], e5l = [], e6l = [], e7l = [], e8l = [];
let f1l = [], f2l = [], f3l = [], f4l = [], f5l = [], f6l = [], f7l = [], f8l = [];
let g1l = ['b', bp1], g2l = ['b', bp2], g3l = ['b', bp3], g4l = ['b', bp4], g5l = ['b', bp5], g6l = ['b', bp6], g7l = ['b', bp7], g8l = ['b', bp8];
let h1l = ['b', br1], h2l = ['b', bk1], h3l = ['b', bb1], h4l = ['b', bq1], h5l = ['b', bk], h6l = ['b', bb2], h7l = ['b', bk2], h8l = ['b', br2];
let ls = [];
let temp;
checkb(a = 'a', n = 5, c = 'w');
checkb(a = 'h', n = 5, c = 'b');
function changer() {
    if (pec.includes('b')) {
        pec = ['w'];
    }
    else {
        pec = ['b'];
    }
}
function castelf() {
    console.log("cast1");
    if (pec.includes('b')) {
        if (cb1 && cb2) {
            if (!['h2', 'h3', 'h4'].some(x => bl.includes(x)) && !['h2', 'h3', 'h4'].some(x => wh.includes(x)) && !['h3', 'h4'].some(x => restrictb.includes(x)) && !checked && !['h6', 'h7'].some(x => bl.includes(x)) && !['h6', 'h7'].some(x => wh.includes(x)) && !['h6', 'h7'].some(x => restrictb.includes(x))) {
                castel = true;
                castelid = 'h3-h7';
                bp.push('h3');
                bp.push('h7');
            }
        }
        if (cb1) {
            if (!['h2', 'h3', 'h4'].some(x => bl.includes(x)) && !['h2', 'h3', 'h4'].some(x => wh.includes(x)) && !['h3', 'h4'].some(x => restrictb.includes(x)) && !checked) {
                console.log("cast2");
                castel = true;
                castelid = 'h3';
                bp.push('h3');
            }
        }
        if (cb2) {
            if (!['h6', 'h7'].some(x => bl.includes(x)) && !['h6', 'h7'].some(x => wh.includes(x)) && !['h6', 'h7'].some(x => restrictb.includes(x)) && !checked) {
                console.log("cast3");
                castel = true;
                castelid = 'h7';
                bp.push('h7');
            }
        }

    }
    if (pec.includes('w')) {
        if (cw1 && cw2) {
            if (!['a2', 'a3', 'a4'].some(x => wh.includes(x)) && !['a2', 'a3', 'a4'].some(x => bl.includes(x)) && !['a3', 'a4'].some(x => restrictw.includes(x)) && !checked && !['a6', 'a7'].some(x => wh.includes(x)) && !['a6', 'a7'].some(x => bl.includes(x)) && !['a6', 'a7'].some(x => restrictw.includes(x))) {
                castel = true;
                castelid = 'a3-a7';
                bp.push('a3');
                bp.push('a7');
            }
        }
        if (cw1) {
            if (!['a2', 'a3', 'a4'].some(x => wh.includes(x)) && !['a2', 'a3', 'a4'].some(x => bl.includes(x)) && !['a3', 'a4'].some(x => restrictw.includes(x)) && !checked) {
                console.log("cast2");
                castel = true;
                castelid = 'a3';
                bp.push('a3');
            }
        }
        if (cw2) {
            if (!['a6', 'a7'].some(x => wh.includes(x)) && !['a6', 'a7'].some(x => bl.includes(x)) && !['a6', 'a7'].some(x => restrictw.includes(x)) && !checked) {
                console.log("cast3");
                castel = true;
                castelid = 'a7';
                bp.push('a7');
            }
        }
    }
}
function pinning() {
    // Black piece loop

    pinned = {};
    let bltemp = bl;
    let whtemp = wh;
    bltemp = bltemp.filter((item, index) => bltemp.indexOf(item) === index);
    whtemp = whtemp.filter((item, index) => whtemp.indexOf(item) === index);

    for (i = 0; i < bltemp.length; ++i) {
        let idxe = bltemp[i].toString();
        let id = idxe + "l";
        let ls;
        try {
            ls = eval(id);
        } catch (e) {
            console.error(`Variable ${id} is not defined.`);
        }

        let ac = idxe[0].charCodeAt();
        let n = parseInt(idxe[1]);
        let kac = kcpw[0].charCodeAt();
        let kn = parseInt(kcpw[1]);

        let dx = kac > ac ? 1 : (kac < ac ? -1 : 0);
        let dy = kn > n ? 1 : (kn < n ? -1 : 0);

        let temp = [];

        if (bql.includes(ls[1])) {
            if (Math.abs(ac - kac) === Math.abs(n - kn) || ac === kac || n === kn) {
                while (ac !== kac || n !== kn) {
                    if (ac !== kac) ac += dx;
                    if (n !== kn) n += dy;
                    let pos = String.fromCharCode(ac) + n;
                    if (pos !== idxe && pos !== kcpw) {
                        temp.push(pos);
                    }
                }
            }
        }

        else if (bbl.includes(ls[1])) {
            if (Math.abs(ac - kac) === Math.abs(n - kn)) {
                while (ac !== kac && n !== kn) {
                    ac += dx;
                    n += dy;
                    let pos = String.fromCharCode(ac) + n;
                    if (pos !== idxe && pos !== kcpw) {
                        temp.push(pos);
                    }
                }
            }
        }

        else if (brl.includes(ls[1])) {
            if (ac === kac || n === kn) {
                if (ac === kac) {
                    while (n !== kn) {
                        n += dy;
                        let pos = String.fromCharCode(ac) + n;
                        if (pos !== idxe && pos !== kcpw) {
                            temp.push(pos);
                        }
                    }
                } else {
                    while (ac !== kac) {
                        ac += dx;
                        let pos = String.fromCharCode(ac) + n;
                        if (pos !== idxe && pos !== kcpw) {
                            temp.push(pos);
                        }
                    }
                }
            }
        }

        if (!bltemp.some(val => temp.includes(val)) && whtemp.filter(val => temp.includes(val)).length == 1) {
            let value = whtemp.find(val => temp.includes(val));
            temp.push(idxe);
            pinned[value] = [];
            pinned[value].push(...temp);
        }
    }

    // White piece loop


    console.log("pinned w2", whtemp, "eh", wh);
    for (i = 0; i < whtemp.length; ++i) {
        let idxe = whtemp[i].toString();
        let id = idxe + "l";
        let ls;
        try {
            ls = eval(id);
        } catch (e) {
            console.error(`Variable ${id} is not defined.`);
        }

        let ac = idxe[0].charCodeAt();
        let n = parseInt(idxe[1]);
        let kac = kcpb[0].charCodeAt();
        let kn = parseInt(kcpb[1]);

        let dx = kac > ac ? 1 : (kac < ac ? -1 : 0);
        let dy = kn > n ? 1 : (kn < n ? -1 : 0);

        let temp = [];

        if (wql.includes(ls[1])) {
            if (Math.abs(ac - kac) === Math.abs(n - kn) || ac === kac || n === kn) {
                while (ac !== kac || n !== kn) {
                    if (ac !== kac) ac += dx;
                    if (n !== kn) n += dy;
                    let pos = String.fromCharCode(ac) + n;
                    if (pos !== idxe && pos !== kcpb) {
                        temp.push(pos);
                    }
                }
            }
        }

        else if (wbl.includes(ls[1])) {
            if (Math.abs(ac - kac) === Math.abs(n - kn)) {
                while (ac !== kac && n !== kn) {
                    ac += dx;
                    n += dy;
                    let pos = String.fromCharCode(ac) + n;
                    if (pos !== idxe && pos !== kcpb) {
                        temp.push(pos);
                    }
                }
            }
        }

        else if (wrl.includes(ls[1])) {
            if (ac === kac || n === kn) {
                if (ac === kac) {
                    while (n !== kn) {
                        n += dy;
                        let pos = String.fromCharCode(ac) + n;
                        if (pos !== idxe && pos !== kcpb) {
                            temp.push(pos);
                        }
                    }
                } else {
                    while (ac !== kac) {
                        ac += dx;
                        let pos = String.fromCharCode(ac) + n;
                        if (pos !== idxe && pos !== kcpb) {
                            temp.push(pos);
                        }
                    }
                }
            }
        }

        if (!whtemp.some(val => temp.includes(val)) && bltemp.filter(val => temp.includes(val)).length == 1) {
            let value = bltemp.find(val => temp.includes(val));
            temp.push(idxe);
            pinned[value] = [];
            pinned[value].push(...temp);
        }
    }

    console.log("pinned", pinned);

}



function restriction(kcp) {
    if (kcp == kcpw) {
        restrictw = [];
        temp = pec;
        pec = ['b']
        for (let i = 0; i < bl.length; ++i) {
            let idxe = bl[i].toString();
            let id = idxe + "l";
            console.log("var", id, idxe, i, wh.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            // //console.log("lslslsls",ls);
            a = idxe[0];
            n = parseInt(idxe[1]);
            console.log(a, n, "klopio");

            if (bql.includes(ls[1])) {
                bqs(a, n);
                console.log(idxe, "bq");
            }
            else if (bbl.includes(ls[1])) {
                bbs(a, n);
                console.log(idxe, "bbs");
            }
            else if (brl.includes(ls[1])) {
                brs(a, n);
                console.log(idxe, "brs");
            }
            else if (bkl.includes(ls[1])) {
                bkns(a, n);
                console.log(idxe, "bks");
            }
            else if (ls[1] == bk) {
                bks(a, n);
            }
            else {
                pawnq(a, n, 'b');
            }
            for (j = 0; j < bp.length; ++j) {
                restrictw.push(bp[j]);
            }
            // //console.log(bp,"bpnpnl");


            bp = [];
        }
        pec = temp;
        restrictw = restrictw.filter((value, index, self) => self.indexOf(value) === index);
        console.log(restrictw, "restricttion w");
    }






    if (kcp == kcpb) {
        restrictb = [];
        temp = pec;
        pec = ['w']
        for (let i = 0; i < wh.length; ++i) {
            let idxe = wh[i].toString();
            let id = idxe + "l";
            console.log("var", id, idxe, i, wh.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            // //console.log("lslslsls",ls);
            a = idxe[0];
            n = parseInt(idxe[1]);
            // //console.log(a,n,"klopio");

            if (wql.includes(ls[1])) {
                bqs(a, n);
                // //console.log(idxe,"wq");
            }
            else if (wbl.includes(ls[1])) {
                bbs(a, n);
                // //console.log(idxe,"wqb");
            }
            else if (wrl.includes(ls[1])) {
                brs(a, n);
                // //console.log(idxe,"brs");
            }
            else if (wkl.includes(ls[1])) {
                bkns(a, n);
                // //console.log(idxe,"bks");
            }
            else if (ls[1] == wk) {
                bks(a, n);
            }
            else {
                pawnq(a, n, 'w');
            }
            for (j = 0; j < bp.length; ++j) {
                restrictb.push(bp[j]);
            }
            // //console.log(bp,"bpnpnl");


            bp = [];
        }
        pec = temp;
        restrictb = restrictb.filter((value, index, self) => self.indexOf(value) === index);
        console.log(restrictb, "restricttion b");
    }
}

function discovery() {
    if (pec.includes('w')) {
        console.log("dis1");
        if (restrictw.includes(kcpw)) {
            //discovery_check!!!
            //now find checker???
            console.log("dis1");
            let checker;
            for (let k = 0; k < bl.length; ++k) {
                let idxe = bl[k].toString();
                let id = idxe + "l";
                console.log("var", id, idxe, i, wh.length);
                let ls;
                try {
                    ls = eval(id); // Unsafe; use only if necessary
                    // //console.log("Variable:", ls);
                } catch (e) {
                    console.error(`Variable ${id} is not defined.`);
                }
                // //console.log("lslslsls",ls);
                a = idxe[0];
                ac = a;
                n = parseInt(idxe[1]);
                an = n;
                console.log(a, n, "klopio");

                if (bql.includes(ls[1])) {
                    a = a.charCodeAt();
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {

                            if (i == 0) {
                                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + (n + j + 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 1) {
                                if ((n + j + 1) < 9) {
                                    z = String.fromCharCode(a);
                                    s = z + (n + j + 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 2) {
                                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + (n - j - 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 3) {
                                if ((n - j - 1) > 0) {
                                    z = String.fromCharCode(a);
                                    s = z + (n - j - 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 4) {
                                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + (n + j + 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 5) {
                                if ((a - j - 1) > 96) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + n;
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 6) {
                                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + (n - j - 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else {
                                if ((a + j + 1) < 105) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + n;
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                        }
                    }

                }

                else if (bbl.includes(ls[1])) {
                    a = a.charCodeAt();
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {

                            if (i == 0) {
                                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + (n + j + 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 1) {
                                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + (n - j - 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 2) {
                                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + (n + j + 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 3) {
                                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + (n - j - 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                        }
                    }
                }
                else if (brl.includes(ls[1])) {
                    a = a.charCodeAt();
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {
                            if (i == 0) {
                                if ((n + j + 1) < 9) {
                                    z = String.fromCharCode(a);
                                    s = z + (n + j + 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 1) {
                                if ((n - j - 1) > 0) {
                                    z = String.fromCharCode(a);
                                    s = z + (n - j - 1);
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 2) {
                                if ((a - j - 1) > 96) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + n;
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 3) {
                                if ((a + j + 1) < 105) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + n;
                                    if (s == kcpw) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //find check path
            if (checker == undefined) {
                checker = checker1;
            }
            console.log("checker1", checker1, checker, checker1 == checker);
            if (checker != checker1) {

                checkpath(idx = checker, kcp = kcpw);
                //make tokens
                if (!flag11) {
                    changer();
                    checkhandler(idx = checker, kcp = kcpw);
                    changer();
                }
                else {
                    token1 = [kcpw];
                    flag11 = false;

                }

                checker1 = ''
            }
            else {
                checker1 = '';
            }
            console.log("discovery");

        }
    }

    if (pec.includes('b')) {
        if (restrictb.includes(kcpb)) {
            //discovery_check!!!
            //now find checker???
            let checker;
            for (let k = 0; k < wh.length; ++k) {
                let idxe = wh[k].toString();
                let id = idxe + "l";
                console.log("var", id, idxe, i, wh.length);
                let ls;
                try {
                    ls = eval(id); // Unsafe; use only if necessary
                    // //console.log("Variable:", ls);
                } catch (e) {
                    console.error(`Variable ${id} is not defined.`);
                }
                // //console.log("lslslsls",ls);
                a = idxe[0];
                ac = a;
                n = parseInt(idxe[1]);
                an = n;
                console.log(a, n, "klopio");

                if (wql.includes(ls[1])) {
                    a = a.charCodeAt();
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {

                            if (i == 0) {
                                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + (n + j + 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 1) {
                                if ((n + j + 1) < 9) {
                                    z = String.fromCharCode(a);
                                    s = z + (n + j + 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 2) {
                                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + (n - j - 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 3) {
                                if ((n - j - 1) > 0) {
                                    z = String.fromCharCode(a);
                                    s = z + (n - j - 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 4) {
                                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + (n + j + 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 5) {
                                if ((a - j - 1) > 96) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + n;
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 6) {
                                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + (n - j - 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else {
                                if ((a + j + 1) < 105) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + n;
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                        }
                    }

                }
                else if (wbl.includes(ls[1])) {

                    a = a.charCodeAt();
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {

                            if (i == 0) {
                                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + (n + j + 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 1) {
                                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + (n - j - 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 2) {
                                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + (n + j + 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 3) {
                                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + (n - j - 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                        }
                    }

                }
                else if (wrl.includes(ls[1])) {

                    a = a.charCodeAt();
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 8; j++) {
                            if (i == 0) {
                                if ((n + j + 1) < 9) {
                                    z = String.fromCharCode(a);
                                    s = z + (n + j + 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 1) {
                                if ((n - j - 1) > 0) {
                                    z = String.fromCharCode(a);
                                    s = z + (n - j - 1);
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 2) {
                                if ((a - j - 1) > 96) {
                                    z = String.fromCharCode(a - j - 1);
                                    s = z + n;
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                            else if (i == 3) {
                                if ((a + j + 1) < 105) {
                                    z = String.fromCharCode(a + j + 1);
                                    s = z + n;
                                    if (s == kcpb) {
                                        checker = ac + an;
                                        i = 103;
                                        k = 103;
                                    }
                                    if (bl.includes(s) || wh.includes(s)) {
                                        j = 9;
                                    }
                                }
                            }
                        }
                    }

                }
            }

            //find check path
            if (checker == undefined) {
                checker = checker1;
            }
            if (checker != checker1) {
                checkpath(idx = checker, kcp = kcpb);
                //make tokens
                if (!flag11) {
                    changer();
                    checkhandler(idx = checker, kcp = kcpb);
                    changer();
                }
                else {
                    token1 = [kcpb];
                    flag11 = false;
                }
                checker1 = ''
            }
            else {
                checker1 = '';
            }
        }
        console.log("discovery");
    }
}

function checkmate() {
    if (token1.length == 1 && (token1.includes(kcpw) || token1.includes(kcpb))) {

        if (pec == 'b') {
            a = kcpb[0].toString();
            n = parseInt(kcpb[1]);
            id = kcpb + 'l';
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }

            handler(a, n, ls, c = 'king');
            console.log(bp, "click event?");
            let result = checkpathl.filter(item => !restrictb.includes(item));
            if (result.every(value => wh.includes(value)) && bp.length == 0) {
                alert("check and mate by Black,White looses", bp);
                console.log(bp);
            }

        }
        else {
            a = kcpw[0].toString();
            n = parseInt(kcpw[1]);
            id = kcpw + 'l';
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }

            handler(a, n, ls, c = 'king');
            console.log(bp, "click event?", restrictw);
            let result = checkpathl.filter(item => !restrictw.includes(item));
            if (result.every(value => bl.includes(value)) && bp.length == 0) {
                alert("check and mate by White,Black looses", bp);
                console.log(bp);
            }
        }
    }
}


function checkhandler(idx, kcp) {
    checked = true;
    checker = idx;
    temp1 = kcp;
    document.getElementById(checker).style.boxShadow = "inset 0px 0px 10px blue";
    // document.getElementById(checker).style.boxSizing = "border-box";
    document.getElementById(kcp).style.boxShadow = " inset 0px 0px 20px red";
    // document.getElementById(kcp).style.boxSizing = "border-box";
    bp = [];
    // //console.log(pec[0]=='w',pec[0]=='b');
    if (pec[0] == 'b') {
        flag = true;
        changer();
        for (let i = 0; i < wh.length; ++i) {
            let idxe = wh[i].toString();
            let id = idxe + "l";
            // console.log("var",id,idxe,i,wh.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            //console.log("lslslsls",ls);
            a = idxe[0];
            n = parseInt(idxe[1]);
            //console.log(a,n,"klopio");

            if (wql.includes(ls[1])) {
                bqs(a, n);
                //console.log(idxe,"bq");
            }
            else if (wbl.includes(ls[1])) {
                bbs(a, n);
                //console.log(idxe,"bbs");
            }
            else if (wrl.includes(ls[1])) {
                brs(a, n);
                //console.log(idxe,"brs");
            }
            else if ((wkl.includes(ls[1]))) {
                bkns(a, n);
                //console.log(idxe,"bks");
            }
            else if (ls[1] == wk) {
                bks(a, n);
                console.log("bpnpnl", bp);
                for (j = 0; j < bp.length; ++j) {
                    console.log("bpnpnl", !(checkpathl.includes(bp[j])));
                    if (!(checkpathl.includes(bp[j]))) {
                        flag1 = true;
                        break;
                    }
                    if (flag1) {
                        token1.push(idxe);
                        flag1 = false;
                    }

                }

                console.log(bp, "black king");
            }
            else {
                if (a == "b") {
                    //console.log(idxe,"lkjh");
                    wpis(a, n);
                }
                else if (ls[1] != wk) {
                    //console.log(idxe,"lkjqh");
                    wpss(a, n);
                }

            }


            console.log(bp, "bpnpnlw");
            for (j = 0; j < bp.length; ++j) {
                if (checkpathl.includes(bp[j])) {
                    flag1 = true;
                    break;
                }
            }
            if (flag1) {
                token1.push(idxe);
                console.log("tokennn", token1);
            }
            bp = [];
            flag1 = false;

        }
        if (token1.length == 0) {
            token1.push(kcpw);
        }
        changer();
    }
    else if (pec[0] == 'w') {
        changer();
        for (let i = 0; i < bl.length; ++i) {
            let idxe = bl[i].toString();
            let id = idxe + "l";
            //console.log("var",id,idxe,i,wh.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            //console.log("lslslsls",ls);
            a = idxe[0];
            n = parseInt(idxe[1]);
            //console.log(a,n,"klopio");

            if (bql.includes(ls[1])) {
                bqs(a, n);
                //console.log(idxe,"bq");
            }
            else if (bbl.includes(ls[1])) {
                bbs(a, n);
                //console.log(idxe,"bbs");
            }
            else if (brl.includes(ls[1])) {
                brs(a, n);
                //console.log(idxe,"brs");
            }
            else if ((bkl.includes(ls[1]))) {
                bkns(a, n);
                //console.log(idxe,"bks");
            }
            else if (ls[1] == bk) {
                bks(a, n);
                for (j = 0; j < bp.length; ++j) {
                    if (!(checkpathl.includes(bp[j]))) {
                        flag1 = true;
                        break;
                    }
                    if (flag1) {
                        token1.push(idxe);
                        flag1 = false;
                    }

                }
                console.log(bp, "white king");
            }
            else {
                if (a == "g") {
                    //console.log(idxe,"lkjh");
                    bpis(a, n);
                }
                else if (ls[1] != bk) {
                    //console.log(idxe,"lkjqh");
                    bpss(a, n);
                }

            }

            console.log(bp, "bpnpnl");
            for (j = 0; j < bp.length; ++j) {
                if (checkpathl.includes(bp[j])) {
                    flag1 = true;
                    break;
                }
            }
            if (flag1) {
                token1.push(idxe);
                flag = true;
                console.log("tokennn", token1);
            }
            bp = [];
            flag1 = false;


        }
        if (token1.length == 0) {
            token1.push(kcpb);
        }
        changer();
    }


}

function checkremover(a, n) {
    let rdf = a + n;
    if (token1.includes(rdf)) {
        // flag=false;
        // token1=[];
        return true;
    }
    else {
        return false;
    }

}
function checkremoverd(kcp, checker) {
    checked = false;
    console.log('hjer', kcp, checker);
    document.getElementById(checker).style.boxShadow = "inset 0px 0px 0px blue";
    // document.getElementById(checker).style.boxSizing = "border-box";
    document.getElementById(kcp).style.boxShadow = " inset 0px 0px 0px red";
    // document.getElementById(kcp).style.boxSizing = "border-box";`
    bp = [];
    // checker='';
    checkpathl = [];
}

function checkb(a, n, pec) {
    //white king
    //console.log("jio", a, n, pec, pec[0] == 'w', pec[0] == 'b');
    if (pec[0] == 'w') {
        //console.log("nj");
        kcpw = a + n;//discriibes kings palce
        //console.log("nj1", a, n, kcpw);
        // restriction(kcpb);
        kc(a, n);
        wkc = bp;
        bp = [];
    }
    //black king
    if (pec[0] == 'b') {
        kcpb = a + n;//discriibes kings palce
        // restriction(kcpw);
        kc(a, n);
        bkc = bp;
        bp = [];
        console.log("condition1", a, n, kcpw,bkc);
    }
}
function checkpath(idxx, kcp) {
    let checker_a = idxx[0].charCodeAt();
    let checker_n = parseInt(idxx[1]);
    let kcp_a = kcp[0].charCodeAt();
    let kcp_n = parseInt(kcp[1]);
    console.log("here chekcj", checker_a, checker_n, kcp_a, kcp_n);
    if (checker_a > kcp_a && checker_n < kcp_n) {
        for (i = checker_a; i > kcp_a; i--) {
            checkpathl.push(String.fromCharCode(i) + (Math.abs(checker_n - (i - (checker_a)))));
            console.log("here chekc1", checkpathl);
        }
    }
    else if (checker_a < kcp_a && checker_n > kcp_n) {//can be modify
        for (i = checker_a; i < kcp_a; i++) {
            checkpathl.push(String.fromCharCode(i) + (Math.abs(checker_n - (i - (checker_a)))));
            console.log("here chekc2", checkpathl);
        }
    }
    else if (checker_a < kcp_a && checker_n < kcp_n) {// can be modify
        for (i = checker_a; i < kcp_a; i++) {
            checkpathl.push(String.fromCharCode(i) + (Math.abs(checker_n + (i - (checker_a)))));
            console.log("here chekc3", checkpathl);
        }
    }
    else if (checker_a > kcp_a && checker_n > kcp_n) {
        for (i = checker_a; i > kcp_a; i--) {
            checkpathl.push(String.fromCharCode(i) + (Math.abs(checker_n - Math.abs(i - (checker_a)))));
            console.log("here chekc4", checkpathl);
        }
    }
    else if (checker_a > kcp_a && checker_n == kcp_n) {
        for (i = checker_a; i > kcp_a; i--) {
            checkpathl.push(String.fromCharCode(i) + checker_n);
            console.log("here chekc5", checkpathl);
        }
    }
    else if (checker_a < kcp_a && checker_n == kcp_n) {
        for (i = checker_a; i < kcp_a; i++) {
            checkpathl.push(String.fromCharCode(i) + checker_n);
            console.log("here chekc6", checkpathl);
        }
    }
    else if (checker_a == kcp_a && checker_n < kcp_n) {
        for (i = checker_n; i < kcp_n; i++) {
            checkpathl.push(String.fromCharCode(checker_a) + (checker_n + (i - checker_n)));
            console.log("here chekc7", checkpathl);
        }
    }
    else if (checker_a == kcp_a && checker_n > kcp_n) {
        for (i = checker_n; i > kcp_n; i--) {
            checkpathl.push(String.fromCharCode(checker_a) + (checker_n - Math.abs(checker_n - i)));
            console.log("here chekc8", checkpathl);
        }
    }

}
function kc(a, n) {
    a = a.charCodeAt();
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i == 0) {
                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n + j + 1);
                    bp.push(s);
                }
            }
            else if (i == 1) {
                if ((n + j + 1) < 9) {
                    z = String.fromCharCode(a);
                    s = z + (n + j + 1);
                    bp.push(s);
                }
            }
            else if (i == 2) {
                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n - j - 1);
                    bp.push(s);
                }
            }
            else if (i == 3) {
                if ((n - j - 1) > 0) {
                    z = String.fromCharCode(a);
                    s = z + (n - j - 1);
                    bp.push(s);
                }
            }
            else if (i == 4) {
                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n + j + 1);
                    bp.push(s);
                }
            }
            else if (i == 5) {
                if ((a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + n;
                    bp.push(s);
                }
            }
            else if (i == 6) {
                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n - j - 1);
                    bp.push(s);
                }
            }
            else {
                if ((a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + n;
                    bp.push(s);
                }
            }
        }
    }
    for (let i = 0; i < 4; ++i) {
        if (i == 0) {
            if ((a + 2) < 105 && (n - 1) > 0) {
                z = String.fromCharCode(a + 2);
                s = z + (n - 1);
                bp.push(s);

            }
            if ((a + 2) < 105 && (n + 1) < 9) {
                z = String.fromCharCode(a + 2);
                s = z + (n + 1);
                bp.push(s);
            }

        }
        else if (i == 1) {
            if ((a - 1) > 96 && (n - 2) > 0) {
                z = String.fromCharCode(a - 1);
                s = z + (n - 2);
                bp.push(s);
            }
            if ((a + 1) < 105 && (n - 2) > 0) {
                z = String.fromCharCode(a + 1);
                s = z + (n - 2);
                bp.push(s);
            }
        }
        else if (i == 2) {
            if ((a - 1) > 96 && (n + 2) < 9) {
                z = String.fromCharCode(a - 1);
                s = z + (n + 2);
                bp.push(s);
            }
            if ((a + 1) < 105 && (n + 2) < 9) {
                z = String.fromCharCode(a + 1);
                s = z + (n + 2);
                bp.push(s);
            }
        }
        else {
            if ((a - 2) > 96 && (n - 1) > 0) {
                z = String.fromCharCode(a - 2);
                s = z + (n - 1);
                bp.push(s);
            }
            if ((a - 2) > 96 && (n + 1) < 9) {
                z = String.fromCharCode(a - 2);
                s = z + (n + 1);
                bp.push(s);
            }

        }
    }


}

function tog(position) {
    if (bp.includes[position]) {
    }
    else {
        if (!(bp.length == 1 && bp.includes('enm'))) {
            document.getElementById(sel).style.border = "solid 0px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            for (i = 0; i < bp.length; i++) {
                //console.log(bp[i]);
                document.getElementById(bp[i]).style.border = "solid 0px cyan";
                document.getElementById(bp[i]).style.boxSizing = "border-box";
            }
            bp = [];
        }
    }
}
function collison(ck) {
    //console.log(pec,"pecx");
    if (ck == 'rk' || ck == 'bs') {
        if (pec.includes('b')) {
            if (!bl.includes(s)) {
                //console.log(s);
                bp.push(s);
                //console.log("here col",bp);
                bp.push('enm');
            }
        }
        else if (pec.includes("w")) {
            if (!wh.includes(s)) {
                //console.log(s);
                bp.push(s);

                bp.push('enm');
            }
        }
    }
    else if (ck == "kn") {
        if (pec.includes('b')) {
            if (!bl.includes(s)) {
                //console.log(s);
                bp.push(s);
                if (wh.includes(s)) { bp.push('enm'); }
            }
        }
        else if (pec.includes("w")) {
            if (!wh.includes(s)) {
                //console.log(s);
                bp.push(s);
                if (wh.includes(s)) { bp.push('enm'); }
            }
        }
    }
    else if (ck == 'p') {
        if (pec.includes('b')) {
            for (i = bp.length - 2; i < bp.length; ++i) {
                if (bp[i] == 'enm') {
                    i = i + 1;
                }
                if (wh.includes(bp[i])) {
                    bp.splice(i + 1, 0, 'enm');

                }
                if (!wh.includes(bp[i])) {
                    bp.splice(i, 1);
                    i = i - 1;
                }

            }
        }
        else if (pec.includes('w')) {
            for (i = bp.length - 2; i < bp.length; ++i) {
                console.log(bp, "kokok@#");
                if (bp[i] == 'enm') {
                    i = i + 1;
                }
                if (bl.includes(bp[i])) {
                    bp.splice(i + 1, 0, 'enm');
                }
                if (!bl.includes(bp[i])) {
                    bp.splice(i, 1);
                    i = i - 1;
                }
            }
        }
    }

}
function pawnq(a, n, rd) {
    a = (a.charCodeAt());
    if (rd == 'b') {
        console.log("here b", (a - 1) > 96 && (a + 1) < 105);
        if ((a - 1) > 96 && (a + 1) < 105) {
            if ((n - 1) >= 1) {
                bp.push(String.fromCharCode(a - 1) + (n - 1));
            }

            if ((n + 1) <= 8) {
                bp.push(String.fromCharCode(a - 1) + (n + 1));
            }
        }
    }
    else {
        console.log("here w", (a - 1) > 96 && (a + 1) < 105);
        if ((a - 1) > 96 && (a + 1) < 105) {
            if ((n - 1) >= 1) {
                bp.push(String.fromCharCode(a + 1) + (n - 1));
            }

            if ((n + 1) <= 8) {
                bp.push(String.fromCharCode(a + 1) + (n + 1));
            }
        }
    }
}
function bpis(a, n) {
    a = a.charCodeAt();
    for (let i = 1; i <= 2; ++i) {
        z = String.fromCharCode(a - i);
        s = z + n;
        if (i == 1) {
            bp.push(z + (n - 1));
            bp.push(z + (n + 1));

            collison('p');
        }
        if (!bl.includes(s) && !wh.includes(s)) {
            bp.push(s);
        }
        else {
            break;
        }
    }


}
function bpss(a, n) {
    a = a.charCodeAt();
    for (let i = 1; i > 0; --i) {
        z = String.fromCharCode(a - i);
        s = z + n;
        if (!bl.includes(s) && !wh.includes(s)) {
            if (n >= 1 && n <= 8 && (a - i) > 96 && a < 105) {
                //console.log(s);
                bp.push(s);
            }
        }
        else {
            break;
        }
    }
    console.log("herehcallbp", bp);
    if ((n - 1) >= 1 && (n + 1) <= 8 && (a - 1) > 96 && a < 105) {
        bp.push(z + (n - 1));
        bp.push(z + (n + 1));
        console.log("herehcallbp", bp);
        collison('p');
        console.log("herehcallbp", bp);
    }
    if (n == 1) {
        bp.push(z + (n + 1));
        for (i = bp.length - 1; i > 0; --i) {
            console.log(bp, "kokok@#");
            if (!wh.includes(bp[i])) {
                bp.pop();
            }
        }

    }
    if (n == 8) {
        bp.push(z + (n - 1));
        for (i = bp.length - 1; i > 0; --i) {
            console.log(bp, "kokok@#");
            if (!wh.includes(bp[i])) {
                bp.pop();
            }
        }

    }
    console.log("herehcallbp", bp);

}
function wpis(a, n) {
    a = a.charCodeAt();
    for (let i = 1; i <= 2; ++i) {
        z = String.fromCharCode(a + i);
        s = z + n;
        if (i == 1) {
            bp.push(z + (n - 1));
            bp.push(z + (n + 1));
            collison('p');
            //console.log("bpn",bp);
        }

        if (!bl.includes(s) && !wh.includes(s)) {
            bp.push(s);
        }
        else {
            break;
        }

    }



}
function wpss(a, n) {
    a = a.charCodeAt();
    for (let i = 1; i <= 1; ++i) {
        z = String.fromCharCode(a + i);
        s = z + n;
        if (!bl.includes(s) && !wh.includes(s)) {
            if (n >= 1 && n <= 8 && (a - i) > 96 && a < 105) {
                //console.log(s);
                bp.push(s);
            }
        }
        else {
            break;
        }
    }
    if ((n - 1) >= 1 && (n + 1) <= 8 && (a - 1) > 96 && a < 105) {
        bp.push(z + (n - 1));
        bp.push(z + (n + 1));
        collison('p');
    }
    console.log("kokok@1", bp);
    if (n == 1) {
        bp.push(z + (n + 1));
        for (i = bp.length - 1; i > 0; --i) {
            console.log(bp, "kokok@#");
            if (!bl.includes(bp[i])) {
                bp.pop();
            }
        }

    }
    if (n == 8) {
        bp.push(z + (n - 1));
        for (i = bp.length - 1; i > 0; --i) {
            console.log(bp, "kokok@#");
            if (!bl.includes(bp[i])) {
                bp.pop();
            }
        }

    }
    console.log("kokok@", bp);
}
function bkns(a, n) {
    a = a.charCodeAt();
    for (let i = 0; i < 4; ++i) {
        if (i == 0) {
            if ((a + 2) < 105 && (n - 1) > 0) {
                z = String.fromCharCode(a + 2);
                s = z + (n - 1);
                collison(ck = 'kn');

            }
            if ((a + 2) < 105 && (n + 1) < 9) {
                z = String.fromCharCode(a + 2);
                s = z + (n + 1);
                collison(ck = 'kn');
            }

        }
        else if (i == 1) {
            if ((a - 1) > 96 && (n - 2) > 0) {
                z = String.fromCharCode(a - 1);
                s = z + (n - 2);
                collison(ck = 'kn');
            }
            if ((a + 1) < 105 && (n - 2) > 0) {
                z = String.fromCharCode(a + 1);
                s = z + (n - 2);
                collison(ck = 'kn');
            }
        }
        else if (i == 2) {
            if ((a - 1) > 96 && (n + 2) < 9) {
                z = String.fromCharCode(a - 1);
                s = z + (n + 2);
                collison(ck = 'kn');
            }
            if ((a + 1) < 105 && (n + 2) < 9) {
                z = String.fromCharCode(a + 1);
                s = z + (n + 2);
                collison(ck = 'kn');
            }
        }
        else {
            if ((a - 2) > 96 && (n - 1) > 0) {
                z = String.fromCharCode(a - 2);
                s = z + (n - 1);
                collison(ck = 'kn');
            }
            if ((a - 2) > 96 && (n + 1) < 9) {
                z = String.fromCharCode(a - 2);
                s = z + (n + 1);
                collison(ck = 'kn');
            }

        }
    }
}
function brs(a, n) {
    //console.log("kjkjkjkj",a,n);
    a = a.charCodeAt();
    //console.log("kjkjkjkj",a,n);
    for (let i = 0; i < 4; i++) {
        //console.log("for i",i);
        for (let j = 0; j < 8; j++) {
            //console.log("for j",j);
            if (i == 0) {
                if ((n + j + 1) < 9) {
                    z = String.fromCharCode(a);
                    s = z + (n + j + 1);
                    //console.log("fg1",s);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s,"kjkjkjk");
                        bp.push(s);
                    }
                    else {
                        collison('rk');
                        break;
                    }
                }
            }
            else if (i == 1) {
                if ((n - j - 1) > 0) {
                    z = String.fromCharCode(a);
                    s = z + (n - j - 1);
                    //console.log("fg2",s);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s,"kjkjkjk");
                        bp.push(s);
                    }
                    else {
                        collison('rk');
                        break;
                    }
                }
            }
            else if (i == 2) {
                if ((a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + n;
                    //console.log("fg3",s);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s,"kjkjkjk");
                        bp.push(s);
                    }
                    else {
                        collison('rk');
                        break;
                    }
                }
            }
            else {
                if ((a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + n;
                    //console.log("fg4",s);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s,"kjkjkjk");
                        bp.push(s);
                    }
                    else {
                        collison('rk');
                        break;
                    }
                }
            }
        }
    }
}
function bbs(a, n) {
    a = a.charCodeAt();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            if (i == 0) {
                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 1) {
                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 2) {
                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else {
                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
        }
    }
}
function bqs(a, n) {
    a = a.charCodeAt();
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i == 0) {
                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;

                    }
                }
            }
            else if (i == 1) {
                if ((n + j + 1) < 9) {
                    z = String.fromCharCode(a);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 2) {
                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 3) {
                if ((n - j - 1) > 0) {
                    z = String.fromCharCode(a);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 4) {
                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 5) {
                if ((a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + n;
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 6) {
                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else {
                if ((a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + n;
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
        }
    }
}
function bks(a, n) {
    console.log("1");
    a = a.charCodeAt();
    for (let i = 0; i < 8; i++) {
        console.log("2");
        for (let j = 0; j < 1; j++) {
            if (i == 0) {
                if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp, "bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 1) {
                if ((n + j + 1) < 9) {
                    z = String.fromCharCode(a);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp, "bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 2) {
                if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp, "bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 3) {
                if ((n - j - 1) > 0) {
                    z = String.fromCharCode(a);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp, "bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 4) {
                if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + (n + j + 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp, "bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 5) {
                if ((a - j - 1) > 96) {
                    z = String.fromCharCode(a - j - 1);
                    s = z + n;
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp, "bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else if (i == 6) {
                if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + (n - j - 1);
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp, "bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
            else {
                if ((a + j + 1) < 105) {
                    z = String.fromCharCode(a + j + 1);
                    s = z + n;
                    if (!bl.includes(s) && !wh.includes(s)) {
                        //console.log(s);
                        bp.push(s);
                        console.log(bp, "bkss");
                    }
                    else {
                        collison('bs');
                        break;
                    }
                }
            }
        }
    }
    if (flag4 == 'bp') {
        if (pec == 'w') {

            console.log(bp, "white");
            bp = bp.filter(value => !restrictw.includes(value));

            bp = check_penetration(bp);
            console.log(bp, "white");
        }
        else {
            console.log(bp, "here");
            bp = bp.filter(value => !restrictb.includes(value));
            bp = check_penetration(bp);
            console.log(bp, "black");
        }
    }
    flag4 == 'bp';
    //final filteratiion on bp
    // finalpath(pec);
    console.log(bp, "king is king");
}
function check_penetration(bp) {

    let pbp = bp;
    bp = [];
    console.log("bpnpnl", pbp);
    if (pec.includes('w')) {
        let bltemp = bl;
        for (i = 0; i < bltemp.length; ++i) {
            let idxe = bltemp[i].toString();
            let id = idxe + "l";
            console.log("var", id, idxe, i, bl.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            // //console.log("lslslsls",ls);
            a = idxe[0];
            n = parseInt(idxe[1]);



            if (bql.includes(ls[1])) {
                console.log(bql.includes(ls[1]), "bpnpnl", pbp);
                a = a.charCodeAt();
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {

                        if (i == 0) {
                            if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 1) {
                            if ((n + j + 1) < 9) {
                                z = String.fromCharCode(a);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 2) {
                            if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 3) {
                            if ((n - j - 1) > 0) {
                                z = String.fromCharCode(a);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 4) {
                            if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 5) {
                            if ((a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 6) {
                            if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else {
                            if ((a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                    }
                    flag6 = 1;
                    flag7 = 1;
                }

            }



            else if (bbl.includes(ls[1])) {
                a = a.charCodeAt();
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        if (i == 0) {
                            if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 1) {
                            if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 2) {
                            if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 3) {
                            if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                    }
                    flag6 = 1;
                    flag7 = 1;
                }
            }
            else if (brl.includes(ls[1])) {
                a = a.charCodeAt();
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        if (i == 0) {
                            if ((n + j + 1) < 9) {
                                z = String.fromCharCode(a);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 1) {
                            if ((n - j - 1) > 0) {
                                z = String.fromCharCode(a);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 2) {
                            if ((a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 3)
                            if ((a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && (bl.includes(s))) {
                                        j = 8;
                                    }
                                    if (wh.includes(s) && s != kcpw) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpw) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                    }
                }
                flag6 = 1;
                flag7 = 1;
            }

            else if (bkl.includes(ls[1])) {
                a = a.charCodeAt();
                for (let i = 0; i < 4; ++i) {
                    if (i == 0) {
                        if ((a + 2) < 105 && (n - 1) > 0) {
                            z = String.fromCharCode(a + 2);
                            s = z + (n - 1);
                            if (pbp.includes(s) && bl.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }

                        }
                        if ((a + 2) < 105 && (n + 1) < 9) {
                            z = String.fromCharCode(a + 2);
                            s = z + (n + 1);
                            if (pbp.includes(s) && bl.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }

                    }
                    else if (i == 1) {
                        if ((a - 1) > 96 && (n - 2) > 0) {
                            z = String.fromCharCode(a - 1);
                            s = z + (n - 2);
                            if (pbp.includes(s) && bl.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                        if ((a + 1) < 105 && (n - 2) > 0) {
                            z = String.fromCharCode(a + 1);
                            s = z + (n - 2);
                            if (pbp.includes(s) && bl.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                    }
                    else if (i == 2) {
                        if ((a - 1) > 96 && (n + 2) < 9) {
                            z = String.fromCharCode(a - 1);
                            s = z + (n + 2);
                            if (pbp.includes(s) && bl.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                        if ((a + 1) < 105 && (n + 2) < 9) {
                            z = String.fromCharCode(a + 1);
                            s = z + (n + 2);
                            if (pbp.includes(s) && bl.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                    }
                    else {
                        if ((a - 2) > 96 && (n - 1) > 0) {
                            z = String.fromCharCode(a - 2);
                            s = z + (n - 1);
                            if (pbp.includes(s) && bl.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                        if ((a - 2) > 96 && (n + 1) < 9) {
                            z = String.fromCharCode(a - 2);
                            s = z + (n + 1);
                            if (pbp.includes(s) && bl.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }

                    }
                }
            }
            else if (ls[1] == bk) {
                a = a.charCodeAt();
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 1; j++) {

                        if (i == 0) {
                            if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 1) {
                            if ((n + j + 1) < 9) {
                                z = String.fromCharCode(a);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 2) {
                            if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 3) {
                            if ((n - j - 1) > 0) {
                                z = String.fromCharCode(a);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 4) {
                            if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 5) {
                            if ((a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 6) {
                            if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else {
                            if ((a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && bl.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                    }
                    flag6 = 1;
                    flag7 = 1;
                }
            }

            // else {
            //     pawnq(a, n, 'w');
            // }
        }
        console.log(pbp, "pbp values");
        bp = pbp;
        console.log(bp, "pbpjk values");
    }
    else {
        console.log(bp, "bpbpb");

        let whtemp = wh;
        for (i = 0; i < whtemp.length; ++i) {
            let idxe = whtemp[i].toString();
            let id = idxe + "l";
            console.log("var", id, idxe, i, wh.length);
            let ls;
            try {
                ls = eval(id); // Unsafe; use only if necessary
                // //console.log("Variable:", ls);
            } catch (e) {
                console.error(`Variable ${id} is not defined.`);
            }
            // //console.log("lslslsls",ls);
            a = idxe[0];
            n = parseInt(idxe[1]);



            if (wql.includes(ls[1])) {
                a = a.charCodeAt();
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {

                        if (i == 0) {
                            if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 1) {
                            if ((n + j + 1) < 9) {
                                z = String.fromCharCode(a);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 2) {
                            if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 3) {
                            if ((n - j - 1) > 0) {
                                z = String.fromCharCode(a);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 4) {
                            if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 5) {
                            if ((a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 6) {
                            if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else {
                            if ((a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                    }
                    flag6 = 1;
                    flag7 = 1;
                }

            }



            else if (wbl.includes(ls[1])) {
                a = a.charCodeAt();
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        if (i == 0) {
                            if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 1) {
                            if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 2) {
                            if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 3) {
                            if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                    }
                    flag6 = 1;
                    flag7 = 1;
                }
            }
            else if (wrl.includes(ls[1])) {
                a = a.charCodeAt();
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++) {
                        if (i == 0) {
                            if ((n + j + 1) < 9) {
                                z = String.fromCharCode(a);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 1) {
                            if ((n - j - 1) > 0) {
                                z = String.fromCharCode(a);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 2) {
                            if ((a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                        }
                        else if (i == 3)
                            if ((a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                    if (!pbp.includes(s) && wh.includes(s)) {
                                        j = 8;
                                    }
                                    if (bl.includes(s) && s != kcpb) {
                                        j = 8;
                                    }
                                }
                                if (flag7 == 0) {
                                    if (pbp.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag7 = 1;
                                    }
                                }
                                if (s == kcpb) {
                                    flag7 = 0;
                                    flag6 = 0;
                                }
                            }
                    }
                }
                flag6 = 1;
                flag7 = 1;
            }

            else if (wkl.includes(ls[1])) {
                a = a.charCodeAt();
                for (let i = 0; i < 4; ++i) {
                    if (i == 0) {
                        if ((a + 2) < 105 && (n - 1) > 0) {
                            z = String.fromCharCode(a + 2);
                            s = z + (n - 1);
                            if (pbp.includes(s) && wh.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }

                        }
                        if ((a + 2) < 105 && (n + 1) < 9) {
                            z = String.fromCharCode(a + 2);
                            s = z + (n + 1);
                            if (pbp.includes(s) && wh.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }

                    }
                    else if (i == 1) {
                        if ((a - 1) > 96 && (n - 2) > 0) {
                            z = String.fromCharCode(a - 1);
                            s = z + (n - 2);
                            if (pbp.includes(s) && wh.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                        if ((a + 1) < 105 && (n - 2) > 0) {
                            z = String.fromCharCode(a + 1);
                            s = z + (n - 2);
                            if (pbp.includes(s) && wh.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                    }
                    else if (i == 2) {
                        if ((a - 1) > 96 && (n + 2) < 9) {
                            z = String.fromCharCode(a - 1);
                            s = z + (n + 2);
                            if (pbp.includes(s) && wh.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                        if ((a + 1) < 105 && (n + 2) < 9) {
                            z = String.fromCharCode(a + 1);
                            s = z + (n + 2);
                            if (pbp.includes(s) && wh.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                    }
                    else {
                        if ((a - 2) > 96 && (n - 1) > 0) {
                            z = String.fromCharCode(a - 2);
                            s = z + (n - 1);
                            if (pbp.includes(s) && wh.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }
                        if ((a - 2) > 96 && (n + 1) < 9) {
                            z = String.fromCharCode(a - 2);
                            s = z + (n + 1);
                            if (pbp.includes(s) && wh.includes(s)) {
                                pbp = pbp.filter(e => e !== s);
                                break;
                            }
                        }

                    }
                }
            }
            else if (ls[1] == wk) {
                a = a.charCodeAt();
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 1; j++) {

                        if (i == 0) {
                            if ((n + j + 1) < 9 && (a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 1) {
                            if ((n + j + 1) < 9) {
                                z = String.fromCharCode(a);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 2) {
                            if ((n - j - 1) > 0 && (a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 3) {
                            if ((n - j - 1) > 0) {
                                z = String.fromCharCode(a);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 4) {
                            if ((a - j - 1) > 96 && (n + j + 1) < 9) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + (n + j + 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 5) {
                            if ((a - j - 1) > 96) {
                                z = String.fromCharCode(a - j - 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else if (i == 6) {
                            if ((a + j + 1) < 105 && (n - j - 1) > 0) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + (n - j - 1);
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                        else {
                            if ((a + j + 1) < 105) {
                                z = String.fromCharCode(a + j + 1);
                                s = z + n;
                                if (flag6 == 1) {
                                    if (pbp.includes(s) && wh.includes(s)) {
                                        pbp = pbp.filter(e => e !== s);
                                        flag6 = 0;
                                        j = 8;
                                    }
                                }
                            }
                        }
                    }
                    flag6 = 1;
                    flag7 = 1;
                }
            }

            // else {
            //     pawnq(a, n, 'w');
            // }
        }
        console.log(pbp, "pbp values");
        bp = pbp;
        console.log(bp, "pbpjk values");
    }
    return pbp;

}
function handler(a, n, l, c) {
    if (l != []) {
        if (c == 'bp') {
            if (a == 'g') {
                tog(a + n);
                sel = a + n;
                bl.push(sel);
                pec = 'b';
                document.getElementById(sel).style.border = "solid 3px white";
                document.getElementById(sel).style.boxSizing = "border-box";
                bpis(a, n);
                //console.log("pawan",bp);
                if (flag) {
                    bp = bp.filter(value => checkpathl.includes(value) || value === 'enm');
                }
                if (sel in pinned) {
                    bp = bp.filter(val => pinned[sel].includes(val));
                }
                for (i = 0; i < bp.length; i++) {
                    bp = bp.filter(item => item !== 'enm');
                    if (bp[i + 1] == 'enm') {
                        // //console.log(bp,"pawn");
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px red";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                        bp.splice(bp.indexOf('enm'), 1);
                    }
                    else {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
                // //console.log(l[0],'lll');
                token.push(l[1]);
                token.push(l);
                // l.length=0;
            }
            else {
                tog(a + n);
                sel = a + n;
                bl.push(sel);
                pec = 'b';
                document.getElementById(sel).style.border = "solid 3px white";
                document.getElementById(sel).style.boxSizing = "border-box";
                bpss(a, n);

                //console.log("pawan",bp);
                if (flag) {
                    bp = bp.filter(value => checkpathl.includes(value) || value === 'enm');
                }
                if (sel in pinned) {
                    bp = bp.filter(val => pinned[sel].includes(val));
                }
                for (i = 0; i < bp.length; i++) {
                    bp = bp.filter(item => item !== 'enm');
                    if (bp[i + 1] == 'enm') {
                        //console.log(bp);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px red";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                        bp.splice(bp.indexOf('enm'), 1);
                    }
                    else {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
                token.push(l[1]);
                token.push(l);
            }
        }
        if (c == 'wp') {
            if (a == 'b') {
                tog(a + n);
                sel = a + n;
                wh.push(sel);
                pec = 'w';
                document.getElementById(sel).style.border = "solid 3px white";
                document.getElementById(sel).style.boxSizing = "border-box";
                wpis(a, n);
                //console.log(bp,"kokokokokoo");
                if (flag) {
                    bp = bp.filter(value => checkpathl.includes(value) || value === 'enm');
                    //console.log(bp,"kokokokokoo");
                }
                if (sel in pinned) {
                    bp = bp.filter(val => pinned[sel].includes(val));
                }
                for (i = 0; i < bp.length; i++) {
                    bp = bp.filter(item => item !== 'enm');
                    if (bp[i + 1] == 'enm') {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px red";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                        bp.splice(bp.indexOf('enm'), 1);
                    }
                    else {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
                token.push(l[1]);
                token.push(l);
                // l.length=0;
            }
            else {
                tog(a + n);
                sel = a + n;
                wh.push(sel);
                pec = 'w';
                document.getElementById(sel).style.border = "solid 3px white";
                document.getElementById(sel).style.boxSizing = "border-box";
                wpss(a, n);
                if (flag) {
                    bp = bp.filter(value => checkpathl.includes(value) || value === 'enm');
                }
                if (sel in pinned) {
                    bp = bp.filter(val => pinned[sel].includes(val));
                }
                for (i = 0; i < bp.length; i++) {
                    bp = bp.filter(item => item !== 'enm');
                    if (bp[i + 1] == 'enm') {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px red";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                        bp.splice(bp.indexOf('enm'), 1);
                    }
                    else {
                        //console.log(bp[i]);
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
                token.push(l[1]);
                token.push(l);
            }
        }
        if (c == 'knight') {
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);
            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            bkns(a, n);

            if (flag) {
                bp = bp.filter(value => checkpathl.includes(value) || value === 'enm');
            }
            if (sel in pinned) {
                bp = bp.filter(val => pinned[sel].includes(val));
            }
            for (i = 0; i < bp.length; i++) {
                bp = bp.filter(item => item !== 'enm');
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    if (bp.length != 0) {
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
            }
            token.push(l[1]);
            token.push(l);
        }
        if (c == 'rook') {
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);
            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            brs(a, n);
            if (flag) {
                bp = bp.filter(value => checkpathl.includes(value) || value === 'enm');
            }
            if (sel in pinned) {
                bp = bp.filter(val => pinned[sel].includes(val));
            }
            for (i = 0; i < bp.length; i++) {
                bp = bp.filter(item => item !== 'enm');
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    if (bp.length != 0) {
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
            }
            token.push(l[1]);
            token.push(l);
        }
        if (c == 'bishop') {
            //console.log("hj");
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);
            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            bbs(a, n);
            if (flag) {
                bp = bp.filter(value => checkpathl.includes(value) || value === 'enm');
            }
            if (sel in pinned) {
                bp = bp.filter(val => pinned[sel].includes(val));
            }
            for (i = 0; i < bp.length; i++) {
                bp = bp.filter(item => item !== 'enm');
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    if (bp.length != 0) {
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
            }
            token.push(l[1]);
            token.push(l);
        }
        if (c == 'queen') {
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);
            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            bqs(a, n);
            if (flag) {
                bp = bp.filter(value => checkpathl.includes(value) || value === 'enm');
            }
            if (sel in pinned) {
                bp = bp.filter(val => pinned[sel].includes(val));
            }
            for (i = 0; i < bp.length; i++) {
                bp = bp.filter(item => item !== 'enm');
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    if (bp.length != 0) {
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
            }
            token.push(l[1]);
            token.push(l);
            //console.log("queen out", token);
        }
        if (c == 'king') {
            tog(a + n);
            sel = a + n;
            if (l[0] == 'b') {
                bl.push(sel);


            }
            else if (l[0] == 'w') {
                wh.push(sel);
            }
            pec = l[0].toString();
            document.getElementById(sel).style.border = "solid 3px white";
            document.getElementById(sel).style.boxSizing = "border-box";
            flag4 = 'c';
            bks(a, n);
            if (pec == 'w') {
                console.log(bp, "white");
                bp = bp.filter(value => !restrictw.includes(value));
                bp = check_penetration(bp);
                console.log(bp, "white");
                if (castelw) {
                    castelf();
                }
            }
            else {
                console.log(bp, "black");
                bp = bp.filter(value => !restrictb.includes(value));
                bp = check_penetration(bp);
                console.log(bp, "black");
                if (castelb) {
                    castelf();
                }
            }

            for (i = 0; i < bp.length; i++) {
                bp = bp.filter(item => item !== 'enm');
                if (bp[i + 1] == 'enm') {
                    //console.log(bp[i]);
                    token.push(bp[i]);
                    document.getElementById(bp[i]).style.border = "solid 2.5px red";
                    document.getElementById(bp[i]).style.boxSizing = "border-box";
                    bp.splice(bp.indexOf('enm'), 1);
                }
                else {
                    //console.log(bp[i]);
                    token.push(bp[i]);

                    if (bp.length != 0) {
                        token.push(bp[i]);
                        document.getElementById(bp[i]).style.border = "solid 2.5px cyan";
                        document.getElementById(bp[i]).style.boxSizing = "border-box";
                    }
                }
            }
            token.push(l[1]);
            token.push(l);
        }
    }
}
function rem(ele, pec) {
    if (pec == 'b') {
        bl = bl.filter(e => e !== ele);

    }
    else if (pec == 'w') {
        wh = wh.filter(e => e !== ele);

    }
}
async function bxevents(idx, ls, eve) {

    // //console.log("cwl", token, pec, idx, ls[1], bk1, ls[1] == bk2);
    if ((pec.includes('b'))) {
        // restriction(kcpb);
        // restriction(kcpw);
        if ((pec.includes('b') && (bl.includes(idx)) || bp.includes(idx))) {
            tog(idx);
            a = idx[0];
            n = parseInt(idx[1]);
            if (!token.includes(idx)) {
                //console.log("cl1", token, pec);
                //console.log("clg");
                token = [];
                pec = [];
                bl = bl.filter((item, index) => bl.indexOf(item) === index);
                wh = wh.filter((item, index) => wh.indexOf(item) === index);

                if (bl.length > bpc && bl[(bl.length) - 1] != kcbp) {
                    bl.pop();
                }
                if (wh.length > wpc && wh[(wh.length) - 1] != kcbw) {
                    wh.pop();
                }
                d = [];
            }
            if (token.includes(idx)) {

                //check removel
                console.log("heredfddfdfdfdffdf", token);

                if (castel && (token.includes(h3) || token.includes(h7)) && token.includes(bk)) {
                    if (castelid == 'h3-h7') {
                        if (token.includes('h3')) {
                            eve.append(token[token.length - 2]);
                            ls.push(token[token.length - 1][0]);
                            //console.log(token[token.length - 1][0], 'nk');
                            ls.push(token[token.length - 2]);
                            //console.log(token[token.length - 2], 'mk');
                            //console.log(ls);
                            token[token.length - 1].length = 0;
                            token = [];

                            h4l = [...h1l];
                            h1l = [];
                            h4e.append(br1);
                            bl.push(h4);
                            bl.push(h3);
                            bl = bl.filter(item => item !== 'h5');
                            bl = bl.filter(item => item !== 'h1');



                        }
                        else if (token.includes('h7')) {
                            eve.append(token[token.length - 2]);
                            ls.push(token[token.length - 1][0]);
                            //console.log(token[token.length - 1][0], 'nk');
                            ls.push(token[token.length - 2]);
                            //console.log(token[token.length - 2], 'mk');
                            //console.log(ls);
                            token[token.length - 1].length = 0;
                            token = [];

                            h6l = [...h8l];
                            h8l = [];
                            h6e.append(br2);
                            bl.push(h7);
                            bl.push(h6);
                            bl = bl.filter(item => item !== 'h5');
                            bl = bl.filter(item => item !== 'h8');

                        }
                    }
                    else {
                        if (token.includes('h3')) {
                            eve.append(token[token.length - 2]);
                            ls.push(token[token.length - 1][0]);
                            //console.log(token[token.length - 1][0], 'nk');
                            ls.push(token[token.length - 2]);
                            //console.log(token[token.length - 2], 'mk');
                            //console.log(ls);
                            token[token.length - 1].length = 0;
                            token = [];

                            h4l = [...h1l];
                            h1l = [];
                            h4e.append(br1);
                            bl.push(h4);
                            bl.push(h3);
                            bl = bl.filter(item => item !== 'h5');
                            bl = bl.filter(item => item !== 'h1');

                        }
                        else if (token.includes('h7')) {
                            eve.append(token[token.length - 2]);
                            ls.push(token[token.length - 1][0]);
                            //console.log(token[token.length - 1][0], 'nk');
                            ls.push(token[token.length - 2]);
                            //console.log(token[token.length - 2], 'mk');
                            //console.log(ls);
                            token[token.length - 1].length = 0;
                            token = [];
                            h6l = [...h8l];
                            h8l = [];
                            h6e.append(br2);
                            bl.push(h6);
                            bl.push(h7);
                            bl = bl.filter(item => item !== 'h5');
                            bl = bl.filter(item => item !== 'h8');

                        }
                    }

                    bl = bl.filter((item, index) => bl.indexOf(item) === index);
                    castel = false;
                    bypass = true;

                }
                else {
                    castel = false;
                }
                //console.log("cl1", token, pec);
                // //console.log(pec[0]);
                // //console.log(ls[0]);
                if (ls.length != 0) {  //this condtion checks that box which is referenced, is empty box or that has any value? ->if false then by pass this code
                    if (pec[0] != ls[0]) { //this condtion checks that box has different piece or not? ->if yes then true
                        jd = ls[ls.length - 1]; //this command extract that after referenced box has which piece
                        str = `${jd.outerHTML}`; //this command is used to convert that extracted variable name into string for further process like intialize, deletion
                        if (pec == 'b') {  // if black piece is eleminate white then remove that from other list and push in other list
                            rem(idx, 'w');
                            wpc--;
                            whc.push(ls[1]);
                            strl = strl + str;
                            whcb.innerHTML = strl;

                        }
                        if (pec == 'w') {  // if white piece is eleminate white then remove that from other list and push in other list
                            rem(idx, 'b');
                            bpc--;
                            blc.push(ls[1]);
                            strl1 = strl1 + str;
                            blcb.innerHTML = strl1;
                        }
                        ls[1].remove();
                        ls.length = 0;

                    }
                }
                if (token.includes(bp1) ||
                    token.includes(bp2) ||
                    token.includes(bp3) ||
                    token.includes(bp4) ||
                    token.includes(bp5) ||
                    token.includes(bp6) ||
                    token.includes(bp7) ||
                    token.includes(bp8)) {
                    a = idx[0];
                    if (a == 'a') {
                        bypass = true;
                        //promotion box
                        const piece = await new Promise(resolve => {
                            const box = document.getElementById('promotion-box');
                            const prevent = document.getElementById('prevent');
                            box.classList.remove('hidden');
                            prevent.classList.remove('hidden');

                            const options = box.querySelectorAll('.promo-option');
                            options.forEach(option => {
                                option.onclick = () => {
                                    const selected = option.getAttribute('data-piece');
                                    box.classList.add('hidden');
                                    prevent.classList.add('hidden');
                                    resolve(selected); // resumes after selection
                                };
                            });
                        });
                        if (piece == 'q') {
                            let bq = bql[bqCounter];
                            eve.append(bq);
                            ls.push('b');
                            ls.push(bq);
                            bqCounter++;
                            dump.append(token[token.length - 2]);
                            token[token.length - 1].length = 0;
                            token = [];
                            console.log(ls, "condition111");

                        }
                        if (piece == 'b') {
                            let bb = bbl[bbCounter];
                            eve.append(bb);
                            ls.push('b');
                            ls.push(bb);
                            bbCounter++;
                            dump.append(token[token.length - 2]);
                            token[token.length - 1].length = 0;
                            token = [];
                            console.log(ls, "condition112");
                        }
                        if (piece == 'r') {
                            let br = brl[brCounter];
                            eve.append(br);
                            ls.push('b');
                            ls.push(br);
                            brCounter++;
                            dump.append(token[token.length - 2]);
                            token[token.length - 1].length = 0;
                            token = [];
                            console.log(ls, "condition112");
                        }
                        if (piece == 'k') {
                            let bkk = bkl[bkCounter];
                            eve.append(bkk);
                            ls.push('b');
                            ls.push(bkk);
                            bkCounter++;
                            dump.append(token[token.length - 2]);
                            token[token.length - 1].length = 0;
                            token = [];
                            console.log(ls, "condition112");
                        }
                    }
                }



                if (!bypass) {
                    eve.append(token[token.length - 2]);
                    ls.push(token[token.length - 1][0]);
                    //console.log(token[token.length - 1][0], 'nk');
                    ls.push(token[token.length - 2]);
                    //console.log(token[token.length - 2], 'mk');
                    //console.log(ls);

                    token[token.length - 1].length = 0;
                    token = [];
                    //console.log("here bl", pec, ls[1] == bk || ls[1] == wk);
                }


                a = idx[0];
                n = parseInt(idx[1]);
                if (pec.includes('b')) {
                    if (ls[1] == bk) {
                        checkb(a, n, pec);
                        //console.log("change??", a, n, pec,idx);
                    }
                }
                if (flag) {
                    if (checkpathl.includes(idx)) {
                        flag = false;
                        token1 = [];
                        checkremoverd(kcpb, checker);
                    }
                    console.log(temp1, kcpb, kcpw, "hjerr");
                    if (temp1 != kcpb) {
                        flag = false;
                        token1 = [];
                        checkremoverd(temp1, checker);
                    }
                }

                if (ls[1] == bk) {
                    castelb = false;
                }
                if (castelb) {
                    if (ls[1] == br1) {
                        cb1 = false;
                    }
                    else if (ls[1] == br2) {
                        cb2 = false;
                    }
                    if (!cb1 && !cb2) {
                        castelb = false;
                    }
                }

                if (pec.includes('b')) {
                    rem(bl[bl.length - 1], 'b');
                    bl.push(idx);
                    //check for check!!!
                    //console.log("yeqs");
                    // //console.log(!wkc.some(element => wh.includes(element)),"condition");
                    console.log(wkc.includes(idx), "condition1", wkc);
                    //console.log(idx, "hrt", ls);
                    if (wkc.includes(idx)) {
                        // console.log(ls[1]==br1 || ls[1]==br2,"condition");
                        console.log(bql.includes(ls[1]), "condition1", ls, ls[1]);
                        if (bql.includes(ls[1])) {
                            bqs(a = idx[0], n = parseInt(idx[1]));
                        }
                        else if (bbl.includes(ls[1])) {
                            bbs(a = idx[0], n = parseInt(idx[1]));
                        }
                        else if (brl.includes(ls[1])) {
                            brs(a = idx[0], n = parseInt(idx[1]));
                        }
                        else if (ls[1] == bk) {
                            bks(a = idx[0], n = parseInt(idx[1]));
                        }
                        else if (bkl.includes(ls[1])) {
                            bkns(a = idx[0], n = parseInt(idx[1]));
                            //console.log("feef", bp);
                        }
                        else if (kcpw[0].charCodeAt() >= 100) {
                            bpis(a = idx[0], n = parseInt(idx[1]));
                        }
                        else {
                            console.log("herehcall", idx);
                            bpss(a = idx[0], n = parseInt(idx[1]));
                            console.log("herehcall1", bp, idx);
                        }
                        if (bp.includes(kcpw)) {
                            console.log("check!!!", bp, idx);
                            //now specify check path!!!!!!!!!!!!!!!!!
                            if (bkl.includes(ls[1])) {
                                console.log("check!!!", bp, idx);
                                checkpathl.push(idx);
                            }
                            else {
                                console.log("check!!!", bp, idx);
                                checkpath(idxx = idx, kcpw);
                            }
                            restriction(kcpb);
                            restriction(kcpw);
                            checkhandler(idx, kcpw);
                            flag11 = true;
                            checker1 = idx;

                        }
                        //console.log(ls, "lkist", idx, bp, c);
                        bp = [];

                    }

                }
                else if (pec.includes('w')) {
                    rem(wh[wh.length - 1], 'w');
                    wh.push(idx);
                }
                changer();
                console.log("bbb");
                restriction(kcpb);
                console.log("www1");
                restriction(kcpw);
                console.log("www2");

                console.log("discover - ", pec);
                discovery();


            }
            else if (ls.includes(bp1) ||
                ls.includes(bp2) ||
                ls.includes(bp3) ||
                ls.includes(bp4) ||
                ls.includes(bp5) ||
                ls.includes(bp6) ||
                ls.includes(bp7) ||
                ls.includes(bp8)) {
                handler(a, n, ls, c = 'bp');
            }
            else if (ls.includes(wp1) ||
                ls.includes(wp2) ||
                ls.includes(wp3) ||
                ls.includes(wp4) ||
                ls.includes(wp5) ||
                ls.includes(wp6) ||
                ls.includes(wp7) ||
                ls.includes(wp8)) {
                handler(a, n, ls, c = 'wp');
            }
            else if (ls.some(p => bkl.includes(p)) || ls.some(p => wkl.includes(p))) {
                handler(a, n, ls, c = 'knight');
            }
            else if (ls.some(p => brl.includes(p)) || ls.some(p => wrl.includes(p))) {
                handler(a, n, ls, c = 'rook');
            }
            else if (ls.some(p => bbl.includes(p)) || ls.some(p => wbl.includes(p))) {
                handler(a, n, ls, c = 'bishop');
            }
            else if (ls.some(p => bql.includes(p))
                || ls.some(p => wql.includes(p))) {
                handler(a, n, ls, c = 'queen');
            }
            else if (ls.includes(bk) || ls.includes(wk)) {
                handler(a, n, ls, c = 'king');
            }
            else {
                token = [];
            }
        }
    }
    if ((pec.includes('w') && (wh.includes(idx)) || bp.includes(idx))) {
        // restriction(kcpb);
        // restriction(kcpw);
        tog(idx);
        //console.log(pec[0], idx, "kl", token);
        a = idx[0];
        n = parseInt(idx[1]);
        if (!token.includes(idx)) {
            //console.log("clg");
            //console.log(ls[0], "klklkl", idx, token);
            bl = bl.filter((item, index) => bl.indexOf(item) === index);
            wh = wh.filter((item, index) => wh.indexOf(item) === index);
            token = [];
            // pec = [];
            if (bl.length > bpc) {
                bl.pop();
            }
            if (wh.length > wpc) {
                wh.pop();
            }
            d = [];

        }
        if (token.includes(idx)) {

            //console.log("heredfdfdfdfdfdfdf",checkpathl.includes(idx));

            if (castel && (token.includes(a3) || token.includes(a7)) && token.includes(wk)) {
                if (castelid == 'a3-a7') {
                    if (token.includes('a3')) {
                        eve.append(token[token.length - 2]);
                        ls.push(token[token.length - 1][0]);
                        //console.log(token[token.length - 1][0], 'nk');
                        ls.push(token[token.length - 2]);
                        //console.log(token[token.length - 2], 'mk');
                        //console.log(ls);
                        token[token.length - 1].length = 0;
                        token = [];

                        a4l = [...a1l];
                        a1l = [];
                        a4e.append(wr1);
                        wh.push(a4);
                        wh.push(a3);
                        wh = wh.filter(item => item !== 'a5');
                        wh = wh.filter(item => item !== 'a1');



                    }
                    else if (token.includes('a7')) {
                        eve.append(token[token.length - 2]);
                        ls.push(token[token.length - 1][0]);
                        //console.log(token[token.length - 1][0], 'nk');
                        ls.push(token[token.length - 2]);
                        //console.log(token[token.length - 2], 'mk');
                        //console.log(ls);
                        token[token.length - 1].length = 0;
                        token = [];

                        a6l = [...a8l];
                        a8l = [];
                        a6e.append(wr2);
                        wh.push(a7);
                        wh.push(a6);
                        wh = wh.filter(item => item !== 'a5');
                        wh = wh.filter(item => item !== 'a8');

                    }
                }
                else {
                    if (token.includes('a3')) {
                        eve.append(token[token.length - 2]);
                        ls.push(token[token.length - 1][0]);
                        //console.log(token[token.length - 1][0], 'nk');
                        ls.push(token[token.length - 2]);
                        //console.log(token[token.length - 2], 'mk');
                        //console.log(ls);
                        token[token.length - 1].length = 0;
                        token = [];

                        a4l = [...a1l];
                        a1l = [];
                        a4e.append(wr1);
                        wh.push(a4);
                        wh.push(a3);
                        wh = wh.filter(item => item !== 'a5');
                        wh = wh.filter(item => item !== 'a1');

                    }
                    else if (token.includes('a7')) {
                        eve.append(token[token.length - 2]);
                        ls.push(token[token.length - 1][0]);
                        //console.log(token[token.length - 1][0], 'nk');
                        ls.push(token[token.length - 2]);
                        //console.log(token[token.length - 2], 'mk');
                        //console.log(ls);
                        token[token.length - 1].length = 0;
                        token = [];
                        a6l = [...a8l];
                        a8l = [];
                        a6e.append(wr2);
                        wh.push(a6);
                        wh.push(a7);
                        wh = wh.filter(item => item !== 'a5');
                        wh = wh.filter(item => item !== 'a8');

                    }
                }

                wh = wh.filter((item, index) => wh.indexOf(item) === index);
                castel = false;
                bypass = true;

            }
            else {
                castel = false;
            }


            // //console.log();
            if (ls.length != 0) {
                if (pec[0] != ls[0]) { //this condtion checks that box has different piece or not? ->if yes then true
                    jd = ls[ls.length - 1]; //this command extract that after referenced box has which piece
                    str = `${jd.outerHTML}`; //this command is used to convert that extracted variable name into string for further process like intialize, deletion
                    if (pec == 'b') {  // if black piece is eleminate white then remove that from other list and push in other list
                        rem(idx, 'w');
                        wpc--;
                        whc.push(ls[1]);
                        strl = strl + str;
                        whcb.innerHTML = strl;

                    }
                    if (pec == 'w') {  // if white piece is eleminate white then remove that from other list and push in other list
                        rem(idx, 'b');
                        bpc--;
                        blc.push(ls[1]);
                        strl1 = strl1 + str;
                        blcb.innerHTML = strl1;
                    }
                    ls[1].remove();
                    ls.length = 0;

                }
            }


            if (token.includes(wp1) ||
                    token.includes(wp2) ||
                    token.includes(wp3) ||
                    token.includes(wp4) ||
                    token.includes(wp5) ||
                    token.includes(wp6) ||
                    token.includes(wp7) ||
                    token.includes(wp8)) {
                    a = idx[0];
                    if (a == 'h') {
                        bypass = true;
                        //promotion box
                        const piece = await new Promise(resolve => {
                            const box = document.getElementById('promotion-box');
                            const prevent = document.getElementById('prevent');
                            box.classList.remove('hidden');
                            prevent.classList.remove('hidden');

                            const options = box.querySelectorAll('.promo-option');
                            options.forEach(option => {
                                option.onclick = () => {
                                    const selected = option.getAttribute('data-piece');
                                    box.classList.add('hidden');
                                    prevent.classList.add('hidden');
                                    resolve(selected); // resumes after selection
                                };
                            });
                        });
                        if (piece == 'q') {
                            let bq = wql[wqCounter];
                            eve.append(bq);
                            ls.push('w');
                            ls.push(bq);
                            wqCounter++;
                            dump.append(token[token.length - 2]);
                            token[token.length - 1].length = 0;
                            token = [];
                            console.log(ls, "condition111");

                        }
                        if (piece == 'b') {
                            let bb = wbl[wbCounter];
                            eve.append(bb);
                            ls.push('w');
                            ls.push(bb);
                            wbCounter++;
                            dump.append(token[token.length - 2]);
                            token[token.length - 1].length = 0;
                            token = [];
                            console.log(ls, "condition112");
                        }
                        if (piece == 'r') {
                            let br = wrl[wrCounter];
                            eve.append(br);
                            ls.push('w');
                            ls.push(br);
                            wrCounter++;
                            dump.append(token[token.length - 2]);
                            token[token.length - 1].length = 0;
                            token = [];
                            console.log(ls, "condition112");
                        }
                        if (piece == 'k') {
                            let bkk = wkl[wkCounter];
                            eve.append(bkk);
                            ls.push('w');
                            ls.push(bkk);
                            wkCounter++;
                            dump.append(token[token.length - 2]);
                            token[token.length - 1].length = 0;
                            token = [];
                            console.log(ls, "condition112");
                        }
                    }
                }


            if (!bypass) {
                eve.append(token[token.length - 2]);
                ls.push(token[token.length - 1][0]);
                //console.log(token[token.length - 1][0], 'nk');
                ls.push(token[token.length - 2]);
                //console.log(token[token.length - 2], 'mk');
                //console.log(ls);
                token[token.length - 1].length = 0;
                token = [];
            }
            //console.log("here cf", pec);

            a = idx[0];
            n = parseInt(idx[1]);
            if (pec.includes('w')) {
                if (ls[1] == wk) {
                    checkb(a, n, pec);
                    //console.log("change??", a, n, pec);
                }
            }
            if (flag) {
                //console.log("cjcjcj");
                if (checkpathl.includes(idx)) {
                    flag = false;
                    token1 = [];
                    checkremoverd(kcpw, checker);
                }
                console.log(temp1, kcpw, "hjerr");
                if (temp1 != kcpw) {
                    flag = false;
                    token1 = [];
                    checkremoverd(temp1, checker);
                }
            }

            if (ls[1] == wk) {
                castelw = false;
            }
            if (castelw) {
                if (ls[1] == wr1) {
                    cw1 = false;
                }
                else if (ls[1] == wr2) {
                    cw2 = false;
                }
                if (!cw1 && !cw2) {
                    castelw = false;
                }
            }


            if (pec.includes('b')) {
                rem(bl[bl.length - 1], 'b');
                bl.push(idx);
                //console.log("hesj");

                //check for check!!!
            }
            else if (pec.includes('w')) {
                //console.log(idx, "jkjk");
                rem(wh[wh.length - 1], 'w');

                wh.push(idx);
                //console.log("yeqs");
                // //console.log(!wkc.some(element => wh.includes(element)),"condition");
                console.log(bkc.includes(idx),"condition1");
                if (bkc.includes(idx)) {
                    // //console.log(ls[1]==br1 || ls[1]==br2,"condition");
                    if (wql.includes(ls[1])) {
                        bqs(a = idx[0], n = parseInt(idx[1]));
                    }
                    else if (wbl.includes(ls[1])) {
                        bbs(a = idx[0], n = parseInt(idx[1]));
                    }
                    else if (wrl.includes(ls[1])) {
                        brs(a = idx[0], n = parseInt(idx[1]));

                    }
                    else if (ls[1] == wk) {
                        bks(a = idx[0], n = parseInt(idx[1]));
                    }
                    else if (wkl.includes(ls[1])) {
                        bkns(a = idx[0], n = parseInt(idx[1]));
                        //console.log("feef", bp);
                    }
                    else if (kcpb[0].charCodeAt() <= 101) {
                        wpis(a = idx[0], n = parseInt(idx[1]));
                    }
                    else {
                        wpss(a = idx[0], n = parseInt(idx[1]));
                    }

                    if (bp.includes(kcpb)) {
                        //console.log("check!!!");
                        //now specify check path!!!!!!!!!!!!!!!!!!!!!!!!
                        if (wkl.includes(ls[1])) {
                            console.log("check!!!", bp, idx);
                            checkpathl.push(idx);
                        }
                        else {
                            console.log("check!!!", bp, idx);
                            checkpath(idxx = idx, kcpb);
                        }
                        restriction(kcpb);
                        restriction(kcpw);
                        checkhandler(idx, kcpb);
                        flag11 = true;
                        checker1 = idx;
                    }
                    //console.log(ls, "lkist", idx, bp, kcpb);
                    bp = [];
                }
            }
            changer();
            console.log("bbb");
            restriction(kcpb);
            console.log("www1");
            restriction(kcpw);
            console.log("www2");
            //check discovery
            discovery();

        }
        else if (ls.includes(bp1) ||
            ls.includes(bp2) ||
            ls.includes(bp3) ||
            ls.includes(bp4) ||
            ls.includes(bp5) ||
            ls.includes(bp6) ||
            ls.includes(bp7) ||
            ls.includes(bp8)) {
            if (!flag) {
                handler(a, n, ls, c = 'bp');
            }
            else if (flag == true && checkremover(a, n)) {
                handler(a, n, ls, c = 'bp');
            }

        }
        else if (ls.includes(wp1) ||
            ls.includes(wp2) ||
            ls.includes(wp3) ||
            ls.includes(wp4) ||
            ls.includes(wp5) ||
            ls.includes(wp6) ||
            ls.includes(wp7) ||
            ls.includes(wp8)) {
            if (!flag) {
                handler(a, n, ls, c = 'wp');
            }
            else if (flag == true && checkremover(a, n)) {
                handler(a, n, ls, c = 'wp');
            }

        }
        else if (ls.some(p => bkl.includes(p)) || ls.some(p => wkl.includes(p))) {
            if (!flag) {
                handler(a, n, ls, c = 'knight');
            }
            else if (flag == true && checkremover(a, n)) {
                handler(a, n, ls, c = 'knight');
            }
        }
        else if (ls.some(p => brl.includes(p)) || ls.some(p => wrl.includes(p))) {
            if (!flag) {
                handler(a, n, ls, c = 'rook');
            }
            else if (flag == true && checkremover(a, n)) {
                handler(a, n, ls, c = 'rook');
            }
        }
        else if (ls.some(p => bbl.includes(p)) || ls.some(p => wbl.includes(p))) {
            if (!flag) {
                handler(a, n, ls, c = 'bishop');
            }
            else if (flag == true && checkremover(a, n)) {
                handler(a, n, ls, c = 'bishop');
            }
        }
        else if (ls.some(p => bql.includes(p))
            || ls.some(p => wql.includes(p))) {
            if (!flag) {
                handler(a, n, ls, c = 'queen');
            }
            else if (flag == true && checkremover(a, n)) {
                handler(a, n, ls, c = 'queen');
            }
        }
        else if (ls.includes(bk) || ls.includes(wk)) {
            console.log("hereee 3");
            if (!flag) {
                handler(a, n, ls, c = 'king');
            }
            else if (flag == true && checkremover(a, n)) {
                console.log("hrere 5");
                handler(a, n, ls, c = 'king');
            }
        }
        else {
            token = [];
        }

    }
    bypass = false;
    pinning();
    checkmate();

}
window.boardHandlers = {};

a1e.onclick = () => { sendMove("a1e"); bxevents(a1, a1l, a1e); };
window.boardHandlers["a1e"] = () => bxevents(a1, a1l, a1e);

a2e.onclick = () => { sendMove("a2e"); bxevents(a2, a2l, a2e); };
window.boardHandlers["a2e"] = () => bxevents(a2, a2l, a2e);

a3e.onclick = () => { sendMove("a3e"); bxevents(a3, a3l, a3e); };
window.boardHandlers["a3e"] = () => bxevents(a3, a3l, a3e);

a4e.onclick = () => { sendMove("a4e"); bxevents(a4, a4l, a4e); };
window.boardHandlers["a4e"] = () => bxevents(a4, a4l, a4e);

a5e.onclick = () => { sendMove("a5e"); bxevents(a5, a5l, a5e); };
window.boardHandlers["a5e"] = () => bxevents(a5, a5l, a5e);

a6e.onclick = () => { sendMove("a6e"); bxevents(a6, a6l, a6e); };
window.boardHandlers["a6e"] = () => bxevents(a6, a6l, a6e);

a7e.onclick = () => { sendMove("a7e"); bxevents(a7, a7l, a7e); };
window.boardHandlers["a7e"] = () => bxevents(a7, a7l, a7e);

a8e.onclick = () => { sendMove("a8e"); bxevents(a8, a8l, a8e); };
window.boardHandlers["a8e"] = () => bxevents(a8, a8l, a8e);


// Row B
b1e.onclick = () => { sendMove("b1e"); bxevents(b1, b1l, b1e); };
window.boardHandlers["b1e"] = () => bxevents(b1, b1l, b1e);

b2e.onclick = () => { sendMove("b2e"); bxevents(b2, b2l, b2e); };
window.boardHandlers["b2e"] = () => bxevents(b2, b2l, b2e);

b3e.onclick = () => { sendMove("b3e"); bxevents(b3, b3l, b3e); };
window.boardHandlers["b3e"] = () => bxevents(b3, b3l, b3e);

b4e.onclick = () => { sendMove("b4e"); bxevents(b4, b4l, b4e); };
window.boardHandlers["b4e"] = () => bxevents(b4, b4l, b4e);

b5e.onclick = () => { sendMove("b5e"); bxevents(b5, b5l, b5e); };
window.boardHandlers["b5e"] = () => bxevents(b5, b5l, b5e);

b6e.onclick = () => { sendMove("b6e"); bxevents(b6, b6l, b6e); };
window.boardHandlers["b6e"] = () => bxevents(b6, b6l, b6e);

b7e.onclick = () => { sendMove("b7e"); bxevents(b7, b7l, b7e); };
window.boardHandlers["b7e"] = () => bxevents(b7, b7l, b7e);

b8e.onclick = () => { sendMove("b8e"); bxevents(b8, b8l, b8e); };
window.boardHandlers["b8e"] = () => bxevents(b8, b8l, b8e);


// Row C
c1e.onclick = () => { sendMove("c1e"); bxevents(c1, c1l, c1e); };
window.boardHandlers["c1e"] = () => bxevents(c1, c1l, c1e);

c2e.onclick = () => { sendMove("c2e"); bxevents(c2, c2l, c2e); };
window.boardHandlers["c2e"] = () => bxevents(c2, c2l, c2e);

c3e.onclick = () => { sendMove("c3e"); bxevents(c3, c3l, c3e); };
window.boardHandlers["c3e"] = () => bxevents(c3, c3l, c3e);

c4e.onclick = () => { sendMove("c4e"); bxevents(c4, c4l, c4e); };
window.boardHandlers["c4e"] = () => bxevents(c4, c4l, c4e);

c5e.onclick = () => { sendMove("c5e"); bxevents(c5, c5l, c5e); };
window.boardHandlers["c5e"] = () => bxevents(c5, c5l, c5e);

c6e.onclick = () => { sendMove("c6e"); bxevents(c6, c6l, c6e); };
window.boardHandlers["c6e"] = () => bxevents(c6, c6l, c6e);

c7e.onclick = () => { sendMove("c7e"); bxevents(c7, c7l, c7e); };
window.boardHandlers["c7e"] = () => bxevents(c7, c7l, c7e);

c8e.onclick = () => { sendMove("c8e"); bxevents(c8, c8l, c8e); };
window.boardHandlers["c8e"] = () => bxevents(c8, c8l, c8e);


// Row D
d1e.onclick = () => { sendMove("d1e"); bxevents(d1, d1l, d1e); };
window.boardHandlers["d1e"] = () => bxevents(d1, d1l, d1e);

d2e.onclick = () => { sendMove("d2e"); bxevents(d2, d2l, d2e); };
window.boardHandlers["d2e"] = () => bxevents(d2, d2l, d2e);

d3e.onclick = () => { sendMove("d3e"); bxevents(d3, d3l, d3e); };
window.boardHandlers["d3e"] = () => bxevents(d3, d3l, d3e);

d4e.onclick = () => { sendMove("d4e"); bxevents(d4, d4l, d4e); };
window.boardHandlers["d4e"] = () => bxevents(d4, d4l, d4e);

d5e.onclick = () => { sendMove("d5e"); bxevents(d5, d5l, d5e); };
window.boardHandlers["d5e"] = () => bxevents(d5, d5l, d5e);

d6e.onclick = () => { sendMove("d6e"); bxevents(d6, d6l, d6e); };
window.boardHandlers["d6e"] = () => bxevents(d6, d6l, d6e);

d7e.onclick = () => { sendMove("d7e"); bxevents(d7, d7l, d7e); };
window.boardHandlers["d7e"] = () => bxevents(d7, d7l, d7e);

d8e.onclick = () => { sendMove("d8e"); bxevents(d8, d8l, d8e); };
window.boardHandlers["d8e"] = () => bxevents(d8, d8l, d8e);


// Row E
e1e.onclick = () => { sendMove("e1e"); bxevents(e1, e1l, e1e); };
window.boardHandlers["e1e"] = () => bxevents(e1, e1l, e1e);

e2e.onclick = () => { sendMove("e2e"); bxevents(e2, e2l, e2e); };
window.boardHandlers["e2e"] = () => bxevents(e2, e2l, e2e);

e3e.onclick = () => { sendMove("e3e"); bxevents(e3, e3l, e3e); };
window.boardHandlers["e3e"] = () => bxevents(e3, e3l, e3e);

e4e.onclick = () => { sendMove("e4e"); bxevents(e4, e4l, e4e); };
window.boardHandlers["e4e"] = () => bxevents(e4, e4l, e4e);

e5e.onclick = () => { sendMove("e5e"); bxevents(e5, e5l, e5e); };
window.boardHandlers["e5e"] = () => bxevents(e5, e5l, e5e);

e6e.onclick = () => { sendMove("e6e"); bxevents(e6, e6l, e6e); };
window.boardHandlers["e6e"] = () => bxevents(e6, e6l, e6e);

e7e.onclick = () => { sendMove("e7e"); bxevents(e7, e7l, e7e); };
window.boardHandlers["e7e"] = () => bxevents(e7, e7l, e7e);

e8e.onclick = () => { sendMove("e8e"); bxevents(e8, e8l, e8e); };
window.boardHandlers["e8e"] = () => bxevents(e8, e8l, e8e);


// Row F
f1e.onclick = () => { sendMove("f1e"); bxevents(f1, f1l, f1e); };
window.boardHandlers["f1e"] = () => bxevents(f1, f1l, f1e);

f2e.onclick = () => { sendMove("f2e"); bxevents(f2, f2l, f2e); };
window.boardHandlers["f2e"] = () => bxevents(f2, f2l, f2e);

f3e.onclick = () => { sendMove("f3e"); bxevents(f3, f3l, f3e); };
window.boardHandlers["f3e"] = () => bxevents(f3, f3l, f3e);

f4e.onclick = () => { sendMove("f4e"); bxevents(f4, f4l, f4e); };
window.boardHandlers["f4e"] = () => bxevents(f4, f4l, f4e);

f5e.onclick = () => { sendMove("f5e"); bxevents(f5, f5l, f5e); };
window.boardHandlers["f5e"] = () => bxevents(f5, f5l, f5e);

f6e.onclick = () => { sendMove("f6e"); bxevents(f6, f6l, f6e); };
window.boardHandlers["f6e"] = () => bxevents(f6, f6l, f6e);

f7e.onclick = () => { sendMove("f7e"); bxevents(f7, f7l, f7e); };
window.boardHandlers["f7e"] = () => bxevents(f7, f7l, f7e);

f8e.onclick = () => { sendMove("f8e"); bxevents(f8, f8l, f8e); };
window.boardHandlers["f8e"] = () => bxevents(f8, f8l, f8e);


// Row G
g1e.onclick = () => { sendMove("g1e"); bxevents(g1, g1l, g1e); };
window.boardHandlers["g1e"] = () => bxevents(g1, g1l, g1e);

g2e.onclick = () => { sendMove("g2e"); bxevents(g2, g2l, g2e); };
window.boardHandlers["g2e"] = () => bxevents(g2, g2l, g2e);

g3e.onclick = () => { sendMove("g3e"); bxevents(g3, g3l, g3e); };
window.boardHandlers["g3e"] = () => bxevents(g3, g3l, g3e);

g4e.onclick = () => { sendMove("g4e"); bxevents(g4, g4l, g4e); };
window.boardHandlers["g4e"] = () => bxevents(g4, g4l, g4e);

g5e.onclick = () => { sendMove("g5e"); bxevents(g5, g5l, g5e); };
window.boardHandlers["g5e"] = () => bxevents(g5, g5l, g5e);

g6e.onclick = () => { sendMove("g6e"); bxevents(g6, g6l, g6e); };
window.boardHandlers["g6e"] = () => bxevents(g6, g6l, g6e);

g7e.onclick = () => { sendMove("g7e"); bxevents(g7, g7l, g7e); };
window.boardHandlers["g7e"] = () => bxevents(g7, g7l, g7e);

g8e.onclick = () => { sendMove("g8e"); bxevents(g8, g8l, g8e); };
window.boardHandlers["g8e"] = () => bxevents(g8, g8l, g8e);


// Row H
h1e.onclick = () => { sendMove("h1e"); bxevents(h1, h1l, h1e); };
window.boardHandlers["h1e"] = () => bxevents(h1, h1l, h1e);

h2e.onclick = () => { sendMove("h2e"); bxevents(h2, h2l, h2e); };
window.boardHandlers["h2e"] = () => bxevents(h2, h2l, h2e);

h3e.onclick = () => { sendMove("h3e"); bxevents(h3, h3l, h3e); };
window.boardHandlers["h3e"] = () => bxevents(h3, h3l, h3e);

h4e.onclick = () => { sendMove("h4e"); bxevents(h4, h4l, h4e); };
window.boardHandlers["h4e"] = () => bxevents(h4, h4l, h4e);

h5e.onclick = () => { sendMove("h5e"); bxevents(h5, h5l, h5e); };
window.boardHandlers["h5e"] = () => bxevents(h5, h5l, h5e);

h6e.onclick = () => { sendMove("h6e"); bxevents(h6, h6l, h6e); };
window.boardHandlers["h6e"] = () => bxevents(h6, h6l, h6e);

h7e.onclick = () => { sendMove("h7e"); bxevents(h7, h7l, h7e); };
window.boardHandlers["h7e"] = () => bxevents(h7, h7l, h7e);

h8e.onclick = () => { sendMove("h8e"); bxevents(h8, h8l, h8e); };
window.boardHandlers["h8e"] = () => bxevents(h8, h8l, h8e);
