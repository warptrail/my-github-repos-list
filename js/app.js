/* eslint-disable strict */
'use strict';

function getRepos(){

  fetch('https://api.github.com/users/warptrail/repos')
    .then(response => {
      console.log(response);
      return response.json();
    }).then(jsonData => extractData(jsonData))
    .catch(error => console.log(error));

}

const extractData = function(data){
  console.log(data);
  data.forEach(repo=>{
    let {
      name,
      html_url,
      created_at,
      description
    } = repo;

    let dateCreated = new Date(created_at);

    let template = createTemplate(name, html_url, dateCreated, description);

    $('.repo').append(template);
  });
};

function createTemplate (name, url, createDate, description) {
  return `<li> ${name} <br> ${url} <br> ${createDate} </br> ${description} </li>`;
}

$(getRepos);