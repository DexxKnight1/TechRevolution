ServerEvents.recipes((event) => {

    event.shaped('functionalstorage:storage_controller', ['ABA', 'DCD', 'ABA'], {
        A: '#forge:plates/aluminum',
        B: 'create:andesite_casing',
        C: 'pneumaticcraft:logistics_core',
        D: '#functionalstorage:drawer'
    }).id(`kubejs:functionalstorage/storage_controller`)

    event.shaped('functionalstorage:armory_cabinet', ['ABA', 'BCB', 'ADA'], {
        A: '#forge:plates/aluminum',
        B: '#functionalstorage:drawer',
        C: 'pneumaticcraft:logistics_core',
        D: '#forge:ingots/energized_steel'
    }).id(`kubejs:functionalstorage/armory_cabinet`)

    removeRecipeByID(event, [
        'functionalstorage:storage_controller',
        'functionalstorage:armory_cabinet'
    ])

})
