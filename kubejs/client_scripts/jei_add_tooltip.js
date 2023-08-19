ItemEvents.tooltip(event => {

  //Eccentric Tome Books
  event.add('patchouli:guide_book', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('theoneprobe:probenote', [Text.of('This book is already included within your Eccentric Tome').yellow()])
	event.add('blue_skies:blue_journal', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('alexsmobs:animal_dictionary', [Text.of('This book is already included within your Eccentric Tome').yellow()])
	event.add('ftbquests:book', [Text.of('This book is already included within your Eccentric Tome').yellow()])
	event.add('immersiveengineering:manual', [Text.of('This book is already included within your Eccentric Tome').yellow()])
	event.add('botania:lexicon', [Text.of('This book is already included within your Eccentric Tome').yellow()])
	event.add('rftoolsbase:manual', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('cookingforblockheads:recipe_book', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('byg:biomepedia', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('powah:book', [Text.of('This book is already included within your Eccentric Tome').yellow()])
	event.add('solcarrot:food_book',[Text.of('This book is already included within your Eccentric Tome').yellow()])
	event.add('securitycraft:sc_manual', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('silentgear:guide_book', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('ae2:guide', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('croptopia:guide', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('integrateddynamics:on_the_dynamics_of_integration', [Text.of('This book is already included within your Eccentric Tome').yellow()])
  event.add('ad_astra:astrodux', [Text.of('This book is already included within your Eccentric Tome').yellow()])

  //AE2 facade
  event.add('ae2:facade', [
    Text.of('Facades are not disabled, just hidden in JEI.'),
    Text.of('To craft facades, place the block of your choice').green(),
    Text.of('in the centre of the crafting grid (3x3) and 4x AE2').green(),
    Text.of('cable anchors on all adjacent sides of that block.').green()
  ])
  
  //Allthemodium
  event.add('allthemodium:teleport_pad',[
    Text.of('Place the pad down in the specified Dimension'),
    Text.of('Sneak Right Click with both hands empty to teleport'),
    Text.of('§aOverworld to Mining Dimension').red(),
    Text.of('§cThe Nether to The Other').red()
  ])

  //Mystical agriculture
  event.add('mysticalagriculture:watering_can',[ [Text.of('Players Only').green()],[Text.of('Not Automatable').darkGreen()]])
  event.add('mysticalagriculture:inferium_watering_can',[ [Text.of('Players Only').green()],[Text.of('Not Automatable').darkGreen()]])
  event.add('mysticalagriculture:prudentium_watering_can',[ [Text.of('Players Only').green()],[Text.of('Not Automatable').darkGreen()]])
  event.add('mysticalagriculture:tertium_watering_can',[ [Text.of('Players Only').green()],[Text.of('Not Automatable').darkGreen()]])
  event.add('mysticalagriculture:imperium_watering_can',[ [Text.of('Players Only').green()],[Text.of('Not Automatable').darkGreen()]])
  event.add('mysticalagriculture:creative_soulium_dagger', [Text.of('Obtained by defeating the Dark Mask Boss').green()])

  //Mob Grinding Utils
  event.addAdvanced('mob_grinding_utils:rotten_egg', (stack, advanced, text) => {
    text.add(3, Text.of("Created from Cursed Chicken Feed").yellow())
  })
  event.addAdvanced('mob_grinding_utils:golden_egg', (stack, advanced, text) => {
    text.add(3, Text.of("Created from Nutritious Chicken Feed").yellow())
  })

  //RS Infinity Booster
  event.add('rsinfinitybooster:infinity_card', [
    Text.of('Infinite range for RS wireless'),
    Text.of('Only works in the same dimension')
  ])

  event.add('rsinfinitybooster:dimension_card', [
    Text.of('Infinite range for RS wireless'),
    Text.of('Works across dimensions')
  ])

  //AE2 Infinity Booster
  event.add('aeinfinitybooster:infinity_card', [
    Text.of('Infinite range for AE2 wireless'),
    Text.of('Only works in the same dimension')
  ])

  event.add('aeinfinitybooster:dimension_card', [
    Text.of('Infinite range for AE2 wireless'),
    Text.of('Works across dimensions')
  ])

  //Chemlib info to unified materials
  let chemlibTooltips = JsonIO.read('kubejs/client_scripts/chemlib.json')
  chemlibTooltips.forEach((item, tooltips) => {
    event.addAdvanced(item, (stack, advanced, text) => {
      text.add(1, tooltips[0])
      if (tooltips.length > 1) {
        text.add(2, tooltips[1])
      }
    })
  })

  //Pipez
  event.add('pipez:item_pipe', [
    [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
    [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
  ])

  event.add('pipez:fluid_pipe', [
    [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
  ])

  event.add('pipez:gas_pipe', [
    [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
  ])

  event.add('pipez:energy_pipe', [
    [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
    [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
  ])

  //Upgrades
  event.add('pipez:basic_upgrade', [
    [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/t')],
    [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])

  event.add('pipez:improved_upgrade', [
    [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/t').gold()],
    [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])

  event.add('pipez:advanced_upgrade', [
    [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/t').darkAqua()],
    [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])

  event.add('pipez:ultimate_upgrade', [
    [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])

  event.add('pipez:infinity_upgrade', [
    [Text.of('Item:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
    [Text.of('Fluid:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Gas:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    [Text.of('Energy:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
  ])

  //Enderstorage
  event.add('enderstorage:ender_chest', [
    [Text.of('Cross-dimensional wireless item transfer to any chest on the same channel.').gold()],
    [Text.of('Use dye on the colored bars to set the channel.').gold()],
    [Text.of('Use a diamond on the latch to switch to private channel.').gold()],
  ])
  
  event.add('enderstorage:ender_tank', [
    [Text.of('Cross-dimensional wireless item transfer to any chest on the same channel.').gold()],
    [Text.of('Use dye on the colored bars to set the channel.').gold()],
    [Text.of('Use a diamond on the latch to switch to private channel.').gold()],
  ])

  //Minecraft buckets
  event.add('minecraft:water_bucket', [
    [Text.of('The water buckets are stackable to save the space in the inventory.').gold()],
    [Text.of('WARNING:').darkRed()],
    [Text.of('By using them as entire stack they turns into one singular empty bucket.').darkPurple()],
    [Text.of('Use them one by one from the stack.').darkPurple()],
  ])
  
  event.add('minecraft:lava_bucket', [
    [Text.of('The lava buckets are stackable to save the space in the inventory.').gold()],
    [Text.of('WARNING:').darkRed()],
    [Text.of('By using them as entire stack they turns into one singular empty bucket.').darkPurple()],
    [Text.of('Use them one by one from the stack.').darkPurple()],
  ])

  //Phantasmic (Nourished Nether)
  event.add('nourished_nether:soul_quartz', [
    [Text.of('Can be harvest with a Hoe by standing on a Sludge block').gold()],
    [Text.of('in Soul Sand Valley biome in the Nether.').gold()],
  ])
  event.add('nourished_nether:necronium_ingot', [Text.of('Obtaned by transmuting Gold ingots using Soul Forge.').gold()])

  //World of Bosses
  event.add('kubejs:angerite', [Text.of('Obtained by defeating the Rib Golem Boss.').green()])
  event.add('kubejs:ghoul_quartz', [Text.of('Obtained by defeating the Vulcan Boss.').green()])
  event.add('kubejs:blood_quartz', [Text.of('Obtained by defeating the Aesegull Boss.').green()])
  event.add('kubejs:medusa_quartz', [Text.of('Obtained by defeating the Crimson Vampire Boss.').green()])
  event.add('kubejs:cyber_orb', [Text.of('Obtained by defeating the Man of Water Boss.').green()])
  event.add('kubejs:corrupted_crystal', [Text.of('Obtained by defeating the Merciless Assasin Boss.').green()])
  event.add('kubejs:citrine', [Text.of('Obtained by defeating the Ancient Wizard Boss.').green()])
  event.add('kubejs:borgium', [Text.of('Obtained by defeating the Nameless One Boss.').green()])
  event.add('kubejs:meteorite_scrap', [Text.of('Obtained by defeating the Flaming Berserker Boss.').green()])
  event.add('kubejs:fire_opal', [Text.of('Obtained by defeating the Volcanium Boss.').green()])
  event.add('kubejs:matrix_opal', [Text.of('Obtained by defeating the Frost Magma Boss.').green()])
  event.add('kubejs:catseye', [Text.of('Obtained by defeating the Froverlord Boss.').green()])
  event.add('kubejs:grindstone_scrap', [Text.of('Obtained by defeating the Prismarine Watcher Boss.').green()])
  event.add('kubejs:hercynite', [Text.of('Obtained by defeating the Stone Guard Boss.').green()])
  event.add('kubejs:draconium_scrap', [Text.of('Obtained by defeating the Sand Giant Boss.').green()])
  event.add('kubejs:humoranium', [Text.of('Obtained by defeating the Electric Head Boss.').green()])
  event.add('kubejs:star_sapphire', [Text.of('Obtained by defeating the Ender Ordnance Boss.').green()])
  event.add('kubejs:chalcanthite', [Text.of('Obtained by defeating the Hand Head Boss.').green()])
  event.add('kubejs:neonium', [Text.of('Obtained by defeating the Mono Eyed Skeleton Boss.').green()])
  event.add('kubejs:cursed_crystal', [Text.of('Obtained by defeating the Knight Garent Boss.').green()])
  event.add('kubejs:eclipse_diamond', [Text.of('Obtained by defeating the Skeleton Demon Boss.').green()])

  event.add('somebosses:gilded_dynamite', [Text.of('Used to summon the Vulcan Boss.').green()])
  event.add('somebosses:illegal_beacon', [Text.of('Used to summon the Aesegull Boss.').green()])
  event.add('somebosses:vampire_bait', [Text.of('Used to summon the Crimson Vampire Boss.').green()])
  event.add('somebosses:cursed_spring_water', [Text.of('Used to summon the Man of Water Boss.').green()])
  event.add('somebosses:token_of_the_ninja', [Text.of('Used to summon the Merciless Assasin Boss.').green()])
  event.add('somebosses:rusty_sword_relic', [Text.of('Used to summon the Ancient Wizard Boss.').green()])
  event.add('somebosses:necromancy_staff', [Text.of('Used to summon the Nameless One Boss.').green()])
  event.add('somebosses:furnace_torch', [Text.of('Used to summon the Flaming Berserker Boss.').green()])
  event.add('somebosses:burning_volcanic_rock', [Text.of('Used to summon the Volcanium Boss.').green()])
  event.add('somebosses:ice_lantern', [Text.of('Used to summon the Frost Magma Boss.').green()])
  event.add('somebosses:frozen_shield_plate', [Text.of('Used to summon the Froverlord Boss.').green()])
  event.add('somebosses:prismarine_eye', [Text.of('Used to summon the Prismarine Watcher Boss.').green()])
  event.add('somebosses:slab_of_command', [Text.of('Used to summon the Stone Guard Boss.').green()])
  event.add('somebosses:cactus_relic', [Text.of('Used to summon the Sand Giant Boss.').green()])
  event.add('somebosses:power_generator_core', [Text.of('Used to summon the Electric Head Boss.').green()])
  event.add('somebosses:disgusting_pendant', [Text.of('Used to summon the Ender Ordnance Boss.').green()])
  event.add('somebosses:dark_magic_gauntlet', [Text.of('Used to summon the Hand Head Boss.').green()])
  event.add('somebosses:one_eyed_wrait_in_a_bottle', [Text.of('Used to summon the Mono Eyed Skeleton Boss.').green()])
  event.add('somebosses:chaos_insignia', [Text.of('Used to summon the Knight Garent Boss.').green()])
  event.add('somebosses:bone_of_curse', [Text.of('Used to summon the Skeleton Demon Boss.').green()])
  event.add('somebosses:monochrome_mask', [Text.of('Used to summon the Dark Mask Boss.').green()])

})
