const contentDictionary = {
    '2023-2024': [
        {
            event: 'Annual Day Celebrations',
            images: [
                "../Images/2023-2024/cm1.jpeg",
                "../Images/2023-2024/cm2.jpeg",
                "../Images/2023-2024/cm3.jpeg",
                "../Images/2023-2024/cm4.jpeg",
                "../Images/2023-2024/cm5.jpeg",
                "../Images/2023-2024/cm6.jpeg",
                "../Images/2023-2024/cm7.jpeg",
                "../Images/2023-2024/cm8.jpeg",
                "../Images/2023-2024/cm9.jpeg",
                "../Images/2023-2024/cm13.jpeg",
                "../Images/2023-2024/cm14.jpeg",
                "../Images/2023-2024/cm15.jpeg",
                "../Images/2023-2024/cm16.jpeg"
            ]
        }
    ],
    'old-pictures': [
        {
            event: '',
            images: [
                "../Images/oldPictures/1.jpeg",
                "../Images/oldPictures/2.jpeg",
                "../Images/oldPictures/3.jpeg",
                "../Images/oldPictures/4.jpeg",
                "../Images/oldPictures/5.jpeg",
                "../Images/oldPictures/6.jpeg",
                "../Images/oldPictures/7.jpeg",
                "../Images/oldPictures/8.jpeg",
                "../Images/oldPictures/9.jpeg",
                "../Images/oldPictures/10.jpeg",
                "../Images/oldPictures/11.jpeg",
                "../Images/oldPictures/13.jpeg",
                "../Images/oldPictures/14.jpeg",
                "../Images/oldPictures/17.jpeg",
                "../Images/oldPictures/18.jpeg",
                "../Images/oldPictures/19.jpeg",
                "../Images/oldPictures/20.jpeg",
                "../Images/oldPictures/23.jpeg",
                "../Images/oldPictures/24.jpeg",
                "../Images/oldPictures/25.jpeg",
                "../Images/oldPictures/26.jpeg",
                "../Images/oldPictures/29.jpeg"
            ]
        }
    ]
};

function loadContent(batchYear) {

    const galleryContent = document.getElementById('gallery-content');

    galleryContent.innerHTML = ''; 

    if (contentDictionary.hasOwnProperty(batchYear)) {
        contentDictionary[batchYear].forEach(eventObj => {

            const eventDiv = document.createElement('div');
            eventDiv.classList.add('eventimg');

            const eventTitle = document.createElement('h3');
            eventTitle.textContent = eventObj.event;
            eventDiv.appendChild(eventTitle);

            const eventImagesDiv = document.createElement('div');
            eventImagesDiv.classList.add('event-images');

            eventObj.images.forEach(imagePath => {
                const imgElement = document.createElement('img');
                imgElement.src = imagePath;
                imgElement.alt="Image";
                eventImagesDiv.appendChild(imgElement);

            });

            eventDiv.appendChild(eventImagesDiv);
            galleryContent.appendChild(eventDiv);
        });
        document.querySelector('.year-name').textContent = batchYear;

    } 
    else {
        galleryContent.innerHTML = '<p>No events found for this batch.</p>';
    }
}

loadContent('2023-2024');
