ServerEvents.recipes(event => {
  
  event.shaped('angelring:diamond_ring', ['DND', 'VEU', 'DAD'], {
    D: '#forge:storage_blocks/diamond',
    N: '#forge:storage_blocks/netherite',
    V: '#forge:storage_blocks/vibranium',
    U: '#forge:storage_blocks/unobtainium',
    A: '#forge:storage_blocks/allthemodium',
    E: '#forge:elytra'
  })

  event.shaped('angelring:angel_ring', ['CAC', 'ARA', 'DGD'], {
    C: 'ironfurnaces:million_furnace',
    A: '#forge:storage_blocks/unobtainium',
    R: 'angelring:diamond_ring',
    D: '#forge:nether_stars',
    G: '#forge:storage_blocks/unobtainium'
  })

  removeRecipeByID(event, [
    'angelring:diamond_ring',
    'angelring:angel_ring'
  ])

})
