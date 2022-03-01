const buddyUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddy(data));
}
buddyUser();
const displayBuddy = buddy => {
    const buddies = buddy.results;
    const buddiesContainer = document.getElementById('buddy')
    for (const buddy of buddies) {
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `
        name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        email: ${buddy.email}
        Bio: ${buddy.dob.date} Age:${buddy.dob.age} 
        number: ${buddy.cell}
        `;
        buddiesContainer.appendChild(p);
    }
}