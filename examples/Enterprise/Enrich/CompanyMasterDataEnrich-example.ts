import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: 'pgrosserode@cs3marketing.com',
    password: 'CS3Marketing!',
  });

  // Retrieve Company Master Data Info
  await zoom.enrich.companyMasterDataEnrich
    .getCompanyMasterDataEnrich([
      {
        zi_c_name: 'capital one',
        address: {
          zi_c_city: 'Mc Lean',
          zi_c_state: 'Virginia',
          zi_c_zip: '22102',
          zi_c_country: 'United States',
        },
        match_reasons: [
          {
            zi_c_name: 'E',
          },
        ],
      },
    ])
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
