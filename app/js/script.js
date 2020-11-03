const dataURL = '/data/resume.json';

fetch(dataURL)
  .then(res => res.json())
  .then(data => {
    // code to handle response
    console.log(data);
  }).catch(err => {
    //code to handle errors
    console.error('Error: ', err);
  });
