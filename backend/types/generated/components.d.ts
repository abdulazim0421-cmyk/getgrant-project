import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_shared_advantages';
  info: {
    displayName: 'Advantage';
    icon: 'star';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLivingCostRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_living_cost_rows';
  info: {
    displayName: 'living_cost_row';
    icon: 'server';
  };
  attributes: {
    average: Schema.Attribute.Integer;
    category: Schema.Attribute.String;
    max: Schema.Attribute.Integer;
    min: Schema.Attribute.Integer;
  };
}

export interface SharedUniversity extends Struct.ComponentSchema {
  collectionName: 'components_shared_universities';
  info: {
    displayName: 'university';
    icon: 'house';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    programs: Schema.Attribute.Integer;
    salary: Schema.Attribute.Integer;
  };
}

export interface SharedVisaType extends Struct.ComponentSchema {
  collectionName: 'components_shared_visa_types';
  info: {
    displayName: 'visa_type';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.advantage': SharedAdvantage;
      'shared.living-cost-row': SharedLivingCostRow;
      'shared.university': SharedUniversity;
      'shared.visa-type': SharedVisaType;
    }
  }
}
