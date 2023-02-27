const deleteHandler = async function(event) {
    event.preventDefault();
    
    // get the post ID from the form
    const postId = document.querySelector('input[name="post-id"]').value;
  
    // send a DELETE request to the server
    const response = await fetch(`/api/userPost/${postId}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      // redirect to the dashboard page if the post was deleted
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  };
  
  // add a click event listener to the delete button
  const deleteBtn = document.querySelector('#delete-btn');
  deleteBtn.addEventListener('click', deleteHandler);