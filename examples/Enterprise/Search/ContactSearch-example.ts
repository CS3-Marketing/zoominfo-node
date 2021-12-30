import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Company Search Info
  await zoom.search.contactSearch
    .getContactSearch({companyName: 'ZoomInfo'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.search.contactSearch
    .getContactSearchInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.search.contactSearch
    .getContactSearchOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
