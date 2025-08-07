async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear "Loading..." text
        dataContainer.innerHTML = '';

        // Create a UL element
        const userList = document.createElement('ul');

        // Loop through users and create LI for each
        users.forEach(function(user) {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the UL to the dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // If something goes wrong
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', fetchUserData);
