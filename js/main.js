
/*
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'cellsByColumn',
  cellsByColumn: {
    columnWidth: 110,
    rowHeight: 110
  },
  getSortData: {
      name: '.name',
      organisation_structure: function( itemElem ) {
       
        var org_type = $( itemElem ).find('.organisation-structure').attr('data-organisation-structure'); 
        console.log(org_type);

        return parseFloat(org_type);
      }, 
      exchange_mechanism: '.exchange-mechanism', 
      resource_structure: '.resource-structure',
      resource_type: function( itemElem ) {

          var org_type = $( itemElem ).find('.resource-type').attr('data-resource-type'); 
          console.log(org_type);

          return parseFloat(org_type);
      }
  }
});
*/


$('.exchange_mechanism_btn').click(function(){ 
  
  $('.grid-item').fadeOut();


  setTimeout(function(){ 
    $('.grid-item').each(function(key,elem){ 
      var type = $(elem).find('.exchange-mechanism').data("exchange-mechanism");
      $(elem).appendTo('.category-column-'+type);
      $(elem).fadeIn({queue:true});
    });    
  }, 380);

});


$('.resource_structure_btn').click(function(){ 
  
  $('.grid-item').fadeOut();


  setTimeout(function(){ 
    $('.grid-item').each(function(key,elem){ 
      var type = $(elem).find('.resource-structure').data("resource-structure");
      $(elem).appendTo('.category-column-'+type);
      $(elem).fadeIn({queue:true});
    });    
  }, 380);

});


$('.fractional_capacity_btn').click(function(){

  $('.grid-item').fadeOut();


  setTimeout(function(){ 
    $('.grid-item').each(function(key,elem){ 
      var type = $(elem).find('.fractional_capacity').data("fractional-capacity");
      console.log(type);
      $(elem).appendTo('.category-column-'+type);
      $(elem).fadeIn({queue:true});
    });    
  }, 380);


});

$('.resource_type_btn').click(function(){ 
    $grid.isotope({ 
        sortBy: 'resource_type' 
    });
});




  
