ServerEvents.recipes(event => {

    event.shaped('4x travelanchors:travel_anchor', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:sheetmetals/lead',
        B: 'mob_grinding_utils:tinted_glass',
        C: 'waystones:warp_stone'
    }).id(`kubejs:travelanchors/travel_anchor`)

    event.shaped('travelanchors:travel_staff', [' BC', ' AB', 'A  '], {
        A: '#forge:rods/aluminum',
        B: 'waystones:warp_dust',
        C: '#forge:gems/ametrine'
    }).id(`kubejs:travelanchors/travel_staff`)

    removeRecipeByID(event, [
        'travelanchors:travel_anchor',
        'travelanchors:travel_staff'
    ])

})
