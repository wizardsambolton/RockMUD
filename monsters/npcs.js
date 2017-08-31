module.exports = [{
  name: 'Rufus',
  level: 15,
  short: 'Mayor Rufus',
  long: 'Rufus, current mayor of Midgaard, is here pacing around the room',
  description: '',
  inName: 'Mayor Rufus',
  race: 'human',
  id: 9,
  area: 'midgaard',
  weight: 245,
  diceNum: 2,
  diceSides: 8,
  diceMod: 5,
  str: 16,
  position: 'standing',
  attackType: 'punch',
  damRoll: 10,
  hitRoll: 10,
  ac: 20,
  wanderCheck: 50,
  // this is asking if we want to run the ai behaviors when theres no players in the room with the mob
  runOnAliveWhenEmpty: true,
  items: [{
    name: 'Midgaard city key',
    short: 'a thin gold key',
    long: 'A thin gold key with a ruby embbeded to the end lies here',
    area: 'midgaard',
    id: '10',
    level: 1,
    itemType: 'key',
    material: 'gold',
    weight: 0,
    slot: '',
    value: 1000,
    equipped: false,
    isKey: true
  }],
  behaviors: [{
    module: 'mayor'
  }, {
    module: 'wander'
  }]
},{
  name: 'dog',
  level: 1,
  short: 'Sad Dog',
  long: "A sad looking dog struggles to maintain it's balance",
//  description: 'The dog avoids your gaze',
  inName: 'Sad Dog',
  race: 'human',
  id: 9,
//  area: 'midgaard',
  weight: 5,
  diceNum: 1,
  diceSides: 3,
  diceMod: 5,
  str: 1,
  position: 'standing',
  attackType: 'punch',
  damRoll: 1,
  hitRoll: 1,
  ac: 1,
  wanderCheck: 50,
  // this is asking if we want to run the ai behaviors when theres no players in the room with the mob
  runOnAliveWhenEmpty: false,
  items: []
}];
