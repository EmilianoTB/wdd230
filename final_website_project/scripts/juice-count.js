const juiceCount = document.getElementById('juice-count');

if (localStorage.getItem('juiceCount') === null) {
    // If the juice count is not set, display a button to create one
    juiceCount.innerHTML = '<p>You have not created any juice, do it right now!</p> <br> <a id="create-juice-btn" href="fresh.html" >Create a juice</a>';
  
    // Add an event listener to the button to create a juice
    const createJuiceBtn = document.getElementById('create-juice-btn');
    createJuiceBtn.addEventListener('click', () => {
      localStorage.setItem('juiceCount', 1);
      juiceCount.innerHTML = '1 juice created';
    });
  } else {
    // If the juice count is set, display the count
    const count = localStorage.getItem('juiceCount');
    juiceCount.innerHTML = `${count} juice${count === '1' ? '' : 's'} created`;
  }