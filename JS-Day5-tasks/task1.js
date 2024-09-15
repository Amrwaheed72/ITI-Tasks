let newsCount = 0;

addNews=()=> {
    const newsInput = document.getElementById('newsInput').value;
    const newsType = document.querySelector('input[name="newsType"]:checked');
    if (newsInput.trim() === "" || !newsType) {
        alert("Please enter some news and select a type.");
        return;
    }

    newsCount++;
    const table = document.getElementById('newsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = newsCount;
    cell2.innerHTML = newsInput;
    cell3.innerHTML = newsType.value;

    document.getElementById('newsInput').value = "";
    newsType.checked = false;
}

countRows=()=> {
    const table = document.getElementById('newsTable').getElementsByTagName('tbody')[0];
    const rowCount = table.rows.length;
    document.getElementById('rowCount').innerText = "Number of rows: " + rowCount;
}

searchNews=()=> {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('newsTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const newsText = cells[1].innerText.toLowerCase();
        const newsType = cells[2].innerText.toLowerCase();
        if (newsText.includes(input) || newsType.includes(input)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}