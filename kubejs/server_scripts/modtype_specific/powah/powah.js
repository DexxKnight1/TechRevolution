ServerEvents.recipes(event => {

    event.shaped('2x powah:capacitor_basic_large', [' AB', 'ACA', 'BA '], {
        A: '#forge:dusts/fluix',
        B: 'powah:capacitor_basic',
        C: '#forge:gems/subzero'
    }).id(`kubejs:powah/capacitor_basic_large`)

    event.shaped('powah:energizing_rod_basic', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_basic_large',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_starter'
    }).id(`kubejs:powah/energizing_rod_basic`)

    event.shaped('powah:energizing_rod_hardened', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_hardened',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_basic'
    }).id(`kubejs:powah/energizing_rod_hardened`)

    event.shaped('powah:energizing_rod_blazing', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_blazing',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_hardened'
    }).id(`kubejs:powah/energizing_rod_blazing`)

    event.shaped('powah:energizing_rod_niotic', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_niotic',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_blazing'
    }).id(`kubejs:powah/energizing_rod_niotic`)

    event.shaped('powah:energizing_rod_spirited', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_basic_large',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_niotic'
    }).id(`kubejs:powah/energizing_rod_spirited`)

    event.shaped('powah:energizing_rod_nitro', [' A ', 'BCB', ' D '], {
        A: '#forge:storage_blocks/silver',
        B: 'powah:capacitor_spirited',
        C: 'powah:dielectric_casing',
        D: 'powah:energizing_rod_spirited'
    }).id(`kubejs:powah/energizing_rod_nitro`)

    event.shaped('powah:energizing_orb', ['AAA', 'ACA', 'BBB'], {
        A: 'ae2:quartz_glass',
        B: 'ae2:smooth_sky_stone_slab',
        C: 'powah:dielectric_casing'
    }).id(`kubejs:powah/energizing_orb`)

    event.shaped('powah:player_transmitter_basic', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_starter',
        B: 'powah:capacitor_basic_large',
        C: 'powah:dielectric_casing',
        D: 'ae2:fluix_pearl'
    }).id(`kubejs:powah/player_transmitter_basic`)

    event.shaped('powah:player_transmitter_hardened', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_basic',
        B: 'powah:capacitor_hardened',
        C: 'powah:dielectric_casing',
        D: 'ae2:fluix_pearl'
    }).id(`kubejs:powah/player_transmitter_hardened`)

    event.shaped('powah:player_transmitter_blazing', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_hardened',
        B: 'powah:capacitor_blazing',
        C: 'powah:dielectric_casing',
        D: 'ae2:fluix_pearl'
    }).id(`kubejs:powah/player_transmitter_blazing`)

    event.shaped('powah:player_transmitter_niotic', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_blazing',
        B: 'powah:capacitor_niotic',
        C: 'powah:dielectric_casing',
        D: 'ae2:fluix_pearl'
    }).id(`kubejs:powah/player_transmitter_niotic`)

    event.shaped('powah:player_transmitter_spirited', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_niotic',
        B: 'powah:capacitor_spirited',
        C: 'powah:dielectric_casing',
        D: 'ae2:fluix_pearl'
    }).id(`kubejs:powah/player_transmitter_spirited`)

    event.shaped('powah:player_transmitter_nitro', [' A ', 'BCB', ' D '], {
        A: 'powah:player_transmitter_spirited',
        B: 'powah:capacitor_nitro',
        C: 'powah:dielectric_casing',
        D: 'ae2:fluix_pearl'
    }).id(`kubejs:powah/player_transmitter_nitro`)

    removeRecipeByID(event, [
        'powah:crafting/energizing_orb',
        'powah:crafting/capacitor_basic_large',
        'powah:crafting/energizing_rod_basic',
        'powah:crafting/energizing_rod_hardened',
        'powah:crafting/energizing_rod_blazing',
        'powah:crafting/energizing_rod_niotic',
        'powah:crafting/energizing_rod_spirited',
        'powah:crafting/energizing_rod_nitro',
        'powah:crafting/player_tranmitter_basic',
        'powah:crafting/player_tranmitter_hardened',
        'powah:crafting/player_tranmitter_blazing',
        'powah:crafting/player_tranmitter_niotic',
        'powah:crafting/player_tranmitter_spirited',
        'powah:crafting/player_tranmitter_nitro',
    ])

})
