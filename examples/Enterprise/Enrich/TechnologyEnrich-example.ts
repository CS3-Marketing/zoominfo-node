import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Technology Enrich Info
  await zoom.enrich.technologyEnrich
    .getTechnologyEnrich({companyId: '344589814'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.enrich.technologyEnrich
    .getTechnologyEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
