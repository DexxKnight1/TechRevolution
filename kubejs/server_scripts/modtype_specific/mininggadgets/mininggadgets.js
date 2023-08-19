ServerEvents.recipes(event => {

    event.shaped('mininggadgets:modificationtable', ['DAD', 'BCB', 'BEB'], {
        A: 'create:display_board',
        B: '#forge:ingots/compressed_iron',
        C: 'rftoolscontrol:cpu_core_2000',
        D: 'mininggadgets:upgrade_empty',
        E: 'kubejs:personal_id'
    }).id(`kubejs:mininggadgets/modificationtable`)

    removeRecipeByID(event, [
        'mininggadgets:modificationtable'
    ])

})
