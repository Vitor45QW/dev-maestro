document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const topicButtons = document.querySelectorAll('.topic-button');
    const topicTitle = document.getElementById('topic-title');
    const topicDescription = document.getElementById('topic-description');
    const famousApplicationsTitle = document.getElementById('famous-applications-title');
    const famousApplicationsList = document.getElementById('famous-applications');
    const addButton = document.getElementById('add-button');
    const minusButton = document.getElementById('minus-button');
    const maestry = document.querySelector('.maestry');
    const recomendedProjects = document.getElementById('recomended-projects');
    const userLevel = document.getElementById('user-level')
  
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
        // Add more topics as needed
    };

    targetValue = 0;

  addButton.addEventListener("click", () => {
    console.log("more");
    let target = document.getElementById('target');
    
      targetValue += 1; 
      target.textContent = targetValue;
      
      
        if (targetValue === 1) {
                maestry.style.animationName = "flashGreen";
                maestry.style.animationDuration = "2.5s"; // Duration of the animation
                maestry.style.animationTimingFunction = "ease"; // Optional: timing function
                maestry.style.animationFillMode = "forwards";
                maestry.textContent = "Congratulations for starting!";
            }
  
       else if (targetValue === 5) {
                maestry.style.animationName = "darkBlack";
                maestry.style.animationDuration = "2.5s"; // Duration of the animation
                maestry.style.animationTimingFunction = "ease"; // Optional: timing function
                
                maestry.textContent = "creating habits take time. move on";
            }
    
          else if(targetValue === 10) {
              maestry.textContent = "dont forget to pratice with projects"
              maestry.style.backgroundColor = "black"; // Set background color to black
              userLevel.textContent = "low-beginner"
              userLevel.style.animation = 'shake 1s ease';
            recomendedProjects.textContent = "to do list"
              
          }
    
    
    
            else {
                maestry.style.animationName = "darkRed";
                maestry.style.animationDuration = "2.5s"; // Duration of the animation
                maestry.style.animationTimingFunction = "ease"; // Optional: timing function
                maestry.style.animationFillMode = "forwards";
                maestry.textContent = "maestry still low"
            }
        
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

    // Load default topic (optional)
    loadTopicContent('javascript');

});

