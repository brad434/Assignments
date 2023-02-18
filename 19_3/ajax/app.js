//AJAX WITH AXIOS

//Making a Simple Request
//axios.get(url);
//make a GET request to that url above

//AJAX requests are asynchronous
//the Axios.get() completes before the response is received
//

//const response = axios.get("https://swapi.dev/api/planets"); //this will produce a promise (a future value that is like a placeholder)

async function getData() {
  const response = await axios.get("https://swapi.dev/api/people");
  //   console.log(response);
  //   console.log("THIS LINE IS AFTER THE AXIOS.GET");
  for (let name of response.data.results) {
    console.log(name.name);
  }
}
