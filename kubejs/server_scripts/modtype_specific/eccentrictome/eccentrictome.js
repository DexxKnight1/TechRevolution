let EccentricTome = Item.of('eccentrictome:tome',
  {
    "eccentrictome:mods": {
      advancedperipherals: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "advancedperipherals:manual" } } },
      ae2: { 0: { Count: 1, id: "ae2:guide" } },
      allthemodium: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "allthemodium:allthemodium" } } },
      alchemistry: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "alchemistry:alchemistry_book" } } },
      alexsmobs: { 0: { Count: 1, id: "alexsmobs:animal_dictionary" } },
      apotheosis: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "apotheosis:apoth_chronicle" } } },
      ars_nouveau: { 0: { Count: 1, id: "ars_nouveau:worn_notebook" } },
      botania: { 0: { Count: 1, id: "botania:lexicon" } },
      byg: { 0: { Count: 1, id: "byg:biomepedia" } },
      croptopia: { 0: { Count: 1, id: "croptopia:guide" } },
      cyclic: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "cyclic:cyclic_guide_book" } } },
      deeperdarker: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "deeperdarker:wanderers_notebook" } } },
      engineersdecor: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "engineersdecor:engineersdecor_manual" } } },
      extendedcrafting: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "extendedcrafting:guide" } } },
      ftbic: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "ftbic:ftbic_guide" } } },
      ftbquests: { 0: { Count: 1, id: "ftbquests:book" } },
      immersiveengineering: { 0: { Count: 1, id: "immersiveengineering:manual" } },
      industrialforegoing: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "industrialforegoing:industrial_foregoing" } } },
      integrateddynamics: { 0: { Count: 1, id: "integrateddynamics:on_the_dynamics_of_integration" } },
      laserio: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "laserio:laseriobook" } } },
      modularrouters: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "modularrouters:book" } } },
      mysticalagriculture: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "mysticalagriculture:guide" } } },
      pneumaticcraft: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "pneumaticcraft:book" } } },
      powah: { 0: { Count: 1, id: "powah:book" } },
      productivebees: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "productivebees:guide" } } },
      rebornstorage: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "rebornstorage:rs_book" } } },
      rftoolsbase: { 0: { Count: 1, id: "rftoolsbase:manual" } },
      sebastrnlib: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "sebastrnlib:sebastrn_mods_guide_book" } } },
      securitycraft: { 0: { Count: 1, id: "securitycraft:sc_manual" } },
      silentgear: { 0: { Count: 1, id: "silentgear:guide_book" } },
      solcarrot: { 0: { Count: 1, id: "solcarrot:food_book" } },
      theabyss: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "theabyss:the_abyss" } } },
      theoneprobe: { 0: { Count: 1, id: "theoneprobe:probenote" } },
      thermal: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "thermal:guidebook" } } }
    },
    "eccentrictome:version": 1
  }
)

ServerEvents.recipes(event => {
	
  event.shapeless(EccentricTome, 'minecraft:book').id('kubejs:full_tome')
})
