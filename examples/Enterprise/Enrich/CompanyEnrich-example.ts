import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Company Info
  await zoom.enrich.companyEnrich
    .getCompanyEnrich([{companyName: 'ZoomInfo'}, {companyName: 'FoMoCo'}])
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.enrich.companyEnrich
    .getCompanyEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.enrich.companyEnrich
    .getCompanyEnrichOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
