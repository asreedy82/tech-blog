

//handle adding a blog
const blogHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#blog-title').value.trim();
    const text = document.querySelector('#blog-text').value.trim();

    if (title && text) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog');
        }
    }
};

//handle adding a comment
/* const commentHandler = async (event) => {
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
}; */

//handle blog edits
const updateBlog = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#update-title').value.trim();
    const text = document.querySelector('#update-text').value.trim();
    const blog_id = event.target.getAttribute('data-id');
    console.log(`blog_id is ${blog_id}`);
    console.log(`testing commentext ${text}`);

    if (text) {
        const response = await fetch(`/api/blogs/` + blog_id, {
            method: 'PUT',
            body: JSON.stringify({ title, text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/blog/' + blog_id);
        } else {
            alert('Failed to update blog');
        }
    }
};

/* document.querySelector('#comment-button').addEventListener('click', commentHandler); */
document.querySelector('#save-button').addEventListener('click', blogHandler);
document.querySelector('#update-save-button').addEventListener('click', updateBlog);

