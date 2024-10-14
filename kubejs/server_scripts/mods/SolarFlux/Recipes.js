// Listen for the "recipes" server event.
ServerEvents.recipes(event => {

    ////////////////////////////////////////////
    //                                        //        
    //          Photovoltaic Cells            //
    //                                        //
    ////////////////////////////////////////////
    
    // Mirror
    event.shaped(
      Item.of('solarflux:mirror', 3),
      [
        'AAA', ' B ','   '
      ],
      { 
        A: 'minecraft:glass',
        B: 'minecraft:iron_ingot'
      }
    )

    // Photovoltaic Cell 1
    event.shaped(
      Item.of('solarflux:photovoltaic_cell_1', 1),
      [
        'AAA', 'BBB','CCC'
      ],
      { 
        A: 'minecraft:glass',
        B: 'minecraft:lapis_lazuli',
        C: 'solarflux:mirror'
      }
    )

    // Photovoltaic Cell 2
    event.shaped(
      Item.of('solarflux:photovoltaic_cell_2', 1),
      [
        'ABA', 'BAB','CDC'
      ],
      { 
        A: 'minecraft:clay_ball',
        B: 'minecraft:lapis_lazuli',
        C: 'solarflux:mirror',
        D: 'solarflux:photovoltaic_cell_1'
      }
    )    

    // Photovoltaic Cell 3
    event.shaped(
      Item.of('solarflux:photovoltaic_cell_3', 1),
      [
        'AAA', 'BBB','CDC'
      ],
      { 
        A: 'minecraft:glass',
        B: 'minecraft:glowstone_dust',
        C: 'minecraft:obsidian',
        D: 'solarflux:photovoltaic_cell_2'
      }
    ) 

    // Photovoltaic Cell 4
    event.shaped(
      Item.of('solarflux:photovoltaic_cell_4', 1), ['AAA', 'BEB','CDC'],{ 
        A: 'minecraft:blaze_powder',
        B: 'minecraft:glowstone_dust',
        C: 'minecraft:quartz_block',
        D: 'solarflux:photovoltaic_cell_3',
        E: 'minecraft:diamond'
      }
    )    

    // Photovoltaic Cell 5
    event.shaped(
      Item.of('solarflux:photovoltaic_cell_5', 1), ['AAA', 'BEB','CDC'],{ 
        A: 'minecraft:blaze_rod',
        B: 'minecraft:glowstone',
        C: 'minecraft:quartz_block',
        D: 'solarflux:photovoltaic_cell_4',
        E: 'minecraft:diamond_block'
      }
    )  

    // Photovoltaic Cell 6
    event.shaped(
      Item.of('solarflux:photovoltaic_cell_6', 1), ['AAA', 'BEB','CDC'],{ 
        A: 'minecraft:emerald',
        B: 'minecraft:glowstone',
        C: 'minecraft:quartz_block',
        D: 'solarflux:photovoltaic_cell_5',
        E: 'minecraft:diamond_block'
      }
    ) 

    ////////////////////////////////////////////
    //                                        //        
    //              Solar Panels              //
    //                                        //
    ////////////////////////////////////////////

    // Solar Panel tier 1
    event.shaped(
      Item.of('solarflux:sp_1', 1), // arg 1: output
      [
        'AAA',
        'BCB', // arg 2: the shape (array of strings)
        'BBB'
      ],
      {
        A: 'solarflux:mirror',
        B: '#minecraft:planks',  //arg 3: the mapping object
        C: 'minecraft:redstone',
      }
    )

    // Solar Panel tier 2
    event.shaped(
      Item.of('solarflux:sp_2', 1), ['AAA', 'ABA','AAA'], { 
        A: 'solarflux:sp_1',
        B: '#c:pistons'
      }
    )

    // Solar Panel tier 3
    event.shaped(
      Item.of('solarflux:sp_3', 2), ['AAA', 'BCB','BDB'], { 
        A: 'solarflux:photovoltaic_cell_1',
        B: 'solarflux:sp_2',
        C: 'minecraft:repeater',
        D: 'minecraft:iron_block'
      }
    )

    // Solar Panel tier 4
    event.shaped(
      Item.of('solarflux:sp_4', 2), ['AAA', 'BCB','BDB'], { 
        A: 'solarflux:photovoltaic_cell_2',
        B: 'solarflux:sp_3',
        C: 'minecraft:clock',
        D: 'minecraft:iron_block'
      }
    )

    // Solar Panel tier 5
    event.shaped(
      Item.of('solarflux:sp_5', 2), ['AAA', 'BCB','BDB'], { 
        A: 'solarflux:photovoltaic_cell_3',
        B: 'solarflux:sp_4',
        C: 'minecraft:glowstone_dust',
        D: 'minecraft:gold_block'
      }
    )

    // Solar Panel tier 6
    event.shaped(
      Item.of('solarflux:sp_6', 2), ['AAA', 'BCB','BDB'], { 
        A: 'solarflux:photovoltaic_cell_4',
        B: 'solarflux:sp_5',
        C: 'minecraft:redstone_lamp',
        D: 'minecraft:diamond_block'
      }
    )

    // Solar Panel tier 7
    event.shaped(
      Item.of('solarflux:sp_7', 2), ['AAA', 'BCB','BCB'], { 
        A: 'solarflux:photovoltaic_cell_5',
        B: 'solarflux:sp_6',
        C: 'minecraft:dragon_breath'
      }
    )

    // Solar Panel tier 8
    event.shaped(
      Item.of('solarflux:sp_8', 2), ['AAA', 'BCB','BCB'], { 
        A: 'solarflux:photovoltaic_cell_6',
        B: 'solarflux:sp_7',
        C: 'minecraft:dragon_egg'
      }
    )

    ////////////////////////////////////////////
    //                                        //        
    //             Item & Upgrades            //
    //                                        //
    ////////////////////////////////////////////

    // Blank Upgrade
    event.shaped(
      Item.of('solarflux:blank_upgrade', 4), [' A ', 'ABA',' A '], { 
        A: '#c:cobblestones',
        B: 'solarflux:mirror'
      }
    )

    // Block Charging Upgrade
    event.shaped(
      Item.of('solarflux:block_charging_upgrade', 1), ['ABA', 'BCB','ABA'], {
        A: 'minecraft:ender_pearl',
        B: 'minecraft:redstone_block',
        C: 'solarflux:blank_upgrade'
      }
    )

    // Capacity Upgrade
    event.shaped(
      Item.of('solarflux:capacity_upgrade', 1), [' A ', 'ABA','ACA'], {
        A: 'minecraft:redstone',
        B: 'solarflux:blank_upgrade',
        C: 'minecraft:diamond_block'
      }
    )

    // Dispersive Upgrade
    event.shaped(
      Item.of('solarflux:dispersive_upgrade', 1), ['ABA', 'BCB','ABA'], {
        A: 'minecraft:glowstone_dust',
        B: 'minecraft:ender_eye',
        C: 'solarflux:blank_upgrade'
      }
    )

    // Efficiency Upgrade
    event.shaped(
      Item.of('solarflux:efficiency_upgrade', 1), [' A ', 'ABA',' A '], {
        A: 'solarflux:mirror',
        B: 'solarflux:blank_upgrade'
      }
    )

    // Transfer Rate Upgrade
    event.shaped(
      Item.of('solarflux:transfer_rate_upgrade', 1), ['AAA', 'BCB','AAA'], {
        A: 'minecraft:redstone',
        B: 'minecraft:gold_ingot',
        C: 'solarflux:blank_upgrade'
      }
    )

    // Machine Traversal Upgrade
    event.shaped(
      Item.of('solarflux:traversal_upgrade', 1), ['ABA', 'CDC','ABA'], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:sticky_piston',
        C: 'minecraft:redstone',
        D: 'solarflux:blank_upgrade'
      }
    )

    // Furnace Upgrade
    event.shaped(
      Item.of('solarflux:furnace_upgrade', 1), ['AAA', 'ABA','ACA'], {
        A: '#minecraft:coals',
        B: 'solarflux:blank_upgrade',
        C: '#c:furnaces'
      }
    )
})