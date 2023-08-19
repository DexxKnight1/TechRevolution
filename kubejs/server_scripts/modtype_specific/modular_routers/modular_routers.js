ServerEvents.recipes(event => {
    
    event.shaped('modularrouters:modular_router', ['ABA', 'DCD', 'ABA'], {
        A: '#forge:ingots/iron',
        B: 'immersiveengineering:sheetmetal_aluminum',
        C: 'rftoolscontrol:ram_chip',
        D: '#forge:gears/osmium'
    }).id(`kubejs:modularrouters/modular_router`)

    removeRecipeByID(event, [
        'modularrouters:modular_router'
    ])

})
