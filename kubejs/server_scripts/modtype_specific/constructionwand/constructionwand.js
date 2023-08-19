ServerEvents.recipes(event => {

    event.shaped('constructionwand:infinity_wand', ['  C', ' B ', 'A  '], {
        A: 'redstone_arsenal:flux_obsidian_rod',
        B: 'allthemodium:unobtainium_rod',
        C: 'extendedcrafting:ender_star'
    }).id(`kubejs:constructionwand/infinity_wand`)

    removeRecipeByID(event, [
        'constructionwand:infinity_wand'
    ])

})
