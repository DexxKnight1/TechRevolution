ServerEvents.recipes(event => {
	
	event.shaped('ring_of_repair:ring_of_repair', ['ZYZ', 'HKH', 'WWW'], {
			W: '#forge:storage_blocks/dragonsteel',
            H: '#forge:storage_blocks/allthemodium',
            K: 'cyclic:anvil',
			Z: 'minecraft:diamond_block',
			Y: 'minecraft:emerald_block'
    }).id(`kubejs:ring_of_repair/ring_of_repair`)

	removeRecipeByID(event, [
        'ring_of_repair:ring_of_repair'
    ])
	
})
