# dev-shop-technical

# ASSIGNMENT

For this evaluation we would like to see you replicate this app using the framework of your choice. You will only need to replicate the find a tutor workflow. A sample workflow video has been placed in the zip folder with the assets.

https://xd.adobe.com/view/d5180b03-8b88-46f5-9981-94c7f4ef45fb-804b/

The XD document will provide you with all of the necessary colors and fonts you will need to use.

Requirements:
Must Use bootstrap v5 
https://getbootstrap.com/docs/5.0/getting-started/introduction/
Google Font - Open Sans
https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap
The contact button must log the message “Great Googly Moogly” to console
The tutor profile screen is a full screen dialog/overlay
Assets are located in this zip folder
Feel free to use any placeholder image in replacement of the tutor list

Notes:
When testing in browsers, we are looking for this to look good on a mobile device. Please plan accordingly. Generally, we use a Pixel 2 or iPhone X device width as the testing base.

# DEVELOPER NOTES - Jacob Burton

1. Base Element Styles, Color Pallette, and Fade Transition located as classes in global.css
2. Tutor images use placeholder data
3. Designed and tested on Google Chrome inspector for all MOBILE devices:
    - Moto G4
    - Galaxy S5
    - Pixel 2
    - Pixel 2 XL
    - iPhone 5/SE
    - iPhone 6/7/8
    - iPhone 6/7/8 Plus
    - iPhone X

    **2 column approach w/ fixed image size in TutorBrowse is optimized for mobile. Though functional on tablet, spacing between becomes too large--recommend media query to grow image sizes to ~25vw if tablet views desired



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
