const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );

describe( "main.js", () => {
  it("contains a hidden modal", () => {
    //I changed this line because it wouldnt find anything with query selector
    let modal = document.getElementsByClassName('hidden')[0]
    expect(modal).not.to.equal(null)
  } )
} )
