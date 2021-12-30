import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Contact Info
  await zoom.enrich.contactEnrich
    .getContactEnrich([{firstName: 'Henry', lastName: 'Schuck', companyId: '346572700'}])
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.enrich.companyLocationEnrich
    .getCompanyLocationEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.enrich.companyLocationEnrich
    .getCompanyLocationEnrichOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
