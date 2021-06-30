module.exports = {
  secret: process.env.SECRET,
  jwtExpiration: 30,
  jwtRefreshExpiration: 120,

  /* For Default */
  //jwtExpiration: 3600,         // 1 hour
  //jwtRefreshExpiration: 86400, // 24 hours

  /* for test */
  // jwtExpiration: 30,          // 1 minute
  // jwtRefreshExpiration: 120,  // 2 minutes
};
