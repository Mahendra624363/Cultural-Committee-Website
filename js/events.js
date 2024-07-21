// Sample data for events
const eventsData = [
    {
        title: "Singing",
        description: "Includes Classical, Light, Folk (Solo & Group) performances.",
        image: "../Images/Event/singing.jpg"
    },
    {
        title: "Dance",
        description: "Includes Classical, Folk, Western (Solo & Group) performances.",
        image: "../Images/Event/dance.jpeg"
    },
    {
        title: "Instrumental",
        description: "Various instruments such as Flute, Tabla, Piano, Veena, etc.",
        image: "../Images/Event/instrument.jpg"
    },
    {
        title: "Mono Action",
        description: "Individual dramatic performances.",
        image: "../Images/Event/mono-acting.jpg"
    },
    {
        title: "Miming",
        description: "Non-verbal performance art.",
        image: "../Images/Event/miming.jpg"
    },
    {
        title: "Dialogue Delivery",
        description: "Art of delivering dialogues effectively.",
        image: "../Images/Event/dialogue.jpg"
    },
    {
        title: "Skit",
        description: "Short, humorous or satirical theatrical performance.",
        image: "../Images/Event/skits.jpg"
    },
    {
        title: "Mimicry",
        description: "Imitating voices of famous personalities.",
        image: "../Images/Event/mimicry.jpg"
    },
    {
        title: "Choreography",
        description: "Creating and arranging dance movements.",
        image: "../Images/Event/choreographer.jpg"
    },
    {
        title: "Traditional Show",
        description: "Presenting traditional cultural performances.",
        image: "../Images/Event/traditional.jpg"
    },
    {
        title: "Czars",
        description: "Group performances showcasing grandeur and extravagance.",
        image: "../Images/Event/czars.jpg"
    },
    {
        title: "Drama",
        description: "Theatrical performances with dramatic themes.",
        image: "../Images/Event/drama.jpg"
    },
    {
        title: "Action - Over Action",
        description: "Performances focusing on exaggerated acting techniques.",
        image: "../Images/Event/action-overaction.jpg"
    },
    {
        title: "Any Creative Entertainment Event",
        description: "Open to any unique and creative form of entertainment.",
        image: "../Images/Event/creative.jpg"
    },
    {
        title: "Technical Working Models",
        description: "Demonstrations of technical and scientific models.",
        image: "../Images/Event/technical.jpg"
    },
    {
        title: "Inspirational Talks",
        description: "Speakers delivering motivating and inspiring speeches.",
        image: "../Images/Event/inspire.jpg"
    },
    {
        title: "Quizzes",
        description: "Intellectual competitions testing knowledge.",
        image: "../Images/Event/quiz.jpg"
    }
];

function createEventElement(eventData) {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');

    let eventHTML = `
        <div class="event-info">
            <h3>${eventData.title}</h3>
            <p>${eventData.description}</p>
            <button class="apply-btn">Apply</button>
        </div>
        <div class="event-image">
            <img src="${eventData.image}" alt="${eventData.title} Event">
        </div>
    `;

    eventDiv.innerHTML = eventHTML;
    return eventDiv;
}

function populateEvents() {
    const eventsContainer = document.querySelector('.inevents');

    eventsData.forEach(eventData => {
        const eventElement = createEventElement(eventData);
        eventsContainer.appendChild(eventElement);
    });
}

populateEvents();