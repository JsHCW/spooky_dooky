$('#historyPage').click(historyPage);
$('#culturePage').click(culturePage);
$('#foodPage').click(foodPage);
$('#touristPage').click(touristPage);
$('#referencePage').click(referencePage);




//顯示頁面

function historyPage() {
    $('.page').hide();
    $('#HistoryPage').show();
    $('.tab').removeClass('active');
    $('#historyPage').addClass('active');
}



function culturePage() {
    $('.page').hide();
    $('#CulturePage').show();
    $('.tab').removeClass('active');
    $('#culturePage').addClass('active');
}

function foodPage() {
    $('.page').hide();
    $('#FoodPage').show();
    $('.tab').removeClass('active');
    $('#foodPage').addClass('active');
}

function touristPage() {
    $('.page').hide();
    $('#TouristPage').show();
    $('.tab').removeClass('active');
    $('#touristPage').addClass('active');
}

function referencePage() {
    $('.page').hide();
    $('#ReferencePage').show();
    $('.tab').removeClass('active');
    $('#referencePage').addClass('active');
}