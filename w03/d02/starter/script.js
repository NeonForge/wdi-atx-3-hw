$(document).ready(function() {
    var count = 0;

    $("#add").click(function() {
        var a1 = $("#a1").val();
        console.log(a1);
        var a2 = $("#a2").val();


        console.log(a2);
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        var add = (a1 + a2);
        $("#a3").append("<li>" + add + "</li>");

        count += 1;

        localStorage.setItem('log' + count, add);


    });

    $("#sub").click(function() {
        var a1 = $("#a1").val();
        console.log(a1);
        var a2 = $("#a2").val();


        console.log(a2);
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        var sub = (a1 - a2);
        $("#a3").append("<li>" + sub + "</li>");
        localStorage.setItem('log', sub);

        count += 1;

        localStorage.setItem('log' + count, sub);
    });

      $("#mul").click(function() {
        var a1 = $("#a1").val();
        console.log(a1);
        var a2 = $("#a2").val();


        console.log(a2);
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        var mul = (a1 * a2);
        $("#a3").append("<li>" + mul + "</li>");

        count += 1;

        localStorage.setItem('log' + count, mul);
    });

        $("#div").click(function() {
        var a1 = $("#a1").val();
        console.log(a1);
        var a2 = $("#a2").val();


        console.log(a2);
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        var div = (a1 / a2);
        $("#a3").append("<li>" + div + "</li>");
        localStorage.setItem('log', div);

        count += 1;

        localStorage.setItem('log' + count, div);
    });
});
