window.addEventListener("load", function() {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function(response) {
    response.json().then(function(json) {
      let sortedJson = json.sort(function(a, b) {
        return b.hoursInSpace - a.hoursInSpace;
      });
      let astronautCount = 0;
      for (let i = 0; i < sortedJson.length; i++) {
        let turnGreen;
        if (sortedJson[i].active === true) {
          turnGreen = "active";
        } else {
          turnGreen = "inactive";
        }
        container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h2>${sortedJson[i].firstName} ${sortedJson[i]
          .lastName}</h2>
                        <ul>
                            <li>Hours in space: ${sortedJson[i]
                              .hoursInSpace}</li>
                            <li class="${turnGreen}">Active: ${sortedJson[i]
          .active}</li>
                            <li>Skills: ${sortedJson[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${sortedJson[i]
                      .picture} alt="Astronaut in their uniform">
                </div>`;
        astronautCount += 1;
      }
      container.innerHTML += `<h3>Astronaut count : ${astronautCount}</h3>`;
    });
  });
});
