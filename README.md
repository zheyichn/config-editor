# Config Editor Mini UI

## How to run the application

In the project directory:

- Firstly run `npm install` to install all dependencies.
- Then run `npm start`.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to test the functionalities

### view

- When the application starts running, by default it displays the `view` mode. User can clearly see the config file's name, version, and actions.

### edit existing actions

- Clicking the `Edit Actions` blue button will lead to the `edit` mode, where users can modify the an action's name and instruction (if applicable).
- After the user is done with the change, click `Confirm Changes` to save or click `Cancel` to undo the changes, after which the user will return to the `view` mode.
- Note that if the user's change results in duplicate action names, helper text `two actions cannot have the same name` will be displayed under the input that the user is editing. And the `confirm changes` button is disabled until duplicate action names are no longer detected.

### delete existing actions

- Under the `edit` mode, click the blue `Delete` button next to an action will remove that action. You need to click the `Confirm Changes` button to confirm your deletion.

### add new actions

- At the bottom of the page, there is a form allowing users to add new actions. You can key in the action name and choose the action type as per your need.
- When the action type is `SubmitBotInstruction`, the instruction input will be enabled, allowing you to input an instruction.
- When both the name and type aren't empty, (i.e. ""), the `Add New Action` button is enabled for the user to submit the new action.
- However, if the new action's name to be submitted is the same as any existing action. Helper text `Already exists an action with this name!` is displayed and no submission is made.

### export edited config

- There's a green button `Export Config` at the upper right corner of the page, click it and open the console, you can then examine the output.
- Note that refresh the page will cause changes to be lost as we do not have a backend yet, current user changes are temporarily stored in localStorage. Make sure you do not refresh the page before you export the edited config.
