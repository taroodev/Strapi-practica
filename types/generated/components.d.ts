import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsDinamicZoneComponentStrapi
  extends Struct.ComponentSchema {
  collectionName: 'components_components_dinamic_zone_component_strapis';
  info: {
    displayName: 'component strapi';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ComponentsDinamicZoneImageGalery
  extends Struct.ComponentSchema {
  collectionName: 'components_components_dinamic_zone_image_galeries';
  info: {
    displayName: 'imageGalery';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ComponentsDinamicZoneUrlLink extends Struct.ComponentSchema {
  collectionName: 'components_components_dinamic_zone_url_links';
  info: {
    displayName: 'url_link';
  };
  attributes: {
    tittleLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DetailsDetailsClass extends Struct.ComponentSchema {
  collectionName: 'components_details_details_classes';
  info: {
    displayName: 'detailsClass';
  };
  attributes: {
    classroom: Schema.Attribute.Integer;
    schudele: Schema.Attribute.Media<'images', true>;
  };
}

export interface DetailsDetailsDate extends Struct.ComponentSchema {
  collectionName: 'components_details_details_dates';
  info: {
    description: '';
    displayName: 'details_date';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    place: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.Time;
  };
}

export interface DetailsDetailsTeacher extends Struct.ComponentSchema {
  collectionName: 'components_details_details_teachers';
  info: {
    description: '';
    displayName: 'detailsTeacher';
  };
  attributes: {
    experince: Schema.Attribute.String & Schema.Attribute.Required;
    rich1: Schema.Attribute.RichText;
    specialty: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MaterialsStudyMaterials extends Struct.ComponentSchema {
  collectionName: 'components_materials_study_materials';
  info: {
    description: '';
    displayName: 'StudyMaterials';
  };
  attributes: {
    onlyDoc: Schema.Attribute.Media<'files', true>;
    onlyImage: Schema.Attribute.Media<'images', true>;
    onlyVideo: Schema.Attribute.Media<'videos', true>;
  };
}

export interface ThemesSubtheme extends Struct.ComponentSchema {
  collectionName: 'components_themes_subthemes';
  info: {
    description: '';
    displayName: 'subtheme';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ThemesTheme extends Struct.ComponentSchema {
  collectionName: 'components_themes_themes';
  info: {
    description: '';
    displayName: 'theme';
  };
  attributes: {
    nameTheme: Schema.Attribute.String & Schema.Attribute.Required;
    subtheme: Schema.Attribute.Component<'themes.subtheme', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components-dinamic-zone.component-strapi': ComponentsDinamicZoneComponentStrapi;
      'components-dinamic-zone.image-galery': ComponentsDinamicZoneImageGalery;
      'components-dinamic-zone.url-link': ComponentsDinamicZoneUrlLink;
      'details.details-class': DetailsDetailsClass;
      'details.details-date': DetailsDetailsDate;
      'details.details-teacher': DetailsDetailsTeacher;
      'materials.study-materials': MaterialsStudyMaterials;
      'themes.subtheme': ThemesSubtheme;
      'themes.theme': ThemesTheme;
    }
  }
}
