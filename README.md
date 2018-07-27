# Roogle.com
This application lets users interact with the [Edamam](https://www.edamam.com/) API to search for food recipes. Recipe sources, links to full recipes directions, and nutrient information is presented in an organized way. Users can click individual recipies to show expanded recipe information such as nutrient breakdown, daily percent breakdown, and other relevant information.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Purpose:
The purpose of this project, aside from creating a recipe search application, is to highlight my web design and front end development skills. I will show my methodology for creating a web application from conception to production. To learn more about my work history and goals, feel free to visit my [linkedin](https://www.linkedin.com/in/carlo-bilbao/)

### Skills used:
* Technologies: React, Redux, HTML, CSS, JavaScript (ES6), SASS, Bootstrap, CSS Modules, Axios (ReST API Call, JSON parsing), Jest, Enzyme.
* Tools: Sketch, Git, GitHub, VSCode, Grunt, NPM, AWS (S3, Cloudfront, Route 53, Certificate Manager)
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
  * Note: Production application will use [CSS modules](https://github.com/css-modules/css-modules), however, a folder with html/css files will be included in this project to show my ability to develop in that capacity as well.
  * Pixel Perfect UIs via HTML/CSS, preprocesor SCSS/SASS, CSS Grids (for x & y content positioning), CSS flex-box (for x or y content positioning), bootstrap for a components, Grunt (task runner - SCSS to CSS)
    * Can be found in the "sass" folder, section "Pixel Perfect UI via HTML/SCSS" provides instructions for running code on your machine
  * Pixel Perfect UIs via HTML/Bootstrap
    * Can be found in the "bootstrap" folder, section "Pixel Perfect UI via HTML/Bootstrap" provides instructions for running code on your machine
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
__**Main Screen**__ </br>
<img src="https://user-images.githubusercontent.com/25759516/43115809-e84b6ec6-8eb9-11e8-8b1c-4d400e5066fb.JPG" width="400">

__**Main Screen + Modal**__ </br>
<img src="https://user-images.githubusercontent.com/25759516/43115810-e862951a-8eb9-11e8-913a-98be6e9ecd1f.JPG" width="400">

## Sketch Wireframe

Selection slice follows, complete wireframe images can be found further below

__**Desktop HD Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115967-71e68832-8eba-11e8-9555-467a092b594b.png" width="700">

__**Desktop HD Modal State: presentDetails=true, displayNutrients=true, displayDaily=true**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115968-7201390c-8eba-11e8-976b-124e5fb5d735.png" width="700">

__**Tablet Main State: SearchLvl=0**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115989-73ed4990-8eba-11e8-8ed6-17a2420d41fd.png" width="500">

__**Tablet Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115991-7421f4d8-8eba-11e8-969b-21a15365beae.png" width="500">

__**Phone Lg Main State: SearchLvl=0**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115982-7337cdc2-8eba-11e8-9e7a-3e161a44019f.png" width="300">

__**Phone Main State: SearchLvl=0**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115974-7299f836-8eba-11e8-87e4-41969b4e775c.png" width="200">

__**Phone Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115976-72cc9dcc-8eba-11e8-9694-242811fda600.png" width="200">

## Pixel Perfect UI via HTML/SCSS
This section demonstrates my capacity to develop with the following technologies:
* HTML/CSS 
* SCSS/SASS 
* CSS Grids (for x & y content positioning)
* CSS flex-box (for x or y content positioning)
* Bootstrap (for components)  
* Grunt (task runner - SCSS to CSS)

### How to use
1. [Download the project](https://help.github.com/articles/cloning-a-repository/)
2. [Install Grunt](https://gruntjs.com/installing-grunt)
3. [Intall Npm](https://www.npmjs.com/get-npm)
4. Open terminal, [go to the root project folder](https://www.youtube.com/watch?v=oxuRxtrO2Ag)
5. Run "npm install", this installs the necessary dependencies
6. Run "grunt sass", this preprocesses the SCSS file into CSS
7. Go to "sass" folder -> "dist" folder
8. Open either "index.html" or "modal.html"

### General Notes:
* If you have any feedback to improve my code, feel free to drop me a line on my [linkedin](https://www.linkedin.com/in/carlo-bilbao/), I'm always interested in learning a better way!

### Design Note:
1. Nutrient items on small screen sizes are double column instead of single column. Thought it looked cleaner this way and took up less vertical space (meaning less user scrolling), so I went with the two column approach.

### Selection of comparisions:
Comparison 1:
__**Sketch Desktop HD Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115967-71e68832-8eba-11e8-9555-467a092b594b.png" width="700">

__**HTML/SCSS Desktop HD Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43349431-924337f4-91b4-11e8-98f2-31c29c675668.png" width="700">

Comparison 2:
__**Sketch Tablet Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115991-7421f4d8-8eba-11e8-969b-21a15365beae.png" width="500">

__**HTML/SCSS Tablet Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43349433-9287a588-91b4-11e8-99d3-dac5cbff1292.png" width="500">

Comparison 3:
__**Sketch Phone Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115976-72cc9dcc-8eba-11e8-9694-242811fda600.png" width="200">

__**HTML/SCSS Phone Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43349487-f99dff6a-91b4-11e8-933b-e8403d03c78b.png" width="200">


## Pixel Perfect UI via HTML/Bootstrap

## Complete Sketch Wireframe Images
__**Desktop HD Main State: SearchLvl=0**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115965-71ad9dc4-8eba-11e8-94b0-6c138a974bb2.png" width="700">

__**Desktop HD Main State: SearchLvl=1**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115966-71c6c8a8-8eba-11e8-9845-a84bd7446c3a.png" width="700">

__**Desktop HD Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115967-71e68832-8eba-11e8-9555-467a092b594b.png" width="700">

__**Desktop HD Modal State: presentDetails=true, displayNutrients=false, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115970-72344ed2-8eba-11e8-94f0-76b9f17d0eff.png" width="700">

__**Desktop HD Modal State: presentDetails=true, displayNutrients=true, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115969-721b28b2-8eba-11e8-9dd4-be7dff6df932.png" width="700">

__**Desktop HD Modal State: presentDetails=true, displayNutrients=true, displayDaily=true**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115968-7201390c-8eba-11e8-976b-124e5fb5d735.png" width="700">

__**Desktop Main State: SearchLvl=0**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115961-715d92ca-8eba-11e8-8830-dc578e170c8e.png" width="600">

__**Desktop Main State: SearchLvl=1**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115962-7176a71a-8eba-11e8-851e-21ad74ad8456.png" width="600">

__**Desktop Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115963-718f33de-8eba-11e8-9434-8d842851d78b.png" width="600">

__**Desktop Modal State: presentDetails=true, displayNutrients=false, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115960-71455f02-8eba-11e8-8c41-6f7d0be87d8d.png" width="600">

__**Desktop Modal State: presentDetails=true, displayNutrients=true, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115959-712f9f00-8eba-11e8-95bf-8dd8267735f6.png" width="600">

__**Desktop Modal State: presentDetails=true, displayNutrients=true, displayDaily=true**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115958-71132e2e-8eba-11e8-80b7-9defbea2c657.png" width="600">

__**Tablet Main State: SearchLvl=0**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115989-73ed4990-8eba-11e8-8ed6-17a2420d41fd.png" width="500">

__**Tablet Main State: SearchLvl=1**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115990-7405bad4-8eba-11e8-83ad-569257801f92.png" width="500">

__**Tablet Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115991-7421f4d8-8eba-11e8-969b-21a15365beae.png" width="500">

__**Tablet Modal State: presentDetails=true, displayNutrients=false, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115988-73d16982-8eba-11e8-993b-7d9a266c404c.png" width="500">

__**Tablet Modal State: presentDetails=true, displayNutrients=true, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115987-73aad2ea-8eba-11e8-8b1d-fa44951c9220.png" width="500">

__**Tablet Modal State: presentDetails=true, displayNutrients=true, displayDaily=true**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115986-738291b8-8eba-11e8-8298-dd2c941155ce.png" width="500">

__**Phone Lg Main State: SearchLvl=0**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115982-7337cdc2-8eba-11e8-9e7a-3e161a44019f.png" width="300">

__**Phone Lg Main State: SearchLvl=1**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115983-734e621c-8eba-11e8-983d-be6c642297b0.png" width="300">

__**Phone Lg Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115984-73683bd8-8eba-11e8-9ac7-d051830377f5.png" width="300">

__**Phone Lg Modal State: presentDetails=true, displayNutrients=false, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115980-73205a70-8eba-11e8-93de-72aa7902ac0b.png" width="300">

__**Phone Lg Modal State: presentDetails=true, displayNutrients=true, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115979-73046eaa-8eba-11e8-9411-5817701cb9c5.png" width="300">

__**Phone Lg Modal State: presentDetails=true, displayNutrients=true, displayDaily=true**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115977-72e93b62-8eba-11e8-84c8-42383c8b355d.png" width="300">

__**Phone Main State: SearchLvl=0**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115974-7299f836-8eba-11e8-87e4-41969b4e775c.png" width="200">

__**Phone Main State: SearchLvl=1**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115975-72b41856-8eba-11e8-8139-d5dcfadb2b78.png" width="200">

__**Phone Main State: SearchLvl=2**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115976-72cc9dcc-8eba-11e8-9694-242811fda600.png" width="200">

__**Phone Modal State: presentDetails=true, displayNutrients=false, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115973-72815650-8eba-11e8-840c-6b354c65e477.png" width="200">

__**Phone Modal State: presentDetails=true, displayNutrients=true, displayDaily=false**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115972-72683742-8eba-11e8-804f-f2fe90bde7d8.png" width="200">

__**Phone Modal State: presentDetails=true, displayNutrients=true, displayDaily=true**__  </br>
<img src="https://user-images.githubusercontent.com/25759516/43115971-724f1fbe-8eba-11e8-922c-abf79f77d5d7.png" width="200">