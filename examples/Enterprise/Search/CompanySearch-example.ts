import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Company Search Info
  await zoom.search.companySearch
    .getCompanySearch({companyName: 'ZoomInfo'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.search.companySearch
    .getCompanySearchInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.search.companySearch
    .getCompanySearchOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
