let gpaCount = 0;

function createGPASection() {
    const section = document.createElement('div');
    section.classList.add('gpa-section');
    section.id = `gpa-${gpaCount}`;
    section.innerHTML = `
        <h3>Semester ${gpaCount + 1}</h3>
        <div class="inputs">
            <div class="input-group">
                <label>Credits Earned:</label>
                <input type="number" class="part-credit" required>
                <label>GPA:</label>
                <input type="number" class="part-gpa" step="0.01" required>
            </div>
        </div>
        <div class="part-buttons">
            <button class="add-part-button">Add Part</button>
            <button class="delete-part-button" style="display:none;">Delete Last Part</button>
        </div>
    `;
    document.getElementById('gpa-sections').appendChild(section);

    const addPartButton = section.querySelector('.add-part-button');
    addPartButton.addEventListener('click', () => addPart(section));

    const deletePartButton = section.querySelector('.delete-part-button');
    deletePartButton.addEventListener('click', () => deleteLastPart(section));

    gpaCount++;
    toggleDeleteSemesterButton();
}

function addPart(section) {
    const inputsDiv = section.querySelector('.inputs');
    const partGroup = document.createElement('div');
    partGroup.classList.add('input-group');
    partGroup.innerHTML = `
        <label>Credits Earned:</label>
        <input type="number" class="part-credit" required>
        <label>GPA:</label>
        <input type="number" class="part-gpa" step="0.01" required>
    `;
    inputsDiv.appendChild(partGroup);

    // Show the "Delete Last Part" button when at least one part is added
    const deletePartButton = section.querySelector('.delete-part-button');
    deletePartButton.style.display = 'inline-block';
}

function deleteLastPart(section) {
    const inputsDiv = section.querySelector('.inputs');
    const parts = inputsDiv.querySelectorAll('.input-group');
    
    // Ensure at least one part remains in the section before deleting
    if (parts.length > 1) {
        parts[parts.length - 1].remove();
    }

    // Hide the "Delete Last Part" button if no parts are left
    const deletePartButton = section.querySelector('.delete-part-button');
    if (parts.length <= 1) {
        deletePartButton.style.display = 'none';
    }
}

function toggleDeleteSemesterButton() {
    const deleteButton = document.getElementById('delete-gpa-button');
    deleteButton.style.display = gpaCount > 1 ? 'inline-block' : 'none';
}

document.getElementById('add-gpa-button').addEventListener('click', createGPASection);
document.getElementById('delete-gpa-button').addEventListener('click', () => {
    if (gpaCount > 1) {
        document.getElementById(`gpa-${gpaCount - 1}`).remove();
        gpaCount--;
        toggleDeleteSemesterButton();
    }
});

function calculateCGPA() {
    const gpaSections = document.querySelectorAll('.gpa-section');
    let totalSemesterMarks = 0;
    let count = 0;
    const gpaResultsContainer = document.getElementById('gpa-results');
    gpaResultsContainer.innerHTML = '';

    gpaSections.forEach((section, index) => {
        const gpas = section.querySelectorAll('.part-gpa');
        const credits = section.querySelectorAll('.part-credit');
        let totalGPA = 0;
        let totalCredits = 0;
        let isValid = true;

        gpas.forEach((gpaField, i) => {
            const gpa = parseFloat(gpaField.value);
            const credit = parseFloat(credits[i].value);

            if (isNaN(gpa) || isNaN(credit) || gpa <= 0 || credit <= 0) {
                isValid = false;
            } else {
                totalGPA += gpa * credit;
                totalCredits += credit;
            }
        });

        if (isValid && totalCredits > 0) {
            const semesterMark = (totalGPA / totalCredits).toFixed(2);
            totalSemesterMarks += parseFloat(semesterMark);
            count++;

            const resultLine = document.createElement('p');
            resultLine.textContent = `Semester ${index + 1}: Semester Mark = ${semesterMark}`;
            gpaResultsContainer.appendChild(resultLine);
        } else {
            const resultLine = document.createElement('p');
            resultLine.textContent = `Semester ${index + 1}: Invalid data, unable to calculate.`;
            gpaResultsContainer.appendChild(resultLine);
        }
    });

    const cgpa = count ? (totalSemesterMarks / count).toFixed(2) : 0;
    document.getElementById('cgpa-result').textContent = cgpa;

    const percentage = (cgpa * 9.5).toFixed(2);
    document.getElementById('percentage-result').textContent = `${percentage}%`;
}

document.getElementById('calculate-all-button').addEventListener('click', calculateCGPA);

// Initialize with one GPA section
createGPASection();

//Disable Right click
document.addEventListener('contextmenu', event => {
    event.preventDefault();
});