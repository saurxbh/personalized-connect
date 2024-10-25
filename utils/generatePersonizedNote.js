// Generate a personalized note based on the person's profile
  const  generatePersonalizedNote = () => {
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

  export default generatePersonalizedNote;