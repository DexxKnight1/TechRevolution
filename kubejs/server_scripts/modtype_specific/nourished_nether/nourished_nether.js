ServerEvents.recipes(event => {

    event.shaped('nourished_nether:soul_forge', ['ABA', 'CDC', 'ABA'], {
      A: 'nourished_nether:smooth_basalt_bricks',
      B: 'nourished_nether:chiseled_obsidian_bricks',
      C: 'nourished_nether:smooth_soul_quartz',
      D: '#forge:storage_blocks/gold'
    }).id(`kubejs:nourished_nether/soul_forge`)

    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'EEEEEEE',
            'ECACACE',
            'EADBDAE',
            'ECBFBCE',
            'EADBDAE',
            'ECACACE',
            'EEEEEEE',
        ],
        key: {
            A: {item: 'minecraft:nether_star', },
            B: {item: 'extendedcrafting:flux_star', },
            C: {item: 'nourished_nether:glowing_obsidian', },
            D: {item: 'nourished_nether:necronium_block', },
            E: {item: 'nourished_nether:cracked_basalt_bricks', },
            F: {item: 'kubejs:crystal_of_summoning', },
        },
        result: {item: 'nourished_nether:nether_reactor_core', },
    }).id(`kubejs:nourished_nether/nether_reactor_core`)

    removeRecipeByID(event, [
        'nourished_nether:transmutation_table',
        'nourished_nether:nether_reactor_core'
    ])
  
})
