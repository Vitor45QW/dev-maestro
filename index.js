document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const addButton = document.getElementById('add-button');
    const minusButton = document.getElementById('minus-button');
    const maestry = document.querySelector('.maestry');
    const recomendedProjects = document.getElementById('recomended-projects');
    const userLevel = document.getElementById('user-level');
    const targetDisplay = document.getElementById('target');

    let topics = {
        javascript: {
            title: "Why use JavaScript?",
            description: "JavaScript is a versatile language used for both client-side and server-side programming.",
            famousApplicationsTitle: "Famous applications that use JavaScript:",
            famousApplications: ["Google", "Facebook", "Netflix"],
            classes: 0
        },
        react: {
            title: "Why use React?",
            description: "React is a popular library for building user interfaces, especially single-page applications.",
            famousApplicationsTitle: "Famous applications that use React:",
            famousApplications: ["Facebook", "Instagram", "WhatsApp"],
            classes: 0
        },
        database: {
            title: "Why Learn database?",
            description: "Proficiency in databases is highly valued across various industries.",
            famousApplicationsTitle: "Famous applications that use databases:",
            famousApplications: ["Amazon", "Netflix", "Spotify"],
            classes: 0
        }
    };

    let currentTopic = 'javascript'; // Default topic

    addButton.addEventListener("click", () => {
        console.log("more");

        if (topics[currentTopic]) {
            topics[currentTopic].classes += 1;
            updateMaestry(topics[currentTopic].classes);
        }
    });

    minusButton.addEventListener("click", () => {
        console.log("minus");

        if (topics[currentTopic]) {
            topics[currentTopic].classes -= 1;
            updateMaestry(topics[currentTopic].classes);
        }
    });

    function updateMaestry(classes) {
        if (classes === 1) {
            maestry.textContent = "Congratulations for starting!";
        } else if (classes === 5) {
            maestry.textContent = "Creating habits take time. Move on.";
        } else if (classes === 10) {
            maestry.textContent = "Don't forget to practice with projects.";
            maestry.style.backgroundColor = "black";
            userLevel.textContent = "Low-beginner";
            userLevel.style.animation = 'shake 1s ease';
            recomendedProjects.textContent = "To do list";
        } else {
            maestry.textContent = "Mastery still low.";
        }

        targetDisplay.textContent = classes;
    }

    const topicButtons = document.querySelectorAll('.topic-button');
    topicButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentTopic = button.getAttribute('data-topic');
            targetDisplay.textContent = topics[currentTopic].classes; // Update displayed value
            loadTopicContent(currentTopic);
        });
    });

    function loadTopicContent(topic) {
        const content = topics[topic];
        if (content) {
            document.getElementById('topic-title').textContent = content.title;
            document.getElementById('topic-description').textContent = content.description;
            document.getElementById('famous-applications-title').textContent = content.famousApplicationsTitle;
            const famousApplicationsList = document.getElementById('famous-applications');
            famousApplicationsList.innerHTML = '';
            content.famousApplications.forEach(app => {
                const li = document.createElement('li');
                li.textContent = app;
                famousApplicationsList.appendChild(li);
            });
        } else {
            console.error("Topic not found:", topic);
        }
    }

    loadTopicContent(currentTopic); // Load default topic content on page load
});


