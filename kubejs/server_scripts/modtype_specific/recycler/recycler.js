ServerEvents.recipes(event => {

    event.shaped('corail_recycler:recycler', ['ABA', 'BCB', 'ABA'], {
        A: 'mysticalagriculture:machine_frame',
        B: '#forge:ingots/enhanced_redstone_ingot',
        C: 'ftbic:reprocessor'
    }).id(`kubejs:corail_recycler/recycler`)

    event.shaped('kubejs:blank_disk', [' A ', 'A A', ' A '], {
        A: '#forge:ingots/iron'
    }).id(`kubejs:blank_disk`)

    event.shaped('corail_recycler:steel_disk', [' A ', 'ABA', ' A '], {
        A: '#forge:ingots/steel',
        B: 'kubejs:blank_disk'
    }).id(`kubejs:corail_recycler/steel_disk`)

    event.shaped('corail_recycler:diamond_disk', [' A ', 'ABA', ' A '], {
        A: '#forge:gems/diamond',
        B: 'corail_recycler:steel_disk'
    }).id(`kubejs:corail_recycler/diamond_disk`)

    event.shaped('corail_recycler:netherite_disk', [' A ', 'ABA', ' A '], {
        A: '#forge:ingots/netherite',
        B: 'corail_recycler:diamond_disk'
    }).id(`kubejs:corail_recycler/netherite_disk`)

    removeRecipeByID(event, [
        'corail_recycler:recycler',
        'corail_recycler:steel_disk',
        'corail_recycler:diamond_disk',
        'corail_recycler:netherite_disk',
        'corail_recycler:diamond_shard',
        'corail_recycler:diamond',
        'corail_recycler:copper',
        'corail_recycler:netherite'
    ])

})
