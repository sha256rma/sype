// import firestore from '@react-native-firebase/firestore';
/* eslint-disable */

let randomEmail;

const getElementRef = async elementID => {
  const elementRef = await element(by.id(elementID));
  return elementRef;
};

const elementIsVisible = async elementRef => {
  await expect(elementRef).toBeVisible();
};

const elementIsNotVisible = async elementRef => {
  await expect(elementRef).toBeNotVisible();
};

const enterCredentials = async (email, password, isLogin) => {
  try {
    const typeOfLogin = isLogin ? 'login' : 'signup';
    const emailInput = await getElementRef(typeOfLogin + '-email-input');
    const passwordInput = await getElementRef(typeOfLogin + '-password-input');
    const enterInputButton = await getElementRef(typeOfLogin + '-button');

    await emailInput.tap();
    await emailInput.typeText(email);
    await passwordInput.tap();
    await passwordInput.typeText(password);

    await enterInputButton.tap();

    return {emailInput, passwordInput};
  } catch (e) {
    console.log('Buttons/components not found/accessible');
  }
};

const clearCredentials = async isLogin => {
  try {
    const typeOfLogin = isLogin ? 'login' : 'signup';
    const emailInput = await getElementRef(typeOfLogin + '-email-input');
    const passwordInput = await getElementRef(typeOfLogin + '-password-input');
    const enterInputButton = await getElementRef(typeOfLogin + '-button');

    await emailInput.clearText();
    await passwordInput.clearText();
  } catch (e) {
    console.log('Buttons/components not found/accessible');
  }
};

const sleep = milliseconds => {
  let currentTime = new Date().getTime();
  const desiredTime = currentTime + milliseconds;
  while (currentTime < desiredTime) {
    currentTime = new Date().getTime();
  }
};

//for log in, isLogin is = true
const simulateLogIn = async (email, password) => {
  await enterCredentials(email, password, true);
};

const simulateSignUp = async (email, password) => {
  await enterCredentials(email, password, false);
};

const generateRandomEmail = length => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result + '@gmail.com';
};

//check to make sure all sign up components are visible
describe('Verifying sign up page', () => {
  it('checking if all sign up components are visible', async () => {
    const signUpEmailInput = await getElementRef('signup-email-input');
    const signUpPasswordInput = await getElementRef('signup-password-input');
    const signUpButton = await getElementRef('signup-button');
    const haveAccountButton = await getElementRef(
      'already-have-account-button',
    );

    await elementIsVisible(signUpEmailInput);
    await elementIsVisible(signUpPasswordInput);
    await elementIsVisible(signUpButton);
    await elementIsVisible(haveAccountButton);
  });
});

describe('Failed Sign up attempts', () => {
  it('sign up attempt with blank email and password', async () => {
    const blankEmail = '';
    const blankPassword = '';
    await simulateSignUp(blankEmail, blankPassword);
    await sleep(3000);
  });
  it('veryfying feed screen has not been opened', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsNotVisible(feedSVG);
  });
  it('sign up attempt with blank email', async () => {
    const blankEmail = '';
    const password = '123456';
    await simulateSignUp(blankEmail, password);
    await sleep(3000);
    clearCredentials(false);
  });
  it('veryfying feed screen has not been opened', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsNotVisible(feedSVG);
  });
  it('sign up attempt with blank password', async () => {
    const email = generateRandomEmail(6);
    const blankPassword = '';
    await simulateSignUp(email, blankPassword);
    await sleep(3000);
    clearCredentials(false);
  });
  it('veryfying feed screen has not been opened', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsNotVisible(feedSVG);
  });
  it('sign up attempt with already existing email', async () => {
    const email = 'marvin@gmail.com';
    const password = '123456';
    await simulateSignUp(email, password);
    await sleep(3000);
    clearCredentials(false);
  });
  it('veryfying feed screen has not been opened', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsNotVisible(feedSVG);
  });
});

describe('Switching to and verifying log in page', () => {
  it('swtiching to log in page and verifying components', async () => {
    const haveAccountButton = await getElementRef(
      'already-have-account-button',
    );
    const emailInput = await getElementRef('login-email-input');
    const passwordInput = await getElementRef('login-password-input');
    const enterInputButton = await getElementRef('login-button');

    await elementIsVisible(haveAccountButton);
    haveAccountButton.tap();
    await elementIsVisible(emailInput);
    await elementIsVisible(passwordInput);
    await elementIsVisible(enterInputButton);
  });
});

describe('Failed Log in attempts', () => {
  it('log in attempt with blank email and password', async () => {
    const blankEmail = '';
    const blankPassword = '';
    await simulateLogIn(blankEmail, blankPassword);
    await sleep(3000);
  });
  it('veryfying feed screen has not been opened', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsNotVisible(feedSVG);
  });
  it('log in attempt with blank email', async () => {
    const blankEmail = '';
    const password = '123456';
    await simulateLogIn(blankEmail, password);
    await sleep(3000);
    clearCredentials(true);
  });
  it('veryfying feed screen has not been opened', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsNotVisible(feedSVG);
  });
  it('log in attempt with short password', async () => {
    const blankEmail = generateRandomEmail();
    const password = '123';
    await simulateLogIn(blankEmail, password);
    await sleep(3000);
    clearCredentials(true);
  });
  it('veryfying feed screen has not been opened', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsNotVisible(feedSVG);
  });
  it('log in attempt with blank password', async () => {
    const email = generateRandomEmail(6);
    const blankPassword = '';
    await simulateLogIn(email, blankPassword);
    await sleep(3000);
    clearCredentials(true);
  });
  it('veryfying feed screen has not been opened', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsNotVisible(feedSVG);
  });
  it('log in attempt with already existing email and wrong password', async () => {
    const email = 'marvin@gmail.com';
    const password = '1234';
    await simulateSignUp(email, password);
    await sleep(3000);
    clearCredentials(true);
  });
  it('veryfying feed screen has not been opened', async () => {
    const feedSVG = await element(by.id('FeedSVG'));
    await elementIsNotVisible(feedSVG);
  });
});

describe('Successful Log in attempt', () => {
  it('checking succesful log in attempt', async () => {
    const email = 'dork@gmail.com';
    const password = '123456';

    await simulateLogIn(email, password);
    sleep(7000);
  });
});

// describe('testing swiping on feed page', () => {
//   it('simulating swipes', async () => {
//     const searchSVG = await element(by.id('SearchSVG'));
//     const profileSVG = await element(by.id('ProfileSVG'));
//     const feedSVG = await element(by.id('FeedSVG'));
//     const uploadSVG = await element(by.id('UploadSVG'));

//     await elementIsVisible(searchSVG);
//     await elementIsVisible(profileSVG);
//     await elementIsVisible(feedSVG);
//     await elementIsVisible(uploadSVG);

//     await searchSVG.tap();
//     const logOut = await element(by.id('logout-button'));
//     await elementIsVisible(logOut);

//     await logOut.tap();
//   });
// });
