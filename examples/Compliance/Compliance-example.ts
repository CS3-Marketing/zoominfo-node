import zoominfo from '../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve All Webhooks
  await zoom.compliance
    .compliance({companyName: 'ZoomInfo'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.compliance
    .complianceInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.compliance
    .compliancehOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
