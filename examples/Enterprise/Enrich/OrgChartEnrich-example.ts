import zoominfo from '../../../src';

const main = async () => {
  const zoom = await zoominfo.client({
    username: '<username>',
    password: '<password>',
  });

  // Retrieve Org Chart Enrich Info
  await zoom.enrich.orgChartEnrich
    .getOrgChartEnrich({companyId: '344589814'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different input parameters
  await zoom.enrich.orgChartEnrich
    .getOrgChartEnrichInputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  // Retrieve different output parameters
  await zoom.enrich.orgChartEnrich
    .getOrgChartEnrichOutputs()
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

main();
