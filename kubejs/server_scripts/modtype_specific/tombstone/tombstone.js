ServerEvents.recipes(event => {
  
    event.shaped('tombstone:ankh_of_pray', ['CBC', 'BAB', 'CBC'], {
        A: '#forge:ingots/gold',
        B: '#forge:rods/wooden',
        C: 'nourished_nether:soul_quartz'
      }).id(`kubejs:tombstone/ankh_of_pray`)

    event.shapeless('tombstone:grave_dust', ['immersiveengineering:hammer', 'mysticalagriculture:soulium_gemstone']).id(`kubejs:tombstone/timeinabottle`)

    removeRecipeByID(event, [
        'tombstone:ankh_of_pray'
    ])
  
})
