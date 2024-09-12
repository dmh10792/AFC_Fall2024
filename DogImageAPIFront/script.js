//the button for the image generator
let button = document.querySelector("Button");
//image
let image = document.getElementsByTagName("img");
const baseUrl = "https://dog.ceo/api/breeds"

let imageFetcher = () => {
    let route = "image/random"
    let endpoint = `${baseUrl}/${route}`
    /*chained fetch*/
    fetch(endpoint)//the actual request method
    .then(response => {//then take the response
        //console.log(response)
        if(response.ok) {//if the response is ok
            return response.json()//parse the JSON and give it to the next chained .then method
        } else {//if not ok
            throw Error ("Broken endpoint url")
        }
    })
    .then(data => {
        image[0].setAttribute("src", data["message"])//change the image source attribute
        //console.log("Data: ", data)
    })
    .catch(error => {//error handling
        console.log(error)
        //alert(error)
    })
}

window.onload = () => {
    imageFetcher();
}

/*event listener for what to do when it is clicked*/
button.addEventListener("click", (event) => {
    /*consume the api*/
    //1. endpoint = https://dog.ceo/api/breeds/image/random
    //2. json or xml - json
    //3. how much data - 1 js object with 2 attributes. message = image, status = success
    //4. what does the data look like
    
    /*HTTP Request*/
    
    //2. Get a response: if ok, parse the data, else error
    //3. Do something with the parsed data
    //4. Handle the error

    imageFetcher()
});