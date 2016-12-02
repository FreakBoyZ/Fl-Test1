// a cross reference of area names to text to be shown for each area

function changebackColor(cclr) {
    document.getElementById('rec1').style.backgroundColor = cclr;
    //document.getElementById('para1').innerHTML = cclr;

    $("#para1").text(cclr);
}
var username = "admin";
var password = "futurefibaro123";

function make_base_auth(user, password){
    var tok = user + ':' + password;
    var hash = btoa(tok);
    alert(hash);
    return "Basic " + hash;
}

$(function (){
    $.ajax({
        type: 'GET',
        url: 'http://192.168.3.180/api/devices/22',
        datatype: 'json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', make_base_auth(username, password));
        },
        success: function(data){
            console.log(data);
        }
   });
});

