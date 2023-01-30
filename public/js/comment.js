
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
const commentHandler = async (event) => {
    event.preventDefault();
    const text = document.querySelector('#comment-text').value.trim();
    const blogUrl = window.location.href;
    console.log(`blog URL is ${blogUrl}`);
    const blogUrlArray = blogUrl.split('/');
    console.log(blogUrlArray);
    const blog_id = blogUrlArray[4];
    console.log(`blog_id is ${blog_id}`);
    console.log(`testing commentext ${text}`);

    if (text) {
        const response = await fetch(`/api/comments/` + blog_id, {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/blog/' + blog_id);
        } else {
            alert('Failed to create comment');
        }
    }
};

document.querySelector('#comment-button').addEventListener('click', commentHandler);

/* 
<button onclick="myFunction()">Add Class</button>

<script>
function myFunction() {
  document.getElementById("myH1").setAttribute("class", "democlass"); 
}
</script> */