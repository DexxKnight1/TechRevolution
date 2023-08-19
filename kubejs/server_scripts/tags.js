ServerEvents.tags('item', event => {

  event.add('minecraft:boats', /byg:\w+?_boat/)
  event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
  event.add('forge:cheese', '#forge:cheeses')
  event.add('forge:plastic', 'pneumaticcraft:plastic')
  event.add('forge:dusts/ender', ['ae2:ender_dust', '#forge:dust/ender_pearl'])
  event.add('forge:ingots/redstone', 'extendedcrafting:redstone_ingot')
  event.add('forge:rubber', 'ftbic:rubber')
  event.add('forge:workbenches', ['#forge:workbench', '#blue_skies:crafting_tables'])
  event.add('forge:gears/stone', 'kubejs:stone_gear')
  event.add('forge:gems/infused_diamond', 'rftoolsbase:infused_diamond')
  event.add('forge:gems/subzero', 'byg:subzero_crystal_shard')
  event.add('forge:gems/therium', 'byg:therium_crystal_shard')
  event.add('forge:gems/blazing', 'powah:crystal_blazing')
  event.add('forge:gems/niotic', 'powah:crystal_niotic')
  event.add('forge:gems/spirited', 'powah:crystal_spirited')
  event.add('forge:gems/nitro', 'powah:crystal_nitro')
  event.add('forge:ingots/energized_steel', 'powah:steel_energized')
  event.add('forge:ingots/flux', 'redstone_arsenal:flux_ingot')
  event.add('forge:all_hammers', ['#immersiveengineering:tools/hammers', '#alltheores:ore_hammers', 'ad_astra:hammer'])
  event.add('notreepunching:h/cobblestone', ['minecraft:cobblestone', 'minecraft:sandstone', 'minecraft:red_sandstone'])
  event.add('forge:wooden_grip', 'immersiveengineering:wooden_grip')
  event.add('forge:storage_blocks/energized_steel', 'powah:energized_steel_block')
  event.add('forge:glass/rainbow', 'alexsmobs:rainbow_glass')
  event.add('forge:gems/obsidian', 'cyclic:gem_obsidian')
  event.add('forge:gems/amber', 'cyclic:gem_amber')
  event.add('forge:campfires', '#minecraft:campfires')

  //Sophisticated Storage
  //Wooden Barrels, Chests & Shulker Boxes
  event.add('misctags:barrels/wooden', 'sophisticatedstorage:barrel')
  event.add('misctags:limited_barrels_1/wooden', 'sophisticatedstorage:limited_barrel_1')
  event.add('misctags:limited_barrels_2/wooden', 'sophisticatedstorage:limited_barrel_2')
  event.add('misctags:limited_barrels_3/wooden', 'sophisticatedstorage:limited_barrel_3')
  event.add('misctags:limited_barrels_4/wooden', 'sophisticatedstorage:limited_barrel_4')
  event.add('misctags:chests/wooden', 'sophisticatedstorage:chest')
  event.add('misctags:shulker_box', 'sophisticatedstorage:shulker_box')
  //Iron Barrels, Chests & Shulker Boxes
  event.add('misctags:barrels/iron', 'sophisticatedstorage:iron_barrel')
  event.add('misctags:limited_barrels_1/iron', 'sophisticatedstorage:limited_iron_barrel_1')
  event.add('misctags:limited_barrels_2/iron', 'sophisticatedstorage:limited_iron_barrel_2')
  event.add('misctags:limited_barrels_3/iron', 'sophisticatedstorage:limited_iron_barrel_3')
  event.add('misctags:limited_barrels_4/iron', 'sophisticatedstorage:limited_iron_barrel_4')
  event.add('misctags:chests/iron', 'sophisticatedstorage:iron_chest')
  event.add('misctags:shulker_boxes/iron', 'sophisticatedstorage:iron_shulker_box')
  //Gold Barrels, Chests & Shulker Boxes
  event.add('misctags:barrels/gold', 'sophisticatedstorage:gold_barrel')
  event.add('misctags:limited_barrels_1/gold', 'sophisticatedstorage:limited_gold_barrel_1')
  event.add('misctags:limited_barrels_2/gold', 'sophisticatedstorage:limited_gold_barrel_2')
  event.add('misctags:limited_barrels_3/gold', 'sophisticatedstorage:limited_gold_barrel_3')
  event.add('misctags:limited_barrels_4/gold', 'sophisticatedstorage:limited_gold_barrel_4')
  event.add('misctags:chests/gold', 'sophisticatedstorage:gold_chest')
  event.add('misctags:shulker_boxes/gold', 'sophisticatedstorage:gold_shulker_box')
  //Diamond Barrels, Chests & Shulker Boxes
  event.add('misctags:barrels/diamond', 'sophisticatedstorage:diamond_barrel')
  event.add('misctags:limited_barrels_1/diamond', 'sophisticatedstorage:limited_diamond_barrel_1')
  event.add('misctags:limited_barrels_2/diamond', 'sophisticatedstorage:limited_diamond_barrel_2')
  event.add('misctags:limited_barrels_3/diamond', 'sophisticatedstorage:limited_diamond_barrel_3')
  event.add('misctags:limited_barrels_4/diamond', 'sophisticatedstorage:limited_diamond_barrel_4')
  event.add('misctags:chests/diamond', 'sophisticatedstorage:diamond_chest')
  event.add('misctags:shulker_boxes/diamond', 'sophisticatedstorage:diamond_shulker_box')
  //Netherite Barrels, Chests & Shulker Boxes
  event.add('misctags:barrels/netherite', 'sophisticatedstorage:netherite_barrel')
  event.add('misctags:limited_barrels_1/netherite', 'sophisticatedstorage:limited_netherite_barrel_1')
  event.add('misctags:limited_barrels_2/netherite', 'sophisticatedstorage:limited_netherite_barrel_2')
  event.add('misctags:limited_barrels_3/netherite', 'sophisticatedstorage:limited_netherite_barrel_3')
  event.add('misctags:limited_barrels_4/netherite', 'sophisticatedstorage:limited_netherite_barrel_4')
  event.add('misctags:chests/netherite', 'sophisticatedstorage:netherite_chest')
  event.add('misctags:shulker_boxes/netherite', 'sophisticatedstorage:netherite_shulker_box')

  //Functional Storage
  //Drawers 1x1
  var drawer1x1 =[
    'functionalstorage:oak_1',
    'functionalstorage:spruce_1',
    'functionalstorage:birch_1',
    'functionalstorage:jungle_1',
    'functionalstorage:acacia_1',
    'functionalstorage:dark_oak_1',
    'functionalstorage:crimson_1',
    'functionalstorage:warped_1',
    'functionalstorage:mangrove_1'
  ]
  event.get('functionalstorage:drawers/1x1').add(drawer1x1)
  //Drawers 1x2
  var drawer1x2 =[
    'functionalstorage:oak_2',
    'functionalstorage:spruce_2',
    'functionalstorage:birch_2',
    'functionalstorage:jungle_2',
    'functionalstorage:acacia_2',
    'functionalstorage:dark_oak_2',
    'functionalstorage:crimson_2',
    'functionalstorage:warped_2',
    'functionalstorage:mangrove_2'
  ]
  event.get('functionalstorage:drawers/1x2').add(drawer1x2)
  //2x2
  var drawer2x2 =[
    'functionalstorage:oak_4',
    'functionalstorage:spruce_4',
    'functionalstorage:birch_4',
    'functionalstorage:jungle_4',
    'functionalstorage:acacia_4',
    'functionalstorage:dark_oak_4',
    'functionalstorage:crimson_4',
    'functionalstorage:warped_4',
    'functionalstorage:mangrove_4'
  ]
  event.get('functionalstorage:drawers/2x2').add(drawer2x2)

  //Construction Wands
  event.add('constructionwand:wands', [
    'constructionwand:stone_wand',
    'constructionwand:iron_wand',
    'constructionwand:diamond_wand',
    'constructionwand:infinity_wand'
  ])

  //Mining Gadgets
  event.add('mininggadgets:mininggadgets', [
    'mininggadgets:mininggadget_simple',
    'mininggadgets:mininggadget_fancy',
    'mininggadgets:mininggadget'
  ])

  //Industrial Foregoing
  event.add('industrialforegoing:bioreactor', '#forge:crops')
  event.add('industrialforegoing:laser_lenses', [
    'industrialforegoing:laser_lens0',
    'industrialforegoing:laser_lens1',
    'industrialforegoing:laser_lens2',
    'industrialforegoing:laser_lens3',
    'industrialforegoing:laser_lens4',
    'industrialforegoing:laser_lens5',
    'industrialforegoing:laser_lens6',
    'industrialforegoing:laser_lens7',
    'industrialforegoing:laser_lens8',
    'industrialforegoing:laser_lens9',
    'industrialforegoing:laser_lens10',
    'industrialforegoing:laser_lens11',
    'industrialforegoing:laser_lens12',
    'industrialforegoing:laser_lens13',
    'industrialforegoing:laser_lens14',
    'industrialforegoing:laser_lens15'
  ])

  //RFTools
  //Crafters
  event.add('rftools:crafter', [
    'rftoolsutility:crafter1',
    'rftoolsutility:crafter2',
    'rftoolsutility:crafter3'
  ])
  //Power Cells
  event.add('rftools:powercell', [
    'rftoolspower:cell1',
    'rftoolspower:cell2',
    'rftoolspower:cell3'
  ])
  //Dimensional Cells
  event.add('rftools:dimensionalcell', [
    'rftoolspower:dimensionalcell',
    'rftoolspower:dimensionalcell_simple',
    'rftoolspower:dimensionalcell_advanced'
  ])

  //BLUE SKIES
  //Spears
  event.add('blue_skies:spears', [
    'blue_skies:bluebright_spear',
    'blue_skies:starlit_spear',
    'blue_skies:frostbright_spear',
    'blue_skies:lunar_spear',
    'blue_skies:dusk_spear',
    'blue_skies:maple_spear',
    'blue_skies:cherry_spear'
  ])

  //Summoner Artifact Drops
  event.add('blue_skies:summoner_drops', [
    'blue_skies:ethereal_arc',
    'blue_skies:soulbound_spear',
    'blue_skies:summoning_tome',
    'blue_skies:summoning_table',
    'blue_skies:blinding_rage'
  ])

  //Starlit Crusher Artifact Drops
  event.add('blue_skies:starlit_crusher_drops', [
    'blue_skies:crushing_hammer',
    'blue_skies:nature_arc',
    'blue_skies:defying_starlight'
  ])

  //Alchemist Artifact Drops
  event.add('blue_skies:alchemist_drops', [
    'blue_skies:spike_shield',
    'blue_skies:dusk_arc',
    'blue_skies:alchemy_table',
    'blue_skies:blinding_rage'
  ])

  //Arachnarch Artifact Drops
  event.add('blue_skies:arachnarch_drops', [
    'blue_skies:venom_sac',
    'blue_skies:poison_arc',
    'blue_skies:different_sword',
    'blue_skies:venomous_encounter'
  ])
  
  //Glazed Terracota
  event.add('forge:glazed_terracotta', [
    'minecraft:white_glazed_terracotta',
    'minecraft:orange_glazed_terracotta',
    'minecraft:magenta_glazed_terracotta',
    'minecraft:light_blue_glazed_terracotta',
    'minecraft:yellow_glazed_terracotta',
    'minecraft:lime_glazed_terracotta',
    'minecraft:pink_glazed_terracotta',
    'minecraft:gray_glazed_terracotta',
    'minecraft:light_gray_glazed_terracotta',
    'minecraft:cyan_glazed_terracotta',
    'minecraft:purple_glazed_terracotta',
    'minecraft:blue_glazed_terracotta',
    'minecraft:brown_glazed_terracotta',
    'minecraft:green_glazed_terracotta',
    'minecraft:red_glazed_terracotta',
    'minecraft:black_glazed_terracotta'
  ])

  //Smooth Stones
  event.add('misctags:smooth_stone', [
    'minecraft:smooth_stone',
    'minecraft:smooth_red_sandstone',
    'minecraft:smooth_sandstone',
    'minecraft:smooth_quartz',
    'minecraft:smooth_basalt',
    'byg:black_smooth_sandstone',
    'byg:white_smooth_sandstone',
    'byg:blue_smooth_sandstone',
    'byg:purple_smooth_sandstone',
    'byg:pink_smooth_sandstone',
  ])

  //Arow Top
  event.add('forge:arrow_top', [
    'minecraft:flint',
    'byg:subzero_crystal_shard',
    'alexsmobs:bone_serpent_tooth',
    'alexsmobs:shark_tooth',
    'alexsmobs:cachalot_whale_tooth',
    'tombstone:bone_needle'
  ])

  //Smooth Stones
  event.add('misctags:smooth_stone', [
    'minecraft:smooth_stone',
    'minecraft:smooth_red_sandstone',
    'minecraft:smooth_sandstone',
    'minecraft:smooth_quartz',
    'minecraft:smooth_basalt',
    'byg:black_smooth_sandstone',
    'byg:white_smooth_sandstone',
    'byg:blue_smooth_sandstone',
    'byg:purple_smooth_sandstone',
    'byg:pink_smooth_sandstone',
  ])

  //Mystic Alagriculture
  event.add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
  event.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
  event.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
  event.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
  event.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
  event.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])

  event.add('mysticalagriculture:essences', [
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:azure_silver_essence',
    'mysticalagriculture:crimson_iron_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
  ])
  event.add('mysticalagriculture:seeds', [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:azure_silver_seeds',
    'mysticalagriculture:crimson_iron_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
  ])
  
  //Minecraft Furnaces
  event.add('misctags:furnace', ['minecraft:furnace', 'quark:deepslate_furnace', 'quark:blackstone_furnace'])

  //Minecraft Corals
  event.add('misctags:corals', [
    'minecraft:tube_coral',
    'minecraft:brain_coral',
    'minecraft:bubble_coral',
    'minecraft:fire_coral',
    'minecraft:horn_coral'
  ])

  //Minecraft Shulker Boxes
  event.add('minecraft:shulker_boxes', [
    'minecraft:shulker_box',
    'minecraft:white_shulker_box',
    'minecraft:orange_shulker_box',
    'minecraft:magenta_shulker_box',
    'minecraft:light_blue_shulker_box',
    'minecraft:yellow_shulker_box',
    'minecraft:lime_shulker_box',
    'minecraft:pink_shulker_box',
    'minecraft:gray_shulker_box',
    'minecraft:light_gray_shulker_box',
    'minecraft:cyan_shulker_box',
    'minecraft:purple_shulker_box',
    'minecraft:blue_shulker_box',
    'minecraft:brown_shulker_box',
    'minecraft:green_shulker_box',
    'minecraft:red_shulker_box',
    'minecraft:black_shulker_box',
  ])

  //Crystals
  event.add('forge:crystals/angerite', 'kubejs:angerite')
  event.add('forge:crystals/blood_quartz', 'kubejs:blood_quartz')
  event.add('forge:crystals/borgium', 'kubejs:borgium')
  event.add('forge:crystals/catseye', 'kubejs:catseye')
  event.add('forge:crystals/chalcanthite', 'kubejs:chalcanthite')
  event.add('forge:crystals/citrine', 'kubejs:citrine')
  event.add('forge:crystals/corrupted_crystal', 'kubejs:corrupted_crystal')
  event.add('forge:crystals/cyber_orb', 'kubejs:cyber_orb')
  event.add('forge:crystals/draconium_scrap', 'kubejs:draconium_scrap')
  event.add('forge:crystals/eclipse_diamond', 'kubejs:eclipse_diamond')
  event.add('forge:crystals/fire_opal', 'kubejs:fire_opal')
  event.add('forge:crystals/ghoul_quartz', 'kubejs:ghoul_quartz')
  event.add('forge:crystals/grindstone_scrap', 'kubejs:grindstone_scrap')
  event.add('forge:crystals/hercynite', 'kubejs:hercynite')
  event.add('forge:crystals/humoranium', 'kubejs:humoranium')
  event.add('forge:crystals/matrix_opal', 'kubejs:matrix_opal')
  event.add('forge:crystals/medusa_quartz', 'kubejs:medusa_quartz')
  event.add('forge:crystals/meteorite_scrap', 'kubejs:meteorite_scrap')
  event.add('forge:crystals/cursed_crystal', 'kubejs:cursed_crystal')
  event.add('forge:crystals/star_sapphire', 'kubejs:star_sapphire')
  event.add('forge:crystals/neonium', 'kubejs:neonium')
  event.add('forge:crystals/crystal_of_summoning', 'kubejs:crystal_of_summoning')

  //Banner Patterns
  event.add('misctags:banner/patterns', [
    'minecraft:flower_banner_pattern',
    'minecraft:creeper_banner_pattern',
    'minecraft:skull_banner_pattern',
    'minecraft:mojang_banner_pattern',
    'minecraft:globe_banner_pattern',
    'minecraft:piglin_banner_pattern',
    'alexsmobs:banner_pattern_bear',
    'alexsmobs:banner_pattern_australia_0',
    'alexsmobs:banner_pattern_australia_1',
    'alexsmobs:banner_pattern_new_mexico',
    'alexsmobs:banner_pattern_brazil',
    'immersiveengineering:bannerpattern_hammer',
    'immersiveengineering:bannerpattern_bevels',
    'immersiveengineering:bannerpattern_ornate',
    'immersiveengineering:bannerpattern_treated_wood',
    'immersiveengineering:bannerpattern_windmill',
    'immersiveengineering:bannerpattern_wolf_r',
    'immersiveengineering:bannerpattern_wolf_l',
    'immersiveengineering:bannerpattern_wolf',
    'twilightforest:naga_banner_pattern',
    'twilightforest:lich_banner_pattern',
    'twilightforest:minoshroom_banner_pattern',
    'twilightforest:hydra_banner_pattern',
    'twilightforest:knight_phantom_banner_pattern',
    'twilightforest:ur_ghast_banner_pattern',
    'twilightforest:alpha_yeti_banner_pattern',
    'twilightforest:snow_queen_banner_pattern',
    'twilightforest:quest_ram_banner_pattern',
  ])
  
})

ServerEvents.tags('block', event => {
  event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
  event.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
  event.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, '@waystones'])
  event.add('mysticalagriculture:crops', [
    'mysticalagriculture:allthemodium_crop',
    'mysticalagriculture:azure_silver_crop',
    'mysticalagriculture:crimson_iron_crop',
    'mysticalagriculture:unobtainium_crop',
    'mysticalagriculture:vibranium_crop',
  ])

})

ServerEvents.tags('entity_type', event => {
  event.add('kubejs:mob_blacklist', [/productivebees:.+/, 'allthemodium:piglich', 'artifacts:mimic'])
  event.add('mob_grinding_utils:noswab', '#kubejs:mob_blacklist')
  event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
  event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
  event.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
  event.add('ars_nouveau:drygmy_blacklist', [/productivebees:.+/, 'artifacts:mimic'])
})
