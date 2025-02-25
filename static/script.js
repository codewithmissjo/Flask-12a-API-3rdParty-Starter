function postit() {
    fetch("/api/number",
        {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify("1")
        }).then( (response) => { 
            return response.text();
        }).then( (data) => {
            document.getElementById('responsestuff').innerHTML = data;
        });
}