ServerEvents.recipes(event => {
 
  event.smelting('byg:black_smooth_sandstone', 'byg:black_sandstone')
  event.smelting('byg:white_smooth_sandstone', 'byg:white_sandstone')
  event.smelting('byg:blue_smooth_sandstone', 'byg:blue_sandstone')
  event.smelting('byg:purple_smooth_sandstone', 'byg:purple_sandstone')
  event.smelting('byg:pink_smooth_sandstone', 'byg:pink_sandstone')

  event.shaped('byg:black_ice', ['AAA', 'ABA', 'AAA'], {
    A: 'minecraft:ice',
    B: '#forge:dyes/black'
  }).id(`kubejs:byg/black_ice`)

  event.shaped('byg:ametrine_horse_armor', ['  A', 'ABA', 'ACA'], {
    A: 'byg:ametrine_gems',
    B: 'minecraft:saddle',
    C: '#forge:rope'
  }).id(`kubejs:byg/ametrine_horse_armor`)

  event.shaped('byg:pendorite_horse_armor', ['  A', 'ABA', 'ACA'], {
    A: 'byg:pendorite_ingot',
    B: 'minecraft:saddle',
    C: '#forge:rope'
  }).id(`kubejs:byg/pendorite_horse_armor`)

  event.shaped('byg:therium_lamp', ['ABA', 'BCB', 'ABA'], { 
    A: '#forge:nuggets/electrum',
    B: '#forge:dusts/redstone',
    C: 'byg:therium_crystal_shard'
  }).id(`kubejs:byg/therium_lamp`)

  event.shaped('byg:glowstone_lamp', ['ABA', 'BCB', 'ABA'], { 
    A: '#forge:nuggets/electrum',
    B: '#forge:dusts/redstone',
    C: 'minecraft:glowstone'
  }).id(`kubejs:byg/glowstone_lamp`)

  event.shaped('2x byg:chain_plating', ['ABA', 'B B', 'ABA'], {
    A: '#forge:nuggets/iron',
    B: '#forge:ingots/iron'
  }).id(`kubejs:byg/chain_plating`)

  event.shaped('byg:black_sandstone', ['AA', 'AA'], {
    A: '#forge:sand/black'
  }).id(`kubejs:byg/black_sandstone`)

  event.shaped('byg:white_sandstone', ['AA', 'AA'], {
    A: '#forge:sand/white'
  }).id(`kubejs:byg/white_sandstone`)

  event.shaped('byg:blue_sandstone', ['AA', 'AA'], {
    A: '#forge:sand/blue'
  }).id(`kubejs:byg/blue_sandstone`)

  event.shaped('byg:purple_sandstone', ['AA', 'AA'], {
    A: '#forge:sand/purple'
  }).id(`kubejs:byg/purple_sandstone`)

  event.shaped('byg:pink_sandstone', ['AA', 'AA'], {
    A: 'byg:pink_sand'
  }).id(`kubejs:byg/pink_sandstone`)

  event.shaped('byg:pendorite_ingot', ['ABA', 'DCD', 'ABA'], { 
    A: 'byg:pendorite_scraps',
    B: 'byg:emeraldite_shards',
    C: '#forge:ingots/crystaltine',
    D: 'cyclic:gem_obsidian'
  }).id(`kubejs:byg/pendorite_ingot`)

  removeRecipeByID(event, [
    'byg:ametrine_horse_armor',
    'byg:pendorite_horse_armor',
    'byg:black_smooth_sandstone',
    'byg:white_smooth_sandstone',
    'byg:blue_smooth_sandstone',
    'byg:purple_smooth_sandstone',
    'byg:pink_smooth_sandstone',
    'byg:black_sandstone',
    'byg:white_sandstone',
    'byg:blue_sandstone',
    'byg:purple_sandstone',
    'byg:pink_sandstone',
    'byg:therium_lamp',
    'byg:glowstone_lamp',
    'byg:chain_plating',
    'byg:pendorite_ingot',
    'byg:byg_chest'
  ])

})
