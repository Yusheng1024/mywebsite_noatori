// JavaScript source code
function applyStyle() {
    const value = document.getElementById("select_1").value;
    switch (value) {
        case "1":
            document.getElementById('introduction').style.color = '#ffffff';
            document.body.style.backgroundColor = '#333333';
            break;
        case "2":
            document.getElementById('introduction').style.color = '#e55cc1';
            document.body.style.backgroundColor = '#a184ff';
            break;
        case "3":
            document.getElementById('introduction').style.color = '#05fbb8';
            document.body.style.backgroundColor = '#103c85';
            break;
        case "4":
            document.getElementById('introduction').style.color = '#145bd1';
            document.body.style.backgroundColor = '#010101';
            break;
        default:
            alert("請先選擇樣式");
    }
}
function class_set(type) {
    switch (type) {
        case "1":
            document.getElementById('introduction').style.fontSize = '28px';
            document.getElementById('introduction').style.color = '#ff0000';
            document.body.style.backgroundColor = '#e55cc1';
            document.body.style.backgroundImage = "url('picture/p5.jpg')";
            break;
        case "2":
            document.getElementById('introduction').style.fontSize = '30px';
            document.getElementById('introduction').style.color = '#00ff00';
            document.body.style.backgroundColor = '#05fbb8';
            document.body.style.backgroundImage = "url('picture/p6.jpg')";
            break;
        case "3":
            document.getElementById('introduction').style.fontSize = '32px';
            document.getElementById('introduction').style.color = '#0000ff';
            document.body.style.backgroundColor = '#71cdfb';
            document.body.style.backgroundImage = "url('picture/p7.jpg')";
            break;
        case "reset":
            document.getElementById('introduction').style.fontSize = '20px';
            document.getElementById('introduction').style.color = '#ffffff';
            document.body.style.backgroundColor = '#04668d';
            document.body.style.backgroundImage = "url('')";
            break;
    }
}
function hide() {
    document.getElementById('introduction').style.display = 'none';
}
function show() {
    document.getElementById('introduction').style.display = 'block';
}

