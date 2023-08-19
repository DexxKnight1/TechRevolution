ServerEvents.recipes(event => {

  if (global.devLogging) {
    console.log('Finishing Unifying on Dusts')
  }
  let dustTags = global.auTags.filter(function (val) {
    return /forge:dusts/.test(val)
  })
  let dustCount = {
    ftbic: 0
  }

  dustTags.forEach(dustTagString => {
    let material = dustTagString.replace('forge:dusts/', '')
    let dust = AlmostUnified.getPreferredItemForTag(dustTagString)
    if (dust.isEmpty()) {
      console.log(`${material} does not have a dust tag entry`)
      return
    }
    let ingot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${material}`)
    let ore = AlmostUnified.getPreferredItemForTag(`forge:ores/${material}`)
    let raw_material = AlmostUnified.getPreferredItemForTag(`forge:raw_materials/${material}`)
    let raw_block = AlmostUnified.getPreferredItemForTag(`forge:storage_blocks/raw_${material}`)
    
    //FTBIC Macerating
    if (global.loaded.FTBIC_Loaded) {
      let macerate = {
        ingot: false,
        ore: false,
        raw: false,
      }
      event.forEachRecipe({ type: 'ftbic:macerating' }, recipe => {
        let recipeJson = recipe.json
        recipeJson.get('outputItems').forEach(item => {
          if (dust.equalsIgnoringCount(Item.of(item))) {
            recipeJson.get('inputItems').forEach(inputJson => {
              let input = inputJson.get('ingredient')
              if (!ingot.isEmpty() && global.ingredientCheck(ingot, input)) {
                macerate.ingot = true
              } else if (!ore.isEmpty() && global.ingredientCheck(ore, input)) {
                macerate.ore = true
              } else if (!raw_material.isEmpty() && global.ingredientCheck(raw_material, input)) {
                macerate.raw = true
              }
            })
          }
        })
      })
      if (!ingot.isEmpty() && !macerate.ingot) {
        event.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: Ingredient.of(`#forge:ingots/${material}`).toJson() }],
          "outputItems": [dust.toJson()]
        }).id(`kubejs:ftbic/macerating/ingots/${material}_to_dust`)
        dustCount.ftbic++
      }
      if (!ore.isEmpty() && !macerate.ore) {
        event.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: Ingredient.of(`#forge:ores/${material}`).toJson() }],
          "outputItems": [dust.withCount(2).toJson()]
        }).id(`kubejs:ftbic/macerating/ores/${material}_to_dust`)
        dustCount.ftbic++
      }
      if (!raw_material.isEmpty() && !macerate.raw) {
        event.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: Ingredient.of(`#forge:raw_materials/${material}`).toJson() }],
          "outputItems": [
            dust.toJson(),
            { chance: 0.35, item: dust.id }
          ]
        }).id(`kubejs:ftbic/macerating/raw_materials/${material}_to_dust`)
        dustCount.ftbic++
      }
    }
    
  })

  if (global.devLogging) {
    console.log(`Added Dust Recipes - FTBIC: ${dustCount.ftbic}, Occultism: ${dustCount.occult}`)
    //Added Dust Recipes - FTBIC: 52
  }

})
