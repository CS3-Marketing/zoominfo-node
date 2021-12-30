import zoominfo from '../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve All Webhooks
  await zoom.websights.IPenrich.enrichIP({ipAddress: '127.0.0.1'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.websights.IPenrich.IPEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.websights.IPenrich.IPEnrichOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
