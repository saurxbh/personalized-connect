// Generate a personalized note based on the person's profile
  const  generatePersonalizedNote = () => {
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

  export default generatePersonalizedNote;