ServerEvents.recipes(event => {

    event.shaped('compactmachines:machine_tiny', ['ABA', 'BCB', 'ABA'], {
        A: 'compactmachines:wall',
        B: '#forge:gems/therium',
        C: 'ae2:fluix_pearl'
    }).id(`kubejs:compactmachines/machine_tiny`)

    event.shaped('compactmachines:machine_small', ['ABA', 'BCB', 'ABA'], {
        A: 'compactmachines:wall',
        B: '#forge:gems/subzero',
        C: 'ae2:fluix_pearl'
    }).id(`kubejs:compactmachines/machine_small`)

    event.shaped('compactmachines:machine_normal', ['ABA', 'BCB', 'ABA'], {
        A: 'compactmachines:wall',
        B: '#forge:gems/blazing',
        C: 'ae2:fluix_pearl'
    }).id(`kubejs:compactmachines/machine_normal`)

    event.shaped('compactmachines:machine_large', ['ABA', 'BCB', 'ABA'], {
        A: 'compactmachines:wall',
        B: '#forge:gems/niotic',
        C: 'ae2:spatial_cell_component_2'
    }).id(`kubejs:compactmachines/machine_large`)

    event.shaped('compactmachines:machine_giant', ['ABA', 'BCB', 'ABA'], {
        A: 'compactmachines:wall',
        B: '#forge:gems/spirited',
        C: 'ae2:spatial_cell_component_16'
    }).id(`kubejs:compactmachines/machine_giant`)

    event.shaped('compactmachines:machine_maximum', ['ABA', 'BCB', 'ABA'], {
        A: 'compactmachines:wall',
        B: '#forge:gems/nitro',
        C: 'ae2:spatial_cell_component_128'
    }).id(`kubejs:compactmachines/machine_maximum`)

    event.shaped('compactmachines:personal_shrinking_device', ['ABA', 'CDC', 'ACA'], {
        A: 'compactmachines:wall',
        B: 'integrateddynamics:part_display_panel',
        C: '#forge:plastic',
        D: 'kubejs:personal_id'
    }).id(`kubejs:compactmachines/personal_shrinking_device`)

    removeRecipeByID(event, [
        'compactmachines:machine_tiny',
        'compactmachines:machine_small',
        'compactmachines:machine_normal',
        'compactmachines:machine_large',
        'compactmachines:machine_giant',
        'compactmachines:machine_maximum',
        'compactmachines:personal_shrinking_device'
    ])

})
