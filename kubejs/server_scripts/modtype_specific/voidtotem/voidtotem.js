ServerEvents.recipes(event => {

    event.shaped('voidtotem:totem_of_void_undying', ['ABA', 'CDC', 'EBE'], {
        A: 'nourished_nether:necronium_block',
        B: 'botania:mana_void',
        C: 'nourished_nether:soul_quartz',
        D: 'minecraft:totem_of_undying',
        E: Item.of('cyclic:ender_eye_reuse', '{Damage:0}')
    }).id(`kubejs:voidtotem/totem_of_void_undying`)

    removeRecipeByID(event, [
        'voidtotem:totem_of_void_undying'
    ])

})
