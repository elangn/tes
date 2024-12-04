let a = document.getElementById('satu');
let b = document.getElementById('tombol');

function ubahWarna () { 
    a.style.color = 'red'
}

// b.onclick = ubahWarna

b.addEventListener('click' , ubahWarna)

