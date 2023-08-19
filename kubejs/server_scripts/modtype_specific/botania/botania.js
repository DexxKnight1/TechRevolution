ServerEvents.recipes(event => {

    event.shaped('2x botania:world_seed', ['ADA', 'BCB', 'ADA'], {
        A: 'mysticalagriculture:supremium_farmland',
        B: 'mysticalagriculture:prosperity_seed_base',
        C: 'botania:dragonstone',
        D: 'ars_nouveau:magebloom_crop'
    }).id(`kubejs:botania/world_seed`)

    event.shaped('botania:overgrowth_seed', ['ADA', 'BCB', 'ABA'], {
        A: 'botania:grass_seeds',
        B: 'mysticalagriculture:prosperity_seed_base',
        C: 'botania:orechid',
        D: 'ars_nouveau:ritual_overgrowth'
    }).id(`kubejs:botania/overgrowth_seed`)

    removeRecipeByID(event, [
        'botania:world_seed'
    ])

})
