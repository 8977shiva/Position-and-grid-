$(document).ready(function () {
    $('#Right').click(()=>{
        // alert('w')
        $('#center').css('left','0');
    });
    $('#Bottom').click(()=>{
        console.log('w')
        $('#center').css("top",'10px');
    })
    $('#Left').click(()=>{
        console.log('l')
        $('#center').css("left",'40%');
    })
});



