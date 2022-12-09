const rest_url = "http://127.0.0.1:5000";
// const python_url = "http://127.0.0.1:5000";
// const node_url = "http://127.0.0.1:3000";

async function loadTeamMembers() {
  url = rest_url + "/demo/data"
  headers = {
    'Access-Control-Allow-Origin': "*"
  }
  const response = await fetch(url, {headers: headers});
  return response.json();
}

window.onload = function loadTeamMembersList() {
  let teamList = document.getElementById("teamList");
  let data = loadTeamMembers();

  data.then((items) => items.forEach((item) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = item.name;
        teamList.append(listItem);
  }));
}
