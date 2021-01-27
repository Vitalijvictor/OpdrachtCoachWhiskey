
$('#haal_data_op').on('click', function(){
    $.ajax({
        url:"data/whisky.txt",
        type: "GET", 
        dataType: "html", 
        success: function(result) {
            $("#accordion").html(result);

            if (document.querySelector('#accordion').classList == ''){
                $('#accordion').accordion();
            }
            else {$('#accordion').accordion('destroy').accordion();}
        
            
        }                        
    });
});