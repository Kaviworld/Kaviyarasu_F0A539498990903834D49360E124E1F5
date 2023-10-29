$(document).ready(function () {
    $("#studentForm").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var roll = $("#roll").val();
        $.post("server.php", { name: name, roll: roll }, function (data) {
            $("#response").html(data);
        });
    });
});
