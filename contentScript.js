// Inject "Send Connection Request" button next to Connect/Message button
function injectButton() {
    const buttonSibling = document.querySelector(".distance-badge");
    console.log(buttonSibling);

    
    if (buttonSibling && !document.getElementById('send-custom-connection')) {
      const customButton = document.createElement('button');
      customButton.innerText = "Send Connection Request";
      customButton.id = "send-custom-connection";
      customButton.className = "artdeco-button artdeco-button--2 artdeco-button--primary ember-view";
      buttonSibling.parentNode.appendChild(customButton);
      
      customButton.addEventListener('click', () => {
        handleConnectionRequest();
      });
    }
  }

// Function to open the "Add a Note" dialog and auto-fill the note
function handleConnectionRequest() {
    const connectButton = document.querySelector("button[aria-label='Connect']");
    
    if (connectButton) {
      connectButton.click();
      
      // Wait for the Add Note button to appear, then click it
      setTimeout(() => {
        const addNoteButton = document.querySelector("button[aria-label='Add a note']");
        if (addNoteButton) {
          addNoteButton.click();
          
          // Wait for the textarea to appear and auto-fill the note
          setTimeout(() => {
            const noteTextArea = document.querySelector('textarea[name="message"]');
            if (noteTextArea) {
              const noteMessage = generatePersonalizedNote();
              noteTextArea.value = noteMessage;
  
              // Optionally, you can also click the "Send" button automatically
              // const sendButton = document.querySelector("button[aria-label='Send now']");
              // if (sendButton) sendButton.click();
            }
          }, 1000);
        }
      }, 1000);
    }
}

 // Generate a personalized note based on the person's profile
 function generatePersonalizedNote() {
  let note = "Hi, I'd like to connect!";
  let isSchool = false;
  let isCompany = false;
  let name = "";
  let company = ""

  try {
      name = document.querySelector('h1').textContent.split(" ")[0];
      company = document.querySelector('.inline-show-more-text--is-collapsed').textContent.split(" ")[0];
  } catch {
      name = "NAME";
      company = "COMPANY";
  }
  
  // Extract school and company information (mock data for now)
  document.querySelectorAll('span[aria-hidden="true"]').forEach(entity => {
      if (entity.textContent.includes("You both worked at Tata Consultancy Services")) isCompany = true;
      if (entity.textContent.includes("You both studied at Syracuse University")) isSchool = true;
  })
  
  if (isSchool && isCompany) {
    note = `Hi, ${name}. Hope you are doing well. I came across your profile and saw that 
    you're an alumnus of TCS and SU, institutions I was a part of, too. I have found 
    an exciting SDE opportunity at ${company}. Would you be so kind as to provide a referral 
    for, or share insights about the same? Thank you!`;
  } else if (isSchool) {
    note = `Hi, ${name}. Hope you are doing well. I came across your profile and saw 
    that you're an alumnus of Syracuse. I recently got my Masters from SU, too. I have 
    found an exciting SDE opportunity at ${company}. Would you be so kind as to provide a referral 
    for, or share insights about the same? Thank you!`;
  } else if (isCompany) {
      note = `Hi, ${name}. Hope you are doing well. I came across your profile and saw that you're 
      an alumnus of TCS. I started my professional journey with TCS, too. I have found an exciting 
      SDE opportunity at ${company}. Would you be so kind as to provide a referral for, or share 
      insights about the same? Thank you!`;
  } else {
      note = `Hi, ${name}. I hope you're doing well. I’m a Software Developer with an MS in CS from 
      Syracuse with 2+ years of experience. I recently applied to an SDE New Grad role at ${company} 
      and wanted to express my interest. I'd be very grateful if you kindly considered my application. 
      Thank you for your time!`;
  }

  if (note.length > 300) {
      note = note.replace("Thank you", "Thanks");
  }
  
  return note;
}
  
// Run the script when the page loads
window.onload = injectButton();
  