ServerEvents.recipes(event => {

    event.shaped('2x ironfurnaces:rainbow_plating', ['ABC', 'DEF', 'GHI'], {
        A: 'ironfurnaces:iron_furnace',
        B: 'ironfurnaces:gold_furnace',
        C: 'ironfurnaces:diamond_furnace',
        D: 'ironfurnaces:emerald_furnace',
        E: 'ironfurnaces:obsidian_furnace',
        F: 'ironfurnaces:crystal_furnace',
        G: 'ironfurnaces:netherite_furnace',
        H: 'ironfurnaces:copper_furnace',
        I: 'ironfurnaces:silver_furnace'
    }).id(`kubejs:ironfurnaces/rainbow_plating`)

    event.shaped('ironfurnaces:rainbow_core', ['AAA', 'BCD', 'AAA'], {
        A: '#forge:glass/rainbow',
        B: 'ironfurnaces:allthemodium_furnace',
        C: 'ironfurnaces:vibranium_furnace',
        D: 'ironfurnaces:unobtainium_furnace'
    }).id(`kubejs:ironfurnaces/rainbow_core`)

    event.shaped('ironfurnaces:item_linker', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:nether_stars',
        B: '#forge:ingots/pendorite',
        C: 'ironfurnaces:item_copy'
    }).id(`kubejs:ironfurnaces/item_linker`)

    event.shaped('ironfurnaces:rainbow_coal', ['ABC', 'DED', 'GHI'], {
        A: 'mysticalagradditions:inferium_coal_block',
        B: 'mysticalagradditions:prudentium_coal_block',
        C: 'mysticalagradditions:tertium_coal_block',
        D: 'quark:rainbow_rune',
        E: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}').strongNBT(),
        G: 'mysticalagradditions:imperium_coal_block',
        H: 'mysticalagradditions:supremium_coal_block',
        I: 'mysticalagradditions:insanium_coal_block'
    }).id(`kubejs:ironfurnaces/rainbow_coal`)

    removeRecipeByID(event, [
        'ironfurnaces:rainbow_plating',
        'ironfurnaces:rainbow_core',
        'ironfurnaces:rainbow_linker',
    ])

})
