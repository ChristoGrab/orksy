# Orksy

Welcome to Orksy! Orksy is a fullstack clone of popular e-commerce site Etsy, themed around the Ork faction from the fictional Warhammer 40K universe. 

Users on Orksy are able to set up an online storefront via their profile page. The user's store serves as their gateway to creating, editing or deleting products to display on the site. Once a product has been listed, it can be reviewed by other users, who are also able to later edit or delete any reviews they have written.  The next planned feature is a persistent shopping cart.

[Check out the live site here](https://orksy.onrender.com)

## MVP Features

### Store

Users can create a store to add and display their products to the Orksy ecosystem.  By clicking on the profile dropdown menu in the top navbar, users can select the "Manage Profile" tab, which will take them to an introductory page.  From here, they are able to click a link that will direct them to the Store creation page.  A store can be edited or deleted after creation, but each user can only own a single Store at a time.

### Products

Once a user has created their store, they are able to add fill out a form to add a product.  A user can also edit and delete any existing products in their store at will.

### Reviews

A user can add reviews to any product on Orksy that they do not own.  A user can edit or delete any reviews they have left, either via the product's display page, or the "Your Reviewz" tab in the profile dropdown menu, located in the top navbar.

### Cart

When viewing an individual product, users can choose to add it to their cart by clicking the "Add to Kart" button. Selecting this will add the product to the user's cart and prompt them to either proceed to checkout or return to browsing the Orksy collection.

## Tech Stacks

### Backend:
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Amazon S3](https://img.shields.io/static/v1?style=for-the-badge&message=Amazon+S3&color=569A31&logo=Amazon+S3&logoColor=FFFFFF&label=)

**| [WTForms](https://wtforms.readthedocs.io/en/3.0.x/) | [SQLAlchemy](https://www.sqlalchemy.org/) | [Alembic](https://alembic.sqlalchemy.org/en/latest/) |**

### Frontend:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

### Database:

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

### Hosting:

![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)


## Landing Page
![Landing Page Preview](https://user-images.githubusercontent.com/108154848/211070315-2d4d39dc-e1c9-4416-aa05-6f56e2b44a36.jpg)

The landing page consists of a grid of all products on the site.  The display order is randomized on each viewing for a more dynamic user experience.  The welcome message uses conditional rendering to provide a link for logged in users to their profile page.

## Storefront
![Storefront Preview v2](https://user-images.githubusercontent.com/108154848/211596994-865ab0f1-8818-40bf-b76c-4e613f4fbd8b.jpg)

This is the user's hub for product functionality.  From here users can add a new product to their store, as well as edit and delete any products they have already posted on the site.

## Product Viewer
![Product Page Preview v3](https://user-images.githubusercontent.com/108154848/211597211-0b6bf00e-c090-4e39-b586-8370c37be314.jpg)

The page for viewing individual products is probably the component I'm most proud of.  It contains a number of hand-made animations using CSS with Javascript to allow a user to toggle the rendering of the product's description and shipping info.  The dates for the shipping and delivery are randomized based on the current date, adding a little programmatic flair to the page!  This page also contains a list of reviews associated with the product, and allows a logged in user to create, edit or delete their own review.

## Wiki Links
Use these links to navigate to the Orksy wiki for further documentation on the site's structure:

### [Site Features](https://github.com/ChristoGrab/orksy/wiki/Site-Features)
### [User Stories](https://github.com/ChristoGrab/orksy/wiki/User-Stories)
### [DB Schema](https://github.com/ChristoGrab/orksy/wiki/DB-Schema)
### [Instructions for local hosting](https://github.com/ChristoGrab/orksy/wiki/Instructions-for-Running-App-Locally)

## Contact Me

<div id="header" align="center">
  <div id="badges">
  
  <a href="https://www.linkedin.com/in/christo-grabowski-894a82a6" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
    
  <a href="mailto:christo.grab@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Badge"/>
  </a>
  </div>
</div>

