const blokich = document.createElement('div');


fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    json.forEach(element => {
      blokich.insertAdjacentHTML('afterbegin', element.title);
    });
    document.body.append(blokich);
  });

