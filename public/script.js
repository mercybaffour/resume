

//GET API REQUEST
async function getVisits() {
    try {
        let response = await fetch('https://5exwtt2sz1.execute-api.us-east-1.amazonaws.com/Prod/count');
        let data = await response.json();
        console.log(data);
        document.querySelector("#visits").innerHTML = data['visitorCount'];
        return data;
    } catch (err) {
        console.error(err);
    }
}

getVisits();




