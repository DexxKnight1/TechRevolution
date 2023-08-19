ServerEvents.recipes(event => {
 
  event.shaped('rftoolsbuilder:builder', ['AEA', 'RMR', 'AFA'], {
    A: '#forge:ingots/compressed_iron',
    E: 'mininggadgets:upgrade_empty',
    F: 'productivebees:upgrade_comb_block',
    R: 'immersiveengineering:drill',
    M: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftools/builder`)

  event.shaped('rftoolsbuilder:shape_card_quarry', ['AEA', 'RMR', 'AFA'], {
    A: '#forge:ingots/compressed_iron',
    E: 'industrialforegoing:laser_drill',
    F: 'mekanism:module_excavation_escalation_unit',
    R: 'immersiveengineering:drillhead_steel',
    M: 'rftoolsbuilder:shape_card_def'
  }).id(`kubejs:rftools/shape_card_quarry`)
 
  event.shaped('rftoolsutility:clock_module', [' A ', 'BCB', ' D '], {
	  A: 'minecraft:clock',
    B: '#forge:ingots/redstone',
	  C: '#forge:storage_blocks/iron',
	  D: '#forge:dyes/black'
  }).id(`kubejs:rftoolsutility/clockmodule`)

  event.shaped('rftoolsbase:machine_frame', ['ABA', 'C C', 'ABA'], {
    A: '#forge:ingots/iron',
    B: 'minecraft:amethyst_shard',
    C: '#forge:plates/aluminum'
  }).id(`kubejs:rftoolsutility/clock_module`)

  event.shaped('rftoolscontrol:processor', ['ABA', 'CDC', 'ABA'], {
	  A: '#forge:storage_blocks/redstone',
    B: '#forge:ingots/rose_gold',
	  C: 'rftoolscontrol:cpu_core_2000',
	  D: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolscontrol/processor`)

  event.shaped('rftoolscontrol:programmer', ['ABA', 'CDC', 'ABA'], {
	  A: '#forge:storage_blocks/redstone',
    B: '#forge:ingots/rose_gold',
	  C: 'rftoolscontrol:ram_chip',
	  D: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolscontrol/programmer`)

  event.shaped('8x rftoolsbase:crafting_card', ['AB ', 'CA ', '   '], {
	  A: '#forge:paper',
    B: '#forge:workbenches',
	  C: '#forge:dusts/redstone'
  }).id(`kubejs:rftoolsbase/crafting_card`)

  event.shaped('rftoolsutility:crafter1', [' A ', 'BCB', ' A '], {
	  A: 'minecraft:redstone_torch',
    B: '#forge:workbenches',
	  C: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolsutility/crafter1`)

  event.shaped('rftoolsutility:crafter2', [' A ', 'BCB', ' A '], {
	  A: 'minecraft:redstone_torch',
    B: '#forge:workbenches',
	  C: 'rftoolsutility:crafter1'
  }).id(`kubejs:rftoolsutility/crafter2`)

  event.shaped('rftoolsutility:crafter3', [' A ', 'BCB', ' A '], {
	  A: 'minecraft:redstone_torch',
    B: '#forge:workbenches',
	  C: 'rftoolsutility:crafter2'
  }).id(`kubejs:rftoolsutility/crafter3`)

  removeRecipeByID(event, [
    'rftoolsbuilder:builder',
    'rftoolsbuilder:shape_card_quarry',
    'rftoolsutility:clock_module',
    'rftoolsbase:machine_frame',
    'rftoolscontrol:processor',
    'rftoolscontrol:programmer',
    'rftoolsbase:crafting_card',
    'rftoolsutility:crafter1',
    'rftoolsutility:crafter2',
    'rftoolsutility:crafter3'
  ])

})
