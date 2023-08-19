ServerEvents.recipes(event => {

    modifyShaped(event, 'irongenerators:skystone_generator', 1, ['ABA', 'BCB', 'ABA'], {
        A: 'ae2:sky_stone_block',
        B: '#forge:dusts/redstone',
        C: '#misctags:furnace'
    })

    modifyShaped(event, 'irongenerators:certus_quartz_generator', 1, ['ABA', 'BCB', 'ABA'], {
        A: '#forge:gems/certus_quartz',
        B: '#forge:dusts/redstone',
        C: '#misctags:furnace'
    })

    modifyShaped(event, 'irongenerators:netherrack_generator', 1, ['ABA', 'BCB', 'ABA'], {
        A: 'minecraft:netherrack',
        B: '#forge:dusts/redstone',
        C: '#misctags:furnace'
    })

    modifyShaped(event, 'irongenerators:stone_generator', 1, ['ABA', 'BCB', 'ABA'], {
        A: '#misctags:smooth_stone',
        B: '#forge:dusts/redstone',
        C: '#misctags:furnace'
    })

    event.shaped('irongenerators:infinity_generator', ['FAF', 'BEC', 'GDG'], {
        A: 'irongenerators:allthemodium_generator',
        B: 'irongenerators:vibranium_generator',
        C: 'irongenerators:unobtainium_generator',
        G: 'mysticaladaptations:insanium_furnace',
        E: 'extendedcrafting:ultimate_singularity',
        F: 'extendedcrafting:the_ultimate_block',
        D: '#forge:furnaces/rainbow'
    }).id(`kubejs:irongenerators/infinity_generator`)

})    
