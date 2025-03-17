function calculate() {
    alert("Calculate button clicked!"); // Check if function runs

    let aa = parseInt(document.getElementById("aa").value) || 0;
    let bb = parseInt(document.getElementById("bb").value) || 0;
    let cc = parseInt(document.getElementById("cc").value) || 0;
    let dd = parseInt(document.getElementById("dd").value) || 0;
    let vv = parseInt(document.getElementById("vv").value) || 0;
    let xx = parseInt(document.getElementById("xx").value) || 0;
    let yy = parseInt(document.getElementById("yy").value) || 0;
    let zz = parseInt(document.getElementById("zz").value) || 0;
    let oo = parseInt(document.getElementById("oo").value) || 0;

    alert(`Inputs: ${aa}, ${bb}, ${cc}, ${dd}, ${vv}, ${xx}, ${yy}, ${zz}, ${oo}`); // Check input values

    if (oo < 1 || oo > 27) {
        alert("Nakshatram should be between 1 and 27.");
        return;
    }

    let a = (aa * 12) + bb;
    let b = (cc * 12) + dd;
    let c = (vv * 12) + xx;
    let d = (yy * 12) + zz;
    
    let selected_values = [];
    document.querySelectorAll("input[type=checkbox]:checked").forEach(checkbox => {
        selected_values.push(checkbox.id);
    });

    alert(`Selected Checkboxes: ${selected_values.join(", ")}`); // Check selected checkboxes

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    let count = 0;
    
    // Create a table
    let tableHTML = `<table border="1" cellspacing="0" cellpadding="5" style="width: 100%; text-align: center;">
                        <tr>
                            <th>#</th>
                            <th>Dimensions</th>
                            <th>Area (sq.ft)</th>`;

    selected_values.forEach(id => {
        tableHTML += `<th>${id.toUpperCase()}</th>`;
    });

    tableHTML += `</tr>`;

    for (let e = a; e <= b; e++) {
        for (let f = c; f <= d; f++) {
            let area = (e * f) / 144;
            let values = {};

            if (selected_values.includes("nak")) values["nak"] = Math.ceil((area * 8) % 27) || 27;
            if (selected_values.includes("aysh")) values["aysh"] = Math.ceil((area * 16) % 120) || 120;
            if (selected_values.includes("adym")) values["adym"] = Math.ceil((area * 9) % 9) || 9;
            if (selected_values.includes("karch")) values["karch"] = Math.ceil((area * 3) % 8) || 8;
            if (selected_values.includes("aym")) values["aym"] = Math.ceil((area * 5) % 6) || 6;
            if (selected_values.includes("vrm")) values["vrm"] = Math.ceil((area * 4) % 4) || 4;
            if (selected_values.includes("tidhi")) values["tidhi"] = Math.ceil((area * 10) % 30) || 30;
            if (selected_values.includes("dikpth")) values["dikpth"] = Math.ceil((area * 2) % 10) || 10;
            if (selected_values.includes("amsa")) values["amsa"] = Math.ceil((area * 7) % 12) || 12;
            if (selected_values.includes("ygm")) values["ygm"] = Math.ceil((area * 6) % 5) || 5;
            if (selected_values.includes("karnm")) values["karnm"] = Math.ceil((area * 11) % 7) || 7;
            if (selected_values.includes("thvm")) values["thvm"] = Math.ceil((area * 13) % 9) || 9;
            if (selected_values.includes("kulm")) values["kulm"] = Math.ceil((area * 12) % 8) || 8;
            if (selected_values.includes("lagnam")) values["lagnam"] = Math.ceil((area * 15) % 12) || 12;

            // Add row to table
            tableHTML += `<tr>
                            <td>${++count}</td>
                            <td>${e} x ${f}</td>
                            <td>${area.toFixed(2)}</td>`;

            selected_values.forEach(id => {
                tableHTML += `<td>${values[id]}</td>`;
            });

            tableHTML += `</tr>`;
        }
    }

    tableHTML += `</table>`;

    if (count === 0) {
        alert("No valid results found.");
        outputDiv.innerHTML = "No valid results found.";
    } else {
        alert(`Calculation completed! ${count} results found.`);
        outputDiv.innerHTML = tableHTML;
    }
}

function clearFields() {
    document.querySelectorAll("input[type=number]").forEach(input => input.value = "");
    document.querySelectorAll("input[type=checkbox]").forEach(checkbox => checkbox.checked = true);
    document.getElementById("output").innerHTML = "";
    alert("Fields cleared!");
}
