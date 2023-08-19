ServerEvents.recipes(event => {

    event.shaped('sophisticatedstorage:controller', ['ABA', 'DCD', 'AEA'], {
        A: '#forge:plates/tin',
        B: 'pneumaticcraft:logistics_core',
        C: 'create:andesite_casing',
        D: 'sophisticatedstorage:upgrade_base',
        E: 'minecraft:comparator'
    }).id(`kubejs:sophisticatedstorage/controller`)

    removeRecipeByID(event, [
        'sophisticatedstorage:controller'
    ])

})
