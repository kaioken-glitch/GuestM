const addButton = document.querySelector('.add');
const guestInput = document.querySelector('#guestData');
const guestList = document.querySelector('.guestList');

//event listener tied to the add guest button
addButton.addEventListener('click', () => {
    const guestName = guestInput.value.trim();
    const currentGuests = document.querySelectorAll('.guestDiv');

    //an alert to trigger when the number of guests exceed 10 or equal to 10
    if (currentGuests.length >= 10) {
        alert('Maximum number of guests (10) reached!');
        return;
    }

    //alert that appears when clicking add button without inputing a name 
    if (guestName === '') {
        alert('Please enter a guest name');
        return;
    }
    // Creates a new guest div for each guest added
    const guestDiv = document.createElement('div');
    guestDiv.className = 'guestDiv';

    // Adds guest name to a p element within guestDiv
    const nameP = document.createElement('p');
    nameP.className = 'guest';
    nameP.textContent = guestName;

    // Adds a remove icon to the guestDiv 
    const removeIcon = document.createElement('i');
    removeIcon.className = 'fa-solid fa-user-minus';
    
    // Adds a  click event to the remove icon allowing thw removal of guests
    removeIcon.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    // Append elements into guestDiv which is in turn appended into listNames div
    guestDiv.appendChild(nameP);
    guestDiv.appendChild(removeIcon);
    guestList.appendChild(guestDiv);
    // Clear input
    guestInput.value = '';
});