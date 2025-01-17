async function getUsers() {
    const usersList = document.getElementById("userList");
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    for (x of users.data) {
        const listItem = document.createElement("li");

        listItem.innerText = x.name
        listItem.className = "useritem";
        usersList.appendChild(listItem);
    }
}

function deleteUser() {
    const usersList = document.getElementById("userList");
    while (usersList.childNodes.length) {
        usersList.removeChild(usersList.firstChild)
    }
}
