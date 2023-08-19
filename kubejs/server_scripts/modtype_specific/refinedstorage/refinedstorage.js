ServerEvents.recipes(event => {

  event.shapeless('refinedstorage:raw_basic_processor', [
    'refinedstorage:processor_binding',
    '#forge:ingots/prosperity',
    '#forge:silicon',
    '#forge:dusts/redstone'
  ]).id(`kubejs:refinedstorage/raw_basic_processor`)

  event.shapeless('refinedstorage:raw_improved_processor', [
    'refinedstorage:processor_binding',
    '#forge:ingots/rose_gold',
    '#forge:silicon',
    '#forge:dusts/redstone'
  ]).id(`kubejs:refinedstorage/raw_improved_processor`)

  event.shapeless('refinedstorage:raw_advanced_processor', [
    'refinedstorage:processor_binding',
    'rftoolsbase:infused_diamond',
    '#forge:silicon',
    '#forge:dusts/redstone'
  ]).id(`kubejs:refinedstorage/raw_advanced_processor`)

  event.shapeless('extradisks:raw_withering_processor', [
    'refinedstorage:processor_binding',
    'extendedcrafting:ender_star',
    '#forge:silicon',
    '#forge:dusts/redstone'
  ]).id(`kubejs:extradisks/raw_withering_processor`)

  event.shaped('extrastorage:raw_neural_processor', ['ABC', 'BDB', 'EFE'], {
    A: 'extradisks:raw_withering_processor',
    B: '#ae2:all_quartz',
    C: 'rebornstorage:raw_super_advanced_processor',
    D: '#forge:silicon',
    E: '#forge:ingots/dragonsteel',
    F: 'refinedstorage:processor_binding'
  }).id(`kubejs:extrastorage/raw_neural_processor`)
  
  event.shaped('refinedstorage:machine_casing', ['ABA', 'CDC', 'ABA'], {
    A: 'refinedstorage:quartz_enriched_iron',
    B: '#forge:silicon',
    C: '#forge:plastic',
    D: '#forge:glass/tinted'
  }).id(`kubejs:refinedstorage/machine_casing`)

  event.shaped('extradisks:infinite_storage_disk', ['DED', 'EHE', 'FGF'], {
    D: 'thermal_extra:dragonsteel_glass',
    E: 'refinedstorage:quartz_enriched_iron',
    F: 'extradisks:withering_processor',
		H: 'extradisks:infinite_storage_part',
		G: 'extrastorage:neural_processor'
  }).id(`kubejs:extradisks/infinite_storage_disk`)

  event.shaped('extradisks:advanced_machine_casing', ['ABA', 'CDC', 'AEA'], {
    A: 'extradisks:withering_processor',
    B: 'refinedstorage:construction_core',
    C: 'extrastorage:neural_processor',
		D: 'refinedstorage:machine_casing',
    E: 'refinedstorage:destruction_core'
  }).id(`kubejs:extradisks/advanced_storage_housing`)

  event.shaped('extrastorage:iron_crafter', ['ABA', 'CDC', 'A A'], {
    A: '#forge:storage_blocks/iron',
    B: '#forge:chests/wooden',
    C: 'extrastorage:neural_processor',
    D: 'refinedstorage:crafter'
  }).id(`kubejs:extrastorage/iron_crafter`)

  event.shaped('refinedstorage:security_manager', ['ABA', 'CDC', 'AEA'], {
    A: 'refinedstorage:quartz_enriched_iron',
    B: '#forge:chests/wooden',
    C: 'refinedstorage:security_card',
    D: 'refinedstorage:machine_casing',
    E: 'kubejs:personal_id'
  }).id(`kubejs:refinedstorage/security_manager`)

  removeRecipeByID(event, [
    'refinedstorage:raw_basic_processor',
    'refinedstorage:raw_improved_processor',
    'refinedstorage:raw_advanced_processor',
    'extradisks:raw_withering_processor',
    'extrastorage:raw_neural_processor',
    'extrastorage:iron_crafter',
    'extradisks:disk/shaped/infinite_storage_disk',
    'refinedstorage:silicon',
    'refinedstorage:machine_casing',
    'extradisks:advanced_machine_casing',
    'refinedstorage:security_manager'
  ])
  
})
