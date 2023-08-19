//priority: 1000
const colors = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
]

let modifyShaped = (event, result, count, pattern, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shaped' })
  event.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}

let modifyShapeless = (event, result, count, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  event.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}

let modifySmelt = (event, result, ingredients) => {
  event.remove({ output: result, type: 'minecraft:smelting' })
  event.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}

let removeRecipeByID = (event, recipes) => {
  recipes.forEach(recipe => {
    event.remove({ id: recipe })
  })
}

let removeRecipeByOutput = (event, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      event.remove({ type: recipe[1], output: recipe[0] })
    } else {
      event.remove({ output: recipe })
    }
  })
}

let woodcutting = (event, entries) => {
  entries.forEach(([input, output, count]) => {
    event.custom({
      type: "corail_woodcutter:woodcutting",
      ingredient: { item: input },
      result: output,
      count: count
    }).id(`kubejs:woodcutting/${output.replace(':', '/')}`)
  })
}

let maInfusion = (event, output, middle, item1, item2, item3, item4, item5, item6, item7, item8) => {
  event.recipes.mysticalagriculture.infusion({
    input: { item: middle },
    ingredients: [
      { item: item1 },
      { item: item2 },
      { item: item3 },
      { item: item4 },
      { item: item5 },
      { item: item6 },
      { item: item7 },
      { item: item8 }
    ],
    result: { item: output }
  }).id(`kubejs:mainfusion/${output.replace(':', '/')}`)
}

let energize = (event, ingredient, result, power, count) => {
  event.recipes.powah.energizing({
    ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
    energy: power,
    result: Item.of(result, count ? count : 1).toResultJson()
  }).id(`kubejs:energizing/${result.replace(':', '/')}`)
  
}

/*Replace input/output
#across all recipes that use the given ingredient / item.
const replaceInput = (from, to) => {event.replaceInput({}, from, to)}
const replaceOutput = (from, to) => {event.replaceOutput({}, from, to)}
#by recipe ID.
const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)}
const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to)}
#by recipe type.
const replaceInputType = (recipeType, from, to) => {event.replaceInput({type: recipeType}, from, to)}
const replaceOutputType = (recipeType, from, to) => {event.replaceOutput({type: recipeType}, from, to)}*/

const VanillaWoodTypes = [
  'acacia',
  'birch',
  'crimson',
  'dark_oak',
  'jungle',
  'mangrove',
  'oak',
  'spruce',
  'warped',
]

const BYGWoodTypes = [
  'aspen',
  'baobab',
  'blue_enchanted',
  'bulbis',
  'cherry',
  'cika',
  'cypress',
  'ebony',
  'ether',
  'fir',
  'green_enchanted',
  'holly',
  'imparius',
  'lament',
  'jacaranda',
  'mahogany',
  'white_mangrove',
  'maple',
  'nightshade',
  'palm',
  'pine',
  'rainbow_eucalyptus',
  'redwood',
  'skyris',
  'willow',
  'witch_hazel',
  'zelkova',
  'sythian',
  'embur'
]

const sandstones = [
  'byg:black_sandstone',
  'byg:blue_sandstone',
  'byg:purple_sandstone',
  'byg:windswept_sandstone',
  'byg:pink_sandstone',
  'byg:white_sandstone',
  'minecraft:red_sandstone',
  'minecraft:sandstone',
  'quark:soul_sandstone'
]

const sandstone_colors = ['colorless', 'red', 'black', 'white', 'blue', 'purple', 'windswept']

const xnet_colors = ['red', 'yellow', 'green', 'blue']

const air = 'minecraft:air'

