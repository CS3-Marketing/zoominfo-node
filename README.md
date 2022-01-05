# ZoomInfo

The ZoomInfo Node SDK allows developers to interact with the
[ZoomInfo API](https://api-docs.zoominfo.com/#intro). You can use this library to query the ZoomInfo
database for relevant companies and contacts and enrich the data records in your Customer
Relationship Management (CRM), Marketing Automation (MA), and other systems in your organization.

## Installation

The easiest way to install zoominfo is using [NPM](https://npmjs.com). Run the command below from
your project directory to install the library.

```bash
npm install zoominfo-node
```

Then in your code:

```javascript
const zoominfo = require('zoominfo-node');
```

### Authentication Methods

This library supports the following Authentication methods.

- Private Key Infrastructure (PKI)
- Username and Password

For both authentication methods a Java Web Token (JWT), that is valid for one hour is returned which
is used to access the API

### Username and Password

```javascript
const zoom = await zoominfo.client({username: '<username>', password: 'password'});
```

### Private Key Infrastructure (PKI)

```javascript
const zoom = await zoominfo.client({
  username: '<username>',
  clientId: '<clientId>',
  privateKey: '<privateKey>',
});
```

### Refreshing Access Token

```javascript
await zoom.refreshAccessToken();
```

## Sample Usage

### Contact Search

Use Contact Search to retrieve contacts using valid query parameters.

```javascript
await zoom.search.contactSearch
  .getContactSearch({companyName: 'ZoomInfo'})
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

### Intent Enrich

Use this endpoint to enrich intent data for a company based on input values and return the desired
output fields in the response.

```javascript
await zoom.enrich.intentEnrich
  .getIntentEnrich({companyId: 344589814})
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

## API Structure

The ZoomInfo API is a set of HTTPS endpoints you can use to programmatically retrieve and integrate
ZoomInfo data into your existing technology stack and workflows. Responses are returned in JSON to
support integration with common programming languages and development kits.

- Enterprise API
  - The [Enterprise API](https://api-docs.zoominfo.com/#614aa0e9-f630-4c0b-8e2a-b2cf60753dcd)
    supports searching for and enriching company and contact records.
    - The [Search API](https://api-docs.zoominfo.com/#156045a9-6446-4c61-b9fb-706476cfac6a) accepts
      various input criteria which are used to return Contacts, Companies, Scoops, News and Intent
      records.
    - The [Enrich API](https://api-docs.zoominfo.com/#6c2de74a-e026-401b-8910-503ae7aa57c8) is used
      to retrieve ZoomInfo's full profile data by matching to known contacts or companies.
    - The [Lookup API](https://api-docs.zoominfo.com/#28358f09-9863-42af-a93c-6710a8cacf9d) includes
      a set of endpoints that return available inputs and outputs for corresponding Search or Enrich
      requests.
- WebSights API
  - The [WebSights API](https://api-docs.zoominfo.com/#594fcf78-2a83-46c1-ae54-bde1be1af02d)
    identifies anonymous website traffic by resolving IP addresses to return company and ISP
    profiles and IP Geolocation details.
- Compliance API
  - The [Compliance API](https://api-docs.zoominfo.com/#6b305a99-cbad-4a44-aaa4-23b14d126a43)
    includes endpoints related to data privacy and opt-out compliance for contacts stored in the
    ZoomInfo database.

## Rate and Usage Limiting

The ZoomInfo API uses rate and usage limiting tied to the account provisioned for API access. Your
API account is provisioned with:

- Rate limits: A limit to the number of requests you can make within a given time period.
  - For the Authentication endpoint, the limit is 1 request per second.
  - For other endpoints, the limit is 1500 requests per minute.
- Request limits: An overall number of requests you can perform within the current API contract
  term.
- Record limits: The number of records you are entitled to retrieve within the current API contract
  term.

You can track usage status using the Usage Lookup endpoint.

## Error Handling and Troubleshooting

The API will return standard classes of HTTP error status codes (4xx client and 5xx server codes) as
well as 2xx success codes.

| Code | Error Message                                                                                                                                  |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 400  | Exceeded the max limit to enrich new Contacts or Companies                                                                                     |
| 400  | Missing outputFields parameter                                                                                                                 |
| 400  | No roles found for login                                                                                                                       |
| 400  | Page number (page) is not a number                                                                                                             |
| 400  | Page number (page) requested is greater than the available results                                                                             |
| 400  | Request body has malformed JSON                                                                                                                |
| 400  | Results per page (rpp) is not a number                                                                                                         |
| 400  | Results per page (rpp) is over max allowed value (100)                                                                                         |
| 400  | The parameter passed for sortBy is invalid                                                                                                     |
| 400  | There are invalid fields in your request                                                                                                       |
| 400  | There is insufficient information for this request                                                                                             |
| 400  | Total record pagination is over max allowed value (1000)                                                                                       |
| 401  | Authentication failed                                                                                                                          |
| 403  | There are fields that are not allowed under your subscription                                                                                  |
| 403  | You do not have access to the enrich endpoint                                                                                                  |
| 403  | You do not have access to this endpoint                                                                                                        |
| 403  | You have used up all of your allowed request limit                                                                                             |
| 403  | You have used up all of your allowed request limit for WebSights API                                                                           |
| 403  | You have used up all of your allowed record limit                                                                                              |
| 403  | You have used up all of your allowed record limit for WebSights API                                                                            |
| 403  | You do not have permission to access the ZoomInfo API                                                                                          |
| 429  | You have exceeded your API query rate limit. Please decrease the frequency of your API requests                                                |
| 500  | An unexpected error has occurred. Please try again and if this continues to occur, please contact us and reference the error id provided above |
| 500  | Search failed. Please try again and if this continues to occur, please contact us and reference the error id provided above API                |

## Examples & Documentation

For more examples on what you can do with the ZoomInfo Node SDK, see the [examples](/examples)
folder or take a look at the [documentation](https://api-docs.zoominfo.com/).

## Contributing

Bug fixes, docs, and library improvements are always welcome. Please refer to our Contributing Guide
for detailed information on how you can contribute.

### Getting Started

If you want to familiarize yourself with the project, you can start by forking the repository and
cloning it in your local development environment. The project requires Node.js to be installed on
your machine.

After cloning the repository, install the dependencies by running the following command in the
directory of your cloned repository:

```bash
npm install
```

You can run the existing tests to see if everything is okay by executing:

```bash
npm test
```

## Disclaimer

This codebase is not endorsed, affiliated or associated with ZoomInfo Technologies Inc.
