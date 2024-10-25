import handleConnectionRequest from "./utils/handleConnectionRequest";

// Inject "Send Connection Request" button next to Connect/Message button
function injectButton() {
    const buttonParent = document.querySelector(".entry-point.profile-action-compose-option");

    
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
  
// Run the script when the page loads
window.onload = injectButton();
  