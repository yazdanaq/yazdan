const announcementContainer = document.getElementById("announcement-board");
updateData.forEach(update => {
    const updateItem = document.createElement("div");
    updateItem.classList.add("update-item");

    const updateDate = document.createElement("div");
    updateDate.classList.add("update-item-date");
    updateDate.textContent = update.date;

    const updateDescription = document.createElement("div");
    updateDescription.classList.add("update-item-description");
    updateDescription.textContent = update.description;

    updateItem.appendChild(updateDate);
    updateItem.appendChild(updateDescription);

    announcementContainer.appendChild(updateItem);
});


const publicationHolder = document.getElementById("publication-holder")

publicationData.forEach((publication) => {
    console.log('i', publication)
    const publicationContainer = document.createElement("div");
    publicationContainer.classList.add("publication-item");

    // Create and set image
    const imgElement = document.createElement("img");
    imgElement.src = publication.image_url;
    imgElement.alt = "project-image";
    publicationContainer.appendChild(imgElement);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("publication-description");

    // Create title link
    const titleLink = document.createElement("a");
    titleLink.href = publication.publication_link;
    titleLink.target = '_blank'
    const titleElement = document.createElement("p");
    titleElement.classList.add("title");
    titleElement.textContent = publication.title;
    titleLink.appendChild(titleElement);
    descriptionContainer.appendChild(titleLink);

    const collaboratorContainer = document.createElement('div')
    collaboratorContainer.classList.add('collaborators')

    // Create collaborators
    publication.collaborators.forEach((collaborator) => {
        const collaboratorsElement = document.createElement("a");
        collaboratorsElement.href = collaborator.link
        collaboratorsElement.target = '_blank'
        collaboratorsElement.innerHTML = collaborator.name;
        collaboratorContainer.appendChild(collaboratorsElement)

    })
    descriptionContainer.appendChild(collaboratorContainer);
    // Create description
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = publication.description;
    descriptionContainer.appendChild(descriptionElement);

    publicationContainer.appendChild(descriptionContainer)

    publicationHolder.appendChild(publicationContainer)
})