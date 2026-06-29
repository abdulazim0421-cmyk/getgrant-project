import type { Schema, Struct } from '@strapi/strapi';

export interface CountryCardAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_country_card_advantages';
  info: {
    displayName: 'advantages';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      ['graduation', 'briefcase', 'chart', 'star']
    >;
    title: Schema.Attribute.String;
  };
}

export interface CountryCardLivingCost extends Struct.ComponentSchema {
  collectionName: 'components_country_card_living_costs';
  info: {
    displayName: 'living-cost';
    icon: 'alien';
  };
  attributes: {
    avg: Schema.Attribute.String;
    category: Schema.Attribute.String;
    max: Schema.Attribute.String;
    min: Schema.Attribute.String;
  };
}

export interface CountryCardVisaInfo extends Struct.ComponentSchema {
  collectionName: 'components_country_card_visa_infos';
  info: {
    displayName: 'visaInfo';
    icon: 'cast';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CourseCourseGroup extends Struct.ComponentSchema {
  collectionName: 'components_course_course_groups';
  info: {
    displayName: 'CourseGroup';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'country-card.advantages': CountryCardAdvantages;
      'country-card.living-cost': CountryCardLivingCost;
      'country-card.visa-info': CountryCardVisaInfo;
      'course.course-group': CourseCourseGroup;
    }
  }
}
