# Revolut

By [Enodi Audu](https://github.com/enodi)

### Instructions

- Navigate to a directory within your terminal
- Clone this repo to your directory
  - Using HTTP; `$ git clone https://github.com/enodi/exchange-screen.git`
- Navigate to the root directory e.g `$ cd exchange-screen`
- Run `yarn install` to install project dependencies
- Start the application using: `yarn start`
- Navigate to app in [browser](http://localhost:3000)
- Enjoy!

### Discussion

I used the following technologies: HTML, CSS, React, Redux, Jest, and Enzyme.
I used create-react-app to generate the scaffolding for this app.

#### Build an application that allow users get latest rates for USD, GBP and EUR, the application should have atleast 3 currencies in it's pocket that allow users exchange between pockets.

I used a card component to display the exchange screen. The card contains 4 currencies: USD, GBP, JPY and EUR which are displayed in each pocket. Users can exchange between pockets and view active pocket balance. I also added a set target functionality that allow users set targets

### Bonuses

#### Added Validation on pocket currencies

There are 4 currencies that are available on each pocket i.e USD, GBP, JPY and EUR. Since we don't want to exchange between similar currency in a pocket e.g exchanging between USD in pocket A and USD in pocket B. I added a validation to ensure that the active currency in pocket A isn't displayed in pocket B.

#### Added Validation on input field

I added a validation on pocket balance when exchanging a currency. This prevent users from exchanging an amount that is higher than the pocket balance.

### TEST

- To run test, navigate to the root directory
  - Run `yarn test`