const tree_properties = {
    trees: [
    {
        sapling: 'minecraft:oak_sapling',
        stems: ['minecraft:oak_log'],
        foliage: ['minecraft:oak_leaves'],
        fruits: ['minecraft:apple'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 25, dead: 4 }
        }
    },
    {
        sapling: 'minecraft:spruce_sapling',
        stems: ['minecraft:spruce_log'],
        foliage: ['minecraft:spruce_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'minecraft:birch_sapling',
        stems: ['minecraft:birch_log'],
        foliage: ['minecraft:birch_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 25, dead: 4 }
        }
    },
    {
        sapling: 'minecraft:jungle_sapling',
        stems: ['minecraft:jungle_log'],
        foliage: ['minecraft:jungle_leaves', 'minecraft:vine'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'industrialforegoing:latex',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'minecraft:acacia_sapling',
        stems: ['minecraft:acacia_log'],
        foliage: ['minecraft:acacia_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'industrialforegoing:latex',
            rate: { living: 75, dead: 8 }
        }
    },
    {
        sapling: 'minecraft:dark_oak_sapling',
        stems: ['minecraft:dark_oak_log'],
        foliage: ['minecraft:dark_oak_leaves'],
        fruits: ['minecraft:apple'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'minecraft:mangrove_propagule',
        stems: ['minecraft:mangrove_log', 'minecraft:mangrove_roots'],
        foliage: ['minecraft:mangrove_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'minecraft:azalea',
        stems: ['quark:azalea_log'],
        foliage: ['minecraft:azalea_leaves', 'minecraft:flowering_azalea_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'minecraft:flowering_azalea',
        stems: ['quark:azalea_log'],
        foliage: ['minecraft:flowering_azalea_leaves', 'minecraft:azalea_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'quark:blue_blossom_sapling',
        stems: ['quark:blossom_log'],
        foliage: ['quark:blue_blossom_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'quark:lavender_blossom_sapling',
        stems: ['quark:blossom_log'],
        foliage: ['quark:lavender_blossom_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'quark:orange_blossom_sapling',
        stems: ['quark:blossom_log'],
        foliage: ['quark:orange_blossom_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'quark:pink_blossom_sapling',
        stems: ['quark:blossom_log'],
        foliage: ['quark:pink_blossom_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    }, 
    {
        sapling: 'quark:yellow_blossom_sapling',
        stems: ['quark:blossom_log'],
        foliage: ['quark:yellow_blossom_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'quark:red_blossom_sapling',
        stems: ['quark:blossom_log'],
        foliage: ['quark:red_blossom_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'ars_nouveau:blue_archwood_sapling',
        stems: ['ars_nouveau:blue_archwood_log'],
        foliage: ['ars_nouveau:blue_archwood_leaves'],
        fruits: ['ars_nouveau:frostaya_pod'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'ars_nouveau:purple_archwood_sapling',
        stems: ['ars_nouveau:purple_archwood_log'],
        foliage: ['ars_nouveau:purple_archwood_leaves'],
        fruits: ['ars_nouveau:bastion_pod'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'ars_nouveau:green_archwood_sapling',
        stems: ['ars_nouveau:green_archwood_log'],
        foliage: ['ars_nouveau:green_archwood_leaves'],
        fruits: ['ars_nouveau:mendosteen_pod'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'ars_nouveau:red_archwood_sapling',
        stems: ['ars_nouveau:red_archwood_log'],
        foliage: ['ars_nouveau:red_archwood_leaves'],
        fruits: ['ars_nouveau:bombegranate_pod'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'twilightforest:twilight_oak_sapling',
        stems: ['twilightforest:twilight_oak_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
        foliage: ['twilightforest:twilight_oak_leaves'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'twilightforest:canopy_sapling',
        stems: ['twilightforest:canopy_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
        foliage: ['twilightforest:canopy_leaves'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'twilightforest:mangrove_sapling',
        stems: [
            'twilightforest:mangrove_log',
            'twilightforest:mangrove_root',
            'twilightforest:root',
            'twilightforest:liveroot_block'
        ],
        foliage: ['twilightforest:mangrove_leaves', 'minecraft:vine'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
      {
        sapling: 'twilightforest:darkwood_sapling',
        stems: ['twilightforest:dark_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
        foliage: ['twilightforest:dark_leaves'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'twilightforest:hollow_oak_sapling',
        stems: [
            'twilightforest:twilight_oak_log',
            'twilightforest:twilight_oak_wood',
            'twilightforest:root',
            'twilightforest:liveroot_block'
        ],
        foliage: ['twilightforest:twilight_oak_leaves'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'twilightforest:rainbow_oak_sapling',
        stems: ['twilightforest:twilight_oak_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
        foliage: ['twilightforest:rainbow_oak_leaves'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'twilightforest:time_sapling',
        stems: [
            'twilightforest:time_log',
            'twilightforest:time_wood',
            'twilightforest:root',
            'twilightforest:liveroot_block'
        ],
        foliage: ['twilightforest:time_leaves'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'twilightforest:transformation_sapling',
        stems: ['twilightforest:transformation_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
        foliage: ['twilightforest:transformation_leaves'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'twilightforest:mining_sapling',
        stems: [
            'twilightforest:mining_log',
            'twilightforest:mining_wood',
            'twilightforest:root',
            'twilightforest:liveroot_block'
        ],
        foliage: ['twilightforest:mining_leaves'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'twilightforest:sorting_sapling',
        stems: ['twilightforest:sorting_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
        foliage: ['twilightforest:sorting_leaves'],
        fruits: [],
        dimension: 'twilightforest',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:ether_sapling',
        stems: ['byg:ether_log'],
        foliage: ['byg:ether_leaves'],
        fruits: ['byg:ether_bulb'],
        dimension: 'end',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:ether_sapling',
        stems: ['byg:ether_log'],
        foliage: ['byg:ether_leaves'],
        fruits: ['byg:ether_bulb'],
        dimension: 'end',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:lament_sapling',
        stems: ['byg:lament_log'],
        foliage: ['byg:lament_leaves', 'minecraft:shroomlight'],
        fruits: [],
        dimension: 'nether',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:nightshade_sapling',
        stems: ['byg:nightshade_log', 'byg:imbued_nightshade_log'],
        foliage: ['byg:nightshade_leaves', 'byg:flowering_nightshade_leaves'],
        fruits: [],
        dimension: 'nether',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:withering_oak_sapling',
        stems: ['byg:withering_oak_log'],
        foliage: ['byg:withering_oak_leaves', 'byg:arisian_bloom_branch'],
        fruits: [],
        dimension: 'nether',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:pink_cherry_sapling',
        stems: ['byg:cherry_log'],
        foliage: ['byg:pink_cherry_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:white_cherry_sapling',
        stems: ['byg:cherry_log'],
        foliage: ['byg:white_cherry_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:silver_maple_sapling',
        stems: ['byg:maple_log'],
        foliage: ['byg:silver_maple_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:red_maple_sapling',
        stems: ['byg:maple_log'],
        foliage: ['byg:red_maple_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:maple_sapling',
        stems: ['byg:maple_log'],
        foliage: ['byg:maple_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:brown_birch_sapling',
        stems: ['minecraft:birch_log'],
        foliage: ['byg:brown_birch_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:orange_birch_sapling',
        stems: ['minecraft:birch_log'],
        foliage: ['byg:orange_birch_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:red_birch_sapling',
        stems: ['minecraft:birch_log'],
        foliage: ['byg:red_birch_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:yellow_birch_sapling',
        stems: ['minecraft:birch_log'],
        foliage: ['byg:yellow_birch_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:brown_oak_sapling',
        stems: ['minecraft:oak_log'],
        foliage: ['byg:brown_oak_leaves'],
        fruits: ['minecraft:apple'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:orange_oak_sapling',
        stems: ['minecraft:oak_log'],
        foliage: ['byg:orange_oak_leaves'],
        fruits: ['minecraft:apple'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:red_oak_sapling',
        stems: ['minecraft:oak_log'],
        foliage: ['byg:red_oak_leaves'],
        fruits: ['minecraft:apple'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:orchard_sapling',
        stems: ['minecraft:oak_log'],
        foliage: ['byg:orchard_leaves', 'byg:flowering_orchard_leaves', 'byg:ripe_orchard_leaves'],
        fruits: ['minecraft:apple'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:blue_spruce_sapling',
        stems: ['minecraft:spruce_log'],
        foliage: ['byg:blue_spruce_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:orange_spruce_sapling',
        stems: ['minecraft:spruce_log'],
        foliage: ['byg:orange_spruce_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:red_spruce_sapling',
        stems: ['minecraft:spruce_log'],
        foliage: ['byg:red_spruce_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:yellow_spruce_sapling',
        stems: ['minecraft:spruce_log'],
        foliage: ['byg:yellow_spruce_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:zelkova_sapling',
        stems: ['byg:zelkova_log'],
        foliage: ['byg:zelkova_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:brown_zelkova_sapling',
        stems: ['byg:zelkova_log'],
        foliage: ['byg:brown_zelkova_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:redwood_sapling',
        stems: ['byg:redwood_log'],
        foliage: ['byg:redwood_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:pine_sapling',
        stems: ['byg:pine_log'],
        foliage: ['byg:pine_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:araucaria_sapling',
        stems: ['byg:pine_log'],
        foliage: ['byg:araucaria_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:holly_sapling',
        stems: ['byg:holly_log'],
        foliage: ['byg:holly_leaves', 'byg:holly_berry_leaves'],
        fruits: ['minecraft:sweet_berries'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:fir_sapling',
        stems: ['byg:fir_log'],
        foliage: ['byg:fir_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:aspen_sapling',
        stems: ['byg:aspen_log'],
        foliage: ['byg:aspen_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:cika_sapling',
        stems: ['byg:cika_log'],
        foliage: ['byg:cika_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:jacaranda_sapling',
        stems: ['byg:jacaranda_log'],
        foliage: ['byg:jacaranda_leaves', 'byg:flowering_jacaranda_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:indigo_jacaranda_sapling',
        stems: ['byg:jacaranda_log'],
        foliage: ['byg:indigo_jacaranda_leaves', 'byg:flowering_indigo_jacaranda_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:baobab_sapling',
        stems: ['byg:baobab_log'],
        foliage: ['byg:baobab_leaves'],
        fruits: ['byg:baobab_fruit'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:ebony_sapling',
        stems: ['byg:ebony_log'],
        foliage: ['byg:ebony_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:mahogany_sapling',
        stems: ['byg:mahogany_log'],
        foliage: ['byg:mahogany_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:white_mangrove_sapling',
        stems: ['byg:white_mangrove_log'],
        foliage: ['byg:white_mangrove_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:palm_sapling',
        stems: ['byg:palm_log'],
        foliage: ['byg:palm_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:palo_verde_sapling',
        stems: ['byg:palo_verde_log'],
        foliage: ['byg:palo_verde_leaves', 'byg:flowering_palo_verde_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:blue_enchanted_sapling',
        stems: ['byg:blue_enchanted_log'],
        foliage: ['byg:blue_enchanted_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:green_enchanted_sapling',
        stems: ['byg:green_enchanted_log'],
        foliage: ['byg:green_enchanted_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:rainbow_eucalyptus_sapling',
        stems: ['byg:rainbow_eucalyptus_log'],
        foliage: ['byg:rainbow_eucalyptus_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:skyris_sapling',
        stems: ['byg:skyris_log'],
        foliage: ['byg:skyris_leaves', 'byg:green_apple_skyris_leaves'],
        fruits: ['byg:green_apple'],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:willow_sapling',
        stems: ['byg:willow_log'],
        foliage: ['byg:willow_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:witch_hazel_sapling',
        stems: ['byg:witch_hazel_log'],
        foliage: ['byg:witch_hazel_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:joshua_sapling',
        stems: ['minecraft:oak_log'],
        foliage: ['byg:joshua_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    {
        sapling: 'byg:cypress_sapling',
        stems: ['byg:cypress_log'],
        foliage: ['byg:cypress_leaves'],
        fruits: [],
        dimension: 'overworld',
        substrate: 'dirt',
        logProcessing: {
            sap: 'thermal:resin',
            rate: { living: 50, dead: 6 }
        }
    },
    ],
    shrooms: [
      {
        sapling: 'minecraft:brown_mushroom',
        stems: ['minecraft:mushroom_stem'],
        foliage: ['minecraft:brown_mushroom_block'],
        dimension: 'overworld',
        substrate: 'mushroom'
      },
      {
        sapling: 'minecraft:red_mushroom',
        stems: ['minecraft:mushroom_stem'],
        foliage: ['minecraft:red_mushroom_block'],
        dimension: 'overworld',
        substrate: 'mushroom'
      },
      {
        sapling: 'minecraft:crimson_fungus',
        stems: ['minecraft:crimson_stem'],
        foliage: ['minecraft:nether_wart_block', 'minecraft:shroomlight'],
        dimension: 'nether',
        substrate: 'nether_mushroom'
      },
      {
        sapling: 'minecraft:warped_fungus',
        stems: ['minecraft:warped_stem'],
        foliage: ['minecraft:warped_wart_block', 'minecraft:shroomlight'],
        dimension: 'nether',
        substrate: 'nether_mushroom'
      },
      {
        sapling: 'quark:glow_shroom',
        stems: ['quark:glow_shroom_stem'],
        foliage: ['quark:glow_shroom_block', 'quark:glow_shroom_ring'],
        dimension: 'overworld',
        substrate: 'mushroom'
      },
      {
        sapling: 'byg:green_mushroom',
        stems: ['byg:white_mushroom_stem'],
        foliage: ['byg:green_mushroom_block'],
        dimension: 'overworld',
        substrate: 'mushroom'
      },
      {
        sapling: 'byg:weeping_milkcap',
        stems: ['minecraft:mushroom_stem'],
        foliage: ['byg:weeping_milkcap_mushroom_block'],
        dimension: 'overworld',
        substrate: 'mushroom'
      },
      {
        sapling: 'byg:wood_blewit',
        stems: ['byg:brown_mushroom_stem'],
        foliage: ['byg:wood_blewit_mushroom_block'],
        dimension: 'overworld',
        substrate: 'mushroom'
      },
      {
        sapling: 'byg:death_cap',
        stems: ['minecraft:mushroom_stem'],
        foliage: ['byg:death_cap_mushroom_block'],
        dimension: 'overworld',
        substrate: 'nether_mushroom'
      },
      {
        sapling: 'byg:soul_shroom',
        stems: ['byg:soul_shroom_stem'],
        foliage: ['byg:soul_shroom_block'],
        dimension: 'nether',
        substrate: 'nether_mushroom'
      },
      {
        sapling: 'byg:sythian_fungus',
        stems: ['byg:sythian_stem'],
        foliage: ['byg:sythian_wart_block', 'minecraft:shroomlight'],
        dimension: 'sythian_nylium',
        substrate: 'nether_mushroom'
      },
      {
        sapling: 'byg:embur_wart',
        stems: ['byg:embur_pedu'],
        foliage: ['byg:embur_gel_block', 'byg:embur_gel_vines', 'byg:pollen_block', 'byg:embur_gel_branch'],
        dimension: 'embur_nylium',
        substrate: 'nether_mushroom'
      },
      {
        sapling: 'byg:purple_bulbis_oddity',
        stems: ['byg:bulbis_wood'],
        foliage: ['byg:purple_bulbis_shell', 'byg:purple_shroomlight'],
        dimension: 'end',
        substrate: 'end_mushroom'
      },
      {
        sapling: 'byg:bulbis_oddity',
        stems: ['byg:bulbis_wood'],
        foliage: ['byg:bulbis_shell', 'byg:purple_shroomlight'],
        dimension: 'end',
        substrate: 'end_mushroom'
      },
      {
        sapling: 'byg:fungal_imparius',
        stems: ['byg:fungal_imparius_stem'],
        foliage: [
            'byg:fungal_imparius_block',
            'byg:fungal_imparius_filament_block',
            'byg:fungal_imparius_filament'
        ],
        dimension: 'end',
        substrate: 'end_mushroom'
      },
      {
        sapling: 'byg:shulkren_fungus',
        stems: ['byg:white_mushroom_stem'],
        foliage: ['byg:shulkren_wart_block', 'byg:purple_shroomlight', 'byg:shulkren_vine'],
        dimension: 'end',
        substrate: 'end_mushroom'
      }
    ]
}
