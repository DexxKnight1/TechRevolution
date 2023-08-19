ServerEvents.recipes(event => {

    event.shaped('4x kubejs:blank_card', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:nuggets/copper',
        B: 'minecraft:clay_ball',
        C: 'minecraft:paper'
    }).id(`kubejs:blank_card`)

    event.shaped('2x kubejs:personal_id', [' C ', 'AED', ' B '], {
        A: 'silentgear:blueprint_paper',
        B: 'cyclic:carbon_paper',
        C: 'kubejs:blank_card',
        D: 'thermal:redprint',
        E: 'minecraft:piston'
    }).id(`kubejs:personal_id`)

})
