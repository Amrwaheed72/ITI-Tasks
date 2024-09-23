const container = document.getElementById("container");
const userDataSection = document.getElementById("userData");
const errorMsg = document.getElementById("errorMsg");

window.onload = () => {
    fetchData();
};

// Fetch and display all users
const fetchData = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);

        const users = await res.json();
        renderUserButtons(users);
    } catch (error) {
        showError("Failed to fetch user data. Please try again later.");
        console.error(error);
    }
};

const renderUserButtons = (users) => {
    container.innerHTML = ''; 
    users.forEach((user, index) => {
        const button = document.createElement('button');
        button.innerText = user.name;
        button.className = 'name';
        button.id = index;
        button.setAttribute('aria-label', `View details for ${user.name}`);
        button.onclick = () => fetchUser(index);
        container.appendChild(button);
    });
};

const fetchUser = async (userId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId + 1}`);
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);

        const user = await res.json();
        renderUserData(user);
    } catch (error) {
        showError("Failed to fetch user details. Please try again later.");
        console.error(error);
    }
};

const renderUserData = (user) => {
    userDataSection.innerHTML = `
        <ul>
            <li class="userData">Name: ${user.name}</li>
            <li class="userData">Username: ${user.username}</li>
            <li class="userData">Email: ${user.email}</li>
            <li class="userData">Website: ${user.website}</li>
            <li class="userData">Phone Number: ${user.phone}</li>
            <li class="userData">Location</li>
            <ul class="userData">
                <li class="userData">Street: ${user.address.street}</li>
                <li class="userData">City: ${user.address.city}</li>
                <li class="userData">Suite: ${user.address.suite}</li>
            </ul>
        </ul>
    `;
};

const showError = (message) => {
    errorMsg.innerText = message;
};
