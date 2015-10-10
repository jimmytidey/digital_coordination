
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
  
  $('.category-column-1 .column-header').text('Money');
  $('.category-column-2 .column-header').text('Voluntary');
  $('.category-column-3 .column-header').text('Digital');
  $('.category-column-4 .column-header').text('Public');

  $('.btn-default').removeClass('active'); 
  $('.exchange_mechanism_btn').addClass('active'); 

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

  $('.category-column-1 .column-header').text('Private');
  $('.category-column-2 .column-header').html('Knowledge <br/> Commons');
  $('.category-column-3 .column-header').text('Other');
  $('.category-column-4 .column-header').text('Public');


  
  $('.btn-default').removeClass('active'); 
  $('.resource_structure_btn').addClass('active');   
  
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

  $('.category-column-1 .column-header').text('Not about spare capacity');
  $('.category-column-2 .column-header').text('A bit...');
  $('.category-column-3 .column-header').text('... a bit more');
  $('.category-column-4 .column-header').text('Fundamentally about spare capacity'); 

  $('.btn-default').removeClass('active'); 
  $('.fractional_capacity_btn').addClass('active');   

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


$('.grid-item').each(function(key, val) { 
  var resource_type = $(val).find('.resource-type').data('resource-type'); 

  $(val).find('h4').addClass('resource_type_' + resource_type); 
});


$('.resource_structure_btn').trigger('click')  

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})