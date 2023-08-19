ServerEvents.recipes(event => {


    modifyShaped(event, 'cyclic:crafter', 1, ['ABA', 'CDC', 'ABA'], {
        A: '#forge:storage_blocks/amethyst',
        B: '#forge:workbenches',
        C: 'minecraft:sticky_piston',
        D: 'cyclic:gem_amber'
    })

    modifyShaped(event, 'cyclic:apple_sprout_diamond', 2, ['ACA', 'CBC', 'ACA'], {
        A: '#forge:storage_blocks/diamond',
        B: 'cyclic:apple_chocolate',
        C: '#forge:gems/diamond'
    })

    modifyShaped(event, 'cyclic:apple_sprout_emerald', 2, ['ACA', 'CBC', 'ACA'], {
        A: '#forge:storage_blocks/emerald',
        B: 'cyclic:apple_chocolate',
        C: '#forge:gems/emerald'
    })

})
