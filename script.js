var database = [
    {
        username: "Saroj",
        password: "123"
    },
    {
        username: "Subash",
        password: "1234"
    }
];

var newsFeed = [
    {
        username: "Subash",
        timeline: "I want to learn JavaScript!!"
    },
    {
        username: "Alisha",
        timeline: "I also want to learn JavaScript!!"
    }
];

var userNamePrompt = prompt("Enter yout Username.");
var passwordPrompt = prompt("Enter yout Password");

function signin(user, pass){
    if(user === database[0].username && pass === database[0].password){
        alert("Welcome " + " " + database[0].username + ".");
        document.getElementById("a").innerHTML = newsFeed[0].username +"<br>"+ newsFeed[0].timeline+"<br>"+"<br>"+
        newsFeed[1].username +"<br>"+ newsFeed[1].timeline;
        console.log(newsFeed);
    }
    else if
        (user === database[1].username && pass === database[1].password){
            alert("Welcome " + " " + database[1].username + ".");
            document.getElementById("a").innerHTML = newsFeed[0].username +"<br>"+ newsFeed[0].timeline+"<br>"+"<br>"+
            newsFeed[1].username +"<br>"+ newsFeed[1].timeline;
            console.log(newsFeed);
    } else{
        alert("The credentialls are incorrect! Please try again.")
    }
}

signin(userNamePrompt, passwordPrompt);