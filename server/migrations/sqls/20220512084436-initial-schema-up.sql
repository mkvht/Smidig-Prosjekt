/* Replace with your SQL commands */

create table users
(
    user_id                  serial primary key,
    user_openid              varchar(255) not null,
    user_company_name        varchar(255),
    user_organization_number numeric,
    user_provider            varchar(255) not null,
    user_email               varchar(255),
    user_address             varchar(255),
    user_zip_code            numeric,
    user_city                varchar(255),
    user_country             varchar(255),
    user_phone               varchar(255),
    user_logo_path           varchar(255)
);

create table consent
(
    consent_id             serial primary key,
    user_id                integer references users (user_id) ON DELETE CASCADE,
    consent_terms          boolean not null,
    consent_privacy_policy boolean not null,
    consent_newsletter     boolean not null,
    consent_logo_rights    boolean not null
);

create table project
(
    project_id                       serial primary key,
    project_name                     varchar(255) not null,
    project_description              varchar(255) not null,
    project_statement                varchar(255) not null,
    project_description_image_path   varchar(255),
    project_what_we_do_text          text,
    project_what_we_do_image_path    varchar(255),
    project_how_it_works_text        text,
    project_how_it_works_image_path  varchar(255),
    project_why_text                 text,
    project_why_image_path           varchar(255),
    project_promo_background_path    varchar(255),
    project_your_impact_1_image_path varchar(255),
    project_your_impact_2_image_path varchar(255),
    project_your_impact_text         text
);

create table category
(
    category_id   serial primary key,
    category_name varchar(255) not null
);

create table project_category
(
    project_id  integer references project (project_id) ON DELETE CASCADE,
    category_id integer references category (category_id) ON DELETE CASCADE
);

create table impact
(
    impact_id                     serial primary key,
    project_id                    integer references project (project_id) ON DELETE CASCADE,
    impact_name                   varchar(255) not null,
    impact_cost                   integer not null,
    impact_description            text,
    impact_description_past_tense text,
    impact_image_path             varchar(255)
);

create table user_impact
(
    user_impact_id     serial primary key,
    impact_id          integer references impact (impact_id) ON DELETE CASCADE,
    user_id            integer references users (user_id) ON DELETE CASCADE,
    user_impact_amount integer not null
);

create table transaction
(
    transaction_id     serial primary key,
    user_id            integer references users (user_id) ON DELETE CASCADE,
    project_id         integer references project (project_id) ON DELETE CASCADE,
    transaction_amount integer      not null,
    transaction_date   date         not null,
    transaction_type   varchar(255) not null
);

create table payment_plan
(
    payment_plan_id                serial primary key,
    project_id                     integer references project (project_id) ON DELETE CASCADE,
    user_id                        integer references users (user_id) ON DELETE CASCADE,
    payment_plan_type              varchar(255) not null,
    payment_plan_date              date         not null,
    payment_plan_next_payment_date date,
    payment_plan_method            varchar(255) not null,
    payment_plan_amount            integer      not null,
    payment_plan_is_active         boolean      not null
);

create table testimonial
(
    testimonial_id   serial primary key,
    user_id          integer references users (user_id) ON DELETE CASCADE,
    testimonial_text text not null
);

create table follows_project
(
    user_id    integer references users (user_id) ON DELETE CASCADE,
    project_id integer not null references project (project_id) ON DELETE CASCADE
);


/* create table project_user(
    project_user_id serial primary key,
    project_id      integer references project (project_id),
    user_id         integer references users (user_id)
);
   */

