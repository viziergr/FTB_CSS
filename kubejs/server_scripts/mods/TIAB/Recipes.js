/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

ServerEvents.recipes(event => {

event.remove({ output: 'tiab:time_in_a_bottle' })
event.shaped(
  Item.of('tiab:time_in_a_bottle', 1), ['AEA', 'DCD', 'ABA'], {
    A: 'mysticalagradditions:dragon_scale',
    B: 'powah:crystal_nitro', 
    C: 'apothic_enchanting:infused_breath',
    D: 'extendedcrafting:luminessence',
    E: 'minecraft:nether_star'
  }
)

})