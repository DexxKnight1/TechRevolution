ServerEvents.recipes(event => {

    let ATM_metal = ['allthemodium','unobtainium','vibranium',]
    ATM_metal.forEach(ATM_metal =>
    event.custom({
        "type": "thermal:crucible",
        "ingredient": {"item": `allthemodium:${ATM_metal}_block`},
        "result": [{"fluid": `allthemodium:molten_${ATM_metal}`, "amount": 1000}],
        "energy": 232000
    }).id(`kubejs:molten_${ATM_metal}`)
    )
    ATM_metal.forEach(ATM_metal =>
    event.custom({
        "type": "thermal:chiller",
        "ingredients": [{"fluid": `allthemodium:molten_${ATM_metal}`, "amount": 1000}],
        "result": [{"item": `allthemodium:${ATM_metal}_block`}],
        "energy": 232000
    }).id(`kubejs:chilling_${ATM_metal}`)
    )

    modifyShaped(event, 'allthemodium:teleport_pad', 1, [' A ', 'ABA', ' A '], {
        A: '#forge:ingots/allthemodium',
        B: 'quark:ender_watcher'
    })

    event.shaped('allthemodium:allthemodium_helmet', ['AAA', 'CBC'], {
        A: '#forge:storage_blocks/allthemodium',
        B: 'minecraft:netherite_helmet',
        C: '#forge:ingots/allthemodium'
    }).id(`kubejs:allthemodium/allthemodium_helmet`)

    event.shaped('allthemodium:allthemodium_chestplate', ['CBC', 'CCC', 'AAA'], {
        A: '#forge:storage_blocks/allthemodium',
        B: 'minecraft:netherite_chestplate',
        C: '#forge:ingots/allthemodium'
    }).id(`kubejs:allthemodium/allthemodium_chestplate`)

    event.shaped('allthemodium:allthemodium_leggings', ['AAA', 'CBC', 'C C'], {
        A: '#forge:storage_blocks/allthemodium',
        B: 'minecraft:netherite_leggings',
        C: '#forge:ingots/allthemodium'
    }).id(`kubejs:allthemodium/allthemodium_leggings`)

    event.shaped('allthemodium:allthemodium_boots', ['ABA', 'C C'], {
        A: '#forge:storage_blocks/allthemodium',
        B: 'minecraft:netherite_boots',
        C: '#forge:ingots/allthemodium'
    }).id(`kubejs:allthemodium/allthemodium_boots`)

    //Allthemodium alloy ingots
    event.custom({
        type: 'powah:energizing',
        ingredients: [
          Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
          Ingredient.of('allthemodium:piglich_heart').toJson(),
          Ingredient.of('allthemodium:vibranium_ingot').toJson()
        ],
        energy: '7000000',
        result: Item.of('allthemodium:vibranium_allthemodium_alloy_ingot').toJson()
    }).id(`kubejs:allthemodium/vibranium_allthemodium_alloy_ingot`)

    event.custom({
        type: 'powah:energizing',
        ingredients: [
          Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
          Ingredient.of('allthemodium:piglich_heart').toJson(),
          Ingredient.of('allthemodium:unobtainium_ingot').toJson()
        ],
        energy: '7000000',
        result: Item.of('allthemodium:unobtainium_allthemodium_alloy_ingot').toJson()
    }).id(`kubejs:allthemodium/unobtainium_allthemodium_alloy_ingot`)

    event.custom({
        type: 'powah:energizing',
        ingredients: [
          Ingredient.of('allthemodium:vibranium_ingot').toJson(),
          Ingredient.of('allthemodium:piglich_heart').toJson(),
          Ingredient.of('allthemodium:unobtainium_ingot').toJson()
        ],
        energy: '7000000',
        result: Item.of('allthemodium:unobtainium_vibranium_alloy_ingot').toJson()
    }).id(`kubejs:allthemodium/unobtainium_vibranium_alloy_ingot`)

    //Allthemodium Alloy tools
    //Sword
    event.custom({
        type: 'botania:runic_altar',
        ingredients: [
            Ingredient.of('deeperdarker:warden_sword').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('allthemodium:allthemodium_sword').toJson(),
            Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('byg:pendorite_sword').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()
        ],
        mana: 85000,
        output: Item.of("allthemodium:alloy_sword").toJson()
    }).id(`kubejs:allthemodium/alloy_sword`)
    //Pickaxe
    event.custom({
        type: 'botania:runic_altar',
        ingredients: [
            Ingredient.of('deeperdarker:warden_pickaxe').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('allthemodium:allthemodium_pickaxe').toJson(),
            Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('byg:pendorite_pickaxe').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()
        ],
        mana: 85000,
        output: Item.of("allthemodium:alloy_pick").toJson()
    }).id(`kubejs:allthemodium/alloy_pick`)
    //Axe
    event.custom({
        type: 'botania:runic_altar',
        ingredients: [
            Ingredient.of('deeperdarker:warden_axe').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('allthemodium:allthemodium_axe').toJson(),
            Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('byg:pendorite_axe').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()
        ],
        mana: 85000,
        output: Item.of("allthemodium:alloy_axe").toJson()
    }).id(`kubejs:allthemodium/alloy_axe`)
    //Shovel
    event.custom({
        type: 'botania:runic_altar',
        ingredients: [
            Ingredient.of('deeperdarker:warden_shovel').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson(),
            Ingredient.of('allthemodium:allthemodium_shovel').toJson(),
            Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson(),
	        Ingredient.of('byg:pendorite_shovel').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson(),
	        Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()
        ],
        mana: 85000,
        output: Item.of("allthemodium:alloy_shovel").toJson()
    }).id(`kubejs:allthemodium/alloy_shovel`)
    //Paxel
    event.custom({
        type: 'powah:energizing',
        ingredients: [
            Ingredient.of('allthemodium:alloy_sword').toJson(),
            Ingredient.of('allthemodium:alloy_pick').toJson(),
            Ingredient.of('allthemodium:alloy_shovel').toJson(),
            Ingredient.of('allthemodium:alloy_axe').toJson()
        ],
        energy: '1000000000',
        result: Item.of('allthemodium:alloy_paxel').toJson()
    }).id(`kubejs:allthemodium/alloy_paxel`)

    removeRecipeByID(event, [
        'allthemodium:main/allthemodium_helmet',
        'allthemodium:main/allthemodium_chestplate',
        'allthemodium:main/allthemodium_leggings',
        'allthemodium:main/allthemodium_boots'
    ])

})
