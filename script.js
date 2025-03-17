function calculate() {
    let aa = parseInt(document.getElementById("aa").value) || 0;
    let bb = parseInt(document.getElementById("bb").value) || 0;
    let cc = parseInt(document.getElementById("cc").value) || 0;
    let dd = parseInt(document.getElementById("dd").value) || 0;
    let vv = parseInt(document.getElementById("vv").value) || 0;
    let xx = parseInt(document.getElementById("xx").value) || 0;
    let yy = parseInt(document.getElementById("yy").value) || 0;
    let zz = parseInt(document.getElementById("zz").value) || 0;
    
    let a = (aa * 12) + bb;
    let b = (cc * 12) + dd;
    let c = (vv * 12) + xx;
    let d = (yy * 12) + zz;
    
    let selected_values = [];
    document.querySelectorAll("input[type=checkbox]:checked").forEach(cb => selected_values.push(cb.id));

    let tableBody = document.querySelector("#output-table tbody");
    tableBody.innerHTML = "";

    let count = 0;

    for (let e = a; e <= b; e++) {
        for (let f = c; f <= d; f++) {
            let area = (e * f) / 144;
            let row = `<tr><td>${++count}</td><td>${e} x ${f}</td><td>${area.toFixed(2)}</td>`;

            selected_values.forEach(id => {
                row += `<td>${Math.ceil((area * Math.random() * 20) % 30)}</td>`;
            });

            row += "</tr>";
            tableBody.innerHTML += row;
        }
    }
}
