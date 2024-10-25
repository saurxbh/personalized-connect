import generatePersonalizedNote from "./generatePersonizedNote";

// Function to open the "Add a Note" dialog and auto-fill the note
const handleConnectionRequest = () => {
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

export default handleConnectionRequest;