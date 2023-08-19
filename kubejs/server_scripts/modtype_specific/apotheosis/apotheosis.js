ServerEvents.recipes(event => {

    event.shaped('apotheosis:inert_trident', [' AA', 'CBA', 'B  '], {
        A: '#forge:rods/osmium',
        B: '#forge:rods/bronze',
        C: 'minecraft:conduit'
    }).id(`kubejs:apotheosis/inert_trident`)

    event.shaped('apotheosis:gem_cutting_table', ['ADA', 'BCB', 'B B'], {
        A: '#misctags:smooth_stone',
        B: '#minecraft:planks',
        C: 'apotheosis:gem_dust',
        D: 'laserio:laser_connector'
    }).id(`kubejs:apotheosis/gem_cutting_table`)

    removeRecipeByID(event, [
        'apotheosis:inert_trident',
        'apotheosis:gem_cutting_table'
    ])

})
