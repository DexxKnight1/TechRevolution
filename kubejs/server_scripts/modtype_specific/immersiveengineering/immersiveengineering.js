ServerEvents.recipes(event => {

  event.shaped('immersiveengineering:cloche', ['GEG', 'GFG', 'TRT'], {
    G: 'glassential:glass_redstone',
    E: 'immersiveengineering:toolupgrade_powerpack_tesla',
    T: '#forge:treated_wood',
    R: 'immersiveengineering:rs_engineering',
	  F: 'mysticalagriculture:supremium_growth_accelerator'
  }).id(`kubejs:immersiveengieering/cloche`)

  event.shaped('2x immersiveengineering:rs_engineering', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:sheetmetals/iron',
    B: 'thermal:redstone_servo',
    C: '#forge:storage_blocks/copper',
    D: 'securitycraft:redstone_module'
  }).id(`kubejs:immersiveengieering/rs_engineering`)

  event.shaped('2x immersiveengineering:light_engineering', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:sheetmetals/aluminum',
    B: 'thermal:redstone_servo',
    C: '#forge:storage_blocks/nickel',
    D: 'immersiveengineering:component_electronic'
  }).id(`kubejs:immersiveengieering/light_engineering`)

  event.shaped('2x immersiveengineering:heavy_engineering', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:sheetmetals/steel',
    B: 'thermal:redstone_servo',
    C: '#forge:storage_blocks/enderium',
    D: '#forge:gears/compressed_iron'
  }).id(`kubejs:immersiveengieering/heavy_engineering`)

  event.shaped('immersiveengineering:craftingtable', ['AAA', 'BCB', 'B B'], {
    A: '#forge:treated_wood_slab',
    B: '#forge:rods/treated_wood',
    C: '#forge:workbenches'
  }).id(`kubejs:immersiveengieering/craftingtable`)

  event.shaped('3x immersiveengineering:blastbrick_reinforced', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:obsidian',
    B: '#forge:plates/steel',
    C: 'immersiveengineering:blastbrick'
  }).id(`kubejs:immersiveengieering/blastbrick_reinforced`)

  event.shaped('immersiveengineering:watermill', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:waterwheel_segment',
    B: 'create:cogwheel'
  }).id(`kubejs:immersiveengieering/watermill`)

  event.shaped('immersiveengineering:windmill', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:windmill_blade',
    B: 'create:cogwheel'
  }).id(`kubejs:immersiveengieering/windmill`)

  event.shaped('immersiveengineering:coil_lv', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:wirecoil_copper',
    B: 'create:shaft'
  }).id(`kubejs:immersiveengieering/coil_lv`)

  event.shaped('immersiveengineering:coil_mv', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:wirecoil_electrum',
    B: 'create:shaft'
  }).id(`kubejs:immersiveengieering/coil_mv`)

  event.shaped('immersiveengineering:coil_hv', [' A ', 'ABA', ' A '], {
    A: 'immersiveengineering:wirecoil_steel',
    B: 'create:shaft'
  }).id(`kubejs:immersiveengieering/coil_hv`)

  event.shaped('immersiveengineering:fluid_pump', [' A ', 'BCB', 'BDB'], {
    A: 'createaddition:capacitor',
    B: '#forge:plates/aluminum',
    C: 'createaddition:electric_motor',
    D: 'create:mechanical_pump'
  }).id(`kubejs:immersiveengieering/fluid_pump`)

  event.shaped('4x immersiveengineering:wirecoil_redstone', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:dusts/redstone',
    B: '#forge:wires/aluminum',
    C: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_redstone`)

  event.shaped('4x immersiveengineering:wirecoil_structure_steel', [' A ', 'ABA', ' A '], {
    A: '#forge:wires/steel',
    B: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_structure_steel`)

  event.shaped('4x immersiveengineering:wirecoil_structure_rope', [' A ', 'ABA', ' A '], {
    A: '#forge:fiber_hemp',
    B: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_structure_rope`)

  event.shaped('4x immersiveengineering:wirecoil_copper', [' A ', 'ABA', ' A '], {
    A: '#forge:wires/copper',
    B: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_copper`)

  event.shaped('4x immersiveengineering:wirecoil_electrum', [' A ', 'ABA', ' A '], {
    A: '#forge:wires/electrum',
    B: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_electrum`)

  event.shaped('4x immersiveengineering:wirecoil_steel', [' A ', 'CBC', ' A '], {
    A: '#forge:wires/steel',
    B: '#forge:rods/treated_wood',
    C: '#forge:wires/aluminum'
  }).id(`kubejs:immersiveengieering/wirecoil_steel`)

  event.shaped('4x immersiveengineering:wirecoil_copper_ins', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:fabric_hemp',
    B: 'immersiveengineering:wirecoil_copper',
    C: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_copper_ins`)

  event.shaped('4x immersiveengineering:wirecoil_electrum_ins', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:fabric_hemp',
    B: 'immersiveengineering:wirecoil_electrum',
    C: '#forge:rods/treated_wood'
  }).id(`kubejs:immersiveengieering/wirecoil_electrum_ins`)

  //Metalpress missed recipes
  //Rods
  //Althemodium
  event.custom({type: "immersiveengineering:metal_press", energy: 3500, input: {base_ingredient: {tag: "forge:ingots/allthemodium"}, count: 1},
    mold: "immersiveengineering:mold_rod",
    result: {item: "allthemodium:allthemodium_rod"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 3500, input: {base_ingredient: {tag: "forge:ingots/unobtainium"}, count: 1},
    mold: "immersiveengineering:mold_rod",
    result: {item: "allthemodium:unobtainium_rod"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 3500, input: {base_ingredient: {tag: "forge:ingots/vibranium"}, count: 1},
    mold: "immersiveengineering:mold_rod",
    result: {item: "allthemodium:vibranium_rod"}
  })
  //Plates
  //Althemodium
  event.custom({type: "immersiveengineering:metal_press", energy: 3500, input: {base_ingredient: {tag: "forge:ingots/allthemodium"}, count: 1},
    mold: "immersiveengineering:mold_plate",
    result: {item: "allthemodium:allthemodium_plate"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 3500, input: {base_ingredient: {tag: "forge:ingots/unobtainium"}, count: 1},
    mold: "immersiveengineering:mold_plate",
    result: {item: "allthemodium:unobtainium_plate"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 3500, input: {base_ingredient: {tag: "forge:ingots/vibranium"}, count: 1},
    mold: "immersiveengineering:mold_plate",
    result: {item: "allthemodium:vibranium_plate"}
  })
  //Thermal Extra
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/soul_infused"}, count: 1},
    mold: "immersiveengineering:mold_plate",
    result: {item: "thermal_extra:soul_infused_plate"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/shellite"}, count: 1},
    mold: "immersiveengineering:mold_plate",
    result: {item: "thermal_extra:shellite_plate"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/twinite"}, count: 1},
    mold: "immersiveengineering:mold_plate",
    result: {item: "thermal_extra:twinite_plate"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/dragonsteel"}, count: 1},
    mold: "immersiveengineering:mold_plate",
    result: {item: "thermal_extra:dragonsteel_plate"}
  })
  //Gears
  //Althemodium
  event.custom({type: "immersiveengineering:metal_press", energy: 3500, input: {base_ingredient: {tag: "forge:ingots/allthemodium"}, count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "allthemodium:allthemodium_gear"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 3500, input: {base_ingredient: {tag: "forge:ingots/unobtainium"}, count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "allthemodium:unobtainium_gear"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 3500, input: {base_ingredient: {tag: "forge:ingots/vibranium"}, count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "allthemodium:vibranium_gear"}
  })
  //Thermal Extra
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/soul_infused"}, count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "thermal_extra:soul_infused_gear"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/shellite"}, count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "thermal_extra:shellite_gear"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/twinite"}, count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "thermal_extra:twinite_gear"}
  })
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/dragonsteel"}, count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "thermal_extra:dragonsteel_gear"}
  })
  //Thermal
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:gems/quartz"}, count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "thermal:quartz_gear"}
  })
  //Redstone Arsenal
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/flux"}, count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "redstone_arsenal:flux_gear"}
  })
  //Pneumatic Craft
  event.custom({type: "immersiveengineering:metal_press", energy: 2400, input: {base_ingredient: {tag: "forge:ingots/compressed_iron"},
    count: 4},
    mold: "immersiveengineering:mold_gear",
    result: {item: "pneumaticcraft:compressed_iron_gear"}
  })

  removeRecipeByID(event, [
    'immersiveengineering:crafting/cloche',
    'immersiveengineering:crafting/watermill',
    'immersiveengineering:crafting/windmill',
    'immersiveengineering:crafting/rs_engineering',
    'immersiveengineering:crafting/light_engineering',
    'immersiveengineering:crafting/heavy_engineering',
    'immersiveengineering:crafting/craftingtable',
    'immersiveengineering:crafting/fluid_pump',
    'immersiveengineering:crafting/blastbrick_reinforced',
    'immersiveengineering:crafting/coil_lv',
    'immersiveengineering:crafting/coil_mv',
    'immersiveengineering:crafting/coil_hv',
    'immersiveengineering:crafting/wirecoil_structure_steel',
    'immersiveengineering:crafting/wirecoil_structure_rope',
    'immersiveengineering:crafting/wirecoil_redstone',
    'immersiveengineering:crafting/wirecoil_copper',
    'immersiveengineering:crafting/wirecoil_copper_ins',
    'immersiveengineering:crafting/wirecoil_electrum',
    'immersiveengineering:crafting/wirecoil_electrum_ins',
    'immersiveengineering:crafting/wirecoil_steel'
  ])

})
