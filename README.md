# DevOps_Assignment_Inc42


Objective:
This assignment builds upon the use of technology stack to include Go, Next.js, TypeScript, PHP, and WordPress. The focus is on implementing CI/CD pipelines for applications developed using these technologies while enforcing coding standards using appropriate tools.


Scenario:
Your web application, "MyApp," consists of independent components developed in Go, Next.js (TypeScript), and WordPress. To ensure quality and efficiency, each component should have its own dedicated CI/CD pipeline. Additionally, enforce coding standards within each component using appropriate tools specific to the chosen language or framework.

Tasks:

Version Control:

● Create a new public GitHub repository to include directories for Go, Next.js, and WordPress components.
  1. Check the public repository for Go Application 
  2. Check the public repository for Next.js Application
  3. Check the public repository for WordPress 

● Initialise the repositories for each component. 
  
Steps to Initialise the Go Application

  1. Install the Go Programming language using https://go.dev/doc/install
  2. Create a project Directory (GO_APPLICATION) using mkdir foldername.
  3. Initialize a new Go module in your project directory using command (go mode init GO_APPLICATION).
  4. Using (cd) command open the repository.
  5. Create main.go file which includes all the routers for your application.
  6. Create test.go file which test the Go application.
  7. Ensure you have the necessary permissions to read and execute the file with ( chmod +r main.go).

Steps to Initialise the Next.JS Application

 1. Download the Node.js Installer from Official Website according to your Operating System.
 2. Run the Installer , Open the downloaded .pkg file
 3. Verify the Installation using command (node -v and npm -v)
 4. Create your directory my-next-app using command npx create-next-app@latest my-next-app
   open the directory using cd command.
 5. Next.js uses a file-based routing system, where each file in the pages directory becomes a route.Create a homepage and an about page.
 6. Run the application using command like npm run dev, it will host our website on localhost: 3000.

   
Steps to Initialise the Wordpress Application

 1. Set Up Your Development Environment using a  web hosting service that supports WordPress.
 2. Install WordPress
 3. Create a MySQL database and user for your WordPress installation.
 4. Create a custom theme files such as style.css, index.php, header.php, footer.php, and functions.php.
 5. Create a Custom Plugin create a main PHP file (e.g., my-plugin.php) and add the plugin header.
 6. Build Custom Post Types and Taxonomies structuring your application content.
 7. Add Custom Meta Boxes, Fields, Custom template, Custom Shortcodes, Custom Widgets.
 8. Access Your Website see your WordPress site homepage and Log in with the admin credentials you created during installation.

Continuous Integration:

● Implement CI workflows for Go, Next.js (TypeScript), and PHP (WordPress)

1. To implement CI workflow you need to install CI tools like Circle, Travis , Jenkins
2. You need to install server first.
3. To install Server, rent server AWS, GCP , Azure cloud Service and we should interact with cloud server using SSH Mobaxtreme.
4. Install Jenkins with jenkins plugin
5. Create item name your CI workflow as (e.g Go_CI , Next_CI , Wordpress_CI)
6. Start writing Pipeline script using Pipeline Generator

● Configure pipelines to trigger on pushes to the respective branches (e.g., main, feature branches).

To have Jenkins jobs triggered by GitHub events (such as pushes), you need to configure a webhook in your GitHub repository.

Access GitHub Repository: Go to your GitHub repository.
Settings: Click on "Settings" in the repository menu.
Webhooks: Click on "Webhooks" in the left-hand menu.
Add Webhook: Click on the "Add webhook" button.
Payload URL: Enter your Jenkins webhook URL, typically http://your-jenkins-url/github-webhook/.
Content type: Select application/json.
Events: Choose Just the push event to trigger builds on push events.
Save: Click on the "Add webhook" button to save the webhook.







 
● Linting and unit testing for each technology.
The sh 'golangci-lint run ./...' and sh 'go test ./... -v' commands are crucial for enforcing code quality. If golangci-lint detects issues or if any tests fail, these commands will exit with a non-zero status, causing Jenkins to mark the build as failed.
● Ensure that the CI pipelines fail if coding standards or tests are not
met.

Containerization:
● Dockerize the Go application, the Next.js (TypeScript) application, and the WordPress site.
● Create Dockerfiles for each application.
● Push the Docker images to a container registry (e.g., Docker Hub, AWS
ECR).

Coding Standards Enforcement:
● Implement PHPCS (PHP_CodeSniffer) for the WordPress component.
● Configure PHPCS to enforce WordPress coding standards.
● Integrate PHPCS checks into the CI pipeline for the WordPress component.
● Implement GolangCI-Lint for the Go application.
● Configure GolangCI-Lint to enforce coding standards for Go.
● Integrate GolangCI-Lint checks into the CI pipeline for the Go component.
● Implement ESLint and Prettier for the Next.js (TypeScript) application.
● Configure ESLint and Prettier to enforce coding standards for TypeScript.
● Integrate ESLint and Prettier checks into the CI pipeline for the Next.js(TypeScript) component.

Orchestration:
● Update the Docker Compose file to include services for Go, Next.js, and WordPress.
● Ensure that the Compose file can be used to spin up the entire extended application stack locally. 

Continuous Deployment:
● Extend the CI/CD pipelines to include deployment stages for the Go, Next.js, and WordPress components.
● Set up automatic deployment to a staging environment for successful builds.

Documentation:
● Update the README.md file with instructions on how to set up and run the extended application locally.
● Document any changes made to the existing documentation based on the additional technologies.


















