
$(document).ready(function () {
    //editor code
    ClassicEditor
        .create( document.querySelector( '#body' ) )
        .catch( error => {
            console.error( error );
        } );
    //Rest of the code


});

