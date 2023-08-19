ServerEvents.recipes(event => {

  event.shaped('silentgear:salvager', [' A ', 'CDC', 'CBC' ], {
    A: 'mininggadgets:upgrade_magnet',
    B: 'minecraft:obsidian',
    C: 'silentgear:crimson_steel_ingot',
    D: 'minecraft:diamond_block'
  })

  removeRecipeByID(event, [
    'silentgear:bronze_ingot',
    'silentgear:salvager'
  ])
  
})
