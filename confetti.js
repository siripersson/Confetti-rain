
/**
 * Generates a random color for each particle.
 * Returns a string that contains the CSS-color. 
 */
const chooseParticleColor = () => {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

/**
 * Creates the confetti-rain
 * @param {} addConfettiParticles 
 */
const bang = (addConfettiParticles) => {
  /**
   * Regulates the different parameters of the confetti-rain
   */
  addConfettiParticles({
    numberOfParticles: 200, 
    xPosition: 50,     
    yPosition: 50,      
    xVelocity: 0,       
    yVelocity: 3,       
    xRandomSpread: 70,        
    yRandomSpread: 70         
  })
}

export {
  chooseParticleColor,
  bang
}