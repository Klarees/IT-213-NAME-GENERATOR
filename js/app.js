document.querySelector('#generate-names').addEventListener('submit', loadNames);



//Execute the function to query the API
function loadNames(e) {
    e.preventDefault();



    //read the values from the form and create the variables
    const origin = document.getElementById('country'.value);
    const genre = document.getElementById('genre'.value);
    const amount = document.getElementById('amount'.value);

    //Build the URL
    let url = 'http://randomuser.me/api/?';
    //Read the Origin and Append to the URL
    if(origin !== '') {
        url += 'region=${origin}&';
    }
    //Read the Genre and Append to the URL
    if(genre !== ''){
        url += 'genre=${genre}&';
    }
    //Read the Amount and Append to the URL
    if(amount !== ''){
        url += 'amount=${amount}&';
    }


    //Get API
    fetch(url)
    .then(res => res.json())
    .then(data => {
        //console.log(data);

        let names = data.results;

        //Insert into the HTML
        let html = "<h2><center>Generated Names</center></h2>"
        html += '<ul class="list">';
        names.forEach(function(name) {
            html += `
                <li>${name.name.first}</li>
            `;
        })
        html += '</ul>';

        document.querySelector('#result').innerHTML = html;
    });

}

