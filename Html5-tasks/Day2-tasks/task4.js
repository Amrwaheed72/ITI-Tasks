const mainBranchCheckbox = document.getElementById('main-branch-checkbox');
const branchCheckbox = document.getElementById('branch-checkbox');
const mainBranchItem = document.querySelector('.main-branch');
const branchItems = document.querySelectorAll('.iti-branches li');

function updateBranchColors() {
    branchItems.forEach(item => {
        item.style.color = '';
    });

    if (branchCheckbox.checked) {
        branchItems.forEach(item => {
            item.style.color = 'blue'; 
        });
    }

    if (mainBranchCheckbox.checked) {
        mainBranchItem.style.color = 'red'; 
    }
}
mainBranchCheckbox.addEventListener('change', updateBranchColors);
branchCheckbox.addEventListener('change', updateBranchColors);
