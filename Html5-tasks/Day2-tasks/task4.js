// Get checkboxes and list items
const mainBranchCheckbox = document.getElementById('main-branch-checkbox');
const branchCheckbox = document.getElementById('branch-checkbox');
const mainBranchItem = document.querySelector('.main-branch');
const branchItems = document.querySelectorAll('.iti-branches li');

// Function to update the colors based on checkbox state
function updateBranchColors() {
    // Reset all colors to default
    branchItems.forEach(item => {
        item.style.color = '';
    });

    // Apply colors based on the checkbox state
    if (branchCheckbox.checked) {
        branchItems.forEach(item => {
            item.style.color = 'blue'; // All branches turn blue
        });
    }

    // Main Branch logic should override the branch styling
    if (mainBranchCheckbox.checked) {
        mainBranchItem.style.color = 'red'; // Main Branch turns red
    }
}

// Add event listeners to checkboxes
mainBranchCheckbox.addEventListener('change', updateBranchColors);
branchCheckbox.addEventListener('change', updateBranchColors);
