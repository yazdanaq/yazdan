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

    const links = document.createElement("div")
    links.classList.add("project-links")

    if (publication.codeLink) {
        const githubLink = document.createElement('a')
        githubLink.classList.add("button-type")
        githubLink.innerText = 'GITHUB'
        githubLink.href = publication.codeLink
        githubLink.target = '_blank'
        links.appendChild(githubLink)
    }
    if (publication.pdfLink) {
        const pdfLink = document.createElement('a')
        pdfLink.classList.add("button-type")
        pdfLink.href = publication.pdfLink
        pdfLink.innerText = 'PDF'
        pdfLink.target = '_blank'
        links.appendChild(pdfLink)
    }

    const bibtex = document.createElement('p')
    bibtex.classList.add("button-type")
    bibtex.innerText = 'Bibtex'

    links.appendChild(bibtex)

    const bibTexCitation = document.createElement('p')
    bibTexCitation.classList.add('bibtex')
    bibTexCitation.style.display = 'none'
    bibTexCitation.innerText = publication.citation

    descriptionContainer.appendChild(links)
    descriptionContainer.appendChild(bibTexCitation)

    bibtex.addEventListener('click', () => {
        const currentState = window.getComputedStyle(bibTexCitation).getPropertyValue('display')
        console.log('cuyre', currentState)

        if (currentState === 'none') {
            bibTexCitation.style.display = 'block'
        } else {
            bibTexCitation.style.display = 'none'
        }
    })

    publicationHolder.appendChild(publicationContainer)
})