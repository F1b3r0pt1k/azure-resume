window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = "https://resume4747.azurewebsites.net/api/GetResumeCounter?code=WPBtQzhG1uLrOpXt3iH5nlYx1yHGT6rEiUXyulKkGCK4AzFupJORQQ=="
const localFunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called funntion API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error)
    });
    return count;
}