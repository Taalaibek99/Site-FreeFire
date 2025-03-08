function getLikes() {
    const uid = document.getElementById("uid").value;
    if (!uid) {
        alert("Please enter a UID!");
        return;
    }

    const url = `https://freefire-virusteam.vercel.app/likes?key=Taalaimodz444&uid=${uid}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML = `<p>Likes: ${data.likes || "Not available"}</p>`;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = `<p style="color: red;">Error fetching data</p>`;
            console.error("Error:", error);
        });
}
