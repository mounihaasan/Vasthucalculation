function calculate() {
    alert("Calculate button clicked!"); // Debugging: Check if function runs

    // Get input values
    let aa = parseInt(document.getElementById("aa").value) || 0;
    let bb = parseInt(document.getElementById("bb").value) || 0;
    let cc = parseInt(document.getElementById("cc").value) || 0;
    let dd = parseInt(document.getElementById("dd").value) || 0;
    let vv = parseInt(document.getElementById("vv").value) || 0;
    let xx = parseInt(document.getElementById("xx").value) || 0;
    let yy = parseInt(document.getElementById("yy").value) || 0;
    let zz = parseInt(document.getElementById("zz").value) || 0;
    let oo = parseInt(document.getElementById("oo").value) || 0;

    // Validate Nakshatram input
    if (oo < 1 || oo > 27) {
        alert("Nakshatram should be between 1 and 27.");
        return;
    }

    // Convert feet + inches to inches
    let minLength = (aa * 12) + bb;
    let maxLength = (cc * 12) + dd;
    let minBreadth = (vv * 12) + xx;
    let maxBreadth = (yy * 12) + zz;

    // Get selected checkboxes
    let selectedValues = [];
    document.querySelectorAll("input[type=checkbox]:checked").forEach(cb => selectedValues.push(cb.id));

    alert(`Selected Checkboxes: ${selectedValues.join(", ")}`); // Debugging

    // Prepare output table
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Size (L × B)</th>
                    <th>Area (sq.ft)</th>
                    ${selectedValues.map(id => `<th>${id}</th>`).join("")}
                </tr>
            </thead>
            <tbody id="output-table-body"></tbody>
        </table>
    `;

    let tableBody = document.getElementById("output-table-body");
    let count = 0;

    for (let length = minLength; length <= maxLength; length++) {
        for (let breadth = minBreadth; breadth <= maxBreadth; breadth++) {
            let area = (length * breadth) / 144;
            let values = {};

            if (selectedValues.includes("nak")) values["nak"] = Math.ceil((area * 8) % 27) || 27;
            if (selectedValues.includes("aysh")) values["aysh"] = Math.ceil((area * 16) % 120) || 120;
            if (selectedValues.includes("adym")) values["adym"] = Math.ceil((area * 9) % 9) || 9;
            if (selectedValues.includes("karch")) values["karch"] = Math.ceil((area * 3) % 8) || 8;
            if (selectedValues.includes("aym")) values["aym"] = Math.ceil((area * 5) % 6) || 6;
            if (selectedValues.includes("vrm")) values["vrm"] = Math.ceil((area * 4) % 4) || 4;
            if (selectedValues.includes("tidhi")) values["tidhi"] = Math.ceil((area * 10) % 30) || 30;
            if (selectedValues.includes("dikpth")) values["dikpth"] = Math.ceil((area * 2) % 10) || 10;
            if (selectedValues.includes("amsa")) values["amsa"] = Math.ceil((area * 7) % 12) || 12;
            if (selectedValues.includes("ygm")) values["ygm"] = Math.ceil((area * 6) % 5) || 5;
            if (selectedValues.includes("karnm")) values["karnm"] = Math.ceil((area * 11) % 7) || 7;
            if (selectedValues.includes("thvm")) values["thvm"] = Math.ceil((area * 13) % 9) || 9;
            if (selectedValues.includes("kulm")) values["kulm"] = Math.ceil((area * 12) % 8) || 8;
            if (selectedValues.includes("lagnam")) values["lagnam"] = Math.ceil((area * 15) % 12) || 12;

            let row = `<tr>
                <td>${++count}</td>
                <td>${length} × ${breadth}</td>
                <td>${area.toFixed(2)}</td>
                ${selectedValues.map(id => `<td>${values[id]}</td>`).join("")}
            </tr>`;

            tableBody.innerHTML += row;
        }
    }

    if (count === 0) {
        alert("No valid results found.");
        outputDiv.innerHTML = "No valid results found.";
    } else {
        alert(`Calculation completed! ${count} results found.`);
    }
}

// Function to clear input fields and reset checkboxes
function clearFields() {
    document.querySelectorAll("input[type=number]").forEach(input => input.value = "");
    document.querySelectorAll("input[type=checkbox]").forEach(checkbox => checkbox.checked = true);
    document.getElementById("output").innerHTML = "";
    alert("Fields cleared!");
}
