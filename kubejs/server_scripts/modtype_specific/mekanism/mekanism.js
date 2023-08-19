ServerEvents.recipes(event => {

  event.shaped('mekanism:steel_casing', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:storage_blocks/compressed_iron',
    B: 'ftbic:advanced_alloy',
    C: 'immersiveengineering:component_steel',
    D: '#immersiveengineering:scaffoldings/steel'
  }).id(`kubejs:mekanism/steel_casing`)
	
  event.shaped('mekanism:digital_miner', ['AUA', 'LRL', 'TST'], {
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    A: '#mekanism:alloys/atomic',
    S: 'mekanism:steel_casing',
    U: '#forge:storage_blocks/compressed_iron'
  }).id(`kubejs:mekanism/digital_miner`)
  
  event.shaped('mekanism:atomic_disassembler', ['RER', 'RUR', ' V '], {
    E: 'mekanism:energy_tablet',
    R: '#mekanism:alloys/reinforced',
    U: '#forge:circuits/ultimate',
    V: 'ftbic:iridium_alloy'
  }).id(`kubejs:mekanism/atomic_disassembler`)
  
  event.shaped('mekanism:robit', [' S ', 'ERE', 'OPO'], {
    R: 'mekanism:alloy_atomic',
    S: '#forge:ingots/cobalt',
    E: 'mekanism:energy_tablet',
    O: 'mekanism:ingot_refined_obsidian',
    P: '#mekanism:personal_storage'
  }).id(`kubejs:mekanism/robit`)

  event.shaped('mekanism:personal_chest', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:ingots/steel',
    B: 'thermal:obsidian_glass',
    C: '#forge:chests/wooden',
    D: 'mekanism:elite_control_circuit',
    E: '#forge:ingots/enderium',
    F: 'kubejs:personal_id'
  }).id(`kubejs:mekanism/personal_chest`)

  event.shaped('mekanism:personal_barrel', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:ingots/steel',
    B: 'thermal:obsidian_glass',
    C: '#forge:barrels/wooden',
    D: 'mekanism:elite_control_circuit',
    E: '#forge:ingots/enderium',
    F: 'kubejs:personal_id'
  }).id(`kubejs:mekanism/personal_barrel`)

  event.shaped('mekanism:energy_tablet', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:dusts/redstone',
    B: '#forge:ingots/gold',
    C: 'mekanism:alloy_infused',
    D: 'ftbic:fuse'
  }).id(`kubejs:mekanism/energy_tablet`)

  event.shaped('mekanism:configurator', [' A ', 'CDC', ' B '], {
    A: 'ftbic:fuse',
    B: '#forge:rods/steel',
    C: 'mekanism:alloy_infused',
    D: 'mekanism:energy_tablet'
  }).id(`kubejs:mekanism/configurator`)

  event.shaped('mekanism:configuration_card', ['ACA', 'CBC', 'ACA'], {
    A: 'ftbic:fuse',
    B: 'mekanism:basic_control_circuit',
    C: 'mekanism:alloy_infused'
  }).id(`kubejs:mekanism/configuration_card`)

  event.shaped('mekanism:geiger_counter', ['ACA', 'CBC', 'ACA'], {
    A: 'ftbic:fuse',
    B: 'mekanism:basic_control_circuit',
    C: '#forge:ingots/lead'
  }).id(`kubejs:mekanism/geiger_counter`)

  event.shaped('mekanism:dosimeter', ['ACA', 'CBC', 'ACA'], {
    A: 'ftbic:fuse',
    B: '#forge:ingots/redstone',
    C: '#forge:ingots/lead'
  }).id(`kubejs:mekanism/dosimeter`)

  event.shaped('mekanism:cardboard_box', ['ABA', 'A A', 'AAA'], {
    A: '#forge:dusts/wood',
    B: 'sophisticatedstorage:packing_tape'
  }).id(`kubejs:mekanism/cardboard_box`)

  event.shaped('mekanism:metallurgic_infuser', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:ingots/steel',
    B: '#forge:furnaces/iron',
    C: '#forge:dusts/redstone',
    D: '#forge:ingots/compressed_iron'
  }).id(`kubejs:mekanism/metallurgic_infuser`)

  event.shaped('mekanism:enrichment_chamber', ['AEA', 'CDC', 'ABA'], {
    A: '#forge:ingots/redstone',
    B: '#forge:circuits/advanced',
    C: '#forge:ingots/compressed_iron',
    D: 'mekanism:steel_casing',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/enrichment_chamber`)

  event.shaped('mekanism:osmium_compressor', ['AEA', 'CDC', 'ABA'], {
    A: '#mekanism:alloys/infused',
    B: '#forge:circuits/advanced',
    C: 'fluidtank:tank_iron',
    D: 'mekanism:steel_casing',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/osmium_compressor`)

  event.shaped('mekanism:energized_smelter', ['AEA', 'CDC', 'ABA'], {
    A: '#forge:ingots/redstone',
    B: '#forge:circuits/advanced',
    C: '#forge:furnaces/crystal',
    D: 'mekanism:steel_casing',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/energized_smelter`)

  event.shaped('mekanism:crusher', ['AEA', 'CDC', 'ABA'], {
    A: '#forge:ingots/redstone',
    B: '#forge:circuits/advanced',
    C: 'create:crushing_wheel',
    D: 'mekanism:steel_casing',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/crusher`)

  event.shaped('4x mekanism:teleporter_frame', ['ABA', 'BCB', 'ABA'], {
    A: 'ars_nouveau:sourcestone',
    B: '#forge:ingots/compressed_iron',
    C: 'ars_nouveau:ritual_warping'
  }).id(`kubejs:mekanism/teleporter_frame`)

  event.shaped('mekanism:teleporter', ['ABA', 'CDC', 'AEA'], {
    A: '#forge:ingots/compressed_iron',
    B: 'mekanism:teleportation_core',
    C: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:iron"}').strongNBT(),
    D: 'travelanchors:travel_anchor',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/teleporter`)

  event.shaped('mekanism:portable_teleporter', ['ABA', 'CDC', 'AEA'], {
    A: '#forge:ingots/compressed_iron',
    B: 'mekanism:teleportation_core',
    C: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:iron"}').strongNBT(),
    D: 'integrateddynamics:part_display_panel',
    E: 'thermal:rf_coil'
  }).id(`kubejs:mekanism/portable_teleporter`)

  event.shaped('mekanism:resistive_heater', ['ABA', 'CDC', 'ECE'], {
    A: '#forge:storage_blocks/compressed_iron',
    B: 'pneumaticcraft:heat_sink',
    C: '#forge:ingots/fiery',
    D: 'immersiveengineering:furnace_heater',
    E: 'immersiveengineering:blastbrick_reinforced'
  }).id(`kubejs:mekanism/resistive_heater`)

  event.shaped('mekanism:chargepad', [' A ', 'BCB', 'DDD'], {
    A: 'thermal:flux_capacitor',
    B: '#forge:ingots/steel',
    C: 'mekanism:energy_tablet',
    D: 'quark:obsidian_pressure_plate'
  }).id(`kubejs:mekanism/chargepad`)

  event.shaped('mekanism:chemical_oxidizer', ['CBE', 'ADA', 'FBF'], {
    A: 'immersiveengineering:insulating_glass',
    B: '#forge:circuits/advanced',
    C: 'pneumaticcraft:reinforced_chest',
    D: 'ftbic:machine_block',
    E: 'mekanism:basic_chemical_tank',
    F: '#forge:alloys/elite'
  }).id(`kubejs:mekanism/chemical_oxidizer`)

  event.shaped('mekanism:chemical_infuser', ['EBE', 'ACA', 'DED'], {
    A: 'immersiveengineering:insulating_glass',
    B: '#forge:ingots/compressed_iron',
    C: 'ftbic:machine_block',
    D: '#forge:plates/osmium',
    E: 'mekanism:basic_chemical_tank'
  }).id(`kubejs:mekanism/chemical_infuser`)

  event.shaped('mekanism:basic_chemical_tank', [' A ', 'BCB', ' B '], {
    A: 'pneumaticcraft:safety_tube_module',
    B: '#forge:plates/steel',
    C: 'pneumaticcraft:air_canister'
  }).id(`kubejs:mekanism/basic_chemical_tank`)

  event.shaped('mekanism:basic_fluid_tank', [' A ', 'BCB', ' B '], {
    A: 'create:fluid_valve',
    B: '#forge:plates/steel',
    C: 'fluidtank:reservoir_iron'
  }).id(`kubejs:mekanism/basic_fluid_tank`)

  event.shaped('mekanism:rotary_condensentrator', ['EBF', 'ACA', 'DBD'], {
    A: 'immersiveengineering:insulating_glass',
    B: 'pneumaticcraft:turbine_rotor',
    C: 'ftbic:machine_block',
    D: '#forge:gears/steel',
    E: 'mekanism:basic_chemical_tank',
    F: 'thermal:fluid_reservoir'
  }).id(`kubejs:mekanism/rotary_condensentrator`)

  event.shaped('mekanism:pressurized_reaction_chamber', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:gears/steel',
    B: '#forge:circuits/elite',
    C: 'pneumaticcraft:printed_circuit_board',
    D: 'ftbic:machine_block',
    E: 'mekanism:basic_chemical_tank',
    F: 'thermal:fluid_reservoir'
  }).id(`kubejs:mekanism/pressurized_reaction_chamber`)

  event.shaped('mekanism:laser_amplifier', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:plates/steel',
    B: '#forge:gems/infused_diamond',
    C: 'ftbic:advanced_machine_block'
  }).id(`kubejs:mekanism/laser_amplifier`)

  event.shaped('mekanism:basic_tier_installer', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:gears/osmium',
    B: 'ae2:charged_certus_quartz_crystal',
    C: 'immersiveengineering:component_electronic',
    D: 'ftbic:machine_block'
  }).id(`kubejs:mekanism/basic_tier_installer`)

  event.shaped('mekanism:advanced_tier_installer', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:gears/compressed_iron',
    B: 'ae2:spatial_cell_component_2',
    C: 'rftoolscontrol:cpu_core_2000',
    D: 'ftbic:machine_block'
  }).id(`kubejs:mekanism/advanced_tier_installer`)

  event.shaped('mekanism:elite_tier_installer', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:gears/enderium',
    B: 'ae2:spatial_cell_component_2',
    C: 'ftbic:iridium_circuit',
    D: 'ftbic:advanced_machine_block'
  }).id(`kubejs:mekanism/elite_tier_installer`)

  event.shaped('mekanism:ultimate_tier_installer', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:gears/unobtainium',
    B: 'ae2:spatial_cell_component_16',
    C: 'pneumaticcraft:printed_circuit_board',
    D: 'ftbic:advanced_machine_block'
  }).id(`kubejs:mekanism/ultimate_tier_installer`)

  event.shaped('mekanism:chemical_crystallizer', ['ABA', 'CDC', 'ABA'], {
    A: '#forge:storage_blocks/unobtainium',
    B: 'mekanism:basic_chemical_tank',
    C: 'ae2:quartz_growth_accelerator',
    D: 'mekanism:steel_casing'
  }).id(`kubejs:mekanism/chemical_crystallizer`)

  event.shaped('mekanism:chemical_injection_chamber', ['ABA', 'CDC', 'EFE'], {
    A: '#forge:plates/vibranium',
    B: 'pneumaticcraft:reinforced_chest',
    C: 'thermal:enderium_glass',
    D: 'ftbic:machine_block',
    E: '#forge:gears/compressed_iron',
    F: 'mekanism:basic_chemical_tank'
  }).id(`kubejs:mekanism/chemical_injection_chamber`)

  removeRecipeByID(event, [
    'mekanism:digital_miner',
    'mekanism:atomic_disassembler',
    'mekanism:robit',
    'mekanism:steel_casing',
    'mekanism:personal_chest',
    'mekanism:personal_barrel',
    'mekanism:portable_teleporter',
    'mekanism:resistive_heater',
    'mekanism:chargepad',
    'mekanism:chemical_oxidizer',
    'mekanism:chemical_infuser',
    'mekanism:chemical_tank/basic',
    'mekanism:fluid_tank/basic',
    'mekanism:tier_installer/basic',
    'mekanism:tier_installer/advanced',
    'mekanism:tier_installer/elite',
    'mekanism:tier_installer/ultimate',
    'mekanism:rotary_condensentrator',
    'mekanism:pressurized_reaction_chamber',
    'mekanism:laser_amplifier',
    'mekanism:chemical_crystallizer',
    'mekanism:chemical_injection_chamber',
    'mekanism:energy_tablet',
    'mekanism:configurator',
    'mekanism:configuration_card',
    'mekanism:geiger_counter',
    'mekanism:dosimeter',
    'mekanism:cardboard_box',
    'mekanism:metallurgic_infuser',
    'mekanism:enrichment_chamber',
    'mekanism:osmium_compressor',
    'mekanism:energized_smelter',
    'mekanism:crusher',
    'mekanism:teleporter_frame',
    'mekanism:teleporter',
  ])

})
