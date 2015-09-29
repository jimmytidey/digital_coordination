

  
  var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',    
      getSortData: {
          name: '.name_of_company'
      }
  });
  
  $grid.isotope({ sortBy: 'name' })
  
