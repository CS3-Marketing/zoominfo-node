import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Intent Enrich Info
  await zoom.enrich.intentEnrich
    .getIntentEnrich({companyId: '344589814'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.enrich.intentEnrich
    .getIntentEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.enrich.intentEnrich
    .getIntentEnrichOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
