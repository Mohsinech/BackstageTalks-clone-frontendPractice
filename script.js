document.addEventListener('DOMContentLoaded', () => {
    // Define color mappings for each section
    const colors = {
      'issue8': '#f6e0a4',
      'issue7': '#ff608c',
      'issue6': '#FFF',
      'issue5': '#00c1b5',
      'issue4': '#ff6519',
      'issue3': '#ffbe00',
      'issue2': '#1d3fbb',
      'issue1': '#E30512'
    };
  
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.issues_sections a');
  
    // Create an IntersectionObserver to detect when sections are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const color = colors[sectionId];
          document.body.style.backgroundColor = color;
          
          // Update the URL hash without scrolling
          history.replaceState(null, null, `#${sectionId}`);
          
          // Highlight the active link
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').substring(1) === sectionId);
          });
        }
      });
    }, { threshold: 0.5 }); // Adjust the threshold as needed
  
    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Add smooth scrolling behavior for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Remove the hash #
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  

/**
 * Author rights
 */

document.addEventListener("DOMContentLoaded", authorRight);

function authorRight() {
  const user = document.querySelector(".user");
  const popupInfo = document.querySelector(".popup_info");
  const exitGreting = document.getElementById("exit");

  let Hellouser = prompt("Hello, let's meet, What's your name?");
  alert(`Nice to meet you ${Hellouser}, my name is mohsine`);
  user.textContent = Hellouser;

  exitGreting.addEventListener("click", () => {
    popupInfo.style.display = "none";
  });
}
