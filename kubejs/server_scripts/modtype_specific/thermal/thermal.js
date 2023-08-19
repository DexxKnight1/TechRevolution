ServerEvents.recipes(event => {

  const replaceInput = (from, to) => {event.replaceInput({}, from, to)}
  const replaceOutput = (from, to) => {event.replaceOutput({}, from, to)}
  const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)}
  const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to)}

  replaceInput('thermal:cured_rubber', 'ftbic:rubber')
  replaceOutput('thermal:cured_rubber', 'ftbic:rubber')
  replaceInputID('thermal:machines/press/packing2x2/press_cured_rubber_packing', 'ftbic:rubber')
  replaceOutputID('thermal:machines/press/unpacking/press_cured_rubber_unpacking', 'ftbic:rubber')
  replaceOutputID('thermal:machines/smelter/smelter_cured_rubber', 'ftbic:rubber')

  event.shapeless('thermal:ender_pearl_dust', 'ae2:ender_dust').id(`kubejs:ae2/ender_dust`)
  event.shapeless('thermal:ender_pearl_dust', 'ftbic:ender_dust').id(`kubejs:ftbic/ender_dust`)

  event.shaped('thermal:machine_frame', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/compressed_iron',
    B: 'ae2:quartz_glass',
    C: 'rftoolscontrol:cpu_core_1000'
  }).id(`kubejs:thermal/machine_frame`)

  event.shaped('thermal:redstone_servo', ['ACA', ' B ', 'ACA'], {
    A: '#forge:nuggets/redstone_ingot',
    B: 'create:shaft',
    C: '#forge:gems/cinnabar'
  }).id(`kubejs:thermal/redstone_servo`)

  event.shaped('thermal:rf_coil', [' C ', 'ABA', ' C '], {
    A: 'extendedcrafting:redstone_ingot',
    B: 'ftbic:copper_coil',
    C: '#forge:ingots/electrum'
  }).id(`kubejs:thermal/rf_coil`)

  event.shaped('thermal:energy_cell_frame', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/redstone',
    B: 'ae2:quartz_glass',
    C: 'immersiveengineering:dynamo'
  }).id(`kubejs:thermal/energy_cell_frame`)

  event.shaped('thermal:fluid_cell_frame', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/bronze',
    B: 'ae2:quartz_glass',
    C: 'create:portable_fluid_interface'
  }).id(`kubejs:thermal/fluid_cell_frame`)

  event.shaped('thermal:drill_head', [' C ', 'CAC', 'BBB'], {
    A: '#forge:gems/diamond',
    B: '#forge:ingots/iron',
    C: '#forge:ingots/steel'
  }).id(`kubejs:thermal/drill_head`)

  event.shaped('thermal:saw_blade', ['CB ', 'BAB', ' BC'], {
    A: '#forge:gems/diamond',
    B: '#forge:ingots/iron',
    C: '#forge:ingots/steel'
  }).id(`kubejs:thermal/saw_blade`)

  event.shaped('8x thermal:jar', [' A ', 'B B', 'BBB'], {
    A: '#minecraft:wooden_slabs',
    B: '#forge:glass'
  }).id(`kubejs:thermal/jar`)

  event.shaped('thermal:device_tree_extractor', ['CAC', 'EBE', 'CDC'], {
    A: 'myrtrees:tree_tap',
    B: 'thermal:jar',
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/osmium'
  }).id(`kubejs:thermal/device_tree_extractor`)

  event.shaped('thermal:device_hive_extractor', ['CAC', 'EBE', 'CDC'], {
    A: 'thermal:fluid_duct',
    B: 'thermal:jar',
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/brass'
  }).id(`kubejs:thermal/device_hive_extractor`)

  event.shaped('thermal:device_fisher', ['CAC', 'EBE', 'CDC'], {
    A: 'thermal:junk_net',
    B: Item.of('aquaculture:diamond_fishing_rod', '{Damage:0}'),
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/tin'
  }).id(`kubejs:thermal/device_fisher`)

  event.shaped('thermal:device_composter', ['CAC', 'EBE', 'CDC'], {
    A: 'minecraft:composter',
    B: '#forge:tools/hoes/osmium',
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/tin'
  }).id(`kubejs:thermal/device_soil_infuser`)

  event.shaped('thermal:device_soil_infuser', ['CAC', 'EBE', 'CDC'], {
    A: 'mysticalagriculture:mystical_fertilizer',
    B: 'thermal:phytogro',
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/electrum'
  }).id(`kubejs:thermal/`)

  event.shaped('thermal:device_water_gen', ['CAC', 'EBE', 'CDC'], {
    A: 'thermal:fluid_duct_windowed',
    B: 'create:mechanical_pump',
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/bronze'
  }).id(`kubejs:thermal/device_water_gen`)

  event.shaped('thermal:device_rock_gen', ['CAC', 'EBE', 'CDC'], {
    A: 'reliquary:molten_core',
    B: 'multipiston:multipistonblock',
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/invar'
  }).id(`kubejs:thermal/device_rock_gen`)

  event.shaped('thermal:device_collector', ['CAC', 'EBE', 'CDC'], {
    A: 'pneumaticcraft:pressure_tube',
    B: 'pneumaticcraft:omnidirectional_hopper',
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/aluminum'
  }).id(`kubejs:thermal/device_collector`)

  event.shaped('thermal:device_nullifier', ['CAC', 'EBE', 'CDC'], {
    A: 'cyclic:clock',
    B: 'cyclic:magma_bucket',
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/signalum'
  }).id(`kubejs:thermal/device_nullifier`)

  event.shaped('thermal:device_potion_diffuser', ['CAC', 'EBE', 'CDC'], {
    A: 'minecraft:brewing_stand',
    B: 'ars_nouveau:potion_jar',
    C: 'create:andesite_casing',
    D: 'thermal:redstone_servo',
    E: '#forge:plates/silver'
  }).id(`kubejs:thermal/device_potion_diffuser`)

  event.shaped('thermal:tinker_bench', ['AAA', 'DBD', 'DCD'], {
    A: '#forge:plates/steel',
    B: 'rftoolsbase:crafting_card',
    C: 'rftoolscontrol:ram_chip',
    D: '#forge:treated_wood'
  }).id(`kubejs:thermal/tinker_bench`)

  event.shaped('thermal:charge_bench', ['AAA', 'DBD', 'DCD'], {
    A: '#forge:plates/signalum',
    B: 'wirelesschargers:advanced_wireless_block_charger',
    C: 'ftbic:charge_pad',
    D: '#forge:treated_wood'
  }).id(`kubejs:thermal/charge_bench`)

  event.shaped('thermal:flux_drill', ['AG ', 'BCG', 'FDE'], {
    A: 'thermal:drill_head',
    B: 'powah:capacitor_basic_large',
    C: 'createaddition:electric_motor',
    D: '#forge:gears/compressed_iron',
    E: 'mekanism:electrolytic_core',
    F: 'thermal:rf_coil',
    G: '#forge:plates/aluminum'
  }).id(`kubejs:thermal/flux_drill`)

  event.shaped('thermal:flux_saw', ['AG ', 'BCG', 'FDE'], {
    A: 'thermal:saw_blade',
    B: 'powah:capacitor_basic_large',
    C: 'createaddition:electric_motor',
    D: '#forge:gears/compressed_iron',
    E: 'mekanism:electrolytic_core',
    F: 'thermal:rf_coil',
    G: '#forge:plates/aluminum'
  }).id(`kubejs:thermal/flux_saw`)

  event.shaped('thermal:flux_capacitor', ['DDD', 'ABE', 'CAC'], {
    A: '#forge:dusts/redstone',
    B: 'thermal:energy_cell_frame',
    C: 'fluxnetworks:flux_dust',
    D: '#forge:plates/lead',
    E: 'redstone_arsenal:flux_dust'
  }).id(`kubejs:thermal/flux_capacitor`)

  event.shaped('thermal:flux_magnet', ['A B', 'DCD', 'DDD'], {
    A: '#forge:gems/cinnabar',
    B: '#forge:gems/apatite',
    C: 'powah:capacitor_basic_large',
    D: '#forge:ingots/compressed_iron'
  }).id(`kubejs:thermal/flux_magnet`)

  event.shaped('thermal:potion_quiver', ['A A', 'BCB', 'DAD'], {
    A: '#forge:plates/bronze',
    B: '#forge:rope',
    C: 'ars_nouveau:potion_jar',
    D: '#forge:rubber'
  }).id(`kubejs:thermal/potion_quiver`)

  event.shaped('thermal:potion_infuser', ['DAD', 'BCB', 'A A'], {
    A: '#forge:plates/bronze',
    B: '#forge:gems/amethyst',
    C: 'ars_nouveau:potion_jar',
    D: '#forge:rubber'
  }).id(`kubejs:thermal/potion_infuser`)

  event.shaped('thermal:fluid_reservoir', ['ADA', 'BCB', 'DAD'], {
    A: '#forge:plates/bronze',
    B: 'ae2:quartz_glass',
    C: 'fluidtank:tank_bronze',
    D: '#forge:rubber'
  }).id(`kubejs:thermal/fluid_reservoir`)

  event.shaped('thermal:machine_furnace', [' A ', 'BCB', 'DED'], {
    A: '#forge:furnaces/silver',
    B: 'immersiveengineering:cokebrick',
    C: 'thermal:machine_frame',
    D: '#forge:gears/steel',
    E: 'ftbic:electronic_circuit'
  }).id(`kubejs:thermal/machine_furnace`)

  event.shaped('thermal:machine_smelter', ['AFA', 'BCB', 'DED'], {
    A: 'immersiveengineering:blastbrick_reinforced',
    B: '#forge:furnaces/gold',
    C: 'thermal:machine_frame',
    D: '#forge:gears/steel',
    E: 'ftbic:electronic_circuit',
    F: 'immersiveengineering:furnace_heater'
  }).id(`kubejs:thermal/machine_smelter`)

  event.shaped('thermal:machine_crucible', [' A ', 'BCB', 'DED'], {
    A: 'systeams:magmatic_boiler',
    B: 'nourished_nether:gilded_blackstone_bricks',
    C: 'thermal:machine_frame',
    D: '#forge:gears/nickel',
    E: 'ftbic:electronic_circuit'
  }).id(`kubejs:thermal/machine_crucible`)

  event.shaped('thermal:machine_chiller', [' A ', 'BCB', 'DED'], {
    A: Item.of('ftbic:large_coolant_cell', '{Damage:0}'),
    B: 'minecraft:blue_ice',
    C: 'thermal:machine_frame',
    D: '#forge:gears/nickel',
    E: 'ftbic:electronic_circuit'
  }).id(`kubejs:thermal/machine_chiller`)

  event.shaped('thermal:machine_brewer', [' A ', 'BCB', 'DED'], {
    A: 'botania:brewery',
    B: 'mob_grinding_utils:tinted_glass',
    C: 'thermal:machine_frame',
    D: '#forge:gears/lumium',
    E: 'ftbic:electronic_circuit'
  }).id(`kubejs:thermal/machine_brewer`)

  event.shaped('thermal:machine_bottler', [' A ', 'BCB', 'DED'], {
    A: 'create:spout',
    B: 'immersiveengineering:hempcrete_brick',
    C: 'thermal:machine_frame',
    D: '#forge:gears/diamond',
    E: 'ftbic:electronic_circuit'
  }).id(`kubejs:thermal/machine_bottler`)

  event.shaped('thermal:machine_pulverizer', ['FAF', 'BCB', 'DED'], {
    A: 'pneumaticcraft:pneumatic_cylinder',
    B: 'create:crushing_wheel',
    C: 'thermal:machine_frame',
    D: '#forge:gears/steel',
    E: 'ftbic:electronic_circuit',
    F: 'immersiveengineering:concrete_leaded'
  }).id(`kubejs:thermal/machine_pulverizer`)

  event.shaped('thermal:machine_sawmill', [' A ', 'BCF', 'DED'], {
    A: 'immersiveengineering:sawblade',
    B: 'engineersdecor:factory_placer',
    C: 'thermal:machine_frame',
    D: '#forge:gears/diamond',
    E: 'ftbic:electronic_circuit',
    F: 'engineersdecor:factory_hopper'
  }).id(`kubejs:thermal/machine_sawmill`)

  event.shaped('thermal:machine_press', [' A ', 'BCB', 'DED'], {
    A: 'create:mechanical_press',
    B: 'mekanism:pressure_disperser',
    C: 'thermal:machine_frame',
    D: '#forge:gears/steel',
    E: 'ftbic:electronic_circuit'
  }).id(`kubejs:thermal/machine_press`)

  event.shaped('thermal:machine_crystallizer', ['FAF', 'BCB', 'DED'], {
    A: 'silentgear:recrystallizer',
    B: 'mysticalagriculture:imperium_growth_accelerator',
    C: 'thermal:machine_frame',
    D: '#forge:gears/signalum',
    E: 'ftbic:electronic_circuit',
    F: 'glassential:glass_redstone'
  }).id(`kubejs:thermal/machine_crystallizer`)

  event.shaped('thermal:machine_crafter', [' A ', 'BCB', 'DED'], {
    A: 'cyclic:crafter',
    B: 'create:sequenced_gearshift',
    C: 'thermal:machine_frame',
    D: '#forge:gears/silver',
    E: 'ftbic:electronic_circuit'
  }).id(`kubejs:thermal/machine_crafter`)

  event.shaped('thermal:machine_centrifuge', [' A ', 'BCF', 'DED'], {
    A: 'mekanism:isotopic_centrifuge',
    B: 'mekanismgenerators:rotational_complex',
    C: 'thermal:machine_frame',
    D: '#forge:gears/silver',
    E: 'ftbic:electronic_circuit',
    F: 'immersiveengineering:turntable'
  }).id(`kubejs:thermal/machine_centrifuge`)

  event.shaped('thermal:machine_pyrolyzer', [' A ', 'BCF', 'DED'], {
    A: 'minecraft:blast_furnace',
    B: 'pneumaticcraft:large_tank',
    C: 'thermal:machine_frame',
    D: '#forge:gears/brass',
    E: 'ftbic:electronic_circuit',
    F: 'cyclic:collector_fluid'
  }).id(`kubejs:thermal/machine_pyrolyzer`)

  event.shaped('thermal:machine_refinery', [' A ', 'BCF', 'DED'], {
    A: 'mekanism:electric_pump',
    B: 'pneumaticcraft:refinery',
    C: 'thermal:machine_frame',
    D: '#forge:gears/platinum',
    E: 'ftbic:electronic_circuit',
    F: 'pneumaticcraft:refinery_output'
  }).id(`kubejs:thermal/machine_refinery`)

  event.shaped('thermal:machine_insolator', [' A ', 'BCB', 'DED'], {
    A: 'industrialforegoing:mechanical_dirt',
    B: 'botania:sunny_quartz_pillar',
    C: 'thermal:machine_frame',
    D: '#forge:gears/platinum',
    E: 'ftbic:electronic_circuit'
  }).id(`kubejs:thermal/machine_insolator`)

  event.shaped('thermal:satchel', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:leather',
    B: '#thermal:rockwool',
    C: '#forge:chests/wooden'
  }).id(`kubejs:thermal/satchel`)

  //Dusts
  modifyShapeless(event, 'thermal:apatite_dust', 1, ['thermal:apatite', '#alltheores:ore_hammers'])
  modifyShapeless(event, 'thermal:cinnabar_dust', 1, ['thermal:cinnabar', '#alltheores:ore_hammers'])
  modifyShapeless(event, 'thermal:niter_dust', 1, ['thermal:niter', '#alltheores:ore_hammers'])
  modifyShapeless(event, 'thermal:sulfur_dust', 1, ['thermal:sulfur', '#alltheores:ore_hammers'])
  modifyShapeless(event, 'thermal:ender_pearl_dust', 1, ['minecraft:ender_pearl', '#alltheores:ore_hammers'])
  modifyShapeless(event, 'thermal:lapis_dust', 1, ['minecraft:lapis_lazuli', '#alltheores:ore_hammers'])
  modifyShapeless(event, 'thermal:emerald_dust', 1, ['minecraft:emerald', '#alltheores:ore_hammers'])
  modifyShapeless(event, 'thermal:quartz_dust', 1, ['minecraft:quartz', '#alltheores:ore_hammers'])

  //Multiservo Press missed gear recipes
  //Thermal
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:gems/lapis", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "thermal:lapis_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:gems/emerald", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "thermal:emerald_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:gems/quartz", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "thermal:quartz_gear"}]
  })
  //Allthemodium
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/allthemodium", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "allthemodium:allthemodium_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/vibranium", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "allthemodium:vibranium_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/unobtainium", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "allthemodium:unobtainium_gear"}]
  })
  //Alltheores ATO
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/aluminum", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "alltheores:aluminum_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/iridium", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "alltheores:iridium_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/osmium", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "alltheores:osmium_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/platinum", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "alltheores:platinum_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/uranium", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "alltheores:uranium_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/zinc", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "alltheores:zinc_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:gems/diamond", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "alltheores:diamond_gear"}]
  })
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/brass", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "alltheores:brass_gear"}]
  })
  //Redstone Arsenal
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/flux", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "redstone_arsenal:flux_gear"}]
  })
  //Pneumatic Craft
  event.custom({type: "thermal:press", ingredients: [{tag: "forge:ingots/compressed_iron", count: 4}, {item: "thermal:press_gear_die"}],
    result: [{item: "pneumaticcraft:compressed_iron_gear"}]
  })

  removeRecipeByID(event, [
    'thermal:machine_frame',
    'thermal:redstone_servo',
    'thermal:rf_coil',
    'thermal:parts/diamond_gear',
    'thermal:tools/satchel',
    'thermal:earth_charge/diamond_dust_from_diamond',
    'thermal:earth_charge/apatite_dust_from_apatite',
    'thermal:earth_charge/cinnabar_dust_from_cinnabar',
    'thermal:earth_charge/niter_dust_from_niter',
    'thermal:earth_charge/sulfur_dust_from_sulfur',
    'thermal:earth_charge/ender_pearl_dust_from_ender_pearl',
    'thermal:earth_charge/lapis_dust_from_lapis',
    'thermal:earth_charge/emerald_dust_from_emerald',
    'thermal:earth_charge/quartz_dust_from_quartz',
    'thermal:machines/press/unpacking/press_cured_rubber_unpacking',
    'thermal:machines/press/packing2x2/press_cured_rubber_packing',
    'thermal:machines/smelter/smelter_cured_rubber',
    'thermal:jar_4',
    'thermal:device_tree_extractor',
    'thermal:device_hive_extractor',
    'thermal:device_fisher',
    'thermal:device_composter',
    'thermal:device_soil_infuser',
    'thermal:device_water_gen',
    'thermal:device_rock_gen',
    'thermal:device_collector',
    'thermal:device_nullifier',
    'thermal:device_potion_diffuser',
    'thermal:tinker_bench',
    'thermal:charge_bench',
    'thermal:flux_magnet',
    'thermal:potion_quiver',
    'thermal:fluid_reservoir',
    'thermal:energy_cell_frame',
    'thermal:fluid_cell_frame',
    'thermal:drill_head',
    'thermal:saw_blade',
    'thermal:flux_drill',
    'thermal:flux_saw',
    'thermal:flux_capacitor',
    'thermal:potion_infuser',
    'thermal:machine_furnace',
    'thermal:machine_smelter',
    'thermal:machine_crucible',
    'thermal:machine_chiller',
    'thermal:machine_brewer',
    'thermal:machine_bottler',
    'thermal:machine_pulverizer',
    'thermal:machine_sawmill',
    'thermal:machine_press',
    'thermal:machine_crystallizer',
    'thermal:machine_crafter',
    'thermal:machine_centrifuge',
    'thermal:machine_pyrolyzer',
    'thermal:machine_refinery',
    'thermal:machine_insolator',
  ])

})
