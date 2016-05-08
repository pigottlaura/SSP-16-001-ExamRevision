$(document).ready(function () {
    console.log("Document Ready");

    var socket = io();

    $("#messageBox").submit(function (event) {

        if ($("#newMessage").val().length > 0) {
            socket.emit("chatMsg", {username: $("#username").val(), message: $("#newMessage").val()});

            $("#newMessage").val("").focus();
        }

        return false;
    });

    socket.on("chatMsg", function (data) {
        console.log("Message Received - " + data);
        $("#messageLog").prepend($('<li>').text(data.username + ": " + data.message));
    });
});