ServerEvents.recipes(event => {

  event.shapeless('waystones:warp_dust', ['thermal:diamond_dust', 'minecraft:ender_pearl', '#forge:dyes/purple']).id(`kubejs:waystones/warp_dust`)

  event.shaped('waystones:warp_stone', ['ABA', 'BCB', 'ABA'], {
    A: 'waystones:warp_dust',
    B: 'rftoolsbase:infused_enderpearl',
    C: 'botania:mana_diamond'
  }).id(`kubejs:waystones/warp_stone`)

  removeRecipeByID(event, [
    'waystones:warp_dust',
    'waystones:warp_stone'
  ])

})
