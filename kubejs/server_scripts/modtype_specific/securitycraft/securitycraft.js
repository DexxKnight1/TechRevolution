ServerEvents.recipes(event => {

    event.shaped('securitycraft:keycard_lv1', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/gold'
    }).id(`kubejs:securitycraft/keycard_lv1`)

    event.shaped('securitycraft:keycard_lv2', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/brass'
    }).id(`kubejs:securitycraft/keycard_lv2`)

    event.shaped('securitycraft:keycard_lv3', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/crimson_iron'
    }).id(`kubejs:securitycraft/keycard_lv3`)

    event.shaped('securitycraft:keycard_lv4', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/elementium'
    }).id(`kubejs:securitycraft/keycard_lv4`)

    event.shaped('securitycraft:keycard_lv5', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:ingots/azure_electrum'
    }).id(`kubejs:securitycraft/keycard_lv5`)

    event.shaped('securitycraft:limited_use_keycard', [' A ', 'BBB', 'CCC'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: '#forge:gems/lapis'
    }).id(`kubejs:securitycraft/limited_use_keycard`)

    event.shaped('securitycraft:remote_access_mine', [' BA', ' CD', 'E  '], {
        A: 'kubejs:personal_id',
        B: 'minecraft:redstone_torch',
        C: '#forge:gems/diamond',
        D: '#forge:ingots/gold',
        E: '#forge:rods/wooden'
    }).id(`kubejs:securitycraft/remote_access_mine`)

    event.shaped('securitycraft:remote_access_sentry', ['BAB', 'BDB', 'BCB'], {
        A: 'kubejs:personal_id',
        B: '#forge:ingots/iron',
        C: 'minecraft:redstone_torch',
        D: '#forge:gems/diamond'
    }).id(`kubejs:securitycraft/remote_access_sentry`)

    event.shaped('securitycraft:reinforced_redstone_lamp', ['ABA', 'BCB', 'ABA'], { 
        A: '#forge:ingots/compressed_iron',
        B: '#forge:dusts/redstone',
        C: 'securitycraft:reinforced_glowstone'
    }).id(`kubejs:securitycraft/reinforced_redstone_lamp`)

    removeRecipeByID(event, [
        'securitycraft:keycard_lv1',
        'securitycraft:keycard_lv2',
        'securitycraft:keycard_lv3',
        'securitycraft:keycard_lv4',
        'securitycraft:keycard_lv5',
        'securitycraft:limited_use_keycard',
        'securitycraft:remote_access_mine',
        'securitycraft:remote_access_sentry',
        'securitycraft:reinforced_redstone_lamp',
    ])

})
