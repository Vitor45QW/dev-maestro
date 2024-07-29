document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const topicButtons = document.querySelectorAll('.topic-button');
    const topicTitle = document.getElementById('topic-title');
    const topicDescription = document.getElementById('topic-description');
    const famousApplicationsTitle = document.getElementById('famous-applications-title');
    const famousApplicationsList = document.getElementById('famous-applications');
    const addButton = document.getElementById('add-button');
    const minusButton = document.getElementById('minus-button');

    const topics = {
        javascript: {
            title: "Why use JavaScript?",
            description: "JavaScript is a versatile language used for both client-side and server-side programming.",
            famousApplicationsTitle: "Famous applications that use JavaScript:",
            famousApplications: ["Google", "Facebook", "Netflix"]
        },
        react: {
            title: "Why use React?",
            description: "React is a popular library for building user interfaces, especially single-page applications.",
            famousApplicationsTitle: "Famous applications that use React:",
            famousApplications: ["Facebook", "Instagram", "WhatsApp"]
        }
       
    };

    targetValue = 0;

  addButton.addEventListener("click", () => {
    console.log("more");
    let target = document.getElementById('target');
    
      targetValue += 1; 
      target.textContent = targetValue;
     
  })      

minusButton.addEventListener("click", () => {
    console.log("minus");
    let target = document.getElementById('target');
    
      targetValue -= 1; 
      target.textContent = targetValue;
     
  })      

  
    topicButtons.forEach(button => {
        console.log("Adding event listener to button:", button);
        button.addEventListener("click", () => {
            const topic = button.getAttribute('data-topic');
            console.log("Button clicked, topic:", topic);
            loadTopicContent(topic);
        });
    });

    function loadTopicContent(topic) {
        console.log("Loading content for topic:", topic);
        if (topics[topic]) {
            const content = topics[topic];
            topicTitle.textContent = content.title;
            topicDescription.textContent = content.description;
            famousApplicationsTitle.textContent = content.famousApplicationsTitle;
            famousApplicationsList.innerHTML = '';
            content.famousApplications.forEach(app => {
                const li = document.createElement('li');
                li.textContent = app;
                famousApplicationsList.appendChild(li);
            });
            console.log("Content loaded for topic:", topic);
        } else {
            console.error("Topic not found:", topic);
        }
    }

    
    loadTopicContent('javascript');

});



})
