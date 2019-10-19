$(document).ready(function() {
    function printName(data) {
        $("h2").text (data.login);
    };

    $("button").click("https://api.github.com/users/GhadeerHS", displayName)
    function displayName(data) {
        $.get("https://api.github.com/users/GhadeerHS", printName)
    };
        
});