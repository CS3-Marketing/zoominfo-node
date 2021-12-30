import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Scoop Enrich Info
  await zoom.enrich.scoopEnrich
    .getScoopEnrich({companyId: '344589814'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.enrich.scoopEnrich
    .getScoopEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.enrich.scoopEnrich
    .getScoopEnrichOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
