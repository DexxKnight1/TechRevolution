ServerEvents.recipes(event => {

  event.shaped('quark:deepslate_furnace', ['ABA', 'B B', 'ABA'], {
    A: 'allthecompressed:cobbled_deepslate_block_1x',
    B: 'minecraft:cobbled_deepslate'
  }).id(`kubejs:quark/deepslate_furnace`)

  event.shaped('quark:blackstone_furnace', ['ABA', 'B B', 'ABA'], {
    A: 'allthecompressed:blackstone_block_1x',
    B: 'minecraft:blackstone'
  }).id(`kubejs:quark/blackstone_furnace`)

  event.shaped('quark:trowel', [' BB', 'A  '], {
    A: '#forge:wooden_grip',
    B: '#forge:ingots/prosperity'
  }).id(`kubejs:quark/trowel`)

  removeRecipeByID(event, [
    'quark:building/crafting/furnaces/deepslate_furnace',
    'quark:building/crafting/furnaces/blackstone_furnace',
    'quark:tools/crafting/trowel'
  ])

})
