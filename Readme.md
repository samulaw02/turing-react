Problem Statement

Background Story: create a mini job portal for recruiters and job seekers register profiles, recruiters search for candidates

Features:
a.  Job seekers provide name, email, role and skills
b.  Recruiters search for candidate by skills
c.  Email addresses must be unique
d.  Profile displayed as cards


Pages

This website should have three pages, namely the home page, candidate registration page, and candidate list page, each having a navbar, Below are the required specification

Home Page
a.  Route: /
b.  Navbar with "Job Portal" title
c.  Buttons - "Candidate List" and "Candidate Registration" should redirect the user to the corresponding page. The "Candidate List" button should also show the total candidate profiles in parathensis

Candidate Registration
a.  Route: /candidate/registration
b.  A navbar with the heading "Job Portal" and two buttons - Candidate List and Home - should navigate the user to the corresponding page.
c.  It should contain a form with placeholder and input fields of "name", "role", "email" and "skills" with an add skill button to add skills one by one. When the user adds a skill to the skill input and clicks on add skill button, a tag appears below the input box with the name of the skill the user typed. The form should have a submit button and a reset button.
d.  The submit button will be disabled until the name, role and email fields are non-empty and no skills have been added
e.  If the user registers with an already email id, registration should fail, and a registration status message should be displayed: "Email already exists"
f.  The maximum number of skills that can be added is 5.
g.  Upon successful registration, a registration status message should be displayed below the form "Candidate profile created".

Candidate List
a.  Route: /candidate/list
b.  A navbar with the leading "Job portal" and two buttons - Candidate Registration and Home should navigate the user to the corresponding pages.
c.  It should contain a list of profile cards with the name of the candidate, the role they are interested in, email and skills in the form of tags
d.  A search bar that searches through that list of profile cards based on their skills. For example, if "react" is searched, all profiles with the skill tag "react" should appear. There should also be an All button beside the search button, showing all the available profile cards when clicked.
e.  A title that shows the number of profile found after the search. For example, searching a skill result in "5 profile found" and 0 in case of zero profiles found. Initially it should show the number of total available profile cards.

Wireframes
-   Home Page - task1.png
-   Candidate Registration Page - task2.png
-   Candidate Registration Page (Success) - task2-success.png
-   Candidate Registration Page (Email already Exists) -    task2-email-exists.png
-   Candidate List Page -  task3.png

Task 1

Render Navigation buttons on the header with below conditions and Render Header Title Job Portal on the home, list, and registration page
1.1 Render Navigation buttons on the header with below conditions:
    -   Home Screen('/') - does not show any buttons on the header.
    -   Registration Screen ('/candidate/registration') - has 'Home' and 'Candidate List' button on the header.
    -   List Screen ('/candidate/list') - has 'Home' and 'Candidate Registration' button on the header.
1.2 Ensure that the header title is set to 'Job Portal' on the home, list and registration page.
    -   The Test case ID is missing (you get Testcase Id from ID table).
    -   The title must be Job Portal.
1.3 Check if the Registration form is rendered or not(name, role, email, skills, submit, reset, add).
    -   Ensure that the Test case ID is given to the fields
    -   Check if name, email, role and skill use input HTML elements.
    -   Check if submit, reset, and skill use button HTML elements.


Task 2
2.1 The 'Add skill' button must follow these conditions:
    -   The 'Add skill' button is disabled until the candidate enters at least one value in the skill input field. 
    -   The 'Add skill' button is enabled until the candidate has a maximum of 5 skills
2.2 Validate the Form
    -   All the fields on the form are required (Name, Role, Email, Skills).   
    -   Name: Should be a valid string, containing only letters, numbers and spaces.
    -   Role: Should be a valid string, containing only letters, numbers and spaces.
    -   Email: Should be a valid email address (e.g example@email.com).
    -   Skills: Should be a valid array of skills, separated by commans or spaces.
    -   At least one skill is required to register successfully.
    -   Display an error message if a candidate attempts to register with an email that already exists: 'Email already exists'.
    -   The Submit button is disabled until the form is validated. 
2.3 Click on the Reset button to check if the form is reset or not.

Task 3
3.1 Register new candidates and check if the candidate list count increases in the header.
    -   Once a candidate registers, the candidate list count must increase.   
3.2 Ensure that the Candidate Registration Form is reset after successfully adding a new candidate.  
3.3 On the candidate listing page:
    -   All the candidates added in the candidate registration form should be displayed
    -   The user should be able to perform a search based on the skills of the candidate (one skill at a time).     
    -   When the user clicks on the 'All' button, the search text should be cleared, and all candidates should be displayed

Test IDs
-   Nav Button - Candidate List: nav-list-btn
-   Nav Button - Candidate Registration : nav-registration-btn
-   Nav Button - Home : nav-home-btn
-   'Job Portal' title : nav-heading

Home Page
-   Button - Candidate List: list-btn
-   Button - Candidate Registration : registration-btn

Candidate Registration Page
-   Registration Form : registration-form
-   Input Field - name: form-input-name
-   Input Field - email : form-input-email
-   Input Field - role : form-input-role
-   Input Field - skills : form-input-skill
-   Button - Add skill : add-btn
-   Button - Submit : reset-btn
-   Skill tag in the form : skill-tag
-   Registration Status message in the form : alertMessage

Candidiate List Page
-   Profile Card : profile-card
-   Number of profiles found title : profiles-found-tag
-   Input - Search : search-input
-   Button All : search-all


