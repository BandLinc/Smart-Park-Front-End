var allSpots;

const APP_URL = 'https://smartpark01.herokuapp.com';


$(document).ready(function(){

    $.ajax({
        url: APP_URL + '/packingspot',
        method: 'GET',
        dataType: 'json',
        success: function(data)
        {
            $('#display-spots').html( renderSpots(data) );
            $('#display-spots span').remove();
        }
    });

});

function renderSpots(data)
{
    var html = '';
    data.forEach(spot => {
        html += spotCard(spot);
    });

    return html;
}

function spotCard(spot)
{
    return '<div class="col-sm-4 ">' +
        '<div class="card bg-'+(spot.access_type == 'Public' ? 'info' : 'warning' )+'">' +
            '<h1>'+spot.spot_name+'</h1>' +
            '<p>Loc: '+spot.parking_lot+'</p>' +
            '<p>'+spot.access_type+' Spot</p>' +
            '<p><strong>'+spot.cost+'/=</strong> Per '+(spot.access_type == 'Public' ? 'day' : 'hour' )+'</p>' +
            '<p>' + (spot.availability == 'Yes' ? 'Available' : 'Not Available')+'</p>' +
            '<button class="btn btn-danger btn-sm">SELECT</button>' +
        '</div>' +
    '</div>';
}