const yes = document.getElementById("yes");
const no = document.getElementById("no");
const box = document.getElementById("box");

let count = 0;
let scale = 1;

yes.onclick = () => {
    box.innerHTML = `
        <h1>🎉 เย้! เข้าเกมกันเลย 🎮</h1>
        <button onclick="location.reload()">🔄 เอาใหม่</button>
    `;
};

no.onclick = () => {

    count++;

    // ปุ่มใช่ใหญ่ขึ้น
    scale += 0.2;
    yes.style.transform = `scale(${scale})`;

    // ปุ่มไม่หนี
    no.style.position = "fixed";
    no.style.left = Math.random() * (window.innerWidth - no.offsetWidth) + "px";
    no.style.top = Math.random() * (window.innerHeight - no.offsetHeight) + "px";

    // กดครบ 10 ครั้ง ปุ่มไม่หาย
    if (count >= 10) {
        no.style.display = "none";
    }
};
