# dscpe-widget-express-vuejs-bootstrap
Dassault Systemès - Euromed Customer Process Experience - 3DEXPERIENCE Widget boilerplate NodeJS including Express, VueJS and Bootstrap . This can be used for very simple prototypes or really simple applications. For a more complex usage of VueJS within a widget through Webpack check [this](https://github.com/nogueiraantonio/dscpe-widget-property-editor).

This sample will not run standalone. It will run as an 3DEXPERIENCE Widget. Follow the instructions below to fully deploy the application. Make sure you are familiar with [3DEXPERIENCE Widget development](https://media.3ds.com/support/documentation/developer/R2021x/en/DSDoc.htm?show=CAAWebAppsJSRoot/CAATcWebAppsJSRootToc.htm).

## Components

### Node Express
Used as a web server that (statically) serves the widget files.

### VueJS
Javascript framework - loaded in memory through RequireJS.

### Bootstrap
Bootstrap CSS for styling.

# Installation
Installation of NodeJS Express web server : `npm install`

# Deployment
Depending on your development and hosting environment the deployment instructions will change greatly. If you are running VSCode and need to deploy in Microsoft Azure you can check this [article](https://docs.microsoft.com/en-us/azure/developer/javascript/tutorial/deploy-nodejs-azure-app-service-with-visual-studio-code)
# 3DEXPERIENCE Widget Deployment

Go through the [3DS Widget Dashboard Integration](https://media.3ds.com/support/documentation/developer/R2021x/en/DSDoc.htm?show=CAAWebAppsJSRoot/CAAWebAppsTaWidgetIntegration.htm) documentation for details.

Please note that this example is provided "as-is" without warrany of any kind, express or implied. See the associated license information for more detailed information.
