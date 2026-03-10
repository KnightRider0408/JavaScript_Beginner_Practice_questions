let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {

    let container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((note, index) => {

        let div = document.createElement("div");

        div.style.border = "1px solid black";
        div.style.padding = "10px";
        div.style.margin = "10px";

        div.innerHTML = `
            ${note}
            <button onclick="deleteNote(${index})">Delete</button>
        `;

        container.appendChild(div);
    });
}

function addNote() {

    let input = document.getElementById("noteInput");

    notes.push(input.value);

    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";

    displayNotes();
}

function deleteNote(index) {

    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

displayNotes();