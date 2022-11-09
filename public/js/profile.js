//TODO: create events for the profile path to hanlde saving and deleting both history and wishlist information


const newHisFormHandler = async (event) => {
    event.preventDefault();
    console.log('prevented?')
    const destination = document.querySelector('#hdestination').value.trim();
    const cost = document.querySelector('#hcost').value.trim();
    const landmarks = document.querySelector('#hlandmarks').value.trim();
    const duration = document.querySelector('#hduration').value.trim();

  
    if (destination && cost && landmarks && duration) {
      const response = await fetch(`/api/history`, {
        method: 'POST',
        body: JSON.stringify({ destination, cost, landmarks, duration, }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {

        document.location.replace('/');
      } else {
        alert('Failed to create history');
      }
    }
  };

  const newWishFormHandler = async (event) => {
    event.preventDefault();
    console.log('prevented?')
    const destination = document.querySelector('#destination').value.trim();
    const budget = document.querySelector('#budget').value.trim();
    const landmarks = document.querySelector('#landmarks').value.trim();
    const duration = document.querySelector('#duration').value.trim();

  
    if (destination && budget && landmarks && duration) {
      const response = await fetch(`/api/wishlist`, {
        method: 'POST',
        body: JSON.stringify({ destination, budget, landmarks, duration, }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {

        document.location.replace('/');
      } else {
        alert('Failed to create wishlist item');
      }
    }
  };

  
  const delButtonHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      // TODO: /history{history.id}???
      const response = await fetch(`/api/history/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete history');
      }
    }
  };

  const wishDelButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      // TODO: /history{history.id}???
      const response = await fetch(`/api/wishlist/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete history');
      }
    }
  };

  // TODO: connect to history/wishlist
  document
    .querySelector('.new-history-form')
    .addEventListener('submit', newHisFormHandler);
  
  document
    .querySelector('.new-wishlist-form')
    .addEventListener('submit', newWishFormHandler);
  
  document
    .querySelector('.history-card')
    .addEventListener('click', delButtonHandler);

  document
    .querySelector('.wishlist-card')
    .addEventListener('click', wishDelButtonHandler);      
  