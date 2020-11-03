// import { compile } from 'handlebars';

const dataURL = '/data/resume.json';
const resumeBuilderContainer = document.querySelector('#resume-builder-container');
const resumeTemplate = document.querySelector('#resume-template').innerHTML;

const compiledResumeTemplate = Handlebars.compile(resumeTemplate);

fetch(dataURL)
  .then(res => res.json())
  .then(data => {
    // code to handle response
    // console.log(data);
    resumeBuilderContainer.innerHTML = compiledResumeTemplate(data);
  }).catch(err => {
    //code to handle errors
    console.error('Error: ', err);
  });
