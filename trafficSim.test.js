const trafficSimulation = require( './trafficSimulation' ); // Adjust the path as necessary

describe( 'trafficSimulation', () => {
  test( 'should simulate traffic correctly for 10 time units', () => {
    const initialRoad = "CCC.G...R...";
    const n = 10;
    const expectedOutput = [
      'CCC.G...R...',
      'CC.CO...G...',
      'C.CCR...O...',
      '.CC.C...R...',
      '.C.C.C..G...',
      '..C.C.C.O...',
      '...C.C.CR...',
      '....C.C.C...',
      '.....C.C.C..',
      '......C.C.C.',
      '.......C.C.C'
    ];

    const simulationResult = trafficSimulation( initialRoad, n );
    expect( simulationResult ).toEqual( expectedOutput );
  } )

  test( 'should simulate traffic correctly for 15 time units', () => {
    const initialRoad = "CCC.G...R...";
    const n = 15;
    const expectedOutput = [
      'CCC.G...R...', 'CC.CO...G...',
      'C.CCR...O...', '.CC.C...R...',
      '.C.C.C..G...', '..C.C.C.O...',
      '...C.C.CR...', '....C.C.C...',
      '.....C.C.C..', '......C.C.C.',
      '.......C.C.C', '........C.CC',
      '.........CCC', '.........CCC',
      '.........CCC', '.........CCC'
    ];

    const simulationResult = trafficSimulation( initialRoad, n );
    expect( simulationResult ).toEqual( expectedOutput );
  } )



} )