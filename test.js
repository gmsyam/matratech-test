function cachestorage(){
    if (typeof(Storage) !== "undefined") {
        // Store
        handlerequest();
      } else {
        document.getElementsByClassName("cache")[0].innerHTML = JSON.stringify(localStorage.getItem("Data"));
    }
    }
    
function handlerequest() {
        //Created posts api using express which is hosted in the following location
        let url = 'http://localhost:3000/api/posts/'
        axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        setCacheStorage(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
}

function setCacheStorage(responseData){
    localStorage.setItem("Data", JSON.stringify(responseData));
    // Retrievecac
    document.getElementsByClassName("cache")[0].innerHTML = '<h6>Cache data </h6>' + JSON.stringify(localStorage.getItem("Data"));
    localStorage.removeItem("lastname");
}

function filterItemsinArray(){
    let filteredArray = [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}].filter(val =>{ if(val.type === 'external') return val});
    console.log('filterItemsinArray called',filteredArray);
   document.getElementsByClassName('filter')[0].innerHTML =  '<h6>Filter Array </h6>' + JSON.stringify(filteredArray);
}

