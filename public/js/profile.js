//TODO: create events for the profile path to hanlde saving and deleting both history and wishlist information


const newFormHandler = async (event) => {
    event.preventDefault();
    console.log('working')
    const destination = document.getElementById('destination').value.trim();
    const cost = document.getElementById('cost').value;
    const landmarks = document.getElementById('landmarks').value.trim();
    const duration = document.getElementById('duration').value.trim();

  
    if (destination && cost && landmarks && duration) {
      const response = await fetch(`/api/historyLog`, {
        method: 'POST',
        body: JSON.stringify({ destination, cost, landmarks, duration }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(cost)
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
      const response = await fetch(`/api/historyLog/${id}`, {
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
  