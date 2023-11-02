document.addEventListener('DOMContentLoaded', function() {
    const userGrid = document.querySelector('.grid-container');
    const cancelButton = document.getElementById('cancel');
    const submitButton = document.getElementById('submit');

    function makeGridEditable(clickedElement) {
        const gridItems = userGrid.querySelectorAll('.user-details-grid');
        gridItems.forEach(item => {
            if (item !== clickedElement) {
                item.removeAttribute('contenteditable');
                item.style.border = '1px solid #ccc'; // Reset border style
            }
        });
        
        clickedElement.setAttribute('contenteditable', 'true');
        clickedElement.style.border = '1px solid blue'; // Visual indicator for editing

        clickedElement.addEventListener('focusout', function() {
            clickedElement.removeAttribute('contenteditable');
            clickedElement.style.border = '1px solid #ccc'; // Reset border style
        });
    }

    userGrid.addEventListener('click', function(event) {
        const clickedElement = event.target.closest('.user-details-grid');
        if (clickedElement) {
            makeGridEditable(clickedElement);
            clickedElement.focus();
        }
    });

    cancelButton.addEventListener('click', function() {
        const confirmCancel = confirm("Cancel assigning users?");
        if (confirmCancel) {
            window.location.href = "assignUser.html"; // Redirects to the "assign-user" page
        }
    });

    submitButton.addEventListener('click', function() {
        window.location.href = "about:blank"; // Redirects to a blank page
    });

    const addUserButton = document.getElementById('addUser');
    addUserButton.addEventListener('click', function() {
        const userFields = document.querySelectorAll('.user-fields select, .user-fields input');
        const newUserDetails = document.createElement('div');
        newUserDetails.classList.add('user-details-grid');

        userFields.forEach(field => {
            const fieldElement = document.createElement('div');
            fieldElement.textContent = field.value;
            newUserDetails.appendChild(fieldElement);
        });

        userGrid.appendChild(newUserDetails);
        newUserDetails.addEventListener('click', function(event) {
            makeGridEditable(newUserDetails);
        });
        makeGridEditable(newUserDetails); // Make the newly added grid editable
    });
});
