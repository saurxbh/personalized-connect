import handleConnectionRequest from "./utils/handleConnectionRequest";

// Inject "Send Connection Request" button next to Connect/Message button
function injectButton() {
    const buttonParent   = document.querySelector(".pvs-profile-actions__action button") || document.querySelector(".entry-point.profile-action-compose-option");

    
    if (buttonParent && !document.getElementById('send-custom-connection')) {
      const customButton = document.createElement('button');
      customButton.innerText = "Send Connection Request";
      customButton.id = "send-custom-connection";
      customButton.className = "artdeco-button artdeco-button--2 artdeco-button--primary ember-view";
      buttonParent.appendChild(customButton);
      
      customButton.addEventListener('click', () => {
        handleConnectionRequest();
      });
    }
  }
  
  
  
  // Generate a personalized note based on the person's profile
  function generatePersonalizedNote() {
    let note = "Hi, I'd like to connect!";
    
    // Extract school and company information (mock data for now)
    const school = document.querySelector('.pv-entity__school-name')?.innerText;
    const company = document.querySelector('.pv-entity__company-summary-info')?.innerText;
    
    if (school) {
      note = `Hi, I noticed you studied at ${school}. I'd love to connect and learn more about your experience!`;
    } else if (company) {
      note = `Hi, I see you worked at ${company}. I'd be excited to connect and exchange ideas!`;
    }
  
    return note;
  }
  
  // Run the script when the page loads
  window.onload = injectButton();
  