const tabBody = document.getElementById("output");

const Promise1 = new Promise((resolve) => {
    const time = (Math.random() * 2) + 1;
    setTimeout(() => resolve(time), time * 1000);
});

const Promise2 = new Promise((resolve) => {
    const time = (Math.random() * 2) + 1;
    setTimeout(() => resolve(time), time * 1000);
});

const Promise3 = new Promise((resolve) => {
    const time = (Math.random() * 2) + 1;
    setTimeout(() => resolve(time), time * 1000);
});

Promise.all([Promise1, Promise2, Promise3]).then((values) => {
	const loadingRow = document.getElementById("loading");
    if (loadingRow) {
        loadingRow.remove();
    }
    const p1Time = values[0];
    const p2Time = values[1];
    const p3Time = values[2];
    
     const totalTime = Math.max(p1Time, p2Time, p3Time);

    tabBody.innerHTML += `<tr><td>Promise 1</td><td>${p1Time.toFixed(3)} s</td></tr>`;
    tabBody.innerHTML += `<tr><td>Promise 2</td><td>${p2Time.toFixed(3)} s</td></tr>`;
    tabBody.innerHTML += `<tr><td>Promise 3</td><td>${p3Time.toFixed(3)} s</td></tr>`;
    tabBody.innerHTML += `<tr><td><strong>Total</strong></td><td><strong>${totalTime.toFixed(3)} s</strong></td></tr>`;
});