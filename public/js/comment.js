
//handle accordion stuff
/* const getCollapsed = document.getElementsByClassName('#collapse');




const getAccordionStatus = commentSection.getAttribute('class');
const accordionHandler = (event) => {
    event.preventDefault();
    if (getAccordionStatus = 'collapse') {
        setAttribute('class', 'collapse show')
    }
};

document.querySelector().addEventListener('click', accordionHandler);

 */
//handle adding a comment
/* const commentHandler = async (event) => {
    event.preventDefault();
    const commentText = document.querySelector('#comment-text').value.trim();
    console.log(`testing commentext ${commentText}`);

    if (commentText) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ commentText }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/blog');
        } else {
            alert('Failed to create comment');
        }
    }
};

document.querySelector('#comment-input').addEventListener('submit', commentHandler);
 */
/* 
<button onclick="myFunction()">Add Class</button>

<script>
function myFunction() {
  document.getElementById("myH1").setAttribute("class", "democlass"); 
}
</script> */