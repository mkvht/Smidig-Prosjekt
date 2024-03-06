insert into category(category_id, category_name)
values (1, 'Water'),
       (2, 'Knowledge');

insert into project(project_id,
                    project_name,
                    project_description,
                    project_statement,
                    project_description_image_path,
                    project_what_we_do_text,
                    project_what_we_do_image_path,
                    project_how_it_works_text,
                    project_how_it_works_image_path,
                    project_why_text,
                    project_why_image_path,
                    project_promo_background_path,
                    project_your_impact_1_image_path,
                    project_your_impact_2_image_path,
                    project_your_impact_text)
values (1,
        'Water Aid',
        'Right now, hundreds of millions of people do not have access to clean water, decent toilets or good hygiene. This is ruining lives and holding back development.',
        'The world is still not on track to have reached universal access to basic water, sanitation and hygiene services.',
        'resources/project_images/Project4.jpg',
        'Telling the story of what goes on in our projects, the local communities, the water and all the commitment behind it is an integral part of our work. ' ||
        'We do this through all the donations that every company provides on our platform. And we do this through images, words and videos. ' ||
        'Like these we''ve collected here for you, so you can see... how it works!',
        'resources/project_images/Project4.jpg',
        '[bbb]Local partners [bbb][nnn]We work with local partners to help communities access clean water, decent restrooms and good hygiene. ' ||
        'And we use our experience and research to influence decision-makers to do more to provide these essential services.
        [nnn]By working with local partners we’re able to deliver lasting change. By investing locally, we know that they can continue the good work even after we’re gone. ' ||
        '[nnn][bbb]Practical technologies [bbb][nnn]We only use practical technologies and make sure the right skills exist locally so that households, communities and service providers can keep services working long into the future.' ||
        '[nnn]However, the sheer scale of the challenge means that WaterAid and our partners can’t solve it alone. ' ||
        'So we work with communities and supporters to convince governments and service providers to prioritise investment in clean water and toilets for their citizens. ' ||
        '[nnn]And we couldn’t make it happen without you. The incredible generosity and commitment of all our supporters - individuals, institutions and companies - is behind everything we do.',
        'resources/project_images/Project9.png',
        '71% of the world''s population has access to safe drinking water sources- Here it is calculated that the sources are available where you live, and when you need them and without pollution. ' ||
        '"Safe sources" include water in pipes, wells, public taps or pipes, drilling water or protected natural sources or rainwater.
        [nnn]New data reveals that 2.1 billion people gained access to a decent toilet and 1.8 billion people gained access to basic water access between 2000 and 2017.
        [nnn]Despite this progress, the world is still not on track to have reached universal access to basic water, sanitation and hygiene services',
        'resources/project_images/Project10.png',
        'public/promo_backgrounds/WaterAidPromo.png',
        'resources/project_images/Project11.png',
        'resources/project_images/Ghana.png',
        '[bbb]Tamala Well project[bbb][nnn] Since your company joined the Tamala Well project  only use practical technologies and make sure the right skills exist locally so that households, communities and service providers can keep services working long into the future. [nnn]By working with local partners we’re able to deliver lasting change. By investing locally, we know that they can continue the good work even after we’re gone.
'),

       (2,
        'Ensure fair education',
        'Ensure inclusive, fair and good education and promote opportunities for lifelong learning for all',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod elit in metus ornare, nec.',
        'resources/project_images/Project2.png',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante lacus.',
        'resources/project_images/Project1.jpg',
        '[bbb]Lorem ipsum [bbb][nnn]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisl justo. Curabitur a est. ' ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec rhoncus justo, non elementum nulla. Sed et magna non.
        [nnn]Dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lacus consectetur nisi semper fermentum. Ut aliquam nisi felis rutrum et erat. ' ||
        '[nnn][bbb]Praesent dolor [bbb][nnn]Integer a neque ultricies, lacinia mi vitae, consequat quam. Vivamus hendrerit dolor non sapien vulputate convallis. Curabitur vitae pharetra.' ||
        '[nnn]Sed at ante ac dolor molestie pretium. Vivamus luctus congue enim sollicitudin feugiat. Suspendisse tempor consequat tellus id pulvinar. ' ||
        'Nullam aliquam purus eget dolor tempor, nec vestibulum tortor lobortis. Proin ut vehicula arcu. Pellentesque in auctor tortor. Maecenas nec bibendum. ' ||
        '[nnn]Sed ultrices sed justo quis feugiat. Duis lobortis felis enim, quis placerat est vestibulum et. In hac habitasse platea dictumst. Duis a nibh vitae.',
        'resources/project_images/Project5.png',
        'Praesent eget dictum mi. Nunc condimentum tristique massa nec pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. ' ||
        'Maecenas dignissim hendrerit lacus eget semper. Vestibulum rhoncus lobortis eros ut commodo. Etiam id dolor metus. Nulla posuere massa sed sollicitudin pellentesque. ' ||
        'Proin condimentum sagittis faucibus. Nulla ut ex euismod, luctus dolor ac, commodo felis. Curabitur faucibus et nisl non elementum. Cras vitae semper sapien, eu gravida dolor. ' ||
        'Duis maximus eleifend mauris fringilla condimentum. Vivamus at risus sem. ' ||
        '[nnn]Phasellus sed leo vel leo rhoncus aliquet. Mauris semper justo massa, iaculis imperdiet sapien pellentesque ut. Nunc vel scelerisque tortor. ' ||
        'Quisque porttitor consequat quam ut tristique. Donec iaculis turpis a tincidunt dignissim. Nullam placerat quam dignissim massa lacinia convallis. ' ||
        '[nnn]Duis lobortis rhoncus neque, id bibendum enim interdum vitae. Sed euismod mattis mi vitae interdum. Suspendisse augue libero, cursus id efficitur in, dignissim sed mi. Aenean scelerisque enim sed lacus sagittis consequat.',
        'resources/project_images/Project3.png',
        'public/promo_backgrounds/EducationPromo.png',
        'resources/project_images/Project11.png',
        'resources/project_images/Ghana.png',
        '[bbb]Tamala Well project[bbb][nnn] Since your company joined the Tamala Well project  only use practical technologies and make sure the right skills exist locally so that households, communities and service providers can keep services working long into the future. By working with local partners we’re able to deliver lasting change. By investing locally, we know that they can continue the good work even after we’re gone.
'),
       (3,
        'Providing free tutoring',
        'Due to COVID-19, many teachers and students no longer have access to the classroom environment. Students especially are missing the human aspect of learning, and are falling behind at unprecedented rates.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod elit in metus ornare, nec.',
        'resources/project_images/Project3.png',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante lacus.',
        'resources/project_images/Project2.png',
        '[bbb]Lorem ipsum [bbb][nnn]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisl justo. Curabitur a est. ' ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec rhoncus justo, non elementum nulla. Sed et magna non.
        [nnn]Dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lacus consectetur nisi semper fermentum. Ut aliquam nisi felis rutrum et erat. ' ||
        '[nnn][bbb]Praesent dolor [bbb][nnn]Integer a neque ultricies, lacinia mi vitae, consequat quam. Vivamus hendrerit dolor non sapien vulputate convallis. Curabitur vitae pharetra.' ||
        '[nnn]Sed at ante ac dolor molestie pretium. Vivamus luctus congue enim sollicitudin feugiat. Suspendisse tempor consequat tellus id pulvinar. ' ||
        'Nullam aliquam purus eget dolor tempor, nec vestibulum tortor lobortis. Proin ut vehicula arcu. Pellentesque in auctor tortor. Maecenas nec bibendum. ' ||
        '[nnn]Sed ultrices sed justo quis feugiat. Duis lobortis felis enim, quis placerat est vestibulum et. In hac habitasse platea dictumst. Duis a nibh vitae.',
        'resources/project_images/Project6.png',
        'Praesent eget dictum mi. Nunc condimentum tristique massa nec pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. ' ||
        'Maecenas dignissim hendrerit lacus eget semper. Vestibulum rhoncus lobortis eros ut commodo. Etiam id dolor metus. Nulla posuere massa sed sollicitudin pellentesque. ' ||
        'Proin condimentum sagittis faucibus. Nulla ut ex euismod, luctus dolor ac, commodo felis. Curabitur faucibus et nisl non elementum. Cras vitae semper sapien, eu gravida dolor. ' ||
        'Duis maximus eleifend mauris fringilla condimentum. Vivamus at risus sem. ' ||
        '[nnn]Phasellus sed leo vel leo rhoncus aliquet. Mauris semper justo massa, iaculis imperdiet sapien pellentesque ut. Nunc vel scelerisque tortor. ' ||
        'Quisque porttitor consequat quam ut tristique. Donec iaculis turpis a tincidunt dignissim. Nullam placerat quam dignissim massa lacinia convallis. ' ||
        '[nnn]Duis lobortis rhoncus neque, id bibendum enim interdum vitae. Sed euismod mattis mi vitae interdum. Suspendisse augue libero, cursus id efficitur in, dignissim sed mi. Aenean scelerisque enim sed lacus sagittis consequat.',
        'resources/project_images/Project3.png',
        'public/promo_backgrounds/EducationPromo.png',
        'resources/project_images/Project11.png',
        'resources/project_images/Ghana.png',
        '[bbb]Tamala Well project[bbb][nnn] Since your company joined the Tamala Well project  only use practical technologies and make sure the right skills exist locally so that households, communities and service providers can keep services working long into the future. By working with local partners we’re able to deliver lasting change. By investing locally, we know that they can continue the good work even after we’re gone.
'),
       (4,
        'Girls future',
        'Education unlocks a girl’s potential, freeing her to create her own future free of poverty.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod elit in metus ornare, nec.',
        'resources/project_images/Project1.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante lacus.',
        'resources/project_images/Project2.png',
        '[bbb]Lorem ipsum [bbb][nnn]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisl justo. Curabitur a est. ' ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec rhoncus justo, non elementum nulla. Sed et magna non.
        [nnn]Dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lacus consectetur nisi semper fermentum. Ut aliquam nisi felis rutrum et erat. ' ||
        '[nnn][bbb]Praesent dolor [bbb][nnn]Integer a neque ultricies, lacinia mi vitae, consequat quam. Vivamus hendrerit dolor non sapien vulputate convallis. Curabitur vitae pharetra.' ||
        '[nnn]Sed at ante ac dolor molestie pretium. Vivamus luctus congue enim sollicitudin feugiat. Suspendisse tempor consequat tellus id pulvinar. ' ||
        'Nullam aliquam purus eget dolor tempor, nec vestibulum tortor lobortis. Proin ut vehicula arcu. Pellentesque in auctor tortor. Maecenas nec bibendum. ' ||
        '[nnn]Sed ultrices sed justo quis feugiat. Duis lobortis felis enim, quis placerat est vestibulum et. In hac habitasse platea dictumst. Duis a nibh vitae.',
        'resources/project_images/Project6.png',
        'Praesent eget dictum mi. Nunc condimentum tristique massa nec pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. ' ||
        'Maecenas dignissim hendrerit lacus eget semper. Vestibulum rhoncus lobortis eros ut commodo. Etiam id dolor metus. Nulla posuere massa sed sollicitudin pellentesque. ' ||
        'Proin condimentum sagittis faucibus. Nulla ut ex euismod, luctus dolor ac, commodo felis. Curabitur faucibus et nisl non elementum. Cras vitae semper sapien, eu gravida dolor. ' ||
        'Duis maximus eleifend mauris fringilla condimentum. Vivamus at risus sem. ' ||
        '[nnn]Phasellus sed leo vel leo rhoncus aliquet. Mauris semper justo massa, iaculis imperdiet sapien pellentesque ut. Nunc vel scelerisque tortor. ' ||
        'Quisque porttitor consequat quam ut tristique. Donec iaculis turpis a tincidunt dignissim. Nullam placerat quam dignissim massa lacinia convallis. ' ||
        '[nnn]Duis lobortis rhoncus neque, id bibendum enim interdum vitae. Sed euismod mattis mi vitae interdum. Suspendisse augue libero, cursus id efficitur in, dignissim sed mi. Aenean scelerisque enim sed lacus sagittis consequat.',
        'resources/project_images/Project3.png',
        'public/promo_backgrounds/EducationPromo.png',
        'resources/project_images/Project11.png',
        'resources/project_images/Ghana.png',
        '[bbb]Tamala Well project[bbb][nnn] Since your company joined the Tamala Well project  only use practical technologies and make sure the right skills exist locally so that households, communities and service providers can keep services working long into the future. By working with local partners we’re able to deliver lasting change. By investing locally, we know that they can continue the good work even after we’re gone.
'),
       (5,
        'Clean water and good sanitation',
        'New data reveals that 2.1 billion people gained access to a decent toilet and 1.8 billion people gained access to basic water access between 2000 and 2017.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod elit in metus ornare, nec.',
        'resources/project_images/Project5.png',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante lacus.',
        'resources/project_images/Project2.png',
        '[bbb]Lorem ipsum [bbb][nnn]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisl justo. Curabitur a est. ' ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec rhoncus justo, non elementum nulla. Sed et magna non.
        [nnn]Dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lacus consectetur nisi semper fermentum. Ut aliquam nisi felis rutrum et erat. ' ||
        '[nnn][bbb]Praesent dolor [bbb][nnn]Integer a neque ultricies, lacinia mi vitae, consequat quam. Vivamus hendrerit dolor non sapien vulputate convallis. Curabitur vitae pharetra.' ||
        '[nnn]Sed at ante ac dolor molestie pretium. Vivamus luctus congue enim sollicitudin feugiat. Suspendisse tempor consequat tellus id pulvinar. ' ||
        'Nullam aliquam purus eget dolor tempor, nec vestibulum tortor lobortis. Proin ut vehicula arcu. Pellentesque in auctor tortor. Maecenas nec bibendum. ' ||
        '[nnn]Sed ultrices sed justo quis feugiat. Duis lobortis felis enim, quis placerat est vestibulum et. In hac habitasse platea dictumst. Duis a nibh vitae.',
        'resources/project_images/Project6.png',
        'Praesent eget dictum mi. Nunc condimentum tristique massa nec pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. ' ||
        'Maecenas dignissim hendrerit lacus eget semper. Vestibulum rhoncus lobortis eros ut commodo. Etiam id dolor metus. Nulla posuere massa sed sollicitudin pellentesque. ' ||
        'Proin condimentum sagittis faucibus. Nulla ut ex euismod, luctus dolor ac, commodo felis. Curabitur faucibus et nisl non elementum. Cras vitae semper sapien, eu gravida dolor. ' ||
        'Duis maximus eleifend mauris fringilla condimentum. Vivamus at risus sem. ' ||
        '[nnn]Phasellus sed leo vel leo rhoncus aliquet. Mauris semper justo massa, iaculis imperdiet sapien pellentesque ut. Nunc vel scelerisque tortor. ' ||
        'Quisque porttitor consequat quam ut tristique. Donec iaculis turpis a tincidunt dignissim. Nullam placerat quam dignissim massa lacinia convallis. ' ||
        '[nnn]Duis lobortis rhoncus neque, id bibendum enim interdum vitae. Sed euismod mattis mi vitae interdum. Suspendisse augue libero, cursus id efficitur in, dignissim sed mi. Aenean scelerisque enim sed lacus sagittis consequat.',
        'resources/project_images/Project3.png',
        'public/promo_backgrounds/WaterAidPromo.png',
        'resources/project_images/Project11.png',
        'resources/project_images/Ghana.png',
        '[bbb]Tamala Well project[bbb][nnn] Since your company joined the Tamala Well project  only use practical technologies and make sure the right skills exist locally so that households, communities and service providers can keep services working long into the future. By working with local partners we’re able to deliver lasting change. By investing locally, we know that they can continue the good work even after we’re gone.
'),
       (6,
        'Access to basic water service',
        'Only 1 in 3 countries with less than 99% access to a basic water service were on track to achieve ‘nearly universal’ coverage by 2030. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod elit in metus ornare, nec.',
        'resources/project_images/Project6.png',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante lacus.',
        'resources/project_images/Project2.png',
        '[bbb]Lorem ipsum [bbb][nnn]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisl justo. Curabitur a est. ' ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec rhoncus justo, non elementum nulla. Sed et magna non.
        [nnn]Dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lacus consectetur nisi semper fermentum. Ut aliquam nisi felis rutrum et erat. ' ||
        '[nnn][bbb]Praesent dolor [bbb][nnn]Integer a neque ultricies, lacinia mi vitae, consequat quam. Vivamus hendrerit dolor non sapien vulputate convallis. Curabitur vitae pharetra.' ||
        '[nnn]Sed at ante ac dolor molestie pretium. Vivamus luctus congue enim sollicitudin feugiat. Suspendisse tempor consequat tellus id pulvinar. ' ||
        'Nullam aliquam purus eget dolor tempor, nec vestibulum tortor lobortis. Proin ut vehicula arcu. Pellentesque in auctor tortor. Maecenas nec bibendum. ' ||
        '[nnn]Sed ultrices sed justo quis feugiat. Duis lobortis felis enim, quis placerat est vestibulum et. In hac habitasse platea dictumst. Duis a nibh vitae.',
        'resources/project_images/Project6.png',
        'Praesent eget dictum mi. Nunc condimentum tristique massa nec pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. ' ||
        'Maecenas dignissim hendrerit lacus eget semper. Vestibulum rhoncus lobortis eros ut commodo. Etiam id dolor metus. Nulla posuere massa sed sollicitudin pellentesque. ' ||
        'Proin condimentum sagittis faucibus. Nulla ut ex euismod, luctus dolor ac, commodo felis. Curabitur faucibus et nisl non elementum. Cras vitae semper sapien, eu gravida dolor. ' ||
        'Duis maximus eleifend mauris fringilla condimentum. Vivamus at risus sem. ' ||
        '[nnn]Phasellus sed leo vel leo rhoncus aliquet. Mauris semper justo massa, iaculis imperdiet sapien pellentesque ut. Nunc vel scelerisque tortor. ' ||
        'Quisque porttitor consequat quam ut tristique. Donec iaculis turpis a tincidunt dignissim. Nullam placerat quam dignissim massa lacinia convallis. ' ||
        '[nnn]Duis lobortis rhoncus neque, id bibendum enim interdum vitae. Sed euismod mattis mi vitae interdum. Suspendisse augue libero, cursus id efficitur in, dignissim sed mi. Aenean scelerisque enim sed lacus sagittis consequat.',
        'resources/project_images/Project3.png',
        'public/promo_backgrounds/WaterAidPromo.png',
        'resources/project_images/Project11.png',
        'resources/project_images/Ghana.png',
        '[bbb]Tamala Well project[bbb][nnn] Since your company joined the Tamala Well project  only use practical technologies and make sure the right skills exist locally so that households, communities and service providers can keep services working long into the future. By working with local partners we’re able to deliver lasting change. By investing locally, we know that they can continue the good work even after we’re gone.
'),
       (7,
        'Ozone-BioFiltration',
        'Optimizing Filter Operation in an Ozone-Biofiltration Plant to Reduce Selection for Opportunistic Pathogens in Drinking Water Production',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod elit in metus ornare, nec.',
        'resources/project_images/Project7.png',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante lacus.',
        'resources/project_images/Project2.png',
        '[bbb]Lorem ipsum [bbb][nnn]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisl justo. Curabitur a est. ' ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec rhoncus justo, non elementum nulla. Sed et magna non.
        [nnn]Dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lacus consectetur nisi semper fermentum. Ut aliquam nisi felis rutrum et erat. ' ||
        '[nnn][bbb]Praesent dolor [bbb][nnn]Integer a neque ultricies, lacinia mi vitae, consequat quam. Vivamus hendrerit dolor non sapien vulputate convallis. Curabitur vitae pharetra.' ||
        '[nnn]Sed at ante ac dolor molestie pretium. Vivamus luctus congue enim sollicitudin feugiat. Suspendisse tempor consequat tellus id pulvinar. ' ||
        'Nullam aliquam purus eget dolor tempor, nec vestibulum tortor lobortis. Proin ut vehicula arcu. Pellentesque in auctor tortor. Maecenas nec bibendum. ' ||
        '[nnn]Sed ultrices sed justo quis feugiat. Duis lobortis felis enim, quis placerat est vestibulum et. In hac habitasse platea dictumst. Duis a nibh vitae.',
        'resources/project_images/Project6.png',
        'Praesent eget dictum mi. Nunc condimentum tristique massa nec pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. ' ||
        'Maecenas dignissim hendrerit lacus eget semper. Vestibulum rhoncus lobortis eros ut commodo. Etiam id dolor metus. Nulla posuere massa sed sollicitudin pellentesque. ' ||
        'Proin condimentum sagittis faucibus. Nulla ut ex euismod, luctus dolor ac, commodo felis. Curabitur faucibus et nisl non elementum. Cras vitae semper sapien, eu gravida dolor. ' ||
        'Duis maximus eleifend mauris fringilla condimentum. Vivamus at risus sem. ' ||
        '[nnn]Phasellus sed leo vel leo rhoncus aliquet. Mauris semper justo massa, iaculis imperdiet sapien pellentesque ut. Nunc vel scelerisque tortor. ' ||
        'Quisque porttitor consequat quam ut tristique. Donec iaculis turpis a tincidunt dignissim. Nullam placerat quam dignissim massa lacinia convallis. ' ||
        '[nnn]Duis lobortis rhoncus neque, id bibendum enim interdum vitae. Sed euismod mattis mi vitae interdum. Suspendisse augue libero, cursus id efficitur in, dignissim sed mi. Aenean scelerisque enim sed lacus sagittis consequat.',
        'resources/project_images/Project3.png',
        'public/promo_backgrounds/OzonePromo.png',
        'resources/project_images/Project11.png',
        'resources/project_images/Ghana.png',
        '[bbb]Tamala Well project[bbb][nnn] Since your company joined the Tamala Well project  only use practical technologies and make sure the right skills exist locally so that households, communities and service providers can keep services working long into the future. By working with local partners we’re able to deliver lasting change. By investing locally, we know that they can continue the good work even after we’re gone.
'),
       (8,
        'Sustainable water management',
        'Ensure sustainable water management and access to water and good sanitation for all',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod elit in metus ornare, nec.',
        'resources/project_images/Project8.png',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id ante lacus.',
        'resources/project_images/Project2.png',
        '[bbb]Lorem ipsum [bbb][nnn]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisl justo. Curabitur a est. ' ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec rhoncus justo, non elementum nulla. Sed et magna non.
        [nnn]Dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lacus consectetur nisi semper fermentum. Ut aliquam nisi felis rutrum et erat. ' ||
        '[nnn][bbb]Praesent dolor [bbb][nnn]Integer a neque ultricies, lacinia mi vitae, consequat quam. Vivamus hendrerit dolor non sapien vulputate convallis. Curabitur vitae pharetra.' ||
        '[nnn]Sed at ante ac dolor molestie pretium. Vivamus luctus congue enim sollicitudin feugiat. Suspendisse tempor consequat tellus id pulvinar. ' ||
        'Nullam aliquam purus eget dolor tempor, nec vestibulum tortor lobortis. Proin ut vehicula arcu. Pellentesque in auctor tortor. Maecenas nec bibendum. ' ||
        '[nnn]Sed ultrices sed justo quis feugiat. Duis lobortis felis enim, quis placerat est vestibulum et. In hac habitasse platea dictumst. Duis a nibh vitae.',
        'resources/project_images/Project6.png',
        'Praesent eget dictum mi. Nunc condimentum tristique massa nec pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. ' ||
        'Maecenas dignissim hendrerit lacus eget semper. Vestibulum rhoncus lobortis eros ut commodo. Etiam id dolor metus. Nulla posuere massa sed sollicitudin pellentesque. ' ||
        'Proin condimentum sagittis faucibus. Nulla ut ex euismod, luctus dolor ac, commodo felis. Curabitur faucibus et nisl non elementum. Cras vitae semper sapien, eu gravida dolor. ' ||
        'Duis maximus eleifend mauris fringilla condimentum. Vivamus at risus sem. ' ||
        '[nnn]Phasellus sed leo vel leo rhoncus aliquet. Mauris semper justo massa, iaculis imperdiet sapien pellentesque ut. Nunc vel scelerisque tortor. ' ||
        'Quisque porttitor consequat quam ut tristique. Donec iaculis turpis a tincidunt dignissim. Nullam placerat quam dignissim massa lacinia convallis. ' ||
        '[nnn]Duis lobortis rhoncus neque, id bibendum enim interdum vitae. Sed euismod mattis mi vitae interdum. Suspendisse augue libero, cursus id efficitur in, dignissim sed mi. Aenean scelerisque enim sed lacus sagittis consequat.',
        'resources/project_images/Project3.png',
        'public/promo_backgrounds/WaterAidPromo.png',
        'resources/project_images/Project11.png',
        'resources/project_images/Ghana.png',
        '[bbb]Tamala Well project[bbb][nnn] Since your company joined the Tamala Well project  only use practical technologies and make sure the right skills exist locally so that households, communities and service providers can keep services working long into the future. By working with local partners we’re able to deliver lasting change. By investing locally, we know that they can continue the good work even after we’re gone.
');


insert into project_category (project_id, category_id)
values (1, 1),
       (2, 2),
       (3, 2),
       (4, 2),
       (5, 1),
       (6, 1),
       (7, 1),
       (8, 1);

insert into users (user_id, user_openid, user_company_name, user_organization_number, user_provider, user_email,
                   user_address, user_zip_code, user_city, user_country, user_phone, user_logo_path)
values (1, '118038562829993432481', 'Riot', '2345623452345', 'google', 'dato006@student.kristiania.no',
        'Daniels vei 12', 0045,
        'Oslo', 'NO', 97149805,
        'resources/user_images/User1.png'), -- Daniel
       (2, '105621332734693591720', 'Nike', '2345623452345', 'google', 'mata023@student.kristiania.no', 'Marias vei 14',
        0045,
        'Oslo', 'NO', 97780492,
        'resources/user_images/User2.png'), -- Maria
       (3, '107524685547502848878', 'Elkjøp', '2345623452345', 'google', 'sitr008@student.kristiania.no',
        'Simens vei 16', 0045,
        'Oslo', 'NO', 47371811,
        'resources/user_images/User3.png'), -- Simen
       (4, '111404719019717438435', 'Power', '2345623452345', 'google', 'maol047@student.kristiania.no',
        'Martins vei 14', 0045,
        'Oslo', 'NO', 90230508,
        'resources/user_images/User4.png'), -- Martin
       (5, '107525988243552743954', 'NRK', '2345623452345', 'google', 'alya002@student.kristiania.no', 'Adams vei 14',
        0045, 'Oslo', 'NO',
        41002200,
        'resources/user_images/User5.png'), -- Adam
       (6, '117390681964989419849', 'Zara', '2345623452345', 'google', 'saor001@student.kristiania.no',
        'Sandras vei 14', 0045,
        'Oslo', 'NO', 40605629,
        'resources/user_images/User6.png'), -- Sandra
       (7, '116604312438140819784', 'Gucci', '2345623452345', 'google', 'gijo001@student.kristiania.no', 'Gilas vei 14',
        0045, 'Oslo', 'NO',
        97863515,
        'resources/user_images/User7.png'), -- Gila
       (8, '106634276003473640078', 'Steam', '2345623452345', 'google', 'ruto003@student.kristiania.no', 'Runes vei 14',
        0045, 'Oslo', 'NO',
        90082210,
        'resources/user_images/User8.jpg'); -- Rune

insert into transaction (transaction_id, user_id, project_id, transaction_amount, transaction_date, transaction_type)
VALUES (1, 1, 1, 250000, '2022-05-12', 'company-card'),
       (2, 2, 2, 100000, '2021-05-12', 'company-invoice'),
       (3, 3, 3, 200000, '2022-02-09', 'company-card'),
       (4, 4, 4, 75000, '2020-01-01', 'company-invoice'),
       (5, 5, 5, 10000, '2021-01-01', 'company-card'),
       (6, 6, 6, 20000, '2022-01-01', 'company-invoice'),
       (7, 7, 7, 750000, '2020-01-01', 'company-invoice'),
       (8, 8, 8, 100000, '2021-01-01', 'company-card'),
       (9, 8, 1, 200000, '2022-01-01', 'company-invoice'),
       (10, 1, 1, 750000, '2020-01-01', 'company-invoice'),
       (11, 1, 2, 100000, '2021-01-01', 'company-card'),
       (12, 2, 3, 200000, '2022-01-01', 'company-invoice'),
       (13, 3, 4, 75000, '2020-01-01', 'company-invoice'),
       (14, 4, 5, 100000, '2021-01-01', 'company-card'),
       (15, 5, 6, 200000, '2022-01-01', 'company-invoice'),
       (16, 6, 7, 75000, '2020-01-01', 'company-invoice'),
       (17, 7, 8, 10000, '2021-01-01', 'company-card'),
       (18, 8, 3, 20000, '2022-01-01', 'company-invoice'),
       (19, 8, 1, 75000, '2020-01-01', 'company-invoice'),
       (20, 2, 2, 10000, '2021-01-01', 'company-card'),
       (21, 2, 3, 20000, '2022-01-01', 'company-invoice'),
       (22, 2, 4, 75000, '2020-01-01', 'company-invoice'),
       (23, 2, 5, 10000, '2021-01-01', 'company-card'),
       (24, 2, 6, 20000, '2022-01-01', 'company-invoice'),
       (25, 2, 7, 75000, '2020-01-01', 'company-invoice'),
       (26, 2, 8, 100000, '2021-01-01', 'company-card'),
       (27, 2, 8, 200000, '2022-01-01', 'company-invoice'),
       (28, 2, 1, 75000, '2020-01-01', 'company-invoice'),
       (29, 2, 2, 100000, '2021-01-01', 'company-card'),
       (30, 3, 3, 20000, '2022-01-01', 'company-invoice'),
       (31, 3, 4, 75000, '2020-01-01', 'company-invoice'),
       (32, 3, 5, 10000, '2021-01-01', 'company-card'),
       (33, 3, 6, 20000, '2022-01-01', 'company-invoice'),
       (34, 3, 7, 75000, '2020-01-01', 'company-invoice'),
       (35, 3, 8, 10000, '2021-01-01', 'company-card'),
       (36, 3, 3, 20000, '2022-01-01', 'company-invoice'),
       (37, 3, 1, 75000, '2020-01-01', 'company-invoice'),
       (38, 3, 2, 100000, '2021-01-01', 'company-card'),
       (39, 3, 3, 200000, '2022-01-01', 'company-invoice'),
       (40, 4, 1, 75000, '2020-01-01', 'company-invoice'),
       (41, 4, 2, 100000, '2021-01-01', 'company-card'),
       (42, 4, 3, 200000, '2022-01-01', 'company-invoice'),
       (43, 4, 1, 75000, '2020-01-01', 'company-invoice');

insert into impact (impact_id, project_id,impact_name, impact_cost, impact_description, impact_description_past_tense, impact_image_path)
VALUES (1, 1,'Water point', 5000, 'can build 1 Water point near homes', 'has built ¤ water points', 'resources/impact_images/WAhands.png'),
       (2, 1,'Water tap', 10000, 'can build 1 Water tap at a public spaces', 'has built ¤ water taps at a public space', 'resources/impact_images/WAhands.png'),
       (3, 1,'Hand-washing station', 300000, 'can build 1 Hand-washing station', 'has built ¤ hand-washing stations', 'resources/impact_images/WAhands.png'),
       (4, 2,'Wells in Zambia', 250000, 'we can build 1 well in Zambia', 'has built ¤ wells in Zambia', 'resources/impact_images/WAwell.png'),
       (5, 2,'Water treatment facility in Zambia', 2500000, 'we can build 1 water treatment facility in Zambia',
        'has built ¤ water treatment facilities in Zambia', 'resources/impact_images/WAhands.png'),
       (6, 2,'Textbooks', 100, 'we can supply 1 child with textbooks for school',
        'has provided ¤ children with textbooks for school', 'resources/impact_images/WAhands.png'),
       (7, 3,'Feed families', 25, 'we can feed 1 family for a day', 'has fed ¤ families', 'resources/impact_images/WAhands.png'),
       (8, 4,'Textbooks', 50, 'we can supply 1 child with textbooks for school',
        'has provided ¤ children with textbooks for school', 'resources/impact_images/WAhands.png'),
       (9, 5,'Bathrooms', 10000, 'we can supply 1 family with clean water',
        'has provided ¤ families with clean water', 'resources/impact_images/WAhands.png'),
       (10, 6,'Well', 1000, 'we can build 1 well near a village',
        'has built ¤ wells in the villages', 'resources/impact_images/WAhands.png'),
       (11, 7,'Plant tree', 100, 'we can plant 1 tree to protect the ozone layer',
        'has planted ¤ trees to protect the ozone layer', 'resources/impact_images/WAhands.png'),
       (12, 8,'Water filtration', 1000, 'we can filter and clean 1 barrel of water',
        'has filtered ¤ barrels of water', 'resources/impact_images/WAhands.png');

insert into consent (consent_id, user_id, consent_terms, consent_privacy_policy, consent_newsletter,
                     consent_logo_rights)
VALUES (1, 1, true, true, false, true),
       (2, 2, true, true, true, true),
       (3, 3, true, true, false, true),
       (4, 4, false, true, false, true),
       (5, 5, true, false, false, true),
       (6, 6, false, false, false, false);

insert into payment_plan (payment_plan_id, project_id, user_id, payment_plan_type, payment_plan_date,
                          payment_plan_next_payment_date, payment_plan_method, payment_plan_amount, payment_plan_is_active)
VALUES (1, 1, 3, 'annually', '2022-05-13', '2023-05-13', 'company-card', 25000, true),
       (2, 3, 4, 'quarterly', '2021-01-01', '2022-05-20', 'company-card', 250, true),
       (3, 2, 5, 'monthly', '2022-05-13', '2023-06-13', 'company-card', 2500, true),
       (4, 2, 6, 'annually', '2022-01-01', '2022-06-01', 'company-invoice', 10000, true);

insert into testimonial (testimonial_id, user_id, testimonial_text)
VALUES (1, 2,
        'Meliora has made it so easy for us to support non-profits. They even provide an easy way to show our support. We are proud to show our employees that we care! Work morale has never been better!'),
       (2, 3,
        'We have worked closely with Meliora Impact for over two years now and it works fantastically well for us. We have joined several of their projects for our charity initiatives and it really helps with the process of sourcing projects which can be very difficult and time consuming.'),
       (3, 4,
        'Good stuff'),
       (4, 5,
        'Easy to use and very easy to get started. We are very happy with the service.'),
       (5, 6,
        'We have had the pleasure of supporting many different organizations throughout the years. Knowing that we can make a difference in people''s lives one story at a time is why we do what we do. Meliora changed the giving game for us.');

insert into user_impact (user_impact_id, impact_id, user_id, user_impact_amount)
VALUES (1, 1, 5, 250),
       (2, 1, 3, 250),
       (3, 1, 6, 250),
       (4, 2, 6, 25000),
       (5, 2, 3, 25000),
       (7, 3, 7, 100),
       (8, 3, 3, 100),
       (9, 3, 6, 100),
       (10, 4, 8, 250000);

insert into follows_project(project_id, user_id)
VALUES (1, 4);

-- set correct sequence values
SELECT setval('category_category_id_seq', (SELECT MAX(category_id) FROM category));
SELECT setval('consent_consent_id_seq', (SELECT MAX(consent_id) FROM consent));
SELECT setval('impact_impact_id_seq', (SELECT MAX(impact_id) FROM impact));
SELECT setval('payment_plan_payment_plan_id_seq', (SELECT MAX(payment_plan_id) FROM payment_plan));
SELECT setval('project_project_id_seq', (SELECT MAX(project_id) FROM project));
SELECT setval('testimonial_testimonial_id_seq', (SELECT MAX(testimonial_id) FROM testimonial));
SELECT setval('transaction_transaction_id_seq', (SELECT MAX(transaction_id) FROM transaction));
SELECT setval('user_impact_user_impact_id_seq', (SELECT MAX(user_impact_id) FROM user_impact));
SELECT setval('users_user_id_seq', (SELECT MAX(user_id) FROM users));



