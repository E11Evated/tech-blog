const editFormHandler = async function(event) {
    event.preventDefault();

    const titleEl = document.getElementById('post-title');
    const bodyEl = document.getElementById('post-body');
    const postId = document.getElementById('post-id');

    fetch("/api/userPost/" + postId.value, {
        method: "PUT", 
        body: JSON.stringify({
            title: titleEl.value,
            body: bodyEl.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            console.log('Post updated successfully!');
            document.location.replace("/dashboard");
        })
        .catch(err => {
            console.log('Error updating post:', err);
            // Handle the error (e.g., display an error message to the user)
        });
};

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);