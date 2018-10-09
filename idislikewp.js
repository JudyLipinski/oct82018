function($) { 
    $(document).ready(function() {
        $("#p-std-temp-pressure input:radio").click( function() {
            console.log("temppppp-pressure",$(this).val());
            // if ($(this).val() === '1') {
            // myFunction();
            // } else if ($(this).val() === '2') {
            // myOtherFunction();
            // }
            
        });
    });
}(jQuery)
    