
$(document).ready((() => {
    
    $('.recipeItem').click(() => {
        $('#details').modal('show');
    });

    $('#details').attr('style', "padding-left: 15px !important");

}));
