const clubsData = [
    {
        path:"../Images/sico/club-endeavour.jpg",
        name: "CLUB ENDEAVOR",
        aim: "The club is a student-initiated literary club which primarily aims at tapering the literary skills that are vested within various students.",
        objectives: [
            "To familiarize the students of the college with the competitive environment of the real world.",
            "To equip the students with various vocal and written techniques essential for today's competitive environment.",
            "To improve interaction in the college between students from different branches.",
            "To enhance the creativity vested within the young minds of the students."
        ],
        activities: "The club organizes literary events to prepare students for inter-collegiate festivals, develop leadership skills, and enhance team spirit.",
        members: "Dr. P.V.Kishore Babu (Convenor, EC & CCAC), Tammineni Sai Shekar (Student executive secretary)"
    },
    {
        path:"../Images/sico/redants.jpg",
        name: "RED ANTS",
        aim: "The club is a student-run fine arts club which primarily aims at honing the finer skills vested in the students.",
        objectives: [
            "To expose the students of the college to situations similar to those they will be challenged with in the real world.",
            "To unite the students of the college under the cultural fold.",
            "To encourage the students to utilize their creativity and enhance their hidden skills."
        ],
        activities: "Activities include pencil shading, mehendi, t-shirt painting, etc., emphasizing finesse and creativity.",
        members: "Dr. P.V.Kishore Babu (Convenor, EC & CCAC), Kommalapati Pragna (Student executive secretary)"
    },
    {
        path:"../Images/sico/club-inspirize.jpg",
        name: "CLUB INSPIRAZE",
        aim: "To ignite the inner thoughts of students through enlightening speeches delivered by professionals.",
        objectives: [
            "To make every student an achiever.",
            "To help students realize their true interests.",
            "To aid students in selecting their role models."
        ],
        activities: "Organizes guest lectures carefully selected to have a positive impact on students, building emotional character through speeches.",
        members: "Dr. P.V.Kishore Babu (Convenor, EC & CCAC), Chimmili Bindhu Madhuri (Student executive secretary)"
    },
    {
        path:"../Images/sico/clubwaltz.jpg",
        name: "CLUB WALTZ",
        aim: "To render valuable help to students interested in dance (irrespective of style: classical, western, group, or folk).",
        objectives: [
            "To promote competitive spirit.",
            "To emphasize the importance of team spirit and learning from failure.",
            "To promote healthy discussions to improve students' skills."
        ],
        activities: "Organizes dance competitions with various themes to showcase diverse talents and represent the college at various levels.",
        members: "Dr. P.V.Kishore Babu (Convenor, EC & CCAC), Guduri Hanumantha Rao (Student executive secretary)"
    },
    {
        path:"../Images/sico/club-spectrum.png",
        name: "CLUB SPECTRUM",
        aim: "Draw forth the hidden creativity and innovations that can help instill confidence.",
        objectives: [
            "To promote competitive spirit.",
            "To allow thoughts to run freely."
        ],
        activities: "Organizes a wide variety of competitions like ad-making and short film-making to provide students a platform for their talents.",
        members: "Dr. P.V.Kishore Babu (Convenor, EC & CCAC), Amareswarapu Karthikeya (Student executive secretary)"
    },
    {
        path:"../Images/sico/music.jpeg",
          name: "MUSIC CLUB",
        aim: "To offer precious help to students interested in music (irrespective of style: classical, western, or folk).",
        objectives: [
            "To promote music as a means of enrichment and unity.",
            "To unite students under the cultural fold.",
            "To help students explore the depths of music."
        ],
        activities: "Organizes events with themes for diverse genres, involving both students and academic staff.",
        members: "Dr. P.V.Kishore Babu (Convenor, EC & CCAC), Lekkala Raghu Vamsi (Student executive secretary)"
    },
    {
        path:"../Images/sico/bookclub.jpg",
        name: "BOOK CLUB",
        aim: "To inculcate the precious habit of reading in students.",
        objectives: [
            "To help students understand the importance of reading.",
            "To discuss the vital points in selected works of literature.",
            "To expose students to old works of literature and discuss their importance."
        ],
        activities: "Discusses books suggested by students, enhancing understanding and appreciation of literature.",
        members: "Dr. P.V.Kishore Babu (Convenor, EC & CCAC), Bollina Lakshmi Sivani (Student executive secretary)"
    },
    {
        path:"../Images/sico/sparkclub.jpg",
        name: "CLUB SPARK",
        aim: "To gather videos with the help of students to promote technical knowledge.",
        objectives: [
            "To provide visual learning aids for new technologies.",
            "To amass technical skills in students in a brief span."
        ],
        activities: "Showcases technical videos to expose students to the latest trends and improve their editing skills.",
        members: "Dr. P.V.Kishore Babu (Convenor, EC & CCAC), Gangavarapu Priya Jyostna (Student executive secretary)"
    }
];

    function createClubElement(clubData) {
        const clubDiv = document.createElement('div');
        clubDiv.classList.add('club');

        let clubHTML = `
            <div class="club-img">
            <img src=${clubData.path} width="100%" height="auto">
            </div>
            <div>
            <h4 class="data" style="color:darkblue;">${clubData.name}</h4>
            <h4 class="data"><strong>Aim:</strong> ${clubData.aim}</h4>
            <h4 class="data">Objectives:</h4>
            <ul>
        `;

        clubData.objectives.forEach(objective => {
            clubHTML += `<li>${objective}</li>`;
        });

        clubHTML += `
            </ul>
            <h4  class="data"><strong>Activities:</strong> ${clubData.activities}</h4>
            <h4  class="data"><strong>Members:</strong> ${clubData.members}</h4>
            <div class="button-div"><button class="button" onclick="">Apply</button></div>
            </div>
        `;

        clubDiv.innerHTML = clubHTML;
        return clubDiv;
    }

    function populateClubs() {
        const clubsContainer = document.querySelector('.clubs');

        clubsData.forEach(clubData => {
            const clubElement = createClubElement(clubData);
            clubsContainer.appendChild(clubElement);
        });
    }


    populateClubs();