//TODO: create events for the profile path to hanlde saving and deleting both history and wishlist information


const newFormHandler = async (event) => {
    event.preventDefault();
  
    const destination = document.querySelector('#destination').value.trim();
    const cost = document.querySelector('#cost').value.trim();
    const landmarks = document.querySelector('#landmarks').value.trim();
    const duration = document.querySelector('#duration').value.trim();

  
    if (destination && cost && landmarks && duration) {
      const response = await fetch(`/api/history`, {
        method: 'POST',
        body: JSON.stringify({ destination, cost, landmarks, duration }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        
        document.location.replace('/profile');
      } else {
        alert('Failed to create history');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      // TODO: /history{history.id}???
      const response = await fetch(`/api/history/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete history');
      }
    }
  };
  // TODO: connect to history/wishlist
  document
    .querySelector('.new-history-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.history-list')
  //   .addEventListener('submit', delButtonHandler);
  