ServerEvents.recipes(event => {

  event.shaped('entangled:block', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/unobtainium',
    B: '#forge:ender_pearls',
    C: 'enderstorage:ender_chest'
  })

  event.shaped('entangled:item', [' BC', ' AB', 'A  '], {
    A: '#forge:ingots/unobtainium',
    B: '#forge:ender_pearls',
    C: 'enderstorage:ender_chest'
  })

  removeRecipeByID(event, [
    'entangled:block',
    'entangled:item'
  ])

})
