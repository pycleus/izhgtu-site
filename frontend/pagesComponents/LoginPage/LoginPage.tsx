// global
import React from 'react';
// components
import PageLayout from "../../containers/PageLayout/PageLayout";
// styles and icons
import styles from './LoginPage.module.scss';
// types
import {
  Page_page_LoginPage,
  Page_page_LoginPage_signInMethods,
  Page_page_LoginPage_signUpMethods
} from "../../graphql/generated";
import {NavTab, NavTabLayout, NavTabLayoutProps, TabNav, TabNavContent} from "../../components/TabNav/TabNav";


type SignMethodsType = Page_page_LoginPage_signInMethods[] | Page_page_LoginPage_signUpMethods[]

interface NavTabProps extends NavTabLayoutProps {
  signInMethods: Page_page_LoginPage_signInMethods[],
  signUpMethods: Page_page_LoginPage_signUpMethods[],
}

interface TabBodyProps {
  methods: SignMethodsType
}

interface MethodChooserProps {
  methods: SignMethodsType,
  setMethod: React.Dispatch<React.SetStateAction<string | null>>
}

const NAV_TABS: NavTab[] = [
  {
    id: 0,
    title: 'Войти',
    component: SignInTab
  },
  {
    id: 1,
    title: 'Зарегистрироваться',
    component: SignUpTab
  }
]

const SIGN_IN_METHODS_COMPONENTS = {
  'loginAndPassword': PasswordSignIn,
  'gosUslugi': GosuslugiSignIn,
  'phoneCode': PhoneSignIn,
  'vkontakte': VkontakteSignIn
}

const SIGN_UP_METHODS_COMPONENTS = {
  'loginAndPassword': PasswordSignUp,
  'gosUslugi': GosuslugiSignUp,
  'phoneCode': PhoneSignUp,
  'vkontakte': VkontakteSignUp
}

function LoginPage({signInMethods, signUpMethods}: Page_page_LoginPage) {
  const [ currentTabId, setCurrentTabId ] = React.useState<number>(0)
  
  return (
    <PageLayout className={styles.page}>
      <TabNav
        navTabs={NAV_TABS}
        currentTabId={currentTabId}
        setCurrentTabId={setCurrentTabId}
        className={styles.nav}
        listClassName={styles.nav__list}
      />
      <TabNavContent
        navTabs={NAV_TABS}
        currentTabId={currentTabId}
        className={styles.content}
        tabProps={{
          signInMethods,
          signUpMethods
        }}
      />
    </PageLayout>
  )
}

function SignInTab({isActive, signUpMethods, signInMethods}: NavTabProps) {
  return (
    <NavTabLayout className={`${styles.content__tab} ${styles.tab_signIn}`} isActive={isActive}>
      <SignInTabBody methods={signInMethods} />
    </NavTabLayout>
  )
}

function SignInTabBody({methods}: TabBodyProps) {
  const [ chosenSignInMethod, setChosenSignInMethod ] = React.useState<string | null>(null)
  
  if (chosenSignInMethod === null) {
    return (
      <SignInMethodChooser methods={methods} setMethod={setChosenSignInMethod} />
    )
  }
  
  // @ts-ignore
  const Component = SIGN_IN_METHODS_COMPONENTS[chosenSignInMethod]
  
  return <Component />
}

function SignInMethodChooser({methods, setMethod}: MethodChooserProps) {
  return (
    <div className={styles.tab__body}>
      <ul className={styles.body__methodChooser}>
        {methods.map(method => (
          <li key={method.name} className={styles.methodChooser__item}>
            <button onClick={() => setMethod(method.name)} className={styles.item__button}>
              {method.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PasswordSignIn() {
  return (
    <div className={styles.tab__body}>
      password sign in
    </div>
  )
}

function GosuslugiSignIn() {
  return (
    <div className={styles.tab__body}>
      gosuslugi sign in
    </div>
  )
}

function PhoneSignIn() {
  return (
    <div className={styles.tab__body}>
      phone sign in
    </div>
  )
}

function VkontakteSignIn() {
  return (
    <div className={styles.tab__body}>
      vk sign in
    </div>
  )
}

function SignUpTab({isActive, signUpMethods, signInMethods}: NavTabProps) {
  return (
    <NavTabLayout className={`${styles.content__tab} ${styles.tab_signUp}`} isActive={isActive}>
      <SignUpTabBody methods={signUpMethods} />
    </NavTabLayout>
  )
}

function SignUpTabBody({methods}: TabBodyProps) {
  const [ chosenSignUpMethod, setChosenSignUpMethod ] = React.useState<string | null>(null)
  
  if (chosenSignUpMethod === null) {
    return (
      <SignUpMethodChooser methods={methods} setMethod={setChosenSignUpMethod} />
    )
  }
  
  // @ts-ignore
  const Component = SIGN_UP_METHODS_COMPONENTS[chosenSignUpMethod]
  
  return <Component />
}

function SignUpMethodChooser({methods, setMethod}: MethodChooserProps) {
  return (
    <div className={styles.tab__body}>
      <ul className={styles.body__methodChooser}>
        {methods.map(method => (
          <li key={method.name} className={styles.methodChooser__item}>
            <button onClick={() => setMethod(method.name)} className={styles.item__button}>
              {method.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function VkontakteSignUp() {
  return (
    <div className={styles.tab__body}>
      vk sign up
    </div>
  )
}

function PasswordSignUp() {
  return (
    <div className={styles.tab__body}>
      password sign up
    </div>
  )
}

function GosuslugiSignUp() {
  return (
    <div className={styles.tab__body}>
      gosuslugi sign up
    </div>
  )
}

function PhoneSignUp() {
  return (
    <div className={styles.tab__body}>
      phone sign up
    </div>
  )
}

export default LoginPage