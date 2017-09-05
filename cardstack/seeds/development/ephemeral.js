/* eslint-env node */

const Factory = require('@cardstack/test-support/jsonapi-factory');

module.exports = [
  {
    type: 'plugin-configs',
    id: '@cardstack/ephemeral'
  },
  {
    type: 'data-sources',
    id: 'default',
    attributes: {
      'source-type': '@cardstack/ephemeral',
      params: {
        initialModels: initialModels()
      }
    }
  },
  {
    type: 'plugin-configs',
    id: '@cardstack/hub',
    relationships: {
      'default-data-source': {
        data: { type: 'data-sources', id: 'default' }
      }
    }
  }
];

function initialModels() {
  let factory = new Factory();
  factory.addResource('content-types', 'rentals')
    .withRelated('fields', [
      factory.addResource('fields', 'title')
        .withAttributes({
          'field-type': '@cardstack/core-types::string'
        }),
      factory.addResource('fields', 'owner')
        .withAttributes({
          'field-type': '@cardstack/core-types::string'
        }),
      factory.addResource('fields', 'city')
        .withAttributes({
          'field-type': '@cardstack/core-types::string'
        }),
      factory.addResource('fields', 'property-type')
        .withAttributes({
          'field-type': '@cardstack/core-types::string'
        }),
      factory.addResource('fields', 'bedrooms')
        .withAttributes({
          'field-type': '@cardstack/core-types::integer'
        }),
      factory.addResource('fields', 'image')
        .withAttributes({
          'field-type': 'image-url'
        }),
      factory.addResource('fields', 'description')
        .withAttributes({
          'field-type': '@cardstack/core-types::string'
        })
    ]);
  factory.addResource('plugin-configs', 'image-url');

  factory.addResource('rentals').withAttributes({
    "title": "Grand Old Mansion",
    "owner": "Veruca Salt",
    "city": "San Francisco",
    "property-type": "Estate",
    "bedrooms": 15,
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
    "description": "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests."
  });

  factory.addResource('rentals').withAttributes({
    "title": "Urban Living",
    "owner": "Mike Teavee",
    "city": "Seattle",
    "property-type": "Condo",
    "bedrooms": 1,
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
    "description": "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
  });

  factory.addResource('rentals').withAttributes({
    "title": "Downtown Charm",
    "owner": "Violet Beauregarde",
    "city": "Portland",
    "property-type": "Apartment",
    "bedrooms": 3,
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
    "description": "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet."
  });

  return factory.getModels();
}
