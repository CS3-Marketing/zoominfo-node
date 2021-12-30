import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Corporate Info
  await zoom.enrich.corporateHiearchyEnrich
    .getCorporateHiearchyEnrich([{companyName: 'ZoomInfo'}])
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.enrich.corporateHiearchyEnrich
    .getCorporateHiearchyEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.enrich.corporateHiearchyEnrich
    .getCorporateHiearchyEnrichOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
