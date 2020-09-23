// First, we must import the schema creator
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import category from './documents/category';
import person from './documents/person';
import project from './documents/project';
import siteSettings from './documents/siteSettings';
import indexPage from './documents/indexPage';
import page from './documents/page';
import route from './documents/route';
import navMenu from './documents/navMenu';

// Object types
import bioPortableText from './objects/bioPortableText';
import figure from './objects/figure';
import projectMember from './objects/projectMember';
import projectPortableText from './objects/projectPortableText';
import simplePortableText from './objects/simplePortableText';
import portableText from './objects/portableText';
import cta from './objects/cta';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectMember,
    portableText,
    projectPortableText,
    simplePortableText,
    cta,
    // The following are document types which will appear
    // in the studio.
    route,
    category,
    person,
    project,
    siteSettings,
    indexPage,
    page,
    navMenu,
  ]),
});
