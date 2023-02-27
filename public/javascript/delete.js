const deletePostHandler = async function(event) {
    event.preventDefault();
    
    // get the post ID from the form
    const postId = document.getElementById('post-id')
  
    fetch("/api/userPost/" + postId.value, {
      method: "delete"
  })
  .then(function() {
      document.location.replace("/dashboard");
  })
  .catch(err => console.log(err))
}
console.log('about to add event listener to delete button');
document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);