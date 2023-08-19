ServerEvents.tags('item', event => {

  event.add('blue_skies:planks', /blue_skies:.+?_planks/)
  event.add('byg:planks', /byg:.+?_planks/)

  let chestsMissingTags = ['ars_nouveau:archwood_chest', 'ad_astra:strophar_chest', 'ad_astra:aeronos_chest']
  event.add('forge:chests', chestsMissingTags)
  event.add('forge:chests/wooden', chestsMissingTags)

  //remove dye tag from flowers with double dye tag
  event.remove('byg:purple_dye', 'byg:tall_allium')
  event.remove('byg:pink_dye', ['byg:japanese_orchid', 'byg:tall_pink_allium'])

})

ServerEvents.recipes(event => {
  /* Fix Overlapping Recipes
    /polymorph conflicts
  */

  //Sleeping Bags / Wool Slabs
  //Sleeping Bags
  event.forEachRecipe({ type: 'minecraft:crafting_shaped', id: /comforts:sleeping_bag_.+/ }, recipe => {
    let out = recipe.json.get('result')
    let input = recipe.json.get('key').get('a')
    event.shaped(Item.of(out), ['   ', '   ', 'aaa'], { a: Ingredient.of(input) }).noMirror().noShrink().id(`kubejs:${recipe.getId().replace(':', '/')}`)
    event.remove({ id: recipe.getId() })
  })
  //Wool Slabs
  event.forEachRecipe({ type: 'minecraft:crafting_shaped', id: /absentbydesign:slab_wool_.+/ }, recipe => {
    let out = recipe.json.get('result')
    let input = recipe.json.get('key').get('a')
    event.shaped(Item.of(out), ['   ', 'aaa', '   '], { 'a': Ingredient.of(input) }).noMirror().noShrink().id(`kubejs:${recipe.getId().replace(':', '/')}`)
    event.remove({ id: recipe.getId() })
  })

  //Structurize / Construction Wand
  event.remove({id: 'structurize:sceptergold'})
  event.shaped('structurize:sceptergold', ['A  ', ' B ', '  B'], { 
    A: '#minecraft:stone_crafting_materials',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:structurize/sceptergold`)

  event.remove({id: 'constructionwand:stone_wand'})
  event.shaped('constructionwand:stone_wand', ['  A', ' B ', 'B  '], {
    A: '#minecraft:stone_crafting_materials',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:constructionwand/stone_wand`)

  event.remove({id: 'structurize:sceptersteel'})
  event.shaped('structurize:sceptersteel', ['A  ', ' B ', '  B'], { 
    A: '#forge:ingots/iron',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:structurize/sceptersteel`)

  event.remove({ id:'constructionwand:iron_wand'})
  event.shaped('constructionwand:iron_wand', ['  A', ' B ', 'B  '], {
    A: '#forge:ingots/iron',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:constructionwand/iron_wand`)

  //Rechiseled Chisel / Croptopia Knife
  event.remove({id: 'rechiseled:chisel'})
  event.shaped('rechiseled:chisel', ['A ', ' B'], { 
    A: '#forge:ingots/iron',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:rechiseled/chisel`)

  event.remove({id: 'croptopia:knife'})
  event.shaped('croptopia:knife', [' A', 'B '], {
    A: '#forge:ingots/iron',
    B: '#forge:rods/wooden'
  }).noMirror().id(`kubejs:croptopia/knife`)

  //Duplicate and misspelled recipes?
  let bygRemovals = [
    'byg:rainbow_eucalpytus_door',
    'byg:rainbow_eucalpytus_trapdoor',
    'byg:jacaranda_boookshelf',
  ]
  bygRemovals.forEach(removeId => {
    event.remove({ id: removeId })
  })

})
