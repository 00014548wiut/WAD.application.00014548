# ECommerce Web Application

## This application was developed for the Web Application module as a coursework portfolio project by a student at WIUT, ID: 00014548.

## Table of Contents
1. [Installation Guide](#installation-guide)
   1. [Setting up ECommerce_API](#setting-up-ecommerce_api)
   2. [Setting up ECommerce_UI](#setting-up-ecommerce_ui)
2. [Application Running Guide](#application-running-guide)
   1. [Running the Back-end Application](#running-the-back-end-application)
   2. [Running the Front-end Application](#running-the-front-end-application)

## Installation Guide

### Setting up ECommerce_API
1. Open the `appsettings.json` file and modify the connection string:
    ```json
    "ConnectionStrings": {
        "DBCS": "Data Source=YOUR_COMPUTER_NAME;Initial Catalog=ECommerce_App_DB;Integrated Security=true;Encrypt=true;TrustServerCertificate=true;"
    }
    ```
   Replace `YOUR_COMPUTER_NAME` with the actual name of your computer.

2. Migration Guide:
    - Open Package Manager Console.
    - Run the command: `add-migration [migration name]`.
    - After successful execution, run: `update-database`.

### Setting up ECommerce_UI
1. The application runs through the Live Server extension. Install it in Visual Studio Code via the Extensions panel.

## Application Running Guide

### Running the Back-end Application
1. Launch the back-end application from Visual Studio. This will open the Swagger UI.

### Running the Front-end Application
1. Launch the front-end application via Live Server in Visual Studio Code. The `index.html` file will be displayed.

