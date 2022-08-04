const commentFormHandler = async (event) => {
    event.preventDefault();

    const project_id = document.querySelector('.new-comment-form').value.trim()
    const comment_description = document.querySelector('#comment_description').value

    if (comment_description) {
        const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ project_id, comment_description }),
        headers: {
            'Content-Type': 'application/json',
        },
        });

        if (response.ok) {
        document.location.replace('/profile');
        } else {
        alert('Failed to create blog');
        }
    }
};

document
    .querySelector('.new-project-form')
    .addEventListener('submit', commentFormHandler);
