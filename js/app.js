let SportsApi = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let BusinessApi = "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let EntertainmentApi = "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let HealthApi = "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let ScienceApi = "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=b46fdfa2b0a442c8a8126246904c8368";
let TechnologyApi = "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b46fdfa2b0a442c8a8126246904c8368";

//................sports news starts from here...........

window
	.fetch(SportsApi)
	.then(SportsData => {
		SportsData.json()
			.then(sports => {
				let SportsInfo = sports.articles;
				let firstSportsBlock = sports.articles;
				let sportsnewsBlockOne = firstSportsBlock[0];
				document.getElementById("sportsFirstTemplate").innerHTML = `
				<ul>
					<img src="${sportsnewsBlockOne.urlToImage}" />
					<a href="${sportsnewsBlockOne.url}" target="_block">
						<li class="text-dark">${sportsnewsBlockOne.title}</li>
					</a>
				</ul>
				`;
				let output = [];
				for (let sport of SportsInfo) {
					//console.log(sport);
					output += `
					<ul class="list-group">							
						<a href="${sports.url}" target="_blank" >
							<li class="text-dark">${sport.title}</li>
						</a>
					</ul>	
					`;
					document.getElementById("sportsAllTemplate").innerHTML = output;
				}
			})
			.catch(err => console.log(err));
	})
	.catch(err => console.log(err));
//...........................................................................................................................

//......................entertainment api......................









	let entertainmentApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=92139d3d64d84f04ab9e536b562f56d2";

window
  .fetch(entertainmentApi)
  .then((entertainmentData) => {
    entertainmentData
      .json()
      .then((entertainment) => {
        console.log(entertainment.articles);
        let entertainmentFeed = entertainment.articles;
        let output = [];
        for (let enter of entertainmentFeed) {
          console.log(enter);
          let date = new Date(enter.publishedAt).toDateString();
          output += `
            <div class="row">
            <div class="col-md-5">
                <img src="${enter.urlToImage}" class="enterImg" />
            </div>
            <div class="col-md-7">
            <ul class="list-group">
             <a href="${enter.url}" target="_blank">
               <li class="text-dark">
              ${enter.title}</li></a>
              <span class="text-muted text-right">publishedAt : ${date}</span>
            </ul>
            </div>
            </div>
          `;
          document.getElementById(
            "entertainmentAllTemplate"
          ).innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));


  