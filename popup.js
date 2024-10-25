document.getElementById('saveNote').addEventListener('click', () => {
    const customNote = document.getElementById('customNote').value;
    
    // Save the note in Chrome storage
    chrome.storage.sync.set({ note: customNote }, () => {
      alert('Note saved!');
    });
  });
  