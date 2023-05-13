$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    var items = [];
    var itemClass = '';
    $.each( data, function( key, val ) {
        if(val.category === 'Reaction'){
            itemClass = 'reaction';
        } else if (val.category === 'Memory') {
            itemClass = 'memory';
        } else if (val.category === 'Verbal') {
            itemClass = 'verbal';
        } else {
            itemClass = 'visual';
        }
        items.push( '<div class="' + itemClass + '"><p><span class="sumarySingle"><img src="' + val.icon + '"><span>' + val.category + '</span></span><span>' + val.score + ' / <span class="percent">100</span></span></p></div>');
        
      });
     
      $( "<div/>", {"class": "summaryDetails", html: items.join( "" )
      }).appendTo( ".resultSummarySummary div:first-of-type" );
  });
});
