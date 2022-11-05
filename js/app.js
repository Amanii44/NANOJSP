document.addEventListener('DOMContentLoaded', function () {

  // get all sections on the page
const sections =document.querySelectorAll("section");
 // get the ul on the page
const ul =document.querySelector("ul");


/*In this method I create "li" equal to the number of sections
and add a specific link for every li
finally I put all of it in the "ul"
*/
for (let i = 0; i < sections.length; i++) {
  const li =document.createElement('li');

    const linkd=sections[i].getAttribute('id');
         
                // Create "a" element.
                const a = document.createElement('a'); 
                  
                // Create the text node for "a" element.
                const link = document.createTextNode(sections[i].getAttribute('data-nav'));
                  
                // Append the text node to "a" element.
                a.appendChild(link); 
                  
                // Set the href property.
                a.href = `#${linkd}` ;
                  
                // Append the "a" element to the "li".
                li.appendChild(a); 

    ul.appendChild(li);
  } 


/*Here I created a smooth scroll 
  for each link "a"
*/
    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            const hash = this.hash;
    
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
    
              window.location.hash = hash;
            });
          } 
        });
      });
    

/*Here I made the section active using distance 
  and classList to add or remove a css style(class)
*/
window.addEventListener('scroll', (e) => {

  // loop through each sections
  sections.forEach( section => {

    // get px distance from top
    const topDistance = section.getBoundingClientRect().top;

    // if the distance to the top is between -2 to 150px
    if (topDistance > -2 && topDistance < 150) {
      section.classList.add('your-active-class')


    // otherwise, remove the class
    } else {
      section.classList.remove('your-active-class')

    }
  });
});

// I used addEventListener to add a highlight to the menu bar

const lis =document.querySelectorAll("li");

lis.forEach( li => {

li.addEventListener("click", mouseOver);
li.addEventListener("mouseout", mouseOut);

function mouseOver() {
  li.classList.add('liclick');
}

function mouseOut() {
  li.classList.remove('liclick');
}
});

//
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
     
  window.scrollTo({top: 0, behavior: 'smooth'});
}
mybutton.addEventListener("click", topFunction);


});