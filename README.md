# Roogle.com
This application lets users interact with the [Edamam](https://www.edamam.com/) API to search for food recipes. Recipe sources, links to full recipes directions, and nutrient information is presented in an organized way. Users can click individual recipies to show expanded recipe information such as nutrient breakdown, daily percent breakdown, and other relevant information.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Purpose:
The purpose of this project, aside from creating a recipe search application, is to highlight my web design and front end development skills. I will show my methodology for creating a web application from conception to production. To learn more about my work history and goals, feel free to visit my [linkedin](https://www.linkedin.com/in/carlo-bilbao/)

### Skills used:
* Technologies: React, Redux, HTML, CSS, JavaScript (ES6), SASS, Bootstrap, CSS Modules, Axios (ReST API Call, JSON parsing), Jest, Enzyme.
* Tools: Sketch, Git, GitHub, VSCode, NPM, AWS (S3, Cloudfront, Route 53, Certificate Manager)
* Other: Test Driven Development (TDD), Pixel Perfect UIs via HTML/CSS, Component Modularity

### Workflow:
1. Understand information to be presented
  * Where will information come from
  * What information needs to be presented
  * Understand possible application states
2. Create a pen-and-paper wireframe
  * Sketch general blocks of information
  * Which positions best present the information to the user
  * How to best balance information blocks
3. Create a Sketch wireframe
  * UI for different states: searchLevel, presentDetails, displayNutrients, displayDaily
  * UI for different screen sizes: Desktop HD, Desktop, Tablet, Phone Lg, Phone
4. Create Pixel Perfect UI using HTML/CSS
  * Note: Production application will use [CSS modules](https://github.com/css-modules/css-modules), however, a folder with html/css files will be included in this project to show my capacity to develop in that capacity as well.
  * Pixel Perfect UIs via HTML/CSS, preprocesor SCSS/SASS will be used, and CSS Grids.
  * Pixel Perfect UIs via HTML/CSS and bootstrap will be used.
  * Note: Two copies to highlight ability to develop UIs at both capacities.
5. Test Driven Development (TDD)
  * Use Jest and Enzyme to perform tdd
6. React
  * Use React as a front-end frameword and Redux for state management
7. Deployment
  * Use AWS for hosting responsibilites

## Understanding the information
The information source will come from the [Edamam](https://www.edamam.com/) API. Sign up [here](https://developer.edamam.com/) for an api key, note: sign up for "Recipe Search". Here is a sample endpoint you can plug into your browser to see the general JSON structure: https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free

The following keys and key discription pairs will be used in the app. Information will be generally divided up as follows:
1. General: 
  * label: recipe name
  * image: recipe image
  * calories: calories
  * totalTime: total expected cook time

2. General Advance (includes 1)
  * uri: uri to specific recipe
  * source: original recipe poster
  * url: link to the original recipe post, location of the recipe directions
  * shareAs: link to easily share the recipe on social media
  * yield: # of servings
  * healthLabels: health labels
  * cautions: recipe cautions
  * ingredientLines: ingredient name and amount

3. Nutrients
  * all 28 nutrient categories

4. Daily Percent
  * all 25 daily percent categories

## Pen-Paper Wireframe
Main Screen </br>
<img src="https://user-images.githubusercontent.com/25759516/43115351-69061068-8eb8-11e8-9aff-d805bef7846e.JPG" width="400">

## Sketch Wireframe

