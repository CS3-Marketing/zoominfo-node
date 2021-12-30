import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve News Enrich Info
  await zoom.enrich.newsEnrich
    .getNewsEnrich({companyId: '344589814'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.enrich.newsEnrich
    .getNewsEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.enrich.newsEnrich
    .getNewsEnrichOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
