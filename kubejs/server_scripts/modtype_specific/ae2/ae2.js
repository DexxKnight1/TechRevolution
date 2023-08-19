ServerEvents.recipes(event => {

  event.shaped('ae2:controller', ['ABA', 'CDC', 'ABA'], {
    A: 'ae2:smooth_sky_stone_block',
    B: 'ae2:fluix_crystal',
    C: 'industrialforegoing:plastic',
    D: 'ae2:engineering_processor'
  }).id(`kubejs:ae2/controller`)
  
  event.shaped('4x ae2:sky_stone_block', ['BSB', 'SBS', 'BSB'], {
    S: 'minecraft:stone',
    B: 'minecraft:blackstone'
  }).id(`kubejs:ae2/sky_stone_block`)

  event.shaped('ae2:calculation_processor_press', ['PFP', 'FVF', 'PFP'], {
    F: 'ae2:fluix_crystal',
    V: '#forge:storage_blocks/iron',
    P: 'ae2:fluix_pearl'
  }).id(`kubejs:ae2/calculation_press`)

  event.shaped('ae2:logic_processor_press', ['CFC', 'FVF', 'CFC'], {
    F: 'ae2:fluix_crystal',
    V: '#forge:storage_blocks/iron',
    C: '#forge:ingots/rose_gold'
  }).id(`kubejs:ae2/logic_press`)

  event.shaped('ae2:engineering_processor_press', ['DFD', 'FVF', 'DFD'], {
    D: '#forge:gems/mana_diamond',
    F: 'ae2:fluix_crystal',
    V: '#forge:storage_blocks/iron'
  }).id(`kubejs:ae2/engineering_press`)

  event.shaped('ae2:silicon_press', ['WFW', 'FVF', 'WFW'], {
    W: 'ftbic:silicon',
    F: 'ae2:fluix_crystal',
    V: '#forge:storage_blocks/iron'
  }).id(`kubejs:ae2/silicon_press`)
  
  event.shapeless('ae2:ender_dust', 'thermal:ender_pearl_dust').id(`kubejs:thermal/ender_pearl_dust`)
  event.shapeless('ae2:guide', ['minecraft:book', 'ae2:certus_quartz_crystal']).id(`kubejs:ae2/guide`)
  
  modifyShaped(event, 'ae2:quartz_glass', 4, ['GDG', 'DGD', 'GDG'], {
    G: '#ae2:all_quartz_dust',
    D: '#forge:glass'
  })

  modifyShaped(event, 'ae2:quartz_fiber', 3, ['DDD', 'GGG', 'DDD'], {
    G: '#ae2:all_quartz_dust',
    D: '#forge:glass'
  })

  modifyShaped(event, 'ae2:chest', 1, ['GTG', 'CBC', 'IFI'], {
    G: '#forge:glass',
    T: 'ae2:terminal',
    B: 'kubejs:personal_id',
    C: 'ae2:fluix_glass_cable',
    I: '#forge:ingots/iron',
    F: '#ae2:all_fluix'
  })

  modifyShaped(event, 'ae2:condenser', 1, ['IGI', 'GDG', 'IGI'], {
    G: '#forge:glass',
    I: '#forge:ingots/iron',
    D: '#forge:dusts/fluix',
  })

  modifyShaped(event, 'ae2:spatial_io_port', 1, ['GGG', 'CPC', 'IEI'], {
    G: '#forge:glass',
    C: 'ae2:fluix_glass_cable',
    P: 'ae2:io_port',
    I: '#forge:ingots/iron',
    E: 'ae2:engineering_processor'
  })

  modifyShaped(event, 'ae2:io_port', 1, ['GGG', 'DCD', 'IPI'], {
    G: '#forge:glass',
    C: 'ae2:fluix_glass_cable',
    P: 'ae2:logic_processor',
    I: '#forge:ingots/iron',
    D: 'ae2:drive'
  })

  event.shaped('ae2:interface', ['IGI', 'ABF', 'IGI'], {
    G: 'ae2:quartz_glass',
    A: 'ae2:annihilation_core',
    B: 'pneumaticcraft:logistics_core',
    F: 'ae2:formation_core',
    I: '#forge:ingots/iron'
  }).id(`kubejs:ae2/interface`)

  event.shaped('ae2:molecular_assembler', ['IGI', 'ACF', 'IGI'], {
    G: 'ae2:quartz_glass',
    A: 'ae2:annihilation_core',
    F: 'ae2:formation_core',
    I: '#forge:ingots/iron',
    C: 'quark:rainbow_rune'
  }).id(`kubejs:ae2/molecular_assembler`)
  
  event.shaped('ae2:cell_workbench', ['WEW', 'ICI', 'III'], {
    W: '#minecraft:wool',
    E: 'ae2:calculation_processor',
    I: '#forge:ingots/iron',
    C: '#forge:chests/wooden'
  }).id(`kubejs:ae2/cell_workbench`)

  event.shaped('ae2:energy_acceptor', ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/electrum',
    B: 'ae2:quartz_glass',
    C: 'immersiveengineering:coil_lv'
  }).id(`kubejs:ae2/energy_acceptor`)

  event.shaped('ae2:quartz_growth_accelerator', ['ADA', 'BCB', 'ADA'], {
    A: 'ae2:fluix_block',
    B: 'ae2:quartz_glass',
    C: 'mysticalagriculture:supremium_growth_accelerator',
    D: 'ae2:fluix_glass_cable'
  }).id(`kubejs:ae2/quartz_growth_accelerator`)

  event.shaped('3x ae2:semi_dark_monitor', [' BA', 'ECD', ' BA'], {
    A: 'ae2:quartz_glass',
    B: 'integrateddynamics:part_static_light_panel',
    C: 'thermal:rf_coil',
    D: 'integrateddynamics:part_display_panel',
    E: 'extendedcrafting:black_iron_slate'
  }).id(`kubejs:ae2/semi_dark_monitor`)

  event.shaped('3x ae2:annihilation_core', [' B ', 'DCA', ' B '], {
    A: '#forge:gems/niotic',
    B: '#forge:dusts/fluix',
    C: 'pneumaticcraft:logistics_core',
    D: 'quark:rainbow_rune'
  }).id(`kubejs:ae2/annihilation_core`)

  event.shaped('3x ae2:formation_core', [' B ', 'DCA', ' B '], {
    A: '#forge:gems/spirited',
    B: '#forge:dusts/fluix',
    C: 'pneumaticcraft:logistics_core',
    D: 'quark:rainbow_rune'
  }).id(`kubejs:ae2/formation_core`)

  modifyShapeless(event, 'ae2:cable_anchor', 3, ['#forge:ingots/iron', '#ae2:knife'])
  modifyShapeless(event, 'ae2:fluix_covered_cable', 1, ['#minecraft:wool', 'ae2:fluix_glass_cable'])
  modifyShapeless(event, 'ae2:crafting_card', 1, ['#forge:workbenches', 'ae2:basic_card'])
  modifyShapeless(event, 'ae2:fuzzy_card', 1, ['#minecraft:wool', 'ae2:advanced_card'])
  modifyShapeless(event, 'ae2:crafting_terminal', 1, ['ae2:terminal', '#forge:workbenches', 'ae2:calculation_processor'])

  removeRecipeByID(event, [
    'ae2:network/blocks/controller',
    'ae2:network/blocks/interfaces_interface',
    'ae2:network/blocks/cell_workbench',
    'ae2:network/blocks/energy_energy_acceptor',
    'ae2:network/blocks/crystal_processing_quartz_growth_accelerator',
    'ae2:network/parts/panels_semi_dark_monitor',
    'ae2:network/crafting/molecular_assembler',
    'ae2:materials/annihilationcore',
    'ae2:materials/formationcore',
  ])

})
