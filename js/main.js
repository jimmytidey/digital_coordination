var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',    
  getSortData: {
      name: '.name',
      organisation-structure: '.organisation-structure', 
      exchange-mechanism: '.exchange-mechanism', 
      resource-structure: '.resource-structure',
      resource-type: '.resource-type' 
  }
});



$grid.isotope({ 
    sortBy: 'name' 
})


  
