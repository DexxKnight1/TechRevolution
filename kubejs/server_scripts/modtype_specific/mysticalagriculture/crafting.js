ServerEvents.recipes(event => {

  //Essence crafting for custom seeds "Circle shape"
  function essenceCircle(result, essenceType) {
    event.shaped(result, ['AAA', 'A A', 'AAA'], { A: `mysticalagriculture:${essenceType}_essence` }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }

  essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
  essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
  essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
  essenceCircle('6x silentgear:azure_silver_ingot', 'azure_silver')
  essenceCircle('6x silentgear:crimson_iron_ingot', 'crimson_iron')
  essenceCircle('4x industrialforegoing:plastic', 'plastic')
  essenceCircle('2x botania:manasteel_ingot', 'manasteel')
  essenceCircle('botania:terrasteel_ingot', 'terrasteel')
  essenceCircle('2x botania:elementium_ingot', 'elementium')
  essenceCircle('4x botania:livingwood', 'livingwood')
  essenceCircle('4x botania:livingrock', 'livingrock')
  essenceCircle('extendedcrafting:the_ultimate_nugget', 'ultimate_ingot')
  essenceCircle('2x biggerreactors:cyanite_ingot', 'cyanite')
  essenceCircle('2x chemlib:cobalt_ingot', 'cobalt')
  essenceCircle('2x thermal:rose_gold_ingot', 'rose_gold')

  //Essence crafting for custom seeds "Line shape"
  function essenceLine(result, essenceType) {
    event.shaped(result, ['   ', 'AAA', '   '], { A: `mysticalagriculture:${essenceType}_essence` }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }

  essenceLine('2x industrialforegoing:pink_slime', 'pink_slime')
  essenceLine('2x minecraft:phantom_membrane', 'phantom')
  essenceLine('3x thermal:niter', 'niter')
  essenceLine('3x ftbic:rubber', 'rubber')
  essenceLine('3x ftbic:silicon', 'silicon')

  //Essence crafting for custom seeds "CirclePlus shape"
  function essenceCirclePlus(result, essenceType) {
    event.shaped(result, ['AAA', 'ABA', 'AAA'], { A: `mysticalagriculture:${essenceType}_essence`, B: 'minecraft:nether_star' }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }

  essenceCirclePlus('powah:crystal_nitro', 'nitro_crystal')

  removeRecipeByID(event, [
    'mysticalagriculture:essence/botania/manasteel_ingot',
    'mysticalagriculture:essence/botania/terrasteel_ingot',
    'mysticalagriculture:essence/botania/elementium_ingot',
    'mysticalagradditions:essence/nitro_crystal',
    'mysticalagriculture:seed/infusion/nitro_crystal',
    'mysticalagriculture:essence/common/rubber',
    'mysticalagriculture:essence/common/silicon',
    'mysticalagriculture:seed/infusion/silicon'
  ])

  //Magical Soil
  event.custom({
    type: 'mysticalagriculture:infusion',
    input: { item: 'botania:overgrowth_seed' },
    ingredients: [
      { item: 'mysticalagradditions:insanium_farmland' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'mysticalagradditions:insanium_farmland' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'mysticalagradditions:insanium_farmland' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'mysticalagradditions:insanium_farmland' },
      { item: 'mysticalagradditions:insanium_block' }
    ],
    result: { item: 'kubejs:magical_soil' }
  }).id(`kubejs:mysticalagriculture/magical_soil`)

  //Silicon Seed
  event.custom({
    type: 'mysticalagriculture:infusion',
    input: { item: 'mysticalagriculture:prosperity_seed_base' },
    ingredients: [
      { item: 'ftbic:silicon' },
			{ item: 'mysticalagriculture:prudentium_essence' },
			{ item: 'ftbic:silicon' },
			{ item: 'mysticalagriculture:prudentium_essence' },
			{ item: 'ftbic:silicon' },
			{ item: 'mysticalagriculture:prudentium_essence' },
			{ item: 'ftbic:silicon' },
			{ item: 'mysticalagriculture:prudentium_essence' }
    ],
    result: { item: 'mysticalagriculture:silicon_seeds' }
  }).id(`kubejs:mysticalagriculture/silicon_seeds`)

  //Nitro Crystal Seed
  event.custom({
    type: 'mysticalagriculture:infusion',
    input: { item: 'mysticalagriculture:prosperity_seed_base' },
    ingredients: [
      { item: 'powah:nitro_crystal_block' },
			{ item: 'mysticalagradditions:insanium_block' },
			{ item: 'powah:nitro_crystal_block' },
			{ item: 'mysticalagradditions:insanium_block' },
			{ item: 'powah:nitro_crystal_block' },
			{ item: 'mysticalagradditions:insanium_block' },
			{ item: 'powah:nitro_crystal_block' },
			{ item: 'mysticalagradditions:insanium_block' }
    ],
    result: { item: 'mysticalagriculture:nitro_crystal_seeds' }
  }).id(`kubejs:mysticalagriculture/nitro_crystal_seeds`)

  //MA EXP droplets to fluid EXP
  event.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "mysticalagriculture:experience_droplet"
    },
    result: [
      {
        fluid: "cofh_core:experience",
        amount: 250
      }
    ],
    energy: 400
  })

  let fish = [
    'aquaculture:arapaima',
    'aquaculture:atlantic_cod',
    'aquaculture:atlantic_halibut',
    'aquaculture:atlantic_herring',
    'aquaculture:bayad',
    'aquaculture:blackfish',
    'aquaculture:bluegill',
    'aquaculture:boulti',
    'aquaculture:brown_shrooma',
    'aquaculture:brown_trout',
    'aquaculture:capitaine',
    'aquaculture:carp',
    'aquaculture:catfish',
    'aquaculture:gar',
    'aquaculture:minnow',
    'aquaculture:muskellunge',
    'aquaculture:pacific_halibut',
    'aquaculture:perch',
    'aquaculture:pink_salmon',
    'aquaculture:piranha',
    'aquaculture:pollock',
    'aquaculture:rainbow_trout',
    'aquaculture:red_grouper',
    'aquaculture:red_shrooma',
    'aquaculture:smallmouth_bass',
    'aquaculture:synodontis',
    'aquaculture:tambaqui',
    'aquaculture:tuna',
  ]

  fish.forEach(name => {
    event.custom({
      type: 'mysticalagriculture:soul_extraction',
      input: {
        item: name
      },
      output: {
        type: 'mysticalagriculture:fish',
        souls: 0.5
      }
    })
  })

})
