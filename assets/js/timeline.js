// Get all the sections
const section = document.selectElementByClassName('timeline_container');

// Function to check if a section is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add animation class to sections in viewport
function addAnimationToVisibleSections() {
  // sections.forEach(section => {
  //   if (isInViewport(section)) {
  //     section.classList.add('animate');
  //   }
    
  // });
  if (isInViewport(section)) {
    section.classList.add('animate');
    console.log("added")
  }
}

// Event listener for scroll event
document.addEventListener('scroll', addAnimationToVisibleSections);

// Initially check for sections in viewport
addAnimationToVisibleSections();

