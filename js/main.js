var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',    
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


$('.name_btn').click(function(){
    $grid.isotope({ 
        sortBy: 'name' 
    });
});

$('.organisation_structure_btn').click(function(){
    $grid.isotope({ 
        sortBy: 'organisation_structure' 
    });
});

$('.exchange_mechanism_btn').click(function(){ 
    $grid.isotope({ 
        sortBy: 'exchange_mechanism' 
    });
});

$('.resource_structure_btn').click(function(){
    $grid.isotope({ 
        sortBy: 'resource_structure' 
    });
});

$('.resource_type_btn').click(function(){ 
    $grid.isotope({ 
        sortBy: 'resource_type' 
    });
});




  
