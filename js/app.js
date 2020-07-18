

function getRepos(username){

  fetch(`https://api.github.com/users/${username}/repos`)
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

const handleFormSubmit = function () {
  $('#gh').submit((event) => {
    let username = $('input').val();
    event.preventDefault();
    console.log(username);
    getRepos(username);
  });
};

const main = function () {
  console.log('dom is loaded');
  handleFormSubmit();

};

$(main);
