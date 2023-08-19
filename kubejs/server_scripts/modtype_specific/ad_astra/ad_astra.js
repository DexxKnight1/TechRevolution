ServerEvents.recipes(event=> {

    //Oil conversion
    event.custom({
        type: "ad_astra:fuel_conversion",
        input: "#forge:crude_oil",
        output: "ad_astra:fuel",
        conversion_ratio: 1.0,
    })

    event.shaped('6x ad_astra:moon_stone_brick_slab', ['AAA'], {
        A: 'ad_astra:moon_stone_bricks'
    }).id(`kubejs:ad_astra/moon_stone_brick_slab`)

    event.shaped('4x ad_astra:mercury_stone_bricks', ['AA','AA'], {
        A: 'ad_astra:polished_mercury_stone'
    }).id(`kubejs:ad_astra/mercury_stone_bricks`)

    event.shaped('4x ad_astra:glacio_stone_bricks', ['AA','AA'], {
        A: 'ad_astra:polished_glacio_stone'
    }).id(`kubejs:ad_astra/glacio_stone_bricks`)

    event.shaped('4x ad_astra:moon_stone_bricks', ['AA','AA'], {
        A: 'ad_astra:polished_moon_stone'
    }).id(`kubejs:ad_astra/moon_stone_bricks`)

    event.shaped('4x ad_astra:venus_stone_bricks', ['AA','AA'], {
        A: 'ad_astra:polished_venus_stone'
    }).id(`kubejs:ad_astra/venus_stone_bricks`)

    event.shaped('4x ad_astra:mars_stone_bricks', ['AA','AA'], {
        A: 'ad_astra:polished_mars_stone'
    }).id(`kubejs:ad_astra/mars_stone_bricks`)

    event.shaped('4x ad_astra:permafrost_bricks', ['AA','AA'], {
        A: 'ad_astra:polished_permafrost'
    }).id(`kubejs:ad_astra/permafrost_bricks`)

    removeRecipeByID(event, [
        'ad_astra:recipes/mercury_stone_bricks',
        'ad_astra:recipes/glacio_stone_bricks',
        'ad_astra:recipes/venus_stone_bricks',
        'ad_astra:recipes/mars_stone_bricks',
        'ad_astra:recipes/permafrost_bricks',
        'ad_astra:recipes/moon_stone_bricks',
        'ad_astra:recipes/moon_stone_brick_slab',
        'ad_astra:recipes/flint_and_steel'
    ])

})
